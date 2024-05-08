import { FormattedMessage, useIntl } from 'react-intl'
import Image from 'next/image'
import chevronUp from 'public/svgs/chevron-up.svg'
import InstagramButton from '../instagram-button/instagram-button'

const Footer = (): JSX.Element => {
  const intl = useIntl()
  const scrollToTop = (): void => {
    if (typeof window === 'undefined') return
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className='grid text-stone-50 tracking-widest font-light space-y-4 mt-6'>
      <button
        type='button'
        onClick={scrollToTop}
        className='opacity-80 hover:opacity-100 hover:underline'
      >
        <div className='flex justify-center'>
          <Image
            src={chevronUp}
            alt={intl.formatMessage({
              id: 'comp.footer.text.scroll-to-top',
            })}
            width={40}
            height={40}
          />
        </div>
        <FormattedMessage id='comp.footer.text.scroll-to-top' />
      </button>
      <InstagramButton />
      <h3 className='flex justify-center text-sm md:text-md'>
        <FormattedMessage id='comp.footer.text.address' />
      </h3>
      <h4 className='flex justify-center text-xs md:text-sm px-1'>
        <FormattedMessage id='comp.footer.text.disclaimer' />
      </h4>
    </footer>
  )
}

export default Footer
