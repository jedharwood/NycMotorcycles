import { FC } from 'react';

import { useIntl } from 'react-intl';

import { HeadElement } from '@/components/head-element/head-element';
import TwoColumnGridLayout from '@/components/two-column-grid-layout/two-column-grid-layout';
import { images as staticImg } from '@/public/images/consign';

const ConsignPage: FC = (): JSX.Element => {
  const intl = useIntl();

  return (
    <>
      <HeadElement
        pageTitle='pg.consign.head.meta.title'
        content='pg.consign.head.meta.content'
      />
      <main>
        <TwoColumnGridLayout
          images={[staticImg.orangeLaverda]}
          textDisplayPropObjects={[
            {
              title: intl.formatMessage({ id: 'pg.consign.sect-1.title' }),
              textContent: [
                intl.formatMessage({ id: 'pg.consign.sect-1.text-1' }),
                intl.formatMessage({ id: 'pg.consign.sect-1.text-2' }),
                intl.formatMessage({ id: 'pg.consign.sect-1.text-3' }),
                intl.formatMessage({ id: 'pg.consign.sect-1.text-4' }),
                intl.formatMessage({ id: 'pg.consign.sect-1.text-5' }),
                intl.formatMessage({ id: 'pg.consign.sect-1.text-6' }),
                intl.formatMessage({ id: 'pg.consign.sect-1.text-7' }),
                intl.formatMessage({ id: 'pg.consign.sect-1.text-8' }),
                intl.formatMessage({ id: 'pg.consign.sect-1.text-9' }),
                intl.formatMessage({ id: 'pg.consign.sect-1.text-10' }),
              ],
            },
          ]}
        />
      </main>
    </>
  );
};

export default ConsignPage;
