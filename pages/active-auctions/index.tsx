import { FC } from 'react';

import { useIntl } from 'react-intl';
import { useQuery } from 'react-query';

import AuctionCard from '@/components/auction-card/auction-card';
import { HeadElement } from '@/components/head-element/head-element';
import { LinkButton } from '@/components/link-button/link-button';
import { Spinner } from '@/components/spinner/spinner';
import { TextDisplay } from '@/components/text-display/text-display';

import routes from '../../utilities/routes';

const fetchAuctions = async () => {
  const res = await fetch('/api/auction-scraper');
  const data = await res.json();
  return { status: res.status, data };
};

const ActiveAuctionPage: FC = (): JSX.Element => {
  const intl = useIntl();
  const { isLoading, data } = useQuery('activeAuctions', fetchAuctions);

  const renderAuctionDisplay = (): JSX.Element | null => {
    if (isLoading) return null;

    const activeAuctions: ActiveAuction[] = data?.data.activeAuctions || [];
    const status: number | undefined = data?.status;

    const yahooAuctionLinkButton: JSX.Element = (
      <LinkButton
        text={intl.formatMessage({
          id: 'pg.active-auctions.yahoo-auctions-button',
        })}
        href={'https://auctions.yahoo.co.jp/seller/lazzamoto?'}
        type='anchor'
      />
    );

    if (status === 403) {
      return (
        <TextDisplay
          title={intl.formatMessage({ id: 'pg.active-auctions.error.title' })}
          textContent={[
            intl.formatMessage({ id: 'pg.active-auctions.unauthorised.body' }),
          ]}
          childElement={yahooAuctionLinkButton}
          childElementPosition='bottom'
        />
      );
    }

    if (status === 500) {
      return (
        <TextDisplay
          title={intl.formatMessage({ id: 'pg.active-auctions.error.title' })}
          textContent={[
            intl.formatMessage({ id: 'pg.active-auctions.error.body' }),
          ]}
          childElement={
            <LinkButton
              text={intl.formatMessage({
                id: 'common.route-names.contact',
              })}
              href={routes.contact}
              type='router-link'
            />
          }
          childElementPosition='bottom'
        />
      );
    }

    return !activeAuctions.length ? (
      <TextDisplay
        title={intl.formatMessage({
          id: 'pg.active-auctions.no-auctions.title',
        })}
        textContent={[
          intl.formatMessage({ id: 'pg.active-auctions.no-auctions.body' }),
        ]}
        childElement={yahooAuctionLinkButton}
        childElementPosition='bottom'
      />
    ) : (
      <div className='grid gap-6 lg:grid-cols-2'>
        {activeAuctions.map((auction, idx) => {
          return <AuctionCard {...auction} key={`${idx}: ${auction.title}`} />;
        })}
      </div>
    );
  };

  return (
    <>
      <HeadElement
        metaTitle={intl.formatMessage({
          id: 'pg.active-auctions.head.meta.title',
        })}
        metaContent={intl.formatMessage({
          id: 'pg.active-auctions.head.meta.content',
        })}
        metaBrandList={intl.formatMessage({ id: 'common.meta.brands' })}
      />
      <main>
        <Spinner
          isLoading={isLoading}
          verticalPadding={true}
          text={intl.formatMessage({
            id: 'comp.spinner.sr.loading',
          })}
        />
        {renderAuctionDisplay()}
      </main>
    </>
  );
};

export default ActiveAuctionPage;
