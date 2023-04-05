import { FC } from 'react'
import { TitleBlock } from '@/components/title-block'
import { HeadElement } from '@/components/head-element'

const SoldArchivePage: FC = () => {
  return (
    <>
      <HeadElement
        pageTitle="page.sold-archive.head.meta.title"
        content="page.sold-archive.head.meta.content"
      />
      <main>
        <TitleBlock
          titles={[
            'page.sold-archive.section-1.title-1',
            'page.sold-archive.section-1.title-2',
          ]}
        />
      </main>
    </>
  )
}

export default SoldArchivePage
