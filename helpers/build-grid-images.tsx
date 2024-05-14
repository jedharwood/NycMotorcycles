import { useContext } from 'react';

import { StaticImage } from '@/types/static-image-types';

import { AppContext } from '../context/app-context';

export const BuildGridImages = (images: GridImage[] = []): GridImage[] => {
  const { openImageModal } = useContext(AppContext);

  return images.map(({ imageSrc, imageAlt, width, height }) => ({
    imageSrc,
    imageAlt,
    width,
    height,
    onImageClick: () => {
      openImageModal({ imageSrc, imageAlt, width, height });
    },
  }));
};

export const BuildStaticGridImages = (images: StaticImage[] = []): StaticImage[] => {
  // const { openImageModal } = useContext(AppContext);

  return images.map(({ image, altText }) => ({
    image,
    altText,
    // onImageClick: () => {
    //   openImageModal({ image, altText });
    // },
  }));
};
