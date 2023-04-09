import { HeadElement } from '@/components/head-element'
import { TextDisplay } from '@/components/text-display'
import { images as img } from '@/public/images/history/image-catalog'
import { ImageModal } from '@/components/image-modal'
import { ImageGrid } from '@/components/image-grid'
import { LinkButton } from '@/components/link-button'
import { routes } from '@/utilities/resource-utilities'
import { BuildGridImages } from '@/helpers/build-grid-images'
import { FC, useContext, useEffect } from 'react'
import { Jumbotron } from '@/components/jumbotron'
import { AppContext } from '@/context/app-context'

const HistoryPage: FC = (): JSX.Element => {
  const { closeImageModal } =
    useContext(AppContext)
    
  useEffect(() => {
    closeImageModal()
  }, [])
  
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
      text="pg.history.sect-10.button"
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
          <Jumbotron image={img.larryGoggles} legend="pg.history.jumbotron" />
          <div className="grid gap-4 md:grid-cols-5">
            <div className="md:col-span-3">
              <ImageGrid images={gridImagesUpper} maxColumns={2} />
            </div>
            <div className="space-y-6 md:col-span-2">
              <TextDisplay
                title={'pg.history.sect-2.title'}
                textContent={['pg.history.sect-2.text-1']}
              />
              <TextDisplay
                title={'pg.history.sect-3.title'}
                textContent={['pg.history.sect-3.text-1']}
              />
              <TextDisplay
                title={'pg.history.sect-4.title'}
                textContent={[
                  'pg.history.sect-4.text-1',
                  'pg.history.sect-4.text-2',
                ]}
              />
              <TextDisplay
                title={'pg.history.sect-5.title'}
                textContent={['pg.history.sect-5.text-1']}
              />
              <TextDisplay
                title={'pg.history.sect-6.title'}
                textContent={['pg.history.sect-6.text-1']}
              />
              <TextDisplay
                title={'pg.history.sect-7.title'}
                textContent={['pg.history.sect-7.text-1']}
              />
              <TextDisplay
                title={'pg.history.sect-8.title'}
                textContent={['pg.history.sect-8.text-1']}
              />
              <TextDisplay
                title={'pg.history.sect-9.title'}
                textContent={['pg.history.sect-9.text-1']}
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
