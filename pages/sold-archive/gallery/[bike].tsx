import { FC, useContext, useEffect } from 'react'
import { HeadElement } from '@/components/head-element'
import { useRouter } from 'next/router'
import { AppContext } from '@/context/app-context'
import { Jumbotron } from '@/components/jumbotron'
import { images as img } from '../../../public/images/sold-archive/image-catalog'
import { archiveBikes } from '..'
import { useIntl } from 'react-intl'
import { images as gallery } from '../../../public/images/sold-archive/gallery/image-catalog'
import { ImageGrid } from '@/components/image-grid'

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
    Object.keys(archiveBikes).find((key) => archiveBikes[key] === routeName) ||
    ''
  const galleryImages: GridImage[] = gallery[bikeImageName]
  const bikeNameVerbose = `pg.gallery.${routeName}.name`

  return (
    <>
      <HeadElement
        pageTitle="pg.gallery.head.meta.title"
        content="pg.gallery.head.meta.content"
        bikeName={intl.formatMessage({ id: bikeNameVerbose })}
      />
      <main className="space-y-6">
        <Jumbotron legend={bikeNameVerbose} image={img[bikeImageName]} />
        <ImageGrid images={galleryImages} maxColumns={4} />
      </main>
    </>
  )
}

export default GalleryPage
