import React, { useContext } from 'react';

import Image from 'next/image';
import closeIcon from 'public/svgs/close-icon.svg';
import { useIntl, FormattedMessage } from 'react-intl';

import { AppContext } from '../../context/app-context';
import ModalWrapper from '../modal-wrapper/modal-wrapper';

const ImageModal = (): JSX.Element | null => {
    const { showImageModal, imageModalImage, closeImageModal } = useContext(AppContext);
    const intl = useIntl();

    if (!showImageModal) return null;

    return (
        <ModalWrapper>
            <div className='absolute flex w-full flex-row-reverse p-2 md:right-8' data-testid='image-modal'>
                <button
                    type='button'
                    className=' z-60 hover:opacity-80'
                    onClick={closeImageModal}
                    data-testid='image-modal-close-button'
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
                src={imageModalImage.image}
                alt={intl.formatMessage({
                    id: imageModalImage.altText,
                })}
                className='max-w-screen max-h-screen rounded-md border-2 border-stone-50 shadow-lg'
            />
        </ModalWrapper>
    );
};

export default ImageModal;
