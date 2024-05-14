import Image from 'next/image';
import Link from 'next/link';
import { useIntl } from 'react-intl';

import { StaticImage } from '@/types/static-image-types';
import routes from '@/utilities/routes';

import { LinkButton } from '../link-button/link-button';

type SoldCardProps = {
  image: StaticImage;
  text: string;
  galleryLink?: string;
  soldOrCall: SoldOrCall;
};

const SoldCard = ({
  image,
  text,
  galleryLink,
  soldOrCall,
}: SoldCardProps): JSX.Element => {
  const intl = useIntl();

  const buildImageWithClasses = (isGalleryLink: boolean) => {
    const classes: string = isGalleryLink
      ? 'w-full rounded-md hover:opacity-70'
      : 'w-full rounded-md';

    return (
      <Image
        src={image.image}
        alt={intl.formatMessage({
          id: image.altText,
        })}
        priority
        className={classes}
      />
    );
  };

  const renderImage = (): JSX.Element => {
    return galleryLink === undefined ? (
      buildImageWithClasses(false)
    ) : (
      <Link
        href={galleryLink}
        className='relative h-fit rounded-md bg-gray-500'
      >
        {buildImageWithClasses(true)}
      </Link>
    );
  };

  const rendergalleryLink = (): JSX.Element => {
    return galleryLink === undefined ? (
      <></>
    ) : (
      <LinkButton
        text='comp.sold-card.gallery-link-button'
        href={galleryLink}
        type='router-link'
      />
    );
  };

  const renderContactButton = (): JSX.Element => {
    return soldOrCall === 'sold' ? (
      <></>
    ) : (
      <LinkButton
        text='common.route-names.contact'
        href={routes.contact}
        type='router-link'
      />
    );
  };

  const isSoldOrCall: string =
    soldOrCall === 'sold' ? 'comp.sold-card.sold' : 'comp.sold-card.call';

  return (
    <article className='grid w-full gap-4 rounded-md bg-stone-600 bg-opacity-90 py-4 px-6 text-stone-50 shadow-lg sm:grid-cols-2'>
      {renderImage()}
      <div className='flex items-center justify-center text-xl font-medium sm:opacity-80'>
        <div className='space-y-4'>
          <h3 className='flex justify-center'>
            {intl.formatMessage({ id: text })}
          </h3>
          <h4 className='flex justify-center'>
            {intl.formatMessage({ id: isSoldOrCall })}
          </h4>
          {renderContactButton()}
          {rendergalleryLink()}
        </div>
      </div>
    </article>
  );
};

export default SoldCard;