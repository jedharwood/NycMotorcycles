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

  const hondaDreamList: JSX.Element = BuildList({
    listItems: [
      'pg.gallery.honda-dream.list-1',
      'pg.gallery.honda-dream.list-2',
      'pg.gallery.honda-dream.list-3',
      'pg.gallery.honda-dream.list-4',
      'pg.gallery.honda-dream.list-5',
    ],
  });

  const ducati250List: JSX.Element = BuildList({
    listItems: [
      'pg.gallery.ducati-250.list-1',
      'pg.gallery.ducati-250.list-2',
      'pg.gallery.ducati-250.list-3',
      'pg.gallery.ducati-250.list-4',
      'pg.gallery.ducati-250.list-5',
      'pg.gallery.ducati-250.list-6',
      'pg.gallery.ducati-250.list-7',
      'pg.gallery.ducati-250.list-8',
      'pg.gallery.ducati-250.list-9',
      'pg.gallery.ducati-250.list-10',
      'pg.gallery.ducati-250.list-11',
      'pg.gallery.ducati-250.list-12',
      'pg.gallery.ducati-250.list-13',
      'pg.gallery.ducati-250.list-14',
      'pg.gallery.ducati-250.list-15',
    ],
  });

  const maxGridColumns: TheNumbersOneToFour =
    galleryImages.length < 4
      ? (galleryImages.length as TheNumbersOneToFour)
      : 4;

  const renderContent = (): JSX.Element | null => {
    if (!isReady) return null;

    if (bikeName === 'kawasaki-h1ra') {
      return (
        <TwoColumnGridLayout 
          images={galleryImages}
          textDisplayPropObjects={[{
            textContent: [
              'pg.gallery.kawasaki-h1ra.para-1',
              'pg.gallery.kawasaki-h1ra.para-2',
              'pg.gallery.kawasaki-h1ra.para-3',
              'pg.gallery.kawasaki-h1ra.para-4',
            ]
          }]}
        />      
      )
    }

    if (bikeName === 'harley-xr750-75') {
      return (
        <TwoColumnGridLayout
          images={galleryImages}
          textDisplayPropObjects={[
            {
              title: 'pg.gallery.harley-xr750-75.title',
              textContent: [
                'pg.gallery.harley-xr750-75.para-1',
                'pg.gallery.harley-xr750-75.para-2',
                'pg.gallery.harley-xr750-75.para-3',
                'pg.gallery.harley-xr750-75.para-4',
                'pg.gallery.harley-xr750-75.para-5',
                'pg.gallery.harley-xr750-75.para-6',
                'pg.gallery.harley-xr750-75.para-7',
                'pg.gallery.harley-xr750-75.para-8',
                'pg.gallery.harley-xr750-75.para-9',
                'pg.gallery.harley-xr750-75.para-10',
              ],
            },
          ]}
        />
      )
    }

    if (bikeName === 'ducati-250') {
      return (
        <TwoColumnGridLayout
          images={galleryImages}
          textDisplayPropObjects={[
            {
              title: 'pg.gallery.ducati-250.title',
              childElement: ducati250List,
              textContent: [
                'pg.gallery.ducati-250.para-1',
                'pg.gallery.ducati-250.para-2',
              ],
            },
          ]}
        />
      );
    }

    if (bikeName === 'honda-dream') {
      return (
        <TwoColumnGridLayout
          images={galleryImages}
          textDisplayPropObjects={[
            {
              title: 'pg.gallery.honda-dream.title',
              subTitle: 'pg.gallery.honda-dream.subtitle',
              childElement: hondaDreamList,
              childElementPosition: 'under-title',
              textContent: [
                'pg.gallery.honda-dream.para-1',
                'pg.gallery.honda-dream.para-2',
              ],
              footer: 'pg.gallery.honda-dream.footer',
            },
          ]}
        />
      );
    }

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
                  'pg.gallery.harley-xr750.sect-2.para-1',
                  'pg.gallery.harley-xr750.sect-2.para-2',
                  'pg.gallery.harley-xr750.sect-2.para-3',
                  'pg.gallery.harley-xr750.sect-2.para-4',
                  'pg.gallery.harley-xr750.sect-2.para-5',
                  'pg.gallery.harley-xr750.sect-2.para-6',
                  'pg.gallery.harley-xr750.sect-2.para-7',
                  'pg.gallery.harley-xr750.sect-2.para-8',
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
