import { ReactNode } from 'react';

import { useIntl } from 'react-intl';

import Footer from '../footer/footer';
import Header from '../header/header';
import routes from '@/utilities/routes';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const intl = useIntl();

  const navLinks: NavLinkDetails[] = [
    {
      href: routes.home,
      text: intl.formatMessage({ id: 'common.route-names.home' }),
    },
    {
      href: routes.activeAuctions,
      text: intl.formatMessage({ id: 'common.route-names.active-auctions' }),
    },
    {
      href: routes.soldArchive,
      text: intl.formatMessage({ id: 'common.route-names.sold-archive' }),
    },
    {
      href: routes.history,
      text: intl.formatMessage({ id: 'common.route-names.history' }),
    },
    {
      href: routes.racing,
      text: intl.formatMessage({ id: 'common.route-names.racing' }),
    },
    {
      href: routes.contact,
      text: intl.formatMessage({ id: 'common.route-names.contact' }),
    },
    {
      href: routes.consign,
      text: intl.formatMessage({ id: 'common.route-names.consign' }),
    },
    {
      href: routes.invest,
      text: intl.formatMessage({ id: 'common.route-names.invest' }),
    },
    // Maybe I'll add download in here once I have the page up...
  ];

  return (
    <div
      id='layout-outer'
      className='w-full bg-hero bg-cover bg-fixed bg-center bg-no-repeat md:px-6'
    >
      <div
        id='layout-inner'
        className='mx-auto max-w-6xl bg-stone-600 bg-opacity-60 py-6 sm:p-6'
      >
        <Header
          navLinks={navLinks}
          altTextNycmcLogo={intl.formatMessage({
            id: 'comp.header.alt.nycmc-logo',
          })}
          title={intl.formatMessage({ id: 'common.title' })}
          openMainMenuText={intl.formatMessage({
            id: 'comp.header.sr.open-main-menu',
          })}
          altTextBurgerMenu={intl.formatMessage({
            id: 'comp.header.alt.burger-menu',
          })}
        />
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
