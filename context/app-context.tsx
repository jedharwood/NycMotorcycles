import { createContext } from 'react'

interface IAppContext {
  showImageModal: boolean
  imageModalImage: GridImage
  openImageModal: (image: GridImage) => void
  closeImageModal: () => void
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
}

export const AppContext = createContext<IAppContext>(defaultState)
