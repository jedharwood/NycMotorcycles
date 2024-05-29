import Image from 'next/image';
import instagramIcon from 'public/svgs/instagram-icon.svg';

import { instagramLink } from '@/utilities/resources';

type InstagramButtonProps = {
  id?: string;
  altText: string;
};

const InstagramButton = ({ id, altText }: InstagramButtonProps): JSX.Element => {
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
          alt={altText}
          width={50}
          height={50}
        />
      </a>
    </div>
  );
};

export default InstagramButton;
