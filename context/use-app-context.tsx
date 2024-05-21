import { useState } from 'react';

import { StaticImage, blankStaticImage } from '@/types/image-types';

interface IAppContextState {
  showImageModal: boolean;
  imageModalImage: StaticImage;
}

interface IAppContextActions {
  openImageModal: (image: StaticImage) => void;
  closeImageModal: () => void;
}

export const useAppContext = (): [IAppContextState, IAppContextActions] => {
  const [showImageModal, setShowImageModal] = useState<boolean>(false);
  const [imageModalImage, setImageModalImage] =
    useState<StaticImage>(blankStaticImage);

  const openImageModal = (image: StaticImage): void => {
    setImageModalImage(image);
    setShowImageModal(true);
  };

  const closeImageModal = (): void => {
    setShowImageModal(false);
    setImageModalImage(blankStaticImage);
  };

  const state: IAppContextState = {
    showImageModal,
    imageModalImage,
  };

  const actions: IAppContextActions = {
    openImageModal,
    closeImageModal,
  };

  return [state, actions];
};
