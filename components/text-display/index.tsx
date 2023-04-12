import { useIntl } from 'react-intl'

export type TextDisplayProps = {
  title?: string
  textContent?: string[]
  childElement?: JSX.Element
  order?: 'title-text-child' | 'title-child-text'
}

export const TextDisplay = (props: TextDisplayProps): JSX.Element => {
  const { title, textContent, childElement, order } = props
  const intl = useIntl()

  const renderTitle = () => {
    return title === undefined ? (
      <></>
    ) : (
      <h2 className="flex justify-center font-medium text-xl md:text-2xl opacity-80">
        {intl.formatMessage({
          id: title,
        })}
      </h2>
    )
  }

  const mapTextContent = (): JSX.Element => {
    return textContent === undefined ? (
      <></>
    ) : (
      <div className="space-y-4">
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

  const renderChildElement = () => {
    return childElement === undefined ? <></> : <div>{childElement}</div>
  }

  const renderContent = () => {
    return order === 'title-child-text' ? (
      <>
        {renderTitle()}
        {renderChildElement()}
        {mapTextContent()}
      </>
    ) : (
      <>
        {renderTitle()}
        {mapTextContent()}
        {renderChildElement()}
      </>
    )
  }

  return (
    <section className="bg-stone-600 bg-opacity-90 w-full py-4 px-6 rounded-md text-stone-50 shadow-lg space-y-4">
      {renderContent()}
    </section>
  )
}
