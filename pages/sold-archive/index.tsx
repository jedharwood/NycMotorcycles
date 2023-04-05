import { FC } from 'react'
import { TitleBlock } from '@/components/title-block'
import { HeadElement } from '@/components/head-element'
import { SoldCard } from '@/components/sold-card'
import { images as img } from '../../public/images/sold-archive/image-catalog'

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
            'pg.sold-archive.section-1.title-1',
            'pg.sold-archive.section-1.title-2',
          ]}
        />
        <SoldCard
          image={img.hondaRc30}
          text="pg.sold-archive.sold-card.honda-rc30"
          galleryLink="placeholder"
        />
        <SoldCard
          image={img.suzukiRg400}
          text="pg.sold-archive.sold-card.suzuki-rg400"
          galleryLink="placeholder"
        />
        <SoldCard
          image={img.shovelheadChopper}
          text="pg.sold-archive.sold-card.shovelhead-chopper"
          galleryLink="placeholder"
        />
        <SoldCard
          image={img.laverda750Sfc}
          text="pg.sold-archive.sold-card.laverda-750-sfc"
          galleryLink="placeholder"
        />
        <SoldCard
          image={img.harleyXr750}
          text="pg.sold-archive.sold-card.harley-xr750"
          galleryLink="placeholder"
        />
      </main>
    </>
  )
}

export default SoldArchivePage
