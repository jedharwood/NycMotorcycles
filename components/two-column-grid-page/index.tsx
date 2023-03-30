import { TextDisplay, TextDisplayProps } from '../text-display'
import { useIntl } from 'react-intl'

type TwoColumnGridPageProps = {
  imageSrc: string
  imageAlt: string
  title: string
  textContent: string[]
}

export const TwoColumnGridPage = ({
  imageSrc,
  imageAlt,
  title,
  textContent,
}: TwoColumnGridPageProps) => {
  const intl = useIntl()

  const textDisplayProps: TextDisplayProps = {
    title,
    textContent
  }

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <img
        src={imageSrc}
        alt={intl.formatMessage({ id: imageAlt })}
        className="w-full rounded-md"
      />
      <TextDisplay {...textDisplayProps }
      />
    </div>
  )
}
