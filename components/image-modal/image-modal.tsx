import Image from 'next/image'
import closeIcon from 'public/svgs/close-icon.svg'
import { useIntl, FormattedMessage } from 'react-intl'
import React, { useContext } from 'react'
import { AppContext } from '../../context/app-context'
import ModalWrapper from '../modal-wrapper/modal-wrapper'

const ImageModal = (): JSX.Element | null => {
  const { 
    showImageModal, 
    imageModalImage, 
    closeImageModal 
  } = useContext(AppContext)
  const intl = useIntl()

  if (!showImageModal) return null

  return (
    <ModalWrapper>
      <div className='flex flex-row-reverse p-2 w-full absolute md:right-8'>
        <button
          type='button'
          className=' z-60 hover:opacity-80'
          onClick={closeImageModal}
        >
          <Image
            src={closeIcon}
            alt={intl.formatMessage({
              id: 'comp.image-modal.alt.close',
            })}
            width={40}
            height={40}
          />
          <span className='sr-only'>
            <FormattedMessage id='comp.image-modal.alt.close' />
          </span>
        </button>
      </div>
      <Image
        src={imageModalImage.imageSrc}
        alt={intl.formatMessage({
          id: imageModalImage.imageAlt,
        })}
        width={imageModalImage.width}
        height={imageModalImage.height}
        className='rounded-md shadow-lg border-2 border-stone-50 max-h-screen max-w-screen'
      />
    </ModalWrapper>
  )
}

export default ImageModal
