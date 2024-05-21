import { FC, useContext, useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

import { HeadElement } from '@/components/head-element/head-element';
import ImageGrid from '@/components/image-grid/image-grid';
import ImageModal from '@/components/image-modal/image-modal';
import Jumbotron from '@/components/jumbotron/jumbotron';
import { Spinner } from '@/components/spinner/spinner';
import TwoColumnGridLayout from '@/components/two-column-grid-layout/two-column-grid-layout';
import { AppContext } from '@/context/app-context';
import { BuildGridImages } from '@/helpers/build-grid-images';
import { BuildList } from '@/helpers/build-list';
import { archiveBikes as archive } from '@/modules/archive-bikes';
import { StaticImage } from '@/types/image-types';

import { images as staticImg } from '../../../public/images/sold-archive';
import { images as gallery } from '../../../public/images/sold-archive/gallery';

const GalleryPage: FC = () => {
  const intl = useIntl();
  const { closeImageModal } = useContext(AppContext);
  const router = useRouter();
  const [isReady, setIsReady] = useState<boolean>(false);
  const [bikeName, setBikeName] = useState<string>('placeholder');

  useEffect(() => {
    closeImageModal();
    if (router.isReady) {
      setBikeName(router.query.bike as string);
      setIsReady(true);
    }
  }, [router.isReady]);

  const bikeImageName =
    Object.keys(archive).find((key) => archive[key] === bikeName) ||
    'placeholder';
  const bikeNameVerbose = `pg.gallery.${bikeName}.name`;
  const galleryImages: StaticImage[] = BuildGridImages(gallery[bikeImageName]);
  const harleyXr750List: JSX.Element = BuildList({
    listItems: [
      'pg.gallery.harley-xr750.sect-1.list-1',
      'pg.gallery.harley-xr750.sect-1.list-2',
      'pg.gallery.harley-xr750.sect-1.list-3',
    ],
    alignCentre: true,
  });

  const harleyXr750ReplicaList: JSX.Element = BuildList({
    listItems: [
      'pg.gallery.harley-xr750-replica.sect-2.list-1',
      'pg.gallery.harley-xr750-replica.sect-2.list-2',
      'pg.gallery.harley-xr750-replica.sect-2.list-3',
      'pg.gallery.harley-xr750-replica.sect-2.list-4',
      'pg.gallery.harley-xr750-replica.sect-2.list-5',
      'pg.gallery.harley-xr750-replica.sect-2.list-6',
    ],
  });

  const maxGridColumns: TheNumbersOneToFour =
    galleryImages.length < 4
      ? (galleryImages.length as TheNumbersOneToFour)
      : 4;

  const renderContent = (): JSX.Element | null => {
    if (!isReady) return null;

    if (bikeName === 'harley-xr750-replica') {
      return (
        <TwoColumnGridLayout
          images={galleryImages}
          textDisplayPropObjects={[
            {
              title: 'pg.gallery.harley-xr750-replica.sect-1.title',
              textContent: [
                'pg.gallery.harley-xr750-replica.sect-1.para-1',
                'pg.gallery.harley-xr750-replica.sect-1.para-2',
                'pg.gallery.harley-xr750-replica.sect-1.para-3',
                'pg.gallery.harley-xr750-replica.sect-1.para-4',
                'pg.gallery.harley-xr750-replica.sect-1.para-5',
                'pg.gallery.harley-xr750-replica.sect-1.para-6',
                'pg.gallery.harley-xr750-replica.sect-1.para-7',
              ],
            },
            {
              title: 'pg.gallery.harley-xr750-replica.sect-2.title',
              childElement: harleyXr750ReplicaList,
              childElementPosition: 'under-title',
            },
          ]}
        />
      );
    }

    if (bikeName === 'harley-xr750') {
      return (
        <>
          <iframe
            className='h-[300px] w-full rounded-md sm:h-[450px] md:h-[600px] lg:h-[450px] xl:h-[600px]'
            src='https://www.youtube.com/embed/hWGxH-0bI-s?si=x81MDY7HnOKLztmi'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          />
          <TwoColumnGridLayout
            images={galleryImages}
            textDisplayPropObjects={[
              {
                title: 'pg.gallery.harley-xr750.sect-1.title',
                childElement: harleyXr750List,
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
    }

    return <ImageGrid images={galleryImages} maxColumns={maxGridColumns} />;
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
        <ImageModal />
      </main>
    </>
  );
};

export default GalleryPage;
