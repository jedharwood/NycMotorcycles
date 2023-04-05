import { useState } from 'react'

interface IAppContextState {
  showImageModal: boolean
  imageModalImage: GridImage
}

interface IAppContextActions {
  closeImageModal: () => void
  openImageModal: (image: GridImage) => void
}

export const useAppContext = (): [IAppContextState, IAppContextActions] => {
  const defaultGridImage: GridImage = {
    imageSrc: '',
    imageAlt: '',
    width: undefined,
    height: undefined,
  }
  const [showImageModal, setShowImageModal] = useState<boolean>(false)
  const [imageModalImage, setImageModalImage] =
    useState<GridImage>(defaultGridImage)

  const closeImageModal = (): void => {
    setShowImageModal(false)
    setImageModalImage(defaultGridImage)
  }

  const openImageModal = (image: GridImage): void => {
    setImageModalImage(image)
    setShowImageModal(true)
  }

  const state: IAppContextState = {
    showImageModal,
    imageModalImage,
  }

  const actions: IAppContextActions = {
    openImageModal,
    closeImageModal,
  }

  return [state, actions]
}
