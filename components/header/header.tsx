import { useEffect, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';
import burgerIcon from 'public/svgs/burger-icon.svg';
import nycmcLogo from 'public/svgs/nycmc-logo.svg';

import { NavLink } from '../nav-link/nav-link';

type HeaderProps = {
  navLinks: NavLinkDetails[];
  altTextNycmcLogo: string;
  title: string;
  openMainMenuText: string;
  altTextBurgerMenu: string;
};

const Header = ({
  navLinks,
  altTextNycmcLogo,
  title,
  openMainMenuText,
  altTextBurgerMenu,
}: HeaderProps): JSX.Element => {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const [activeIdx, setActiveIdx] = useState<number>(-1);
  const { route } = useRouter();

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
        <ul className='flex flex-wrap justify-center md:space-x-6 md:font-medium'>
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
          alt={altTextNycmcLogo}
          width={111}
          height={111}
          priority
        />
      </div>
      <div className='flex justify-center'>
        <h1 className='text-lg tracking-widest md:text-xl'>{title}</h1>
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
            <span className='sr-only'>{openMainMenuText}</span>
            <Image
              src={burgerIcon}
              alt={altTextBurgerMenu}
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

export default Header;
