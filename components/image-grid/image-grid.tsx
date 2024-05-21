import Image from 'next/image';
import { useIntl } from 'react-intl';

import { StaticImage } from '@/types/image-types';

type ImageGridProps = {
  images: StaticImage[];
  maxColumns: TheNumbersOneToFour;
};

const defaultImages: StaticImage[] = [];

const ImageGrid = ({
  images = defaultImages,
  maxColumns,
}: ImageGridProps): JSX.Element => {
  const intl = useIntl();
  const getClasses = (): string => {
    if (maxColumns === 1) return 'space-y-4';

    return maxColumns === 2 || maxColumns === 3
      ? `grid gap-4 sm:grid-cols-2 md:grid-cols-${maxColumns.toString()}`
      : `grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`;
  };

  return (
    <section className={getClasses()}>
      {images.map((image, idx) => (
        <div
          className={`rounded-md bg-gray-500 shadow-lg 
            ${image.onImageClick === undefined ? 'cursor-default' : 'cursor-pointer'} 
            ${maxColumns === 1 ? 'h-fit' : ''}`}
          key={idx}
          onClick={image.onImageClick}
        >
          <Image
            src={image.image}
            alt={intl.formatMessage({
              id: image.altText,
            })}
            className='h-full w-full rounded-md object-cover hover:opacity-70'
          />
        </div>
      ))}
    </section>
  );
};

export default ImageGrid;
