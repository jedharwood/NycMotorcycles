import { HeadElement } from '@/components/head-element'
import { GridImageProps, ImageGrid } from '@/components/image-grid'
import { TextDisplay } from '@/components/text-display'
import { useState } from 'react'
import { useIntl } from 'react-intl'
import { ImageModal } from '@/components/image-modal'

export default function Racing() {
  const intl = useIntl()
  const [showModal, setShowModal] = useState<boolean>(false)
  const [selectedImage, setSelectedImage] = useState<ImageSrcAndAlt>({
    imageSrc: '',
    imageAlt: '',
  })

  const toggleModal = (): void => {
    setShowModal(!showModal)
  }

  const buildGridImage = ({
    imageSrc,
    imageAlt,
  }: ImageSrcAndAlt): GridImageProps => {
    return {
      image: { imageSrc, imageAlt },
      onImageClick: () => {
        setSelectedImage({ imageSrc, imageAlt })
        toggleModal()
      },
    }
  }

  const gridImages: GridImageProps[] = [
    {
      ...buildGridImage({
        imageSrc: '/images/racing/harley-number-7.jpeg',
        imageAlt: 'page.racing.alt.harley-number-7',
      }),
    },
    {
      ...buildGridImage({
        imageSrc: '/images/racing/larry-racing-667.jpeg',
        imageAlt: 'page.racing.alt.larry-racing-667',
      }),
    },
    {
      ...buildGridImage({
        imageSrc: '/images/racing/roper-vanson.jpeg',
        imageAlt: 'page.racing.alt.roper-vanson',
      }),
    },
    {
      ...buildGridImage({
        imageSrc: '/images/racing/larry-racing-667-laverda.jpeg',
        imageAlt: 'page.racing.alt.larry-racing-667-laverda',
      }),
    },
    {
      ...buildGridImage({
        imageSrc: '/images/racing/orange-helmets.jpeg',
        imageAlt: 'page.racing.alt.orange-helmets',
      }),
    },
    {
      ...buildGridImage({
        imageSrc: '/images/racing/willow-springs-honda.jpeg',
        imageAlt: 'page.racing.alt.willow-springs-honda',
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
          <img
            src="/images/racing/laverda-lowside.jpeg"
            alt={intl.formatMessage({ id: 'page.racing.alt.laverda-lowside' })}
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
