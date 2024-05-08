import { FC, useContext, useEffect } from 'react'
import { AppContext } from '@/context/app-context'
import routes from '@/utilities/routes'
import { images as img } from '@/public/images/history/image-catalog'
import { HeadElement } from '@/components/head-element/head-element'
import { ImageGrid } from '@/components/image-grid/image-grid'
import ImageModal from '@/components/image-modal/image-modal'
import Jumbotron from '@/components/jumbotron/jumbotron'
import { LinkButton } from '@/components/link-button/link-button'
import { TextDisplay } from '@/components/text-display/text-display'
import { BuildGridImages } from '@/helpers/build-grid-images'

const HistoryPage: FC = (): JSX.Element => {
  const { closeImageModal } = useContext(AppContext)

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
      text='common.route-names.home'
      href={routes.home}
      type='router-link'
    />
  )

  return (
    <>
      <HeadElement
        pageTitle='pg.history.head.meta.title'
        content='pg.history.head.meta.content'
      />
      <main>
        <div className='space-y-6'>
          <Jumbotron image={img.larryGoggles} legend='common.route-names.history' />
          <div className='grid gap-4 md:grid-cols-5'>
            <div className='md:col-span-3'>
              <ImageGrid images={gridImagesUpper} maxColumns={2} />
            </div>
            <div className='space-y-6 md:col-span-2'>
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
                childElementPosition='bottom'
              />
            </div>
            <div className='md:col-span-5'>
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
