import { useIntl } from 'react-intl'

type BuildListProps = {
  listItems: string[]
  alignCentre?: boolean
}

export const BuildList = ({listItems, alignCentre}: BuildListProps): JSX.Element => {
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