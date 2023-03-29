type TextDisplayProps = {
  title?: string
  textContent?: string[]
  childElement?: JSX.Element
}

export const TextDisplay = ({
  title,
  textContent,
  childElement,
}: TextDisplayProps): JSX.Element => {
  const renderTitle = () => {
    return title === undefined ? (
      <></>
    ) : (
      <h2 className="flex justify-center font-medium text-xl mb-4 opacity-80">
        {title}
      </h2>
    )
  }

  const mapTextContent = (): JSX.Element => {
    return textContent === undefined ? (
      <></>
    ) : (
      <div className="space-y-4">
        {textContent.map((text, idx) => (
          <p key={idx}>{text}</p>
        ))}
      </div>
    )
  }

  const renderChildElement = () => {
    return childElement === undefined ? (
      <></>
    ) : (
      <div className="mt-4">{childElement}</div>
    )
  }

  return (
    <section className="bg-stone-600 bg-opacity-90 w-full pt-2 pb-4 px-6 rounded-md text-stone-50 shadow-lg">
      {renderTitle()}
      {mapTextContent()}
      {renderChildElement()}
    </section>
  )
}
