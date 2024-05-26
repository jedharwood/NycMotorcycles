import Image from 'next/image';
import chevronUp from 'public/svgs/chevron-up.svg';
import { FormattedMessage, useIntl } from 'react-intl';

import InstagramButton from '../instagram-button/instagram-button';

const Footer = (): JSX.Element => {
  const intl = useIntl();
  const scrollToTop = (): void => {
    if (typeof window === 'undefined') return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='mt-6 grid space-y-4 font-light tracking-widest text-stone-50'>
      <button
        type='button'
        onClick={scrollToTop}
        className='opacity-80 hover:underline hover:opacity-100'
        data-testid='scroll-to-top-button'
      >
        <div className='flex justify-center'>
          <Image
            src={chevronUp}
            alt={intl.formatMessage({
              id: 'comp.footer.text.scroll-to-top',
            })}
            width={40}
            height={40}
          />
        </div>
        <FormattedMessage id='comp.footer.text.scroll-to-top' />
      </button>
      <InstagramButton id='instagram-button-footer' />
      <h3 className='md:text-md flex justify-center text-sm'>
        <FormattedMessage id='comp.footer.text.address' />
      </h3>
      <h4 className='flex justify-center px-1 text-xs md:text-sm'>
        <FormattedMessage id='comp.footer.text.disclaimer' />
      </h4>
    </footer>
  );
};

export default Footer;
