import { TextDisplay, TextDisplayProps } from '../text-display'
import { useIntl } from 'react-intl'

type TwoColumnGridPageProps = {
  image: ImageSrcAndAlt
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
      <img
        src={image.imageSrc}
        alt={intl.formatMessage({ id: image.imageAlt })}
        className="w-full rounded-md shadow-lg"
      />
      <TextDisplay {...textDisplayProps} />
    </div>
  )
}
