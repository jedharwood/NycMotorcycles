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
import { BuildList } from '@/helpers/build-list'
import { TextDisplay } from '@/components/text-display'
import { BuildI18nKeyArray } from '@/helpers/build-i18n-key-array'

const GalleryPage: FC = () => {
  const { closeImageModal } = useContext(AppContext)

  useEffect(() => {
    closeImageModal()
  }, [])

  const intl = useIntl()
  const router = useRouter()
  const { bike } = router.query
  const routeName = Array.isArray(bike) ? bike.join(',') : bike
  const bikeImageName =
    Object.keys(archive).find((key) => archive[key] === routeName) || ''

  const galleryImages: GridImage[] = BuildGridImages(gallery[bikeImageName])
  const sectionOneTitleId = `pg.gallery.${routeName}.sect-1.title`
  const sectionTitle = intl.formatMessage({ id: sectionOneTitleId })
  const bikeNameVerbose = `pg.gallery.${routeName}.name`

  let textDisplayList: string[] = []
  let textContent: string[] = []
  if (sectionTitle !== sectionOneTitleId) {
    textDisplayList = BuildI18nKeyArray(`pg.gallery.${routeName}.sect-1.list-`)
    textContent = BuildI18nKeyArray(`pg.gallery.${routeName}.sect-1.text-`)
  }

  const renderPageContent = () => {
    return sectionTitle !== sectionOneTitleId ? (
      <>
        <TextDisplay
          title={sectionTitle}
          textContent={textContent}
          childElement={BuildList(textDisplayList)}
          order="title-child-text"
        />
        <ImageGrid images={galleryImages} maxColumns={4} />
      </>
    ) : (
      <ImageGrid images={galleryImages} maxColumns={4} />
    )
  }

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
          {renderPageContent()}
        </div>
        <ImageModal />
      </main>
    </>
  )
}

export default GalleryPage
