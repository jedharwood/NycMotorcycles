import { HeadElement } from '@/components/head-element'
import { ImageGrid } from '@/components/image-grid'
import { TextDisplay } from '@/components/text-display'
import { useState } from 'react'
import { useIntl } from 'react-intl'
import { ImageModal } from '@/components/image-modal'
import Image from 'next/image'
import { images as img } from '@/public/images/racing/image-catalog'
import React, { useContext } from 'react'
import { AppContext } from '../../context/app-context'

export default function Racing() {
  const intl = useIntl()
  const { openImageModal, imageModalImage } = useContext(AppContext)

  const buildGridImage = ({
    imageSrc,
    imageAlt,
    width,
    height,
  }: GridImage): GridImage => {
    return {
      ...{ imageSrc, imageAlt, width, height },
      onImageClick: () => {
        openImageModal({ imageSrc, imageAlt, width, height })
      },
    }
  }

  const gridImages: GridImage[] = [
    {
      ...buildGridImage({
        ...img.harleyNumber7,
      }),
    },
    {
      ...buildGridImage({
        ...img.larryRacing667,
      }),
    },
    {
      ...buildGridImage({
        ...img.roperVanson,
      }),
    },
    {
      ...buildGridImage({
        ...img.larryRacing667Laverda,
      }),
    },
    {
      ...buildGridImage({
        ...img.orangeHelmets,
      }),
    },
    {
      ...buildGridImage({
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
        <ImageModal image={imageModalImage} />
      </main>
    </>
  )
}
