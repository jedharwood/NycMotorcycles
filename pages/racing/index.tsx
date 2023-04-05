import { HeadElement } from '@/components/head-element'
import { ImageGrid } from '@/components/image-grid'
import { TextDisplay } from '@/components/text-display'
import { useIntl } from 'react-intl'
import { ImageModal } from '@/components/image-modal'
import Image from 'next/image'
import { images as img } from '@/public/images/racing/image-catalog'
import { BuildGridImage } from '@/helpers/build-grid-image'

export default function Racing() {
  const intl = useIntl()

  const gridImages: GridImage[] = [
    {
      ...BuildGridImage({
        ...img.harleyNumber7,
      }),
    },
    {
      ...BuildGridImage({
        ...img.larryRacing667,
      }),
    },
    {
      ...BuildGridImage({
        ...img.roperVanson,
      }),
    },
    {
      ...BuildGridImage({
        ...img.larryRacing667Laverda,
      }),
    },
    {
      ...BuildGridImage({
        ...img.orangeHelmets,
      }),
    },
    {
      ...BuildGridImage({
        ...img.willowSpringsHonda,
      }),
    },
  ]

  return (
    <>
      <HeadElement
        pageTitle="page.racing.head.meta.title"
        content="page.racing.head.meta.content"
      />
      <main>
        <div className="space-y-6">
          <Image
            src={img.laverdaLowside.imageSrc}
            alt={intl.formatMessage({ id: img.laverdaLowside.imageAlt })}
            width={img.laverdaLowside.width}
            height={img.laverdaLowside.height}
            priority
            className="rounded-md shadow-lg"
          />
          <TextDisplay
            title="page.racing.section-1.title"
            textContent={[
              'page.racing.section-1.text-1',
              'page.racing.section-1.text-2',
            ]}
          />
          <ImageGrid images={gridImages} maxColumns={3} />
        </div>
        <ImageModal />
      </main>
    </>
  )
}
