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

import { images as img } from '../../../public/images/sold-archive';
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
  const formattedBikeName = intl.formatMessage({
    id: `pg.gallery.${bikeName}.name`,
  });
  const galleryImages: StaticImage[] = BuildGridImages(gallery[bikeImageName]);

  const harleyXr750List: JSX.Element = BuildList({
    listItems: [
      intl.formatMessage({ id: 'pg.gallery.harley-xr750.sect-1.list-1' }),
      intl.formatMessage({ id: 'pg.gallery.harley-xr750.sect-1.list-2' }),
      intl.formatMessage({ id: 'pg.gallery.harley-xr750.sect-1.list-3' }),
    ],
  });

  const harleyXr750ReplicaList: JSX.Element = BuildList({
    listItems: [
      intl.formatMessage({
        id: 'pg.gallery.harley-xr750-replica.sect-2.list-1',
      }),
      intl.formatMessage({
        id: 'pg.gallery.harley-xr750-replica.sect-2.list-2',
      }),
      intl.formatMessage({
        id: 'pg.gallery.harley-xr750-replica.sect-2.list-3',
      }),
      intl.formatMessage({
        id: 'pg.gallery.harley-xr750-replica.sect-2.list-4',
      }),
      intl.formatMessage({
        id: 'pg.gallery.harley-xr750-replica.sect-2.list-5',
      }),
      intl.formatMessage({
        id: 'pg.gallery.harley-xr750-replica.sect-2.list-6',
      }),
    ],
  });

  const hondaDreamList: JSX.Element = BuildList({
    listItems: [
      intl.formatMessage({ id: 'pg.gallery.honda-dream.list-1' }),
      intl.formatMessage({ id: 'pg.gallery.honda-dream.list-2' }),
      intl.formatMessage({ id: 'pg.gallery.honda-dream.list-3' }),
      intl.formatMessage({ id: 'pg.gallery.honda-dream.list-4' }),
      intl.formatMessage({ id: 'pg.gallery.honda-dream.list-5' }),
    ],
  });

  const ducati250List: JSX.Element = BuildList({
    listItems: [
      intl.formatMessage({ id: 'pg.gallery.ducati-250.list-1' }),
      intl.formatMessage({ id: 'pg.gallery.ducati-250.list-2' }),
      intl.formatMessage({ id: 'pg.gallery.ducati-250.list-3' }),
      intl.formatMessage({ id: 'pg.gallery.ducati-250.list-4' }),
      intl.formatMessage({ id: 'pg.gallery.ducati-250.list-5' }),
      intl.formatMessage({ id: 'pg.gallery.ducati-250.list-6' }),
      intl.formatMessage({ id: 'pg.gallery.ducati-250.list-7' }),
      intl.formatMessage({ id: 'pg.gallery.ducati-250.list-8' }),
      intl.formatMessage({ id: 'pg.gallery.ducati-250.list-9' }),
      intl.formatMessage({ id: 'pg.gallery.ducati-250.list-10' }),
      intl.formatMessage({ id: 'pg.gallery.ducati-250.list-11' }),
      intl.formatMessage({ id: 'pg.gallery.ducati-250.list-12' }),
      intl.formatMessage({ id: 'pg.gallery.ducati-250.list-13' }),
      intl.formatMessage({ id: 'pg.gallery.ducati-250.list-14' }),
      intl.formatMessage({ id: 'pg.gallery.ducati-250.list-15' }),
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
          textDisplayPropObjects={[
            {
              textContent: [
                intl.formatMessage({ id: 'pg.gallery.kawasaki-h1ra.para-1' }),
                intl.formatMessage({ id: 'pg.gallery.kawasaki-h1ra.para-2' }),
                intl.formatMessage({ id: 'pg.gallery.kawasaki-h1ra.para-3' }),
                intl.formatMessage({ id: 'pg.gallery.kawasaki-h1ra.para-4' }),
              ],
            },
          ]}
        />
      );
    }

    if (bikeName === 'harley-xr750-75') {
      return (
        <TwoColumnGridLayout
          images={galleryImages}
          textDisplayPropObjects={[
            {
              title: intl.formatMessage({
                id: 'pg.gallery.harley-xr750-75.title',
              }),
              textContent: [
                intl.formatMessage({ id: 'pg.gallery.harley-xr750-75.para-1' }),
                intl.formatMessage({ id: 'pg.gallery.harley-xr750-75.para-2' }),
                intl.formatMessage({ id: 'pg.gallery.harley-xr750-75.para-3' }),
                intl.formatMessage({ id: 'pg.gallery.harley-xr750-75.para-4' }),
                intl.formatMessage({ id: 'pg.gallery.harley-xr750-75.para-5' }),
                intl.formatMessage({ id: 'pg.gallery.harley-xr750-75.para-6' }),
                intl.formatMessage({ id: 'pg.gallery.harley-xr750-75.para-7' }),
                intl.formatMessage({ id: 'pg.gallery.harley-xr750-75.para-8' }),
                intl.formatMessage({ id: 'pg.gallery.harley-xr750-75.para-9' }),
                intl.formatMessage({
                  id: 'pg.gallery.harley-xr750-75.para-10',
                }),
              ],
            },
          ]}
        />
      );
    }

    if (bikeName === 'ducati-250') {
      return (
        <TwoColumnGridLayout
          images={galleryImages}
          textDisplayPropObjects={[
            {
              title: intl.formatMessage({ id: 'pg.gallery.ducati-250.title' }),
              childElement: ducati250List,
              textContent: [
                intl.formatMessage({ id: 'pg.gallery.ducati-250.para-1' }),
                intl.formatMessage({ id: 'pg.gallery.ducati-250.para-2' }),
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
              title: intl.formatMessage({ id: 'pg.gallery.honda-dream.title' }),
              subTitle: intl.formatMessage({
                id: 'pg.gallery.honda-dream.subtitle',
              }),
              childElement: hondaDreamList,
              childElementPosition: 'under-title',
              textContent: [
                intl.formatMessage({ id: 'pg.gallery.honda-dream.para-1' }),
                intl.formatMessage({ id: 'pg.gallery.honda-dream.para-2' }),
              ],
              footer: intl.formatMessage({
                id: 'pg.gallery.honda-dream.footer',
              }),
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
              title: intl.formatMessage({
                id: 'pg.gallery.harley-xr750-replica.sect-1.title',
              }),
              textContent: [
                intl.formatMessage({
                  id: 'pg.gallery.harley-xr750-replica.sect-1.para-1',
                }),
                intl.formatMessage({
                  id: 'pg.gallery.harley-xr750-replica.sect-1.para-2',
                }),
                intl.formatMessage({
                  id: 'pg.gallery.harley-xr750-replica.sect-1.para-3',
                }),
                intl.formatMessage({
                  id: 'pg.gallery.harley-xr750-replica.sect-1.para-4',
                }),
                intl.formatMessage({
                  id: 'pg.gallery.harley-xr750-replica.sect-1.para-5',
                }),
                intl.formatMessage({
                  id: 'pg.gallery.harley-xr750-replica.sect-1.para-6',
                }),
                intl.formatMessage({
                  id: 'pg.gallery.harley-xr750-replica.sect-1.para-7',
                }),
              ],
            },
            {
              title: intl.formatMessage({
                id: 'pg.gallery.harley-xr750-replica.sect-2.title',
              }),
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
                title: intl.formatMessage({
                  id: 'pg.gallery.harley-xr750.sect-1.title',
                }),
                childElement: harleyXr750List,
                childElementPosition: 'under-title',
              },
              {
                textContent: [
                  intl.formatMessage({
                    id: 'pg.gallery.harley-xr750.sect-2.para-1',
                  }),
                  intl.formatMessage({
                    id: 'pg.gallery.harley-xr750.sect-2.para-2',
                  }),
                  intl.formatMessage({
                    id: 'pg.gallery.harley-xr750.sect-2.para-3',
                  }),
                  intl.formatMessage({
                    id: 'pg.gallery.harley-xr750.sect-2.para-4',
                  }),
                  intl.formatMessage({
                    id: 'pg.gallery.harley-xr750.sect-2.para-5',
                  }),
                  intl.formatMessage({
                    id: 'pg.gallery.harley-xr750.sect-2.para-6',
                  }),
                  intl.formatMessage({
                    id: 'pg.gallery.harley-xr750.sect-2.para-7',
                  }),
                  intl.formatMessage({
                    id: 'pg.gallery.harley-xr750.sect-2.para-8',
                  }),
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
        metaTitle={intl.formatMessage(
          { id: 'pg.gallery.head.meta.title' },
          { bike: formattedBikeName }
        )}
        metaContent={intl.formatMessage(
          { id: 'pg.gallery.head.meta.content' },
          { bike: formattedBikeName }
        )}
      />
      <main>
        <div className='space-y-6'>
          <Jumbotron
            image={img[bikeImageName]}
            legend={formattedBikeName}
            altText={intl.formatMessage({ id: img[bikeImageName].altText })}
          />
          <Spinner
            isLoading={!isReady}
            verticalPadding={true}
            text={intl.formatMessage({
              id: 'comp.spinner.sr.loading',
            })}
          />
          {renderContent()}
        </div>
        <ImageModal />
      </main>
    </>
  );
};

export default GalleryPage;
