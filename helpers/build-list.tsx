import { useIntl } from 'react-intl';

type BuildListProps = {
  listItems: string[];
};

export const BuildList = ({
  listItems,
}: BuildListProps): JSX.Element => {
  const intl = useIntl();

  return (
    <ul
      className='space-y-2'
    >
      {listItems.map((listItem, idx) => (
        <li key={idx}>
          {intl.formatMessage({
            id: listItem,
          })}
        </li>
      ))}
    </ul>
  );
};
