import { FC, useContext, useEffect } from 'react';

import { HeadElement } from '@/components/head-element/head-element';
import StaticImageGrid from '@/components/image-grid/static-image-grid';
import StaticImageModal from '@/components/image-modal/static-image-modal';
import Jumbotron from '@/components/jumbotron/jumbotron';
import { TextDisplay } from '@/components/text-display/text-display';
import { BuildStaticGridImages } from '@/helpers/build-grid-images';
import { images as staticImg } from '@/public/images/racing/static-image-catalog';
import { StaticImage } from '@/types/static-image-types';

import { AppContext } from '../../context/app-context';

const RacingPage: FC = (): JSX.Element => {
  const { closeStaticImageModal } = useContext(AppContext);

  useEffect(() => {
    closeStaticImageModal();
  }, []);

  const gridImages: StaticImage[] = BuildStaticGridImages([
    staticImg.harleyNumber7,
    staticImg.larryRacing667,
    staticImg.roperVanson,
    staticImg.larryRacing667Laverda,
    staticImg.orangeHelmets,
    staticImg.willowSpringsHonda,
  ]);

  return (
    <>
      <HeadElement
        pageTitle='pg.racing.head.meta.title'
        content='pg.racing.head.meta.content'
      />
      <main>
        <div className='space-y-6'>
          <Jumbotron
            image={staticImg.laverdaLowside}
            legend='common.route-names.racing'
          />
          <TextDisplay
            textContent={['pg.racing.sect-1.text-1', 'pg.racing.sect-1.text-2']}
          />
          <StaticImageGrid images={gridImages} maxColumns={3} />
        </div>
        <StaticImageModal />
      </main>
    </>
  );
};

export default RacingPage;
