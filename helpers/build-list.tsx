import { useIntl } from 'react-intl'

export const BuildList = (listItems: string[]): JSX.Element => {
    const intl = useIntl()
    
    return (
      <ul className="pl-4 list-disc">
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