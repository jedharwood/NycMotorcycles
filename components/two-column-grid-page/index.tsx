import { TextDisplay, TextDisplayProps } from '../text-display'
import { useIntl } from 'react-intl'

type TwoColumnGridPageProps = {
  imageSrc: string
  imageAlt: string
  title: string
  textContent: string[]
  childElement?: JSX.Element
}

export const TwoColumnGridPage = ({
  imageSrc,
  imageAlt,
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
        src={imageSrc}
        alt={intl.formatMessage({ id: imageAlt })}
        className="w-full rounded-md shadow-lg"
      />
      <TextDisplay {...textDisplayProps} />
    </div>
  )
}
