import { FC, useContext, useEffect } from 'react';

import { HeadElement } from '@/components/head-element/head-element';
import ImageGrid from '@/components/image-grid/image-grid';
import StaticImageModal from '@/components/image-modal/static-image-modal';
import Jumbotron from '@/components/jumbotron/jumbotron';
import { TextDisplay } from '@/components/text-display/text-display';
import { BuildGridImages } from '@/helpers/build-grid-images';
import { images as staticImg } from '@/public/images/racing';
import { StaticImage } from '@/types/image-types';

import { AppContext } from '../../context/app-context';

const RacingPage: FC = (): JSX.Element => {
  const { closeStaticImageModal } = useContext(AppContext);

  useEffect(() => {
    closeStaticImageModal();
  }, []);

  const gridImages: StaticImage[] = BuildGridImages([
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
          <ImageGrid images={gridImages} maxColumns={3} />
        </div>
        <StaticImageModal />
      </main>
    </>
  );
};

export default RacingPage;
