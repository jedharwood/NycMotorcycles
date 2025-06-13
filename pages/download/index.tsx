import { FC } from 'react';

import { useIntl } from 'react-intl';

import HeadElement from '@/components/head-element/head-element';
import LinkButton from '@/components/link-button/link-button';
import TextDisplay from '@/components/text-display/text-display';

const DownloadPage: FC = (): JSX.Element => {
  const intl = useIntl();

  const downloadButtonOne: JSX.Element = (
    <LinkButton
      text={intl.formatMessage({
        id: 'pg.download.button',
      })}
      type='download'
      href='/documents/mock-form-one.pdf'
      fileName='mock-form-one'
    />
  );

  const downloadButtonTwo: JSX.Element = (
    <LinkButton
      text={intl.formatMessage({
        id: 'pg.download.button',
      })}
      type='download'
      href='/documents/mock-form-two.pdf'
      fileName='mock-form-two'
    />
  );

  return (
    <>
      <HeadElement
        metaTitle={intl.formatMessage({ id: 'pg.download.head.meta.title' })}
        metaContent={intl.formatMessage({
          id: 'pg.download.head.meta.content',
        })}
        metaBrandList={intl.formatMessage({ id: 'common.meta.brands' })}
      />
      <main className='space-y-6'>
        <TextDisplay
          title={intl.formatMessage({
            id: 'pg.download.sect-1.title',
          })}
          textContent={[
            intl.formatMessage({
              id: 'pg.download.sect-1.text-1',
            }),
            intl.formatMessage({
              id: 'pg.download.help',
            }),
          ]}
          childElement={downloadButtonOne}
          childElementPosition='bottom'
        />
        <TextDisplay
          title={intl.formatMessage({
            id: 'pg.download.sect-2.title',
          })}
          textContent={[
            intl.formatMessage({
              id: 'pg.download.sect-2.text-1',
            }),
            intl.formatMessage({
              id: 'pg.download.help',
            }),
          ]}
          childElement={downloadButtonTwo}
          childElementPosition='bottom'
        />
      </main>
    </>
  );
};

export default DownloadPage;
