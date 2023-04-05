import { HeadElement } from '@/components/head-element'
import { TextDisplay } from '@/components/text-display'
import Image from 'next/image'
import { images as img } from '@/public/images/history/image-catalog'
import { useIntl } from 'react-intl'
import { useState } from 'react'
import { ImageModal } from '@/components/image-modal'
import { ImageGrid } from '@/components/image-grid'
import { LinkButton } from '@/components/link-button'
import { routes } from '@/utilities/resource-utilities'
import React, { useContext } from 'react'
import { AppContext } from '../../context/app-context'

export default function History() {
  const { openImageModal, imageModalImage } = useContext(AppContext)
  const intl = useIntl()

  const buildGridImage = ({
    imageSrc,
    imageAlt,
    width,
    height,
  }: GridImage): GridImage => {
    return {
      ...{ imageSrc, imageAlt, width, height },
      onImageClick: () => {
        openImageModal({ imageSrc, imageAlt, width, height })
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

  const homeButton: JSX.Element = (
    <LinkButton
      text="page.history.section-10.button"
      href={routes.home}
      type="router-link"
    />
  )

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
          <div className="grid gap-4 md:grid-cols-5">
            <div className="md:col-span-3">
              <ImageGrid images={gridImagesUpper} maxColumns={2} />
            </div>
            <div className="space-y-6 md:col-span-2">
              <section className="bg-stone-600 bg-opacity-90 w-full py-4 px-6 rounded-md text-stone-50 shadow-lg">
                <h2 className="flex justify-center font-medium text-xl md:text-2xl opacity-80">
                  {intl.formatMessage({
                    id: 'page.history.section-1.title',
                  })}
                </h2>
              </section>
              <TextDisplay
                title={'page.history.section-2.title'}
                textContent={['page.history.section-2.text-1']}
              />
              <TextDisplay
                title={'page.history.section-3.title'}
                textContent={['page.history.section-3.text-1']}
              />
              <TextDisplay
                title={'page.history.section-4.title'}
                textContent={[
                  'page.history.section-4.text-1',
                  'page.history.section-4.text-2',
                ]}
              />
              <TextDisplay
                title={'page.history.section-5.title'}
                textContent={['page.history.section-5.text-1']}
              />
              <TextDisplay
                title={'page.history.section-6.title'}
                textContent={['page.history.section-6.text-1']}
              />
              <TextDisplay
                title={'page.history.section-7.title'}
                textContent={['page.history.section-7.text-1']}
              />
              <TextDisplay
                title={'page.history.section-8.title'}
                textContent={['page.history.section-8.text-1']}
              />
              <TextDisplay
                title={'page.history.section-9.title'}
                textContent={['page.history.section-9.text-1']}
                childElement={homeButton}
              />
            </div>
            <div className="md:col-span-3">
              <ImageGrid images={gridImagesLower} maxColumns={2} />
            </div>
          </div>
        </div>
        <ImageModal image={imageModalImage} />
      </main>
    </>
  )
}
