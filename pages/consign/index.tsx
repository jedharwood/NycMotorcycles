import { HeadElement } from '@/components/head-element'
import { TwoColumnGridPage } from '@/components/two-column-grid-page'
import { images as img } from '@/public/images/consign/image-catalog'
import { FC } from 'react'

const ConsignPage: FC = (): JSX.Element => {
  return (
    <>
      <HeadElement
        pageTitle="page.consign.head.meta.title"
        content="page.consign.head.meta.content"
      />
      <main>
        <TwoColumnGridPage
          image={img.orangeLaverda}
          title="page.consign.section-1.title"
          textContent={[
            'page.consign.section-1.text-1',
            'page.consign.section-1.text-2',
            'page.consign.section-1.text-3',
            'page.consign.section-1.text-4',
            'page.consign.section-1.text-5',
            'page.consign.section-1.text-6',
            'page.consign.section-1.text-7',
            'page.consign.section-1.text-8',
            'page.consign.section-1.text-9',
            'page.consign.section-1.text-10',
          ]}
        />
      </main>
    </>
  )
}

export default ConsignPage
