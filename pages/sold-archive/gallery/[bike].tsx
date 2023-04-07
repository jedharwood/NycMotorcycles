import { FC } from 'react'
import { HeadElement } from '@/components/head-element'
import { useRouter } from 'next/router'

const GalleryPage: FC = () => {
  const router = useRouter()
  const { bike } = router.query

  return (
    <>
      <HeadElement pageTitle="Add to lang file" content="Add to lang file" />
      <main>
        <h1>{`Placeholder gallery page for ${bike} Gallery`}</h1>
      </main>
    </>
  )
}

export default GalleryPage
