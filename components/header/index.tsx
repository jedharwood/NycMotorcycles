import Image from 'next/image'
import Link from 'next/link'
import nycmcLogo from '../../assets/svgs/nycmc-logo.svg'
import burgerIcon from '../../assets/svgs/burger-icon.svg'
import { useState } from 'react'

export const Header = (): JSX.Element => {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false)

  const toggleMobilenav = () => {
    setShowMobileNav(!showMobileNav)
  }

  const linkItem = (href: string, text: string): JSX.Element => {
    return (
      <li className="flex justify-center">
        <Link
          href={`/${href}`}
          className="block opacity-80 md:hover:underline md:hover:opacity-100"
        >
          {text}
        </Link>
      </li>
    )
  }

  const navMenu = (): JSX.Element => {
    return (
      <ul className="flex flex-col md:flex-row md:space-x-8 md:text-sm md:font-medium">
        {linkItem('', 'HOME')}
        {linkItem('active-auctions', 'ACTIVE AUCTIONS')}
        {linkItem('sold-archive', 'SOLD ARCHIVE')}
        {linkItem('history', 'HISTORY')}
        {linkItem('sell-in-japan', 'SELL YOUR MOTORCYCLE IN JAPAN')}
        {linkItem('racing', 'RACING')}
        {linkItem('contact', 'CONTACT')}
      </ul>
    )
  }

  const mobileNavMenu = (): JSX.Element => {
    return !showMobileNav ? (
      <></>
    ) : (
      <ul className="grid space-y-2 mt-4 mb-2" onClick={toggleMobilenav}>
        {linkItem('', 'HOME')}
        {linkItem('active-auctions', 'ACTIVE AUCTIONS')}
        {linkItem('sold-archive', 'SOLD ARCHIVE')}
        {linkItem('history', 'HISTORY')}
        {linkItem('sell-in-japan', 'SELL YOUR MOTORCYCLE IN JAPAN')}
        {linkItem('racing', 'RACING')}
        {linkItem('contact', 'CONTACT')}
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
        <h1 className="text-lg tracking-widest">NEW YORK CITY MOTORCYCLES</h1>
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
            <span className="sr-only">Open main menu</span>
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
