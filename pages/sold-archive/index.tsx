import { FC } from 'react'
import { TitleBlock } from '@/components/title-block'
import { HeadElement } from '@/components/head-element'
import { SoldCard } from '@/components/sold-card'
import { images as img } from '../../public/images/sold-archive/image-catalog'
import { galleryRoutes as routes } from '@/utilities/resource-utilities'

const SoldArchivePage: FC = () => {
  const buildSoldCard = (imageName: string, routeName: string): JSX.Element => {
    return (
      <SoldCard
        image={img[imageName]}
        text={`pg.sold-archive.card.${routeName}`}
        galleryLink={routes[imageName]}
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
        <TitleBlock
          titles={[
            'pg.sold-archive.sect-1.title-1',
            'pg.sold-archive.sect-1.title-2',
          ]}
        />
        {buildSoldCard('hondaRc30', 'honda-rc30')}
        {buildSoldCard('suzukiRg400', 'suzuki-rg400')}
        {buildSoldCard('shovelheadChopper', 'shovelhead-chopper')}
        {buildSoldCard('laverda750Sfc', 'laverda-750-sfc')}
        {buildSoldCard('harleyXr750', 'harley-xr750')}
        {buildSoldCard('kawasakiH2', 'kawasaki-h2')}
        {buildSoldCard('suzukiStinger', 'suzuki-stinger')}
      </main>
    </>
  )
}

export default SoldArchivePage
