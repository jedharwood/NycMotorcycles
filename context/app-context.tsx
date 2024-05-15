import { createContext } from 'react';

import { StaticImage, blankStaticImage } from '@/types/image-types';

interface IAppContext {
  showImageModal: boolean;
  imageModalImage: StaticImage;
  openImageModal: (image: StaticImage) => void;
  closeImageModal: () => void;
}

const defaultState: IAppContext = {
  showImageModal: false,
  imageModalImage: blankStaticImage,
  openImageModal: (): void => {},
  closeImageModal: (): void => {},
};

export const AppContext = createContext<IAppContext>(defaultState);
