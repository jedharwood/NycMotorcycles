import { useContext } from 'react';

import { StaticImage } from '@/types/image-types';

import { AppContext } from '../context/app-context';

export const BuildGridImages = (
  images: StaticImage[] = []
): StaticImage[] => {
  const { openStaticImageModal } = useContext(AppContext);

  return images.map(({ image, altText }) => ({
    image,
    altText,
    onImageClick: () => {
      openStaticImageModal({ image, altText });
    },
  }));
};
