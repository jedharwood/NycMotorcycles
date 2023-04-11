import { FC, useContext, useEffect } from 'react'
import { HeadElement } from '@/components/head-element'
import { useRouter } from 'next/router'
import { AppContext } from '@/context/app-context'
import { Jumbotron } from '@/components/jumbotron'
import { images as img } from '../../../public/images/sold-archive/image-catalog'
import { useIntl } from 'react-intl'
import { images as gallery } from '../../../public/images/sold-archive/gallery/image-catalog'
import { ImageGrid } from '@/components/image-grid'
import { ImageModal } from '@/components/image-modal'
import { BuildGridImages } from '@/helpers/build-grid-images'
import { archiveBikes as archive } from '@/modules/archive-bikes'

const GalleryPage: FC = () => {
  const intl = useIntl()
  const { closeImageModal } = useContext(AppContext)

  useEffect(() => {
    closeImageModal()
  }, [])

  const router = useRouter()
  const { bike } = router.query
  const routeName = Array.isArray(bike) ? bike.join(',') : bike
  const bikeImageName =
    Object.keys(archive).find((key) => archive[key] === routeName) ||
    ''
  const bikeNameVerbose = `pg.gallery.${routeName}.name`
  const galleryImages: GridImage[] = BuildGridImages(gallery[bikeImageName])

  return (
    <>
      <HeadElement
        pageTitle="pg.gallery.head.meta.title"
        content="pg.gallery.head.meta.content"
        bikeName={intl.formatMessage({ id: bikeNameVerbose })}
      />
      <main>
        <div className="space-y-6">
          <Jumbotron legend={bikeNameVerbose} image={img[bikeImageName]} />
          <ImageGrid images={galleryImages} maxColumns={4} />
        </div>
        <ImageModal />
      </main>
    </>
  )
}

export default GalleryPage
