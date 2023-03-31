import { TextDisplay, TextDisplayProps } from '../text-display'
import { useIntl } from 'react-intl'
import Image from 'next/image'

type TwoColumnGridPageProps = {
  image: GridImageProps
  title: string
  textContent: string[]
  childElement?: JSX.Element
}

export const TwoColumnGridPage = ({
  image,
  title,
  textContent,
  childElement,
}: TwoColumnGridPageProps) => {
  const intl = useIntl()

  const textDisplayProps: TextDisplayProps = {
    title,
    textContent,
    childElement,
  }

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <Image
        src={image.image.imageSrc}
        alt={intl.formatMessage({
          id: image.image.imageAlt,
        })}
        width={image.width}
        height={image.height}
        priority
        className="w-full rounded-md shadow-lg"
      />
      <TextDisplay {...textDisplayProps} />
    </div>
  )
}
