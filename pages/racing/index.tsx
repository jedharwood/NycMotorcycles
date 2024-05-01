import { HeadElement } from '@/components/head-element/head-element'
import { ImageGrid } from '@/components/image-grid/image-grid'
import { TextDisplay } from '@/components/text-display/text-display'
import { ImageModal } from '@/components/image-modal/image-modal'
import { images as img } from '@/public/images/racing/image-catalog'
import { BuildGridImages } from '@/helpers/build-grid-images'
import { FC, useContext, useEffect } from 'react'
import Jumbotron from '@/components/jumbotron/jumbotron'
import { AppContext } from '../../context/app-context'

const RacingPage: FC = (): JSX.Element => {
  const { closeImageModal } = useContext(AppContext)

  useEffect(() => {
    closeImageModal()
  }, [])

  const gridImages: GridImage[] = BuildGridImages([
    img.harleyNumber7,
    img.larryRacing667,
    img.roperVanson,
    img.larryRacing667Laverda,
    img.orangeHelmets,
    img.willowSpringsHonda,
  ])

  return (
    <>
      <HeadElement
        pageTitle="pg.racing.head.meta.title"
        content="pg.racing.head.meta.content"
      />
      <main>
        <div className="space-y-6">
          <Jumbotron image={img.laverdaLowside} legend="common.route-names.racing" />
          <TextDisplay
            textContent={['pg.racing.sect-1.text-1', 'pg.racing.sect-1.text-2']}
          />
          <ImageGrid images={gridImages} maxColumns={3} />
        </div>
        <ImageModal />
      </main>
    </>
  )
}

export default RacingPage
