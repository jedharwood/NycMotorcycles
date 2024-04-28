import { useIntl } from 'react-intl'

export const BuildList = (listItems: string[], alignCentre?: boolean): JSX.Element => {
    const intl = useIntl()
    
    return (
      <ul className={`pl-4 list-disc ${alignCentre ? 'text-center' : ''}`}>
        {listItems.map((listItem, idx) => (
          <li key={idx}>
            {intl.formatMessage({
              id: listItem,
            })}
          </li>
        ))}
      </ul>
    )
  }