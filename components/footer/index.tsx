import instagramIcon from 'assets/svgs/instagram-icon.svg'
import chevronUp from 'assets/svgs/chevron-up.svg'
import Image from 'next/image'
import { FormattedMessage, useIntl } from 'react-intl'

export const Footer = (): JSX.Element => {
  const intl = useIntl()
  const scrollToTop = (): void => {
    if (typeof window === 'undefined') return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="grid text-stone-50 tracking-widest font-light space-y-4 mt-6">
      <button
        type="button"
        onClick={scrollToTop}
        className="opacity-80 hover:opacity-100 hover:underline"
      >
        <div className='flex justify-center'>
        <Image
          src={chevronUp}
          alt={intl.formatMessage({ id: 'component.footer.text.scroll-to-top' })}
          width={40}
          height={40}
          priority
        />
        </div>
        <FormattedMessage id="component.footer.text.scroll-to-top" />
      </button>
      <a
        href="https://www.instagram.com/newyorkcitymotorcycles/"
        className="flex justify-center opacity-80 hover:opacity-100"
      >
        <Image
          src={instagramIcon}
          alt={intl.formatMessage({ id: 'component.footer.alt.instagram-logo' })}
          width={50}
          height={50}
          priority
        />
      </a>
      <h3 className="flex justify-center text-sm md:text-md">
        <FormattedMessage id="component.footer.text.address" />
      </h3>
      <h4 className="flex justify-center text-xs md:text-sm">
        <FormattedMessage id="component.footer.text.disclaimer" />
      </h4>
    </footer>
  )
}
