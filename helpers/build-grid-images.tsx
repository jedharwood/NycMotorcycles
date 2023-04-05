import { useContext } from 'react'
import { AppContext } from '../context/app-context'

export const BuildGridImages = (images: GridImage[]): GridImage[] => {
  const { openImageModal } = useContext(AppContext)

  return images.map(({ imageSrc, imageAlt, width, height }) => ({
    imageSrc,
    imageAlt,
    width,
    height,
    onImageClick: () => {
      openImageModal({ imageSrc, imageAlt, width, height })
    },
  }))
}
