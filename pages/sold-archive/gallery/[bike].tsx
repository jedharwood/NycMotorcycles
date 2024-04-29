import { FC, useContext, useEffect } from 'react'
import { HeadElement } from '@/components/head-element'
import { useRouter } from 'next/router'
import { AppContext } from '@/context/app-context'
import { Jumbotron } from '@/components/jumbotron'
import { images as img } from '../../../public/images/sold-archive/image-catalog'
import { useIntl } from 'react-intl'
import { images as gallery } from '../../../public/images/sold-archive/gallery/image-catalog'
import { ImageGrid } from '@/components/image-grid/image-grid'
import { ImageModal } from '@/components/image-modal'
import { BuildGridImages } from '@/helpers/build-grid-images'
import { archiveBikes as archive } from '@/modules/archive-bikes'
import { TwoColumnGridPage } from '@/components/two-column-grid-page/two-column-grid-page'
import { BuildList } from '@/helpers/build-list'

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

  const renderContent = () => {
    if (routeName !== 'harley-xr750') return (
      <ImageGrid images={galleryImages} maxColumns={4} />
    )

    return (
      <>
        <iframe 
          className='w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[450px] xl:h-[600px] rounded-md'
          src='https://www.youtube.com/embed/hWGxH-0bI-s?si=x81MDY7HnOKLztmi' 
          title='YouTube video player' 
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' 
          referrerPolicy='strict-origin-when-cross-origin' 
          allowFullScreen
        />  
        <TwoColumnGridPage 
          images={galleryImages} 
          textDisplayPropObjects={
            [
              {
                title: 'pg.gallery.harley-xr750.sect-1.title',
                childElement: BuildList(
                  {
                    listItems: [
                      'pg.gallery.harley-xr750.sect-1.list-1',
                      'pg.gallery.harley-xr750.sect-1.list-2',
                      'pg.gallery.harley-xr750.sect-1.list-3',
                    ],
                    alignCentre: true,
                  }
                ),
                childElementPosition: 'under-title'
              },
              {
                textContent: [
                  'pg.gallery.harley-xr750.sect-2',
                  'pg.gallery.harley-xr750.sect-3',
                  'pg.gallery.harley-xr750.sect-4',
                  'pg.gallery.harley-xr750.sect-5',
                  'pg.gallery.harley-xr750.sect-6',
                  'pg.gallery.harley-xr750.sect-7',
                  'pg.gallery.harley-xr750.sect-8',
                  'pg.gallery.harley-xr750.sect-9',
                ]
              },
            ]
          }
        />
      </>
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
          {renderContent()}
        </div>
        <ImageModal />
      </main>
    </>
  )
}

export default GalleryPage
