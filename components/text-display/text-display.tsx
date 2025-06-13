const TextDisplay = ({
  title,
  textContent,
  childElement,
  childElementPosition,
  isOpaque,
  hasBorder,
  textContentCentred,
  borderColour,
  subTitle,
  footer,
}: TextDisplayProps): JSX.Element => {
  const titleStyle: string = 'text-xl font-medium opacity-80 md:text-2xl';

  const renderTitle = (): JSX.Element | null => {
    if (!title) return null;

    return (
      <div className='text-center '>
        <h2 className={titleStyle}>{title}</h2>
        {subTitle && <p>{subTitle}</p>}
      </div>
    );
  };

  const mapTextContent = (): JSX.Element => {
    return textContent === undefined || !textContent.length ? (
      <></>
    ) : (
      <div className={`space-y-4 ${textContentCentred && 'text-center'}`}>
        {textContent.map((text, idx) => (
          <p key={idx}>{text}</p>
        ))}
      </div>
    );
  };

  const renderChildElement = (
    position: ChildElementPosition
  ): JSX.Element | null => {
    if (
      childElement &&
      childElementPosition !== 'bottom' &&
      position === 'under-title'
    ) {
      return childElement;
    }
    if (
      childElement &&
      childElementPosition === 'bottom' &&
      position === 'bottom'
    ) {
      return childElement;
    }

    return null;
  };

  const renderFooter = (): JSX.Element | null => {
    if (!footer) return null;

    return <h3 className={`text-center ${titleStyle}`}>{footer}</h3>;
  };

  const borderColourClasses: string =
    borderColour === 'red' ? 'border-rose-500' : 'border-teal-500';
  const borderClasses: string = `border-2 ${borderColourClasses}`;
  const bgClasses: string = `bg-stone-600 w-full py-4 px-6 rounded-md text-stone-50 shadow-lg space-y-4 ${
    !isOpaque && 'bg-opacity-90'
  } ${hasBorder && borderClasses}`;

  return (
    <section className={bgClasses}>
      {renderTitle()}
      {renderChildElement('under-title')}
      {mapTextContent()}
      {renderChildElement('bottom')}
      {renderFooter()}
    </section>
  );
};

export default TextDisplay;
