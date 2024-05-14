import { FC } from 'react';

import { useIntl } from 'react-intl';

import { HeadElement } from '@/components/head-element/head-element';
import SoldCard from '@/components/sold-card/sold-card';
import { archiveBikes as archive } from '@/modules/archive-bikes';
import routes from '@/utilities/routes';

import { images as staticImg } from '../../public/images/sold-archive/static-image-catalog';

const SoldArchivePage: FC = () => {
  const intl = useIntl();

  const buildSoldCard = (
    bikeImageName: keyof typeof archive,
    soldOrCall: SoldOrCall = 'sold',
    isGalleryLink: boolean = true
  ): JSX.Element => {
    const routeName = archive[bikeImageName];
    const galleryLink = isGalleryLink
      ? `${routes.gallery}/${routeName}`
      : undefined;

    return (
      <SoldCard
        image={staticImg[bikeImageName]}
        text={`pg.sold-archive.card.${routeName}`}
        galleryLink={galleryLink}
        soldOrCall={soldOrCall}
      />
    );
  };

  return (
    <>
      <HeadElement
        pageTitle='pg.sold-archive.head.meta.title'
        content='pg.sold-archive.head.meta.content'
      />
      <main className='space-y-6'>
        <section className='w-full space-y-2 rounded-md bg-stone-600 bg-opacity-90 py-4 px-6 text-xl font-medium text-stone-50 shadow-lg md:text-2xl'>
          <h2 className='flex justify-center opacity-80'>
            {intl.formatMessage({
              id: 'pg.sold-archive.sect-1.title-1',
            })}
          </h2>
          <h2 className='flex justify-center opacity-80'>
            {intl.formatMessage({
              id: 'pg.sold-archive.sect-1.title-2',
            })}
          </h2>
        </section>
        {buildSoldCard('harleyXr750')}
        {buildSoldCard('hondaRc30')}
        {buildSoldCard('suzukiRg400')}
        {buildSoldCard('shovelheadChopper')}
        {buildSoldCard('laverda750Sfc')}
        {buildSoldCard('kawasakiH2')}
        {buildSoldCard('suzukiStinger')}
        {buildSoldCard('bsaStarfire')}
        {buildSoldCard('kawasakiH1')}
        {buildSoldCard('harleyXr750Replica', 'call')}
        {buildSoldCard('kawasakiS3')}
        {buildSoldCard('kawasakiG7s')}
        {buildSoldCard('nortonCommando')}
        {buildSoldCard('hondaDream')}
        {buildSoldCard('hondaSs')}
        {buildSoldCard('laverda500')}
        {buildSoldCard('benelli250')}
        {buildSoldCard('matchless61')}
        {buildSoldCard('matchless59')}
        {buildSoldCard('ducati250')}
        {buildSoldCard('harleyXr75075')}
        {buildSoldCard('laverdaFormula500', 'sold', false)}
        {buildSoldCard('laverda750Racer', 'sold', false)}
        {buildSoldCard('kawasakiH1ra')}
      </main>
    </>
  );
};

export default SoldArchivePage;
