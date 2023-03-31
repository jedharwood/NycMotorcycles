import Image from 'next/image'
import closeIcon from 'public/svgs/close-icon.svg'
import { useIntl, FormattedMessage } from 'react-intl'

type ImageModalProps = {
  isVisible: boolean
  onCloseClick: () => void
  imageSrc: string
  imageAlt: string
}

export const ImageModal = ({
  isVisible,
  onCloseClick,
  imageSrc,
  imageAlt,
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
          <img
            src={imageSrc}
            alt={imageAlt}
            className="rounded-md shadow-lg border-2 border-stone-50"
          />
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}
