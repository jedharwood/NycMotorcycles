import { useContext } from 'react'
import { AppContext } from '../context/app-context'

export const BuildGridImage = ({
  imageSrc,
  imageAlt,
  width,
  height,
}: GridImage): GridImage => {
  const { openImageModal } = useContext(AppContext)

  return {
    ...{ imageSrc, imageAlt, width, height },
    onImageClick: () => {
      openImageModal({ imageSrc, imageAlt, width, height })
    },
  }
}
