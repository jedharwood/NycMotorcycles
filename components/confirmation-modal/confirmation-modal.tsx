import React from 'react'
import { TextDisplay } from '../text-display/text-display'
import Button from '../button/button'
import { Spinner } from '../spinner/spinner'
import ModalWrapper from '../modal-wrapper/modal-wrapper'

type InfoModalProps = {
  isVisible: boolean
  closeButtonClick: () => void
  isLoading: boolean
  isSuccess: boolean
}

const ConfirmationModal = ({ 
  isVisible, 
  closeButtonClick,
  isLoading,
  isSuccess
}: InfoModalProps): JSX.Element | null => {
  if (!isVisible) return null

  const renderTitle = (): string => {
    if (isLoading) return 'comp.confirmation-modal.sending.title'

    return isSuccess 
    ? 'comp.confirmation-modal.sent.title'
    : 'comp.confirmation-modal.failed.title' 
  }

  const renderTextContent = (): string[] => {
    if (isLoading) return []

    return isSuccess ? [
      'comp.confirmation-modal.sent.text-1',
      'comp.confirmation-modal.sent.text-2'
    ] : [
      'comp.confirmation-modal.failed.text-1'
    ]
  }

  const renderCallsToAction = (): JSX.Element | null => {
    if (isLoading) return null

    return isSuccess ? (
      <Button text='comp.confirmation-modal.button.close' type='button' onClick={closeButtonClick} />
    ) : (
      <div className='flex justify-center space-x-6'>
        <Button text='comp.confirmation-modal.button.close' type='button' onClick={closeButtonClick} />
        <Button text='comp.confirmation-modal.button.retry' type='button' onClick={closeButtonClick} buttonColour='red' />
      </div>
    )
  }

  const childElement: JSX.Element = (
    <>
      <Spinner isLoading={isLoading} />
      {renderCallsToAction()}
    </>
  )

  return (
    <ModalWrapper>       
      <TextDisplay 
        title={renderTitle()} 
        textContent={renderTextContent()}
        textContentCentred={true}
        childElement={childElement} 
        childElementPosition='bottom'
        isOpaque={true} 
        hasBorder={true} 
        borderColour={isSuccess ? 'green' : 'red'}
      />
    </ModalWrapper>
  )
}

export default ConfirmationModal
