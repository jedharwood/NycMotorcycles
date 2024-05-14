import { createContext } from 'react';

import { StaticImage } from '@/types/static-image-types';

interface IAppContext {
  showImageModal: boolean;
  imageModalImage: GridImage;
  openImageModal: (image: GridImage) => void;
  closeImageModal: () => void;
  showStaticImageModal: boolean;
  staticImageModalImage: StaticImage;
  openStaticImageModal: (image: StaticImage) => void;
  closeStaticImageModal: () => void;
}

const defaultState: IAppContext = {
  showImageModal: false,
  imageModalImage: {
    imageSrc: '',
    imageAlt: '',
    width: undefined,
    height: undefined,
  },
  openImageModal: (): void => {},
  closeImageModal: (): void => {},
  showStaticImageModal: false,
  staticImageModalImage: {
    image: {
      // Should I import an actual placeholder here?
      src: '',
      height: 0,
      width: 0,
    },
    altText: '',
  },
  openStaticImageModal: (): void => {},
  closeStaticImageModal: (): void => {},
};

export const AppContext = createContext<IAppContext>(defaultState);
