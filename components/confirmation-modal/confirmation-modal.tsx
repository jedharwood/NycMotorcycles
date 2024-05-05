import React from 'react'
import { TextDisplay } from '../text-display/text-display'
import Button from '../button/button'

type InfoModalProps = {
    isVisible: boolean
    closeModal: () => void
}

export const ConfirmationModal = ({ 
  isVisible, 
  closeModal
}: InfoModalProps): JSX.Element | null => {
  if (!isVisible) return null

  const closeButton: JSX.Element = (
    <Button text='comp.confirmation-modal.button.close' type='button' onClick={closeModal} />
  )

  return (
    <>
      <div className='flex justify-center items-center fixed inset-0 z-50'>
        <div className='md:p-6 relative'>
          <TextDisplay 
            title='comp.confirmation-modal.sent.title' 
            textContent={[
              'comp.confirmation-modal.sent.text-1',
              'comp.confirmation-modal.sent.text-2'
            ]}
            childElement={closeButton} 
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
