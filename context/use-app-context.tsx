import { useState } from 'react';

import { StaticImage } from '@/types/static-image-types';

interface IAppContextState {
  showImageModal: boolean;
  imageModalImage: GridImage;
  showStaticImageModal: boolean;
  staticImageModalImage: StaticImage;
}

interface IAppContextActions {
  closeImageModal: () => void;
  openImageModal: (image: GridImage) => void;
  openStaticImageModal: (image: StaticImage) => void;
  closeStaticImageModal: () => void;
}

export const useAppContext = (): [IAppContextState, IAppContextActions] => {
  const defaultGridImage: GridImage = {
    imageSrc: '',
    imageAlt: '',
    width: undefined,
    height: undefined,
  };
  const defaultStaticGridImage: StaticImage = {
    image: {
      // Should I import an actual placeholder here?
      src: '',
      height: 0,
      width: 0,
    },
    altText: '',
  };
  const [showImageModal, setShowImageModal] = useState<boolean>(false);
  const [imageModalImage, setImageModalImage] =
    useState<GridImage>(defaultGridImage);

  const closeImageModal = (): void => {
    setShowImageModal(false);
    setImageModalImage(defaultGridImage);
  };

  const openImageModal = (image: GridImage): void => {
    setImageModalImage(image);
    setShowImageModal(true);
  };

  const [showStaticImageModal, setShowStaticImageModal] =
    useState<boolean>(false);
  const [staticImageModalImage, setStaticImageModalImage] =
    useState<StaticImage>(defaultStaticGridImage);

  const openStaticImageModal = (image: StaticImage): void => {
    setStaticImageModalImage(image);
    setShowStaticImageModal(true);
  };

  const closeStaticImageModal = (): void => {
    setShowStaticImageModal(false);
    setStaticImageModalImage(defaultStaticGridImage);
  };

  const state: IAppContextState = {
    showImageModal,
    imageModalImage,
    showStaticImageModal,
    staticImageModalImage,
  };

  const actions: IAppContextActions = {
    openImageModal,
    closeImageModal,
    openStaticImageModal,
    closeStaticImageModal,
  };

  return [state, actions];
};
