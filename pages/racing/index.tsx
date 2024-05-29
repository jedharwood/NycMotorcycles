import { FC, useContext, useEffect } from 'react';

import { useIntl } from 'react-intl';

import { HeadElement } from '@/components/head-element/head-element';
import ImageGrid from '@/components/image-grid/image-grid';
import ImageModal from '@/components/image-modal/image-modal';
import Jumbotron from '@/components/jumbotron/jumbotron';
import { TextDisplay } from '@/components/text-display/text-display';
import { BuildGridImages } from '@/helpers/build-grid-images';
import { images as staticImg } from '@/public/images/racing';
import { StaticImage } from '@/types/image-types';

import { AppContext } from '../../context/app-context';

const RacingPage: FC = (): JSX.Element => {
  const intl = useIntl();
  const { closeImageModal } = useContext(AppContext);

  useEffect(() => {
    closeImageModal();
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
            textContent={[
              intl.formatMessage({ id: 'pg.racing.sect-1.text-1' }),
              intl.formatMessage({ id: 'pg.racing.sect-1.text-2' }),
            ]}
          />
          <ImageGrid images={gridImages} maxColumns={3} />
        </div>
        <ImageModal />
      </main>
    </>
  );
};

export default RacingPage;
