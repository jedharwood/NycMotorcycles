import { ReactNode } from 'react';

import { useIntl } from 'react-intl';

import Footer from '../footer/footer';
import Header from '../header/header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const intl = useIntl();

  return (
    <div
      id='layout-outer'
      className='w-full bg-hero bg-cover bg-fixed bg-center bg-no-repeat md:px-6'
    >
      <div
        id='layout-inner'
        className='mx-auto max-w-6xl bg-stone-600 bg-opacity-60 py-6 sm:p-6'
      >
        <Header />
        {children}
        <Footer
          chevronText={intl.formatMessage({
            id: 'comp.footer.text.scroll-to-top',
          })}
          altTextInstagramButton={intl.formatMessage({
            id: 'common.img.instagram-logo.alt',
          })}
          address={intl.formatMessage({
            id: 'comp.footer.text.address',
          })}
          disclaimer={intl.formatMessage({
            id: 'comp.footer.text.disclaimer',
          })}
        />
      </div>
    </div>
  );
};

export default Layout;
