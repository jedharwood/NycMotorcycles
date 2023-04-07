import instagramIcon from 'public/svgs/instagram-icon.svg'
import chevronUp from 'public/svgs/chevron-up.svg'
import Image from 'next/image'
import { FormattedMessage, useIntl } from 'react-intl'
import { instagramProfilePage } from '@/utilities/resource-utilities'

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
        <div className="flex justify-center">
          <Image
            src={chevronUp}
            alt={intl.formatMessage({
              id: 'comp.footer.text.scroll-to-top',
            })}
            width={40}
            height={40}
          />
        </div>
        <FormattedMessage id="comp.footer.text.scroll-to-top" />
      </button>
      <a
        href={instagramProfilePage}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center opacity-80 hover:opacity-100"
      >
        <Image
          src={instagramIcon}
          alt={intl.formatMessage({
            id: 'comp.footer.alt.instagram-logo',
          })}
          width={50}
          height={50}
        />
      </a>
      <h3 className="flex justify-center text-sm md:text-md">
        <FormattedMessage id="comp.footer.text.address" />
      </h3>
      <h4 className="flex justify-center text-xs md:text-sm px-1">
        <FormattedMessage id="comp.footer.text.disclaimer" />
      </h4>
    </footer>
  )
}
