import Image from 'next/image'
import closeIcon from 'public/svgs/close-icon.svg'
import { useIntl, FormattedMessage } from 'react-intl'

type ImageModalProps = {
  isVisible: boolean
  onCloseClick: () => void
  image: GridImage
}

export const ImageModal = ({
  isVisible,
  onCloseClick,
  image,
}: ImageModalProps): JSX.Element => {
  const intl = useIntl()

  return !isVisible ? (
    <></>
  ) : (
    <>
      <div className="flex justify-center items-center fixed inset-0 z-50">
        <div className="md:p-6 relative">
          <button
            type="button"
            className="flex flex-row-reverse p-2 w-full absolute md:right-8 z-60 hover:opacity-80"
            onClick={onCloseClick}
          >
            <Image
              src={closeIcon}
              alt={intl.formatMessage({
                id: 'component.image-modal.alt.close',
              })}
              width={40}
              height={40}
              priority
            />
            <span className="sr-only">
              <FormattedMessage id="component.image-modal.sr.close" />
            </span>
          </button>
          <Image
            src={image.imageSrc}
            alt={intl.formatMessage({
              id: image.imageAlt,
            })}
            width={image.width}
            height={image.height}
            priority
            className="rounded-md shadow-lg border-2 border-stone-50 max-h-screen"
          />
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}
