import { useIntl } from 'react-intl'
import Image from 'next/image'

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
          <Image
            src={image.image.imageSrc}
            alt={intl.formatMessage({
              id: image.image.imageAlt,
            })}
            width={image.width}
            height={image.height}
            priority
            className="rounded-md h-full object-cover hover:opacity-70"
          />
        </div>
      ))}
    </section>
  )
}
