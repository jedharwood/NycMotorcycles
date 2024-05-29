type BuildListProps = {
  listItems: string[];
};

export const BuildList = ({ listItems }: BuildListProps): JSX.Element => {
  return (
    <ul className='space-y-2'>
      {listItems.map((listItem, idx) => (
        <li key={idx}>{listItem}</li>
      ))}
    </ul>
  );
};
