import { HeadElement } from '@/components/head-element'
import { ImageGrid } from '@/components/image-grid'
import { TextDisplay } from '@/components/text-display'
import { useState } from 'react'
import { useIntl } from 'react-intl'
import { ImageModal } from '@/components/image-modal'
import Image from 'next/image'

export default function Racing() {
  const intl = useIntl()
  const [showModal, setShowModal] = useState<boolean>(false)
  const [selectedImage, setSelectedImage] = useState<GridImage>({
    imageSrc: '', imageAlt: '',
  })

  const toggleModal = (): void => {
    setShowModal(!showModal)
  }

  const buildGridImage = ({ imageSrc, imageAlt, width, height }: GridImage): GridImage => {
    return {
      imageSrc, 
      imageAlt,
      width,
      height,
      onImageClick: () => {
        setSelectedImage({
          imageSrc, 
          imageAlt,
          width,
          height,
        })
        toggleModal()
      },
    }
  }

  const gridImages: GridImage[] = [
    {
      ...buildGridImage({
        imageSrc: '/images/racing/harley-number-7.jpeg',
        imageAlt: 'page.racing.alt.harley-number-7',
        width: 864,
        height: 576,
      }),
    },
    {
      ...buildGridImage({
        imageSrc: '/images/racing/larry-racing-667.jpeg',
        imageAlt: 'page.racing.alt.larry-racing-667',
        width: 2500,
        height: 1932,
      }),
    },
    {
      ...buildGridImage({
        imageSrc: '/images/racing/roper-vanson.jpeg',
        imageAlt: 'page.racing.alt.roper-vanson',
        width: 1000,
        height: 667,
      }),
    },
    {
      ...buildGridImage({
        imageSrc: '/images/racing/larry-racing-667-laverda.jpeg',
        imageAlt: 'page.racing.alt.larry-racing-667-laverda',
        width: 2500,
        height: 1932,
      }),
    },
    {
      ...buildGridImage({
        imageSrc: '/images/racing/orange-helmets.jpeg',
        imageAlt: 'page.racing.alt.orange-helmets',
        width: 1080,
        height: 1080,
      }),
    },
    {
      ...buildGridImage({
        imageSrc: '/images/racing/willow-springs-honda.jpeg',
        imageAlt: 'page.racing.alt.willow-springs-honda',
        width: 1080,
        height: 1080,
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
            src="/images/racing/laverda-lowside.jpeg"
            alt={intl.formatMessage({ id: 'page.racing.alt.laverda-lowside' })}
            width={2500}
            height={1932}
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
