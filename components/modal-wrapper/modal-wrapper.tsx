import { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

const ModalWrapper = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <div className='flex justify-center items-center fixed inset-0 z-50'>
        <div className='md:p-6 relative'>
          {children}
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black' />
    </>
  )
}

export default ModalWrapper
