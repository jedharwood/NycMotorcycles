import { useIntl } from 'react-intl'
import Image from 'next/image'

type JumbotronProps = {
  image: GridImage
  legend: string
}

const defaultImage: GridImage = {
  imageSrc: '',
  imageAlt: 'comp.jumbotron.placeholder-image',
}

export const Jumbotron = ({ image = defaultImage, legend }: JumbotronProps) => {
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
        className="rounded-md shadow-lg w-full"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-stone-600 opacity-90 rounded-md shadow-lg w-max max-w-[calc(100%-2rem)] md:max-w-[calc(100%-3rem)]">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl px-2 sm:px-8 py-2 text-stone-50 inline-block">
          {intl.formatMessage({
            id: legend,
          })}
        </h2>
      </div>
    </div>
  )
}
