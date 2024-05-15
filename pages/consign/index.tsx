import { FC } from 'react';

import { HeadElement } from '@/components/head-element/head-element';
import TwoColumnGridLayout from '@/components/two-column-grid-layout/two-column-grid-layout';
import { images as staticImg } from '@/public/images/consign/static-image-catalog';

const ConsignPage: FC = (): JSX.Element => {
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
              title: 'pg.consign.sect-1.title',
              textContent: [
                'pg.consign.sect-1.text-1',
                'pg.consign.sect-1.text-2',
                'pg.consign.sect-1.text-3',
                'pg.consign.sect-1.text-4',
                'pg.consign.sect-1.text-5',
                'pg.consign.sect-1.text-6',
                'pg.consign.sect-1.text-7',
                'pg.consign.sect-1.text-8',
                'pg.consign.sect-1.text-9',
                'pg.consign.sect-1.text-10',
              ],
            },
          ]}
        />
      </main>
    </>
  );
};

export default ConsignPage;
