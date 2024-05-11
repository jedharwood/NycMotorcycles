import { useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Image from 'next/image';
import { useRouter } from 'next/router';
import routes from '@/utilities/routes';
import burgerIcon from 'public/svgs/burger-icon.svg';
import nycmcLogo from 'public/svgs/nycmc-logo.svg';
import { NavLink } from '../nav-link/nav-link';

type NavLinkDetails = {
  href: string;
  text: string;
};

export const Header = (): JSX.Element => {
  const intl = useIntl();
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const [activeIdx, setActiveIdx] = useState<number>(-1);
  const { route } = useRouter();

  const navLinks: NavLinkDetails[] = [
    {
      href: routes.home,
      text: 'common.route-names.home',
    },
    {
      href: routes.activeAuctions,
      text: 'common.route-names.active-auctions',
    },
    {
      href: routes.soldArchive,
      text: 'common.route-names.sold-archive',
    },
    {
      href: routes.history,
      text: 'common.route-names.history',
    },
    {
      href: routes.racing,
      text: 'common.route-names.racing',
    },
    {
      href: routes.contact,
      text: 'common.route-names.contact',
    },
    {
      href: routes.consign,
      text: 'common.route-names.consign',
    },
    {
      href: routes.invest,
      text: 'common.route-names.invest',
    },
    // Maybe I'll add download in here once I have the page up...
  ];

  useEffect(() => {
    const currentPageIndex: number = navLinks.findIndex(
      (link) => link.href === route
    );
    setActiveIdx(currentPageIndex);
  }, []);

  const toggleMobilenav = (): void => {
    setShowMobileNav(!showMobileNav);
  };

  const mapNavLinks = (): JSX.Element[] => {
    return navLinks.map((link, idx) => (
      <li
        className='flex justify-center uppercase'
        onClick={() => setActiveIdx(idx)}
        key={idx}
      >
        <NavLink href={link.href} text={link.text} active={activeIdx === idx} />
      </li>
    ));
  };

  const navMenu = (): JSX.Element => {
    return (
      <div className='hidden w-full md:block md:w-auto'>
        <ul className='flex flex-col md:flex-row md:space-x-6 md:text-sm md:font-medium'>
          {mapNavLinks()}
        </ul>
      </div>
    );
  };

  const mobileNavMenu = (): JSX.Element => {
    return (
      <div
        className={`${showMobileNav ? 'h-72' : 'invisible h-0'} transition[height] overflow-hidden duration-300 ease-in-out md:hidden`}
      >
        <ul className='mt-4 mb-2 grid space-y-2' onClick={toggleMobilenav}>
          {mapNavLinks()}
        </ul>
      </div>
    );
  };

  return (
    <header className='text-stone-50'>
      <div className='flex justify-center pb-6'>
        <Image
          src={nycmcLogo}
          alt={intl.formatMessage({ id: 'comp.header.alt.nycmc-logo' })}
          width={111}
          height={111}
          priority
        />
      </div>
      <div className='flex justify-center'>
        <h1 className='text-lg tracking-widest md:text-xl'>
          <FormattedMessage id='common.title' />
        </h1>
      </div>
      <nav className='mt-2 mb-6 rounded-md bg-stone-600 bg-opacity-90 py-2 px-6 shadow-lg'>
        <div className='container mx-auto flex flex-wrap justify-center'>
          <button
            type='button'
            className='inline-flex items-center rounded-lg opacity-80 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-stone-50 md:hidden'
            aria-controls='navbar-default'
            aria-expanded='false'
            onClick={toggleMobilenav}
          >
            <span className='sr-only'>
              <FormattedMessage id='comp.header.sr.open-main-menu' />
            </span>
            <Image
              src={burgerIcon}
              alt={intl.formatMessage({
                id: 'comp.header.alt.burger-menu',
              })}
              width={40}
              height={40}
            />
          </button>
          {navMenu()}
        </div>
        {mobileNavMenu()}
      </nav>
    </header>
  );
};
