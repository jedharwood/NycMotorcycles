import React from 'react'
import { TextDisplay } from '../text-display/text-display'
import Button from '../button/button'
import { Spinner } from '../spinner/spinner'
import ModalWrapper from '../modal-wrapper/modal-wrapper'

type InfoModalProps = {
    isVisible: boolean
    closeModal: () => void
    isLoading: boolean
}

const ConfirmationModal = ({ 
  isVisible, 
  closeModal,
  isLoading
}: InfoModalProps): JSX.Element | null => {
  if (!isVisible) return null

  const title: string = isLoading ? 'comp.confirmation-modal.sending.title' : 'comp.confirmation-modal.sent.title'

  const textContent: string[] = isLoading 
    ? [] 
    : [
      'comp.confirmation-modal.sent.text-1',
      'comp.confirmation-modal.sent.text-2'
    ]

  const childElement: JSX.Element = (
    <>
      <Spinner isLoading={isLoading} />
      {
        !isLoading && 
        <Button text='comp.confirmation-modal.button.close' type='button' onClick={closeModal} />
      }
    </>
  )

  return (
    <ModalWrapper>       
      <TextDisplay 
        title={title} 
        textContent={textContent}
        textContentCentred={true}
        childElement={childElement} 
        childElementPosition='bottom'
        isOpaque={true} 
        hasBorder={true} 
      />
    </ModalWrapper>
  )
}

export default ConfirmationModal
