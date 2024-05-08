import { useIntl } from 'react-intl'
import Image from 'next/image'
import instagramIcon from 'public/svgs/instagram-icon.svg'

const InstagramButton = (): JSX.Element => {
  const intl = useIntl()

  return (
    <a
      href={'https://www.instagram.com/newyorkcitymotorcycles/'}
      target='_blank'
      rel='noopener noreferrer'
      className='flex justify-center opacity-80 hover:opacity-100'
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
  )
}

export default InstagramButton