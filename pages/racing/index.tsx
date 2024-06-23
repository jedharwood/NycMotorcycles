import { FC, useContext, useEffect } from 'react';

import { useIntl } from 'react-intl';

import HeadElement from '@/components/head-element/head-element';
import ImageGrid from '@/components/image-grid/image-grid';
import ImageModal from '@/components/image-modal/image-modal';
import Jumbotron from '@/components/jumbotron/jumbotron';
import { TextDisplay } from '@/components/text-display/text-display';
import { BuildGridImages } from '@/helpers/build-grid-images';
import { images as img } from '@/public/images/racing';
import { StaticImage } from '@/types/image-types';

import { AppContext } from '../../context/app-context';

const RacingPage: FC = (): JSX.Element => {
  const intl = useIntl();
  const { closeImageModal } = useContext(AppContext);

  useEffect(() => {
    closeImageModal();
  }, []);

  const gridImages: StaticImage[] = BuildGridImages([
    img.harleyNumber7,
    img.larryRacing667,
    img.roperVanson,
    img.larryRacing667Laverda,
    img.orangeHelmets,
    img.willowSpringsHonda,
  ]);

  return (
    <>
      <HeadElement
        metaTitle={intl.formatMessage({ id: 'pg.racing.head.meta.title' })}
        metaContent={intl.formatMessage({ id: 'pg.racing.head.meta.content' })}
        metaBrandList={intl.formatMessage({ id: 'common.meta.brands' })}
      />
      <main>
        <div className='space-y-6'>
          <Jumbotron
            image={img.laverdaLowside}
            legend={intl.formatMessage({ id: 'common.route-names.racing' })}
            altText={intl.formatMessage({ id: img.laverdaLowside.altText })}
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
