import Link from 'next/link';

interface NavLinkProps {
    href: string;
    text: string;
    active: boolean;
    deviceType: DeviceType;
}

const NavLink = ({ href, text, active, deviceType }: NavLinkProps): JSX.Element => {
    const classes: string = 'block md:hover:underline md:hover:opacity-100 text-nowrap';
    const activeClasses: string = active
        ? classes + ' underline opacity-100'
        : classes + ' opacity-80';
    const hrefPageName = href.substring(1);
    const destination = hrefPageName === '' ? 'home' : hrefPageName;

    return (
        <Link
            href={href}
            className={activeClasses}
            data-testid={`nav-link-${destination}-${deviceType}`}
        >
            {text}
        </Link>
    );
};

export default NavLink;
