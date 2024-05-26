import Image from 'next/image';
import instagramIcon from 'public/svgs/instagram-icon.svg';
import { useIntl } from 'react-intl';

import { instagramLink } from '@/utilities/resources';

type InstagramButtonProps = {
  id?: string;
};

const InstagramButton = ({ id }: InstagramButtonProps): JSX.Element => {
  const intl = useIntl();

  return (
    <div className='flex justify-center'>
      <a
        href={instagramLink}
        target='_blank'
        rel='noopener noreferrer'
        className='opacity-80 hover:opacity-100'
        data-testid={id}
      >
        <Image
          src={instagramIcon}
          alt={intl.formatMessage({
            id: 'comp.footer.alt.instagram-logo',
          })}
          width={50}
          height={50}
        />
      </a>
    </div>
  );
};

export default InstagramButton;
