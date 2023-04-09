import { FC } from 'react'
import { HeadElement } from '@/components/head-element'
import { SoldCard, SoldOrCall } from '@/components/sold-card'
import { images as img } from '../../public/images/sold-archive/image-catalog'
import { routes } from '@/utilities/resource-utilities'
import { useIntl } from 'react-intl'

const SoldArchivePage: FC = () => {
  const intl = useIntl()

  const buildSoldCard = (
    imageName: string,
    routeName: string,
    soldOrCall: SoldOrCall = 'sold',
    isGalleryLink: boolean = true,
  ): JSX.Element => {
    const galleryLink = isGalleryLink
      ? `${routes.gallery}/${routeName}`
      : undefined

    return (
      <SoldCard
        image={img[imageName]}
        text={`pg.sold-archive.card.${routeName}`}
        galleryLink={galleryLink}
        soldOrCall={soldOrCall}
      />
    )
  }

  return (
    <>
      <HeadElement
        pageTitle="pg.sold-archive.head.meta.title"
        content="pg.sold-archive.head.meta.content"
      />
      <main className="space-y-6">
        <section className="bg-stone-600 bg-opacity-90 w-full py-4 px-6 rounded-md text-stone-50 shadow-lg space-y-2 font-medium text-xl md:text-2xl">
          <h2 className="flex justify-center opacity-80">
            {intl.formatMessage({
              id: 'pg.sold-archive.sect-1.title-1',
            })}
          </h2>
          <h2 className="flex justify-center opacity-80">
            {intl.formatMessage({
              id: 'pg.sold-archive.sect-1.title-2',
            })}
          </h2>
        </section>
        {buildSoldCard('hondaRc30', 'honda-rc30')}
        {buildSoldCard('suzukiRg400', 'suzuki-rg400')}
        {buildSoldCard('shovelheadChopper', 'shovelhead-chopper')}
        {buildSoldCard('laverda750Sfc', 'laverda-750-sfc')}
        {buildSoldCard('harleyXr750', 'harley-xr750')}
        {buildSoldCard('kawasakiH2', 'kawasaki-h2')}
        {buildSoldCard('suzukiStinger', 'suzuki-stinger')}
        {buildSoldCard('bsaStarfire', 'bsa-starfire')}
        {buildSoldCard('kawasakiH1', 'kawasaki-h1')}
        {buildSoldCard('harleyXr750Replica', 'harley-xr750-replica', 'call')}
        {buildSoldCard('kawasakiS3', 'kawasaki-s3')}
        {buildSoldCard('kawasakiG7s', 'kawasaki-g7s')}
        {buildSoldCard('nortonCommando', 'norton-commando')}
        {buildSoldCard('hondaDream', 'honda-dream')}
        {buildSoldCard('hondaSs', 'honda-ss')}
        {buildSoldCard('laverda500', 'laverda-500')}
        {buildSoldCard('benelli250', 'benelli-250')}
        {buildSoldCard('matchless61', 'matchless-61')}
        {buildSoldCard('matchless59', 'matchless-59')}
        {buildSoldCard('ducati250', 'ducati-250')}
        {buildSoldCard('harleyXr75075', 'harley-xr750-75')}
        {buildSoldCard(
          'laverdaFormula500',
          'laverda-formula-500',
          'sold',
          false,
        )}
        {buildSoldCard('laverda750Racer', 'laverda-750-racer', 'sold', false)}
        {buildSoldCard('kawasakiH1ra', 'kawasaki-h1ra')}
      </main>
    </>
  )
}

export default SoldArchivePage
