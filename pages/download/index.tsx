import { FC } from 'react';

import { useIntl } from 'react-intl';

import { HeadElement } from '@/components/head-element/head-element';
import { TextDisplay } from '@/components/text-display/text-display';

const DownloadPage: FC = (): JSX.Element => {
  const intl = useIntl();

  return (
    <>
      <HeadElement
        metaTitle={intl.formatMessage({ id: 'pg.download.head.meta.title' })}
        metaContent={intl.formatMessage({ id: 'pg.download.head.meta.content' })}
        metaBrandList={intl.formatMessage({ id: 'common.meta.brands' })}
      />
      <main>
        <TextDisplay
            title={intl.formatMessage({ id: 'pg.download.title' })}
        />
      </main>
    </>
  );
};

export default DownloadPage;
