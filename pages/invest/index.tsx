import { FC } from 'react';

import { useIntl } from 'react-intl';

import HeadElement from '@/components/head-element/head-element';
import LinkButton from '@/components/link-button/link-button';
import TwoColumnGridLayout from '@/components/two-column-grid-layout/two-column-grid-layout';
import { images as img } from '@/public/images/invest';
import routes from '@/utilities/routes';

const InvestPage: FC = (): JSX.Element => {
  const intl = useIntl();

  const contactButton: JSX.Element = (
    <LinkButton
      text={intl.formatMessage({ id: 'common.route-names.contact' })}
      href={routes.contact}
      type='router-link'
      id='invest-page-contact-button'
    />
  );

  return (
    <>
      <HeadElement
        metaTitle={intl.formatMessage({ id: 'pg.invest.head.meta.title' })}
        metaContent={intl.formatMessage({ id: 'pg.invest.head.meta.content' })}
        metaBrandList={intl.formatMessage({ id: 'common.meta.brands' })}
      />
      <main>
        <TwoColumnGridLayout
          images={[img.silverMotorbike]}
          textDisplayPropObjects={[
            {
              title: intl.formatMessage({ id: 'pg.invest.sect-1.title' }),
              textContent: [
                intl.formatMessage({ id: 'pg.invest.sect-1.text-1' }),
                intl.formatMessage({ id: 'pg.invest.sect-1.text-2' }),
                intl.formatMessage({ id: 'pg.invest.sect-1.text-3' }),
                intl.formatMessage({ id: 'pg.invest.sect-1.text-4' }),
                intl.formatMessage({ id: 'pg.invest.sect-1.text-5' }),
              ],
              childElement: contactButton,
              childElementPosition: 'bottom',
            },
          ]}
        />
      </main>
    </>
  );
};

export default InvestPage;
