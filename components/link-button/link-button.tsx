import NextLink from 'next/link';

import Button from '../button/button';

type LinkButtonProps = {
  text: string;
  href: string;
  type: 'anchor' | 'router-link';
  id?: string;
};

export const LinkButton = ({
  text,
  href,
  type,
  id,
}: LinkButtonProps): JSX.Element => {
  const button = <Button type='button' text={text} />;

  const linkButton = () => {
    return type === 'anchor' ? (
      <a href={href} target='_blank' rel='noopener noreferrer'>
        {button}
      </a>
    ) : (
      <NextLink href={href} data-testid={id}>
        {button}
      </NextLink>
    );
  };

  return <div className='flex justify-center'>{linkButton()}</div>;
};
