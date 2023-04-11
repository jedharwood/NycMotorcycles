import { useIntl } from 'react-intl'
import Image from 'next/image'

type ImageGridProps = {
  images: GridImage[]
  maxColumns: 4 | 3 | 2
}

const defaultImages: GridImage[] = []

export const ImageGrid = ({
  images = defaultImages,
  maxColumns,
}: ImageGridProps): JSX.Element => {
  const intl = useIntl()
  const classes =
    maxColumns === 2 || maxColumns === 3
      ? `grid gap-4 sm:grid-cols-2 md:grid-cols-${maxColumns.toString()}`
      : `grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`

  return (
    <section className={classes}>
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
