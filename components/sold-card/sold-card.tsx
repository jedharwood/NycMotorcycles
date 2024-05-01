import Image from 'next/image'
import Link from 'next/link'
import { useIntl } from 'react-intl'
import { LinkButton } from '../link-button/link-button'
import routes from '@/utilities/routes'

export type SoldOrCall = 'sold' | 'call'

type SoldCardProps = {
  image: GridImage
  text: string
  galleryLink?: string
  soldOrCall: SoldOrCall
}

export const SoldCard = ({
  image,
  text,
  galleryLink,
  soldOrCall,
}: SoldCardProps): JSX.Element => {
  const intl = useIntl()

  const buildImageWithClasses = (isGalleryLink: boolean) => {
    const classes: string = isGalleryLink
      ? 'w-full rounded-md hover:opacity-70'
      : 'w-full rounded-md'

    return (
      <Image
        src={image.imageSrc}
        alt={intl.formatMessage({
          id: image.imageAlt,
        })}
        width={image.width}
        height={image.height}
        priority
        className={classes}
      />
    )
  }

  const renderImage = (): JSX.Element => {
    return galleryLink === undefined ? (
      buildImageWithClasses(false)
    ) : (
      <Link
        href={galleryLink}
        className='relative bg-gray-500 rounded-md h-fit'
      >
        {buildImageWithClasses(true)}
      </Link>
    )
  }

  const rendergalleryLink = (): JSX.Element => {
    return galleryLink === undefined ? (
      <></>
    ) : (
      <LinkButton
        text='comp.sold-card.gallery-link-button'
        href={galleryLink}
        type='router-link'
      />
    )
  }

  const renderContactButton = (): JSX.Element => {
    return soldOrCall === 'sold' ? (
      <></>
    ) : (
      <LinkButton
        text='common.route-names.contact'
        href={routes.contact}
        type='router-link'
      />
    )
  }

  const isSoldOrCall: string =
    soldOrCall === 'sold' ? 'comp.sold-card.sold' : 'comp.sold-card.call'

  return (
    <article className='bg-stone-600 bg-opacity-90 w-full py-4 px-6 rounded-md text-stone-50 grid sm:grid-cols-2 gap-4 shadow-lg'>
      {renderImage()}
      <div className='font-medium sm:opacity-80 text-xl flex items-center justify-center'>
        <div className='space-y-4'>
          <h3 className='flex justify-center'>
            {intl.formatMessage({ id: text })}
          </h3>
          <h4 className='flex justify-center'>
            {intl.formatMessage({ id: isSoldOrCall })}
          </h4>
          {renderContactButton()}
          {rendergalleryLink()}
        </div>
      </div>
    </article>
  )
}
