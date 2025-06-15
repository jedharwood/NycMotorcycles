import Image from 'next/image';

import { StaticImage } from '@/types/image-types';

type JumbotronProps = {
    image: StaticImage;
    legend: string;
    altText: string;
};

const Jumbotron = ({ image, legend, altText }: JumbotronProps) => {
    return (
        <div className='relative'>
            <Image
                src={image.image}
                alt={altText}
                priority
                className='w-full rounded-md shadow-lg'
                placeholder='blur'
            />
            <div className='absolute top-1/2 left-1/2 w-max max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 rounded-md bg-stone-600 opacity-90 shadow-lg md:max-w-[calc(100%-3rem)]'>
                <h2 className='inline-block px-2 py-2 text-center text-2xl text-stone-50 sm:px-8 sm:text-4xl md:text-5xl lg:text-6xl'>
                    {legend}
                </h2>
            </div>
        </div>
    );
};

export default Jumbotron;
