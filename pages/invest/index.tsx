import { HeadElement } from '@/components/head-element'
import { LinkButton } from '@/components/link-button'
import { TwoColumnGridPage } from '@/components/two-column-grid-page'

export default function Invest() {
  const contactButton: JSX.Element = (
    <LinkButton
      text="page.invest.section-1.button"
      href="/contact"
      type="router-link"
    />
  )
  return (
    <>
      <HeadElement
        pageTitle="page.invest.head.meta.title"
        content="page.invest.head.meta.content"
      />
      <main>
        <TwoColumnGridPage
          imageSrc="/images/silver-motorbike.jpeg"
          imageAlt="page.invest.alt.silver-motorbike"
          title="page.invest.section-1.title"
          textContent={[
            'page.invest.section-1.text-1',
            'page.invest.section-1.text-2',
            'page.invest.section-1.text-3',
            'page.invest.section-1.text-4',
            'page.invest.section-1.text-5',
          ]}
          childElement={contactButton}
        />
      </main>
    </>
  )
}
