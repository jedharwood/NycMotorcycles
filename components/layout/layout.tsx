import { ReactNode } from 'react';

import Footer from '../footer/footer';
import { Header } from '../header/header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
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
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
