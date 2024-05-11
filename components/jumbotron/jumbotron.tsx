import Image from 'next/image';
import { useIntl } from 'react-intl';

type JumbotronProps = {
  image: GridImage;
  legend: string;
};

const defaultImage: GridImage = {
  imageSrc: '',
  imageAlt: 'common.img.place-holder.alt',
};

const Jumbotron = ({ image = defaultImage, legend }: JumbotronProps) => {
  const intl = useIntl();

  return (
    <div className='relative'>
      <Image
        src={image.imageSrc}
        alt={intl.formatMessage({
          id: image.imageAlt,
        })}
        width={image.width}
        height={image.height}
        priority
        className='w-full rounded-md shadow-lg'
      />
      <div className='absolute top-1/2 left-1/2 w-max max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 rounded-md bg-stone-600 opacity-90 shadow-lg md:max-w-[calc(100%-3rem)]'>
        <h2 className='inline-block px-2 py-2 text-2xl text-stone-50 sm:px-8 sm:text-4xl md:text-5xl lg:text-6xl'>
          {intl.formatMessage({
            id: legend,
          })}
        </h2>
      </div>
    </div>
  );
};

export default Jumbotron;
