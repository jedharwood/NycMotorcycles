import { FC } from 'react';

import { HeadElement } from '@/components/head-element/head-element';
import { LinkButton } from '@/components/link-button/link-button';
import TwoColumnGridLayout from '@/components/two-column-grid-layout/two-column-grid-layout';
import { images as staticImg } from '@/public/images/invest';
import routes from '@/utilities/routes';

const InvestPage: FC = (): JSX.Element => {
  const contactButton: JSX.Element = (
    <LinkButton
      text='common.route-names.contact'
      href={routes.contact}
      type='router-link'
      id='invest-page-contact-button'
    />
  );

  return (
    <>
      <HeadElement
        pageTitle='pg.invest.head.meta.title'
        content='pg.invest.head.meta.content'
      />
      <main>
        <TwoColumnGridLayout
          images={[staticImg.silverMotorbike]}
          textDisplayPropObjects={[
            {
              title: 'pg.invest.sect-1.title',
              textContent: [
                'pg.invest.sect-1.text-1',
                'pg.invest.sect-1.text-2',
                'pg.invest.sect-1.text-3',
                'pg.invest.sect-1.text-4',
                'pg.invest.sect-1.text-5',
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
