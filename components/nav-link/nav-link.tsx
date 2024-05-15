import Link from 'next/link';
import { useIntl } from 'react-intl';

interface NavLinkProps {
  href: string;
  text: string;
  active: boolean;
}

export const NavLink = ({ href, text, active }: NavLinkProps): JSX.Element => {
  const intl = useIntl();
  const classes: string =
    'block md:hover:underline md:hover:opacity-100 text-nowrap';
  const activeClasses: string = active
    ? classes + ' underline opacity-100'
    : classes + ' opacity-80';

  return (
    <Link href={href} className={activeClasses}>
      {intl.formatMessage({ id: text })}
    </Link>
  );
};
