import { TextDisplay } from '@/components/text-display'
import { HeadElement } from '@/components/head-element'

export default function Consign() {
  return (
    <>
      <HeadElement
        pageTitle="page.consign.head.meta.title"
        content="page.consign.head.meta.content"
      />
      <main className="grid md:grid-cols-2 gap-4">
        <TextDisplay title='page.consign.section-1.title' textContent={[
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
        ]} />
      </main>
    </>
  )
}
