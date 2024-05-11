import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const ModalWrapper = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <div className='fixed inset-0 z-50 flex items-center justify-center'>
        <div className='relative md:p-6'>{children}</div>
      </div>
      <div className='fixed inset-0 z-40 bg-black opacity-25' />
    </>
  );
};

export default ModalWrapper;
