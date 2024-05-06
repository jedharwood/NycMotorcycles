import React from 'react'
import { TextDisplay } from '../text-display/text-display'
import Button from '../button/button'
import { Spinner } from '../spinner/spinner'

type InfoModalProps = {
    isVisible: boolean
    closeModal: () => void
    isLoading: boolean
}

export const ConfirmationModal = ({ 
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
    <>
      <div className='flex justify-center items-center fixed inset-0 z-50'>
        <div className='md:p-6 relative'>
          <TextDisplay 
            title={title} 
            textContent={textContent}
            textContentCentred={true}
            childElement={childElement} 
            childElementPosition='bottom'
            isOpaque={true} 
            hasBorder={true} 
          />
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </>
  )
}
