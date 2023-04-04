import { HeadElement } from '@/components/head-element'
import { ImageGrid } from '@/components/image-grid'
import { TextDisplay } from '@/components/text-display'
import { useState } from 'react'
import { useIntl } from 'react-intl'
import { ImageModal } from '@/components/image-modal'
import Image from 'next/image'
import { images as img } from '@/public/images/racing/image-catalog'

export default function Racing() {
  const intl = useIntl()
  const [showModal, setShowModal] = useState<boolean>(false)
  const [selectedImage, setSelectedImage] = useState<GridImage>({
    imageSrc: '',
    imageAlt: '',
  })

  const toggleModal = (): void => {
    setShowModal(!showModal)
  }

  const buildGridImage = ({
    imageSrc,
    imageAlt,
    width,
    height,
  }: GridImage): GridImage => {
    return {
      ...{ imageSrc, imageAlt, width, height },
      onImageClick: () => {
        setSelectedImage({
          ...{ imageSrc, imageAlt, width, height },
        })
        toggleModal()
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
          <ImageGrid images={gridImages} />
        </div>
        <ImageModal
          isVisible={showModal}
          onCloseClick={toggleModal}
          image={selectedImage}
        />
      </main>
    </>
  )
}
