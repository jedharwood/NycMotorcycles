import { FC, useContext, useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

import { HeadElement } from '@/components/head-element/head-element';
import StaticImageGrid from '@/components/image-grid/static-image-grid';
import StaticImageModal from '@/components/image-modal/static-image-modal';
import Jumbotron from '@/components/jumbotron/jumbotron';
import { Spinner } from '@/components/spinner/spinner';
import StaticImageTwoColumnGridLayout from '@/components/two-column-grid-layout/static-image-two-column-grid-layout';
import { AppContext } from '@/context/app-context';
import { BuildStaticGridImages } from '@/helpers/build-grid-images';
import { BuildList } from '@/helpers/build-list';
import { archiveBikes as archive } from '@/modules/archive-bikes';
import { StaticImage } from '@/types/static-image-types';

import { images as gallery } from '../../../public/images/sold-archive/gallery/static-image-catalog';
import { images as staticImg } from '../../../public/images/sold-archive/static-image-catalog';

const GalleryPage: FC = () => {
  const intl = useIntl();
  const { closeStaticImageModal } = useContext(AppContext);
  const router = useRouter();
  const [isReady, setIsReady] = useState<boolean>(false);
  const [bikeName, setBikeName] = useState<string>('placeholder');

  useEffect(() => {
    closeStaticImageModal();
    if (router.isReady) {
      setBikeName(router.query.bike as string);
      setIsReady(true);
    }
  }, [router.isReady]);

  const bikeImageName =
    Object.keys(archive).find((key) => archive[key] === bikeName) ||
    'placeholder';
  const bikeNameVerbose = `pg.gallery.${bikeName}.name`;
  const galleryImages: StaticImage[] = BuildStaticGridImages(
    gallery[bikeImageName]
  );
  const theList: JSX.Element = BuildList({
    listItems: [
      'pg.gallery.harley-xr750.sect-1.list-1',
      'pg.gallery.harley-xr750.sect-1.list-2',
      'pg.gallery.harley-xr750.sect-1.list-3',
    ],
    alignCentre: true,
  });

  const renderContent = (): JSX.Element | null => {
    if (!isReady) return null;

    return bikeName !== 'harley-xr750' ? (
      <StaticImageGrid images={galleryImages} maxColumns={4} />
    ) : (
      <>
        <iframe
          className='h-[300px] w-full rounded-md sm:h-[450px] md:h-[600px] lg:h-[450px] xl:h-[600px]'
          src='https://www.youtube.com/embed/hWGxH-0bI-s?si=x81MDY7HnOKLztmi'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        />
        <StaticImageTwoColumnGridLayout
          images={galleryImages}
          textDisplayPropObjects={[
            {
              title: 'pg.gallery.harley-xr750.sect-1.title',
              childElement: theList,
              childElementPosition: 'under-title',
            },
            {
              textContent: [
                'pg.gallery.harley-xr750.sect-2',
                'pg.gallery.harley-xr750.sect-3',
                'pg.gallery.harley-xr750.sect-4',
                'pg.gallery.harley-xr750.sect-5',
                'pg.gallery.harley-xr750.sect-6',
                'pg.gallery.harley-xr750.sect-7',
                'pg.gallery.harley-xr750.sect-8',
                'pg.gallery.harley-xr750.sect-9',
              ],
            },
          ]}
        />
      </>
    );
  };

  return (
    <>
      <HeadElement
        pageTitle='pg.gallery.head.meta.title'
        content='pg.gallery.head.meta.content'
        bikeName={intl.formatMessage({ id: bikeNameVerbose })}
      />
      <main>
        <div className='space-y-6'>
          <Jumbotron
            image={staticImg[bikeImageName]}
            legend={bikeNameVerbose}
          />
          <Spinner isLoading={!isReady} verticalPadding={true} />
          {renderContent()}
        </div>
        <StaticImageModal />
      </main>
    </>
  );
};

export default GalleryPage;
