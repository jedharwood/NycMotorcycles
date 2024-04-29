import { useIntl } from 'react-intl'

type ChildElementPosition = 'under-title' | 'bottom' 

export type TextDisplayProps = {
  title?: string
  textContent?: string[]
  childElement?: JSX.Element
  childElementPosition?: ChildElementPosition
}

export const TextDisplay = ({
  title,
  textContent,
  childElement,
  childElementPosition
}: TextDisplayProps): JSX.Element => {
  const intl = useIntl()

  const renderTitle = (): JSX.Element => {
    return title === undefined ? (
      <></>
    ) : (
      <h2 className='flex justify-center font-medium text-xl md:text-2xl mb-4 opacity-80'>
        {intl.formatMessage({
          id: title,
        })}
      </h2>
    )
  }

  const mapTextContent = (): JSX.Element => {
    return textContent === undefined || !textContent.length? (
      <></>
    ) : (
      <div className='space-y-4'>
        {textContent.map((text, idx) => (
          <p key={idx}>
            {intl.formatMessage({
              id: text,
            })}
          </p>
        ))}
      </div>
    )
  }

  const renderChildElement = (position: ChildElementPosition): JSX.Element => {
    if (childElement && childElementPosition !== 'bottom' && position === 'under-title') {
      return <div className='mt-4'>{childElement}</div>
    }
    if (childElement && childElementPosition === 'bottom' && position === 'bottom') {
      return <div className='mt-4'>{childElement}</div>
    }

    return <></>
  }

  return (
    <section className='bg-stone-600 bg-opacity-90 w-full py-4 px-6 rounded-md text-stone-50 shadow-lg'>
      {renderTitle()}
      {renderChildElement('under-title')}
      {mapTextContent()}
      {renderChildElement('bottom')}
    </section>
  )
}
