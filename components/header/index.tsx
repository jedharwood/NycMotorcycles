import Image from 'next/image'
import nycmcLogo from 'public/svgs/nycmc-logo.svg'
import burgerIcon from 'public/svgs/burger-icon.svg'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { NavLink } from '../nav-link'
import { FormattedMessage, useIntl } from 'react-intl'
import { routes } from '@/utilities/resource-utilities'

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
      href: routes.home,
      text: 'comp.header.nav.home',
    },
    {
      href: routes.activeAuctions,
      text: 'comp.header.nav.active-auctions',
    },
    {
      href: routes.soldArchive,
      text: 'comp.header.nav.sold-archive',
    },
    {
      href: routes.history,
      text: 'comp.header.nav.history',
    },
    {
      href: routes.racing,
      text: 'comp.header.nav.racing',
    },
    {
      href: routes.contact,
      text: 'comp.header.nav.contact',
    },
    {
      href: routes.consign,
      text: 'comp.header.nav.consign',
    },
    {
      href: routes.invest,
      text: 'comp.header.nav.invest',
    },
    // Maybe I'll add download in here once I have the page up...
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
      <div className="hidden w-full md:block md:w-auto">
        <ul className="flex flex-col md:flex-row md:space-x-6 md:text-sm md:font-medium">
          {mapNavLinks()}
        </ul>
      </div>
    )
  }

  const mobileNavMenu = (): JSX.Element => {
    return (
      <div className={`${showMobileNav ? 'h-72' : 'h-0 invisible'} md:hidden duration-300 transition[height] ease-in-out overflow-hidden`}>
        <ul className="grid space-y-2 mt-4 mb-2" onClick={toggleMobilenav}>
          {mapNavLinks()}
        </ul>
      </div>
    )
  }

  return (
    <header className="text-stone-50">
      <div className="flex justify-center pb-6">
        <Image
          src={nycmcLogo}
          alt={intl.formatMessage({ id: 'comp.header.alt.nycmc-logo' })}
          width={111}
          height={111}
          priority
        />
      </div>
      <div className="flex justify-center">
        <h1 className="text-lg md:text-xl tracking-widest">
          <FormattedMessage id="common.title" />
        </h1>
      </div>
      <nav className="py-2 px-6 bg-stone-600 bg-opacity-90 mt-2 mb-6 rounded-md shadow-lg">
        <div className="container flex flex-wrap justify-center mx-auto">
          <button
            type="button"
            className="inline-flex items-center rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-stone-50 opacity-80 hover:opacity-100"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={toggleMobilenav}
          >
            <span className="sr-only">
              <FormattedMessage id="comp.header.sr.open-main-menu" />
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
  )
}
