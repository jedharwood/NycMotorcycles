import { FC } from 'react'
import { HeadElement } from '@/components/head-element'
import { useRouter } from 'next/router'

const GalleryPage: FC = () => {
  const router = useRouter()
  const { bike } = router.query
  const bikeName = Array.isArray(bike) ? bike.join(',') : bike;

  // use bikename property to extract useful data to display
  return (
    <>
      <HeadElement
        pageTitle="pg.gallery.head.meta.title"
        content="pg.gallery.head.meta.content"
        bikeName={bikeName}
      />
      <main>
        <h1>{`Placeholder gallery page for ${bike} Gallery`}</h1>
      </main>
    </>
  )
}

export default GalleryPage
