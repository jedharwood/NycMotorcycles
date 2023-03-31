import { useIntl } from 'react-intl'

export type GridImageProps = {
  image: ImageSrcAndAlt
  width?: number
  height?: number
  onImageClick: () => void
}

type ImageGridProps = {
  images: GridImageProps[]
}

export const ImageGrid = ({ images }: ImageGridProps): JSX.Element => {
  const intl = useIntl()

  return (
    <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {images.map((image, idx) => (
        <div
          className="rounded-md shadow-lg bg-gray-500 cursor-pointer"
          key={idx}
          onClick={image.onImageClick}
        >
          <img
            src={image.image.imageSrc}
            alt={intl.formatMessage({ id: image.image.imageAlt })}
            className="rounded-md h-full object-cover hover:opacity-70"
          />
        </div>
      ))}
    </section>
  )
}
