import { useIntl } from 'react-intl'
import Image from 'next/image'

type ImageGridProps = {
  images: GridImage[]
  maxColumns: 3 | 2
}

export const ImageGrid = ({
  images,
  maxColumns,
}: ImageGridProps): JSX.Element => {
  const intl = useIntl()

  return (
    <section className={`grid gap-4 sm:grid-cols-2 md:grid-cols-${maxColumns}`}>
      {images.map((image, idx) => (
        <div
          className="rounded-md shadow-lg bg-gray-500 cursor-pointer"
          key={idx}
          onClick={image.onImageClick}
        >
          <Image
            src={image.imageSrc}
            alt={intl.formatMessage({
              id: image.imageAlt,
            })}
            width={image.width}
            height={image.height}
            className="rounded-md h-full object-cover hover:opacity-70"
          />
        </div>
      ))}
    </section>
  )
}
