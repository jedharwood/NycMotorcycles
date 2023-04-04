import { HeadElement } from '@/components/head-element'
import { TextDisplay } from '@/components/text-display'
import Image from 'next/image'
import { images as img } from '@/public/images/history/image-catalog'
import { useIntl } from 'react-intl'
import { useState } from 'react'
import { ImageModal } from '@/components/image-modal'
import { ImageGrid } from '@/components/image-grid'

export default function History() {
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

  const gridImagesUpper: GridImage[] = [
    {
      ...buildGridImage({
        ...img.larryOrangeLaverda,
      }),
    },
    {
        ...buildGridImage({
          ...img.bikeLineup,
        }),
      },
      {
        ...buildGridImage({
          ...img.nortonAndHarley,
        }),
      },
      {
        ...buildGridImage({
          ...img.raceTraining,
        }),
      },
      {
        ...buildGridImage({
          ...img.showroom,
        }),
      },
      {
        ...buildGridImage({
          ...img.showroomPurple,
        }),
      },
      {
        ...buildGridImage({
          ...img.showroomGig,
        }),
      },
      {
        ...buildGridImage({
          ...img.showroomOrange,
        }),
      },
      {
        ...buildGridImage({
          ...img.larryTuneup,
        }),
      },
      {
        ...buildGridImage({
          ...img.laverdaDucati,
        }),
      },
      {
        ...buildGridImage({
          ...img.laverdaRace,
        }),
      },
      {
        ...buildGridImage({
          ...img.forklift,
        }),
      },
      {
        ...buildGridImage({
          ...img.bsaWorkshop,
        }),
      },
      {
        ...buildGridImage({
          ...img.externalWorkshop,
        }),
      },
      {
        ...buildGridImage({
          ...img.zushiHq,
        }),
      },
      {
        ...buildGridImage({
          ...img.container,
        }),
      },
  ]

  const gridImagesLower: GridImage[] = [
    {
      ...buildGridImage({
        ...img.customs,
      }),
    },
    {
        ...buildGridImage({
          ...img.ferrisWheel,
        }),
      },
  ]

  return (
    <>
      <HeadElement
        pageTitle="page.history.head.meta.title"
        content="page.history.head.meta.content"
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
          <div className="space-y-6 grid">
            <ImageGrid images={gridImagesUpper} />
            <div className="space-y-6">
              <TextDisplay title="History" />
              <TextDisplay title="2012" />
            </div>
            <ImageGrid images={gridImagesLower} />
          </div>
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
