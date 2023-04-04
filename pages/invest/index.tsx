import { HeadElement } from '@/components/head-element'
import { LinkButton } from '@/components/link-button'
import { TwoColumnGridPage } from '@/components/two-column-grid-page'
import { routes } from '@/utilities/resource-utilities'
import { images as img } from '@/public/images/invest/image-catalog'

export default function Invest() {
  const contactButton: JSX.Element = (
    <LinkButton
      text="page.invest.section-1.button"
      href={routes.contact}
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
          image={img.silverMotorbike}
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
