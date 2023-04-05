import { FC } from 'react'
import { TitleBlock } from '@/components/title-block'
import { HeadElement } from '@/components/head-element'
import { SoldCard } from '@/components/sold-card'
import { images as img } from '../../public/images/sold-archive/image-catalog'

const SoldArchivePage: FC = () => {
  return (
    <>
      <HeadElement
        pageTitle="page.sold-archive.head.meta.title"
        content="page.sold-archive.head.meta.content"
      />
      <main className="space-y-6">
        <TitleBlock
          titles={[
            'page.sold-archive.section-1.title-1',
            'page.sold-archive.section-1.title-2',
          ]}
        />
        <SoldCard
          image={img.hondaRc30}
          text="page.sold-archive.sold-card.honda-rc30"
          galleryLink="placeholder"
        />
        <SoldCard
          image={img.suzukiRg400}
          text="page.sold-archive.sold-card.suzuki-rg400"
          galleryLink="placeholder"
        />
        <SoldCard
          image={img.shovelheadChopper}
          text="page.sold-archive.sold-card.shovelhead-chopper"
          galleryLink="placeholder"
        />
      </main>
    </>
  )
}

export default SoldArchivePage
