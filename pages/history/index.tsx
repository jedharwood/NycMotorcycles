import { HeadElement } from '@/components/head-element'
import { TextDisplay } from '@/components/text-display'
import Image from 'next/image'
import { images as img } from '@/public/images/history/image-catalog'
import { useIntl } from 'react-intl'
import { ImageModal } from '@/components/image-modal'
import { ImageGrid } from '@/components/image-grid'
import { LinkButton } from '@/components/link-button'
import { routes } from '@/utilities/resource-utilities'
import { BuildGridImages } from '@/helpers/build-grid-images'
import { FC } from 'react'
import { TitleBlock } from '@/components/title-block'

const HistoryPage: FC = (): JSX.Element => {
  const intl = useIntl()

  const gridImagesUpper: GridImage[] = BuildGridImages([
    img.showroomGig,
    img.showroomOrange,
    img.larryTuneup,
    img.laverdaDucati,
    img.laverdaRace,
    img.forklift,
    img.bsaWorkshop,
    img.externalWorkshop,
    img.zushiHq,
    img.container,
  ])
  const gridImagesLower: GridImage[] = BuildGridImages([
    img.customs,
    img.ferrisWheel,
  ])

  const homeButton: JSX.Element = (
    <LinkButton
      text="pg.history.section-10.button"
      href={routes.home}
      type="router-link"
    />
  )

  return (
    <>
      <HeadElement
        pageTitle="pg.history.head.meta.title"
        content="pg.history.head.meta.content"
      />
      <main>
        <div className="space-y-6">
          <Image
            src={img.larryGoggles.imageSrc}
            alt={intl.formatMessage({
              id: img.larryGoggles.imageAlt,
            })}
            width={img.larryGoggles.width}
            height={img.larryGoggles.height}
            priority
            className="rounded-md shadow-lg w-full"
          />
          <div className="grid gap-4 md:grid-cols-5">
            <div className="md:col-span-3">
              <ImageGrid images={gridImagesUpper} maxColumns={2} />
            </div>
            <div className="space-y-6 md:col-span-2">
              <TitleBlock titles={['pg.history.section-1.title']} />
              <TextDisplay
                title={'pg.history.section-2.title'}
                textContent={['pg.history.section-2.text-1']}
              />
              <TextDisplay
                title={'pg.history.section-3.title'}
                textContent={['pg.history.section-3.text-1']}
              />
              <TextDisplay
                title={'pg.history.section-4.title'}
                textContent={[
                  'pg.history.section-4.text-1',
                  'pg.history.section-4.text-2',
                ]}
              />
              <TextDisplay
                title={'pg.history.section-5.title'}
                textContent={['pg.history.section-5.text-1']}
              />
              <TextDisplay
                title={'pg.history.section-6.title'}
                textContent={['pg.history.section-6.text-1']}
              />
              <TextDisplay
                title={'pg.history.section-7.title'}
                textContent={['pg.history.section-7.text-1']}
              />
              <TextDisplay
                title={'pg.history.section-8.title'}
                textContent={['pg.history.section-8.text-1']}
              />
              <TextDisplay
                title={'pg.history.section-9.title'}
                textContent={['pg.history.section-9.text-1']}
                childElement={homeButton}
              />
            </div>
            <div className="md:col-span-5">
              <ImageGrid images={gridImagesLower} maxColumns={2} />
            </div>
          </div>
        </div>
        <ImageModal />
      </main>
    </>
  )
}

export default HistoryPage
