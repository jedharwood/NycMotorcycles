import NextLink from 'next/link';

import Button from '../button/button';

type LinkButtonProps = {
  text: string;
  href: string;
  type: 'anchor' | 'router-link' | 'download';
  fileName?: string;
  id?: string;
};

const LinkButton = ({
  text,
  href,
  type,
  id,
  fileName,
}: LinkButtonProps): JSX.Element => {
  const button = <Button type='button' text={text} />;

  const linkButton = (): JSX.Element => {
    switch (type) {
      case 'anchor':
        return (
          <a href={href} target='_blank' rel='noopener noreferrer'>
            {button}
          </a>
        );
      case 'download':
        return (
          <a href={href} download={fileName}>
            {button}
          </a>
        );
      case 'router-link':
      default:
        return (
          <NextLink href={href} data-testid={id}>
            {button}
          </NextLink>
        );
    }
  };

  return <div className='flex justify-center'>{linkButton()}</div>;
};

export default LinkButton;
