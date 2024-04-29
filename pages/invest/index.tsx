import { HeadElement } from '@/components/head-element/head-element'
import { LinkButton } from '@/components/link-button/link-button'
import { TwoColumnGridPage } from '@/components/two-column-grid-page/two-column-grid-page'
import { routes } from '@/utilities/resource-utilities'
import { images as img } from '@/public/images/invest/image-catalog'
import { FC } from 'react'

const InvestPage: FC = (): JSX.Element => {
  const contactButton: JSX.Element = (
    <LinkButton
      text="pg.invest.sect-1.button"
      href={routes.contact}
      type="router-link"
    />
  )

  return (
    <>
      <HeadElement
        pageTitle='pg.invest.head.meta.title'
        content='pg.invest.head.meta.content'
      />
      <main>
        <TwoColumnGridPage
          images={[img.silverMotorbike]}
          textDisplayPropObjects={
            [
              { 
                title: 'pg.invest.sect-1.title', 
                textContent: [
                  'pg.invest.sect-1.text-1',
                  'pg.invest.sect-1.text-2',
                  'pg.invest.sect-1.text-3',
                  'pg.invest.sect-1.text-4',
                  'pg.invest.sect-1.text-5',
                ], 
                childElement: contactButton,
                childElementPosition: 'bottom',
              }
            ]
          }
        />
      </main>
    </>
  )
}

export default InvestPage
