import Image from 'next/image';
import chevronUp from 'public/svgs/chevron-up.svg';

import InstagramButton from '../instagram-button/instagram-button';

const Footer = ({
    chevronText,
    altTextInstagramButton,
    address,
    disclaimer,
}: FooterProps): JSX.Element => {
    const scrollToTop = (): void => {
        if (typeof window === 'undefined') return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className='mt-6 grid space-y-4 font-light tracking-widest text-stone-50'>
            <div className='flex justify-center'>
                <button
                    type='button'
                    onClick={scrollToTop}
                    className='opacity-80 hover:underline hover:opacity-100'
                    data-testid='scroll-to-top-button'
                >
                    <div className='flex justify-center'>
                        <Image src={chevronUp} alt={chevronText} width={40} height={40} />
                    </div>
                    {chevronText}
                </button>
            </div>
            <InstagramButton
                id='instagram-button-footer'
                altText={altTextInstagramButton}
            />
            <h3 className='md:text-md flex justify-center text-sm'>{address}</h3>
            <h4 className='flex justify-center px-1 text-xs md:text-sm'>{disclaimer}</h4>
        </footer>
    );
};

export default Footer;
