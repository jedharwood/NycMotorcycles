import { FC } from 'react'
import { TitleBlock } from '@/components/title-block'
import { HeadElement } from '@/components/head-element'
import { SoldCard } from '@/components/sold-card'
import { images as img } from '../../public/images/sold-archive/image-catalog'
import { galleryRoutes as routes } from '@/utilities/resource-utilities'

const SoldArchivePage: FC = () => {
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
        <SoldCard
          image={img.hondaRc30}
          text="pg.sold-archive.card.honda-rc30"
          galleryLink={routes.hondaRc30}
        />
        <SoldCard
          image={img.suzukiRg400}
          text="pg.sold-archive.card.suzuki-rg400"
          galleryLink={routes.suzukiRg400}
        />
        <SoldCard
          image={img.shovelheadChopper}
          text="pg.sold-archive.card.shovelhead-chopper"
          galleryLink={routes.shovelheadChopper}
        />
        <SoldCard
          image={img.laverda750Sfc}
          text="pg.sold-archive.card.laverda-750-sfc"
          galleryLink={routes.laverda750Sfc}
        />
        <SoldCard
          image={img.harleyXr750}
          text="pg.sold-archive.card.harley-xr750"
          galleryLink={routes.harleyXr750}
        />
        <SoldCard
          image={img.kawasakiH2}
          text="pg.sold-archive.card.kawasaki-h2"
          galleryLink={routes.kawasakiH2}
        />
      </main>
    </>
  )
}

export default SoldArchivePage
