import { HeadElement } from '@/components/head-element'
import { ImageGrid } from '@/components/image-grid'
import { TextDisplay } from '@/components/text-display'
import { useIntl } from 'react-intl'
import { ImageModal } from '@/components/image-modal'
import Image from 'next/image'
import { images as img } from '@/public/images/racing/image-catalog'
import { BuildGridImages } from '@/helpers/build-grid-images'
import { FC } from 'react'
import { Jumbotron } from '@/components/jumbotron'

const RacingPage: FC = (): JSX.Element => {
  const intl = useIntl()

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
          <Jumbotron image={img.laverdaLowside} legend="pg.racing.jumbotron" />
          <TextDisplay
            title="pg.racing.sect-1.title"
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
