import { TextDisplay, TextDisplayProps } from '../text-display'
import { useIntl } from 'react-intl'
import { ImageGrid } from '../image-grid'

type TwoColumnGridPageProps = {
  images: GridImage[]
  title: string
  textContent: string[]
  childElement?: JSX.Element
}

export const TwoColumnGridPage = ({
  images,
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
    <div className='grid md:grid-cols-2 gap-4'>
      <ImageGrid images={images} maxColumns={1} />
      <TextDisplay {...textDisplayProps} />
    </div>
  )
}
