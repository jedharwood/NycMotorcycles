import { HeadElement } from '@/components/head-element'
import { TwoColumnGridPage } from '@/components/two-column-grid-page'

export default function Consign() {
  return (
    <>
      <HeadElement
        pageTitle="page.consign.head.meta.title"
        content="page.consign.head.meta.content"
      />
      <main>
        <TwoColumnGridPage
          imageSrc="/images/consign/orange-motorbike.jpeg"
          imageAlt="page.consign.alt.orange-motorbike"
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
