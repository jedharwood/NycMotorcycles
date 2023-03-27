import Image from 'next/image'
import nycmcLogo from '../../assets/svgs/nycmc-logo.svg'
import burgerIcon from '../../assets/svgs/burger-icon.svg'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { NavLink } from '../nav-link'

import { FormattedMessage, useIntl } from 'react-intl'

type NavLinkDetails = {
  href: string
  text: string
}

export const Header = (): JSX.Element => {
  const intl = useIntl()
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false)
  const [activeIdx, setActiveIdx] = useState<number>(-1)
  const { route } = useRouter()

  const navLinks: NavLinkDetails[] = [
    {
      href: '/',
      text: intl.formatMessage({ id: 'component.header.nav.home' }),
    },
    {
      href: '/active-auctions',
      text: intl.formatMessage({ id: 'component.header.nav.active-auctions' }),
    },
    {
      href: '/sold-archive',
      text: intl.formatMessage({ id: 'component.header.nav.sold-archive' }),
    },
    {
      href: '/history',
      text: intl.formatMessage({ id: 'component.header.nav.history' }),
    },
    {
      href: '/racing',
      text: intl.formatMessage({ id: 'component.header.nav.racing' }),
    },
    {
      href: '/contact',
      text: intl.formatMessage({ id: 'component.header.nav.contact' }),
    },
    {
      href: '/consign',
      text: intl.formatMessage({ id: 'component.header.nav.consign' }),
    },
    {
      href: '/invest',
      text: intl.formatMessage({ id: 'component.header.nav.invest' }),
    },
  ]

  useEffect(() => {
    const currentPageIndex: number = navLinks.findIndex(
      (link) => link.href === route,
    )
    setActiveIdx(currentPageIndex)
  }, [])

  const toggleMobilenav = (): void => {
    setShowMobileNav(!showMobileNav)
  }

  const mapNavLinks = (): JSX.Element[] => {
    return navLinks.map((link, idx) => (
      <li
        className="flex justify-center"
        onClick={() => setActiveIdx(idx)}
        key={idx}
      >
        <NavLink href={link.href} text={link.text} active={activeIdx === idx} />
      </li>
    ))
  }

  const navMenu = (): JSX.Element => {
    return (
      <ul className="flex flex-col md:flex-row md:space-x-8 md:text-sm md:font-medium">
        {mapNavLinks()}
      </ul>
    )
  }

  const mobileNavMenu = (): JSX.Element => {
    return !showMobileNav ? (
      <></>
    ) : (
      <ul className="grid space-y-2 mt-4 mb-2" onClick={toggleMobilenav}>
        {mapNavLinks()}
      </ul>
    )
  }

  return (
    <header className="text-stone-50">
      <div className="flex justify-center pb-6">
        <Image
          src={nycmcLogo}
          alt="New york city motorcycles logo"
          width={111}
          height={111}
          priority
        />
      </div>
      <div className="flex justify-center">
        <h1 className="text-lg tracking-widest">
          <FormattedMessage id="component.header.title" />
        </h1>
      </div>
      <nav className="py-2 px-6 bg-stone-600 bg-opacity-80 mt-2 mb-6">
        <div className="container flex flex-wrap justify-center mx-auto">
          <button
            type="button"
            className="inline-flex items-center rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-stone-50 opacity-80 hover:opacity-100"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={toggleMobilenav}
          >
            <span className="sr-only">
              <FormattedMessage id="component.header.sr.open-main-menu" />
            </span>
            <Image
              src={burgerIcon}
              alt="Burger menu icon"
              width={40}
              height={40}
              priority
            />
          </button>
          <div className="hidden w-full md:block md:w-auto">{navMenu()}</div>
        </div>
        <div className="md:hidden">{mobileNavMenu()}</div>
      </nav>
    </header>
  )
}
