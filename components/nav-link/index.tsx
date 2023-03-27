import Link from 'next/link'

interface NavLinkProps {
  href: string
  text: string
  active: boolean
}

export const NavLink = ({ href, text, active }: NavLinkProps): JSX.Element => {
  const classes: string = 'block md:hover:underline md:hover:opacity-100'
  const activeClasses: string = active
    ? classes + ' underline opacity-100'
    : classes + ' opacity-80'

  return (
    <Link href={href} className={activeClasses}>
      {text}
    </Link>
  )
}
