import { useIntl } from 'react-intl'
import Image from 'next/image'

type JumbotronProps = {
  image: GridImage
  legend: string
}

export const Jumbotron = ({ image, legend }: JumbotronProps) => {
  const intl = useIntl()

  return (
    <div className="relative">
      <Image
        src={image.imageSrc}
        alt={intl.formatMessage({
          id: image.imageAlt,
        })}
        width={image.width}
        height={image.height}
        priority
        className="rounded-md shadow-lg"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-stone-600 opacity-90 rounded-md shadow-lg w-max">
        <h2 className="text-2xl sm:text-4xl md:text-5xl px-2 sm:px-8 py-2 text-stone-50 inline-block">
          {intl.formatMessage({
            id: legend,
          })}
        </h2>
      </div>
    </div>
  )
}
