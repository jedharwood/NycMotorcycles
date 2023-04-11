import { archiveBikes as archive } from "@/modules/archive-bikes"

type GalleryCatalog = {
  [key in ArchiveBikeKey]: GridImage[]
}

const gallery = '/images/sold-archive/gallery'

export const images: GalleryCatalog = {
  hondaRc30: [
    {
      imageSrc: `${gallery}/${archive.hondaRc30}/side-view.jpeg`,
      imageAlt: `pg.gallery.${archive.hondaRc30}.alt.side-view`,
      width: 2500,
      height: 1667,
    },
    {
      imageSrc: `${gallery}/${archive.hondaRc30}/front-view.jpeg`,
      imageAlt: `pg.gallery.${archive.hondaRc30}.alt.front-view`,
      width: 2500,
      height: 1667,
    },
    {
      imageSrc: `${gallery}/${archive.hondaRc30}/customs-side.jpeg`,
      imageAlt: `pg.gallery.${archive.hondaRc30}.alt.customs-side`,
      width: 828,
      height: 1472,
    },
    {
      imageSrc: `${gallery}/${archive.hondaRc30}/customs-front.jpeg`,
      imageAlt: `pg.gallery.${archive.hondaRc30}.alt.customs-front`,
      width: 640,
      height: 480,
    },
    {
      imageSrc: `${gallery}/${archive.hondaRc30}/truck.jpeg`,
      imageAlt: `pg.gallery.${archive.hondaRc30}.alt.truck`,
      width: 2500,
      height: 3333,
    },
    {
      imageSrc: `${gallery}/${archive.hondaRc30}/packing.jpeg`,
      imageAlt: `pg.gallery.${archive.hondaRc30}.alt.packing`,
      width: 824,
      height: 771,
    }, 
  ],
  suzukiRg400: [
    {
      imageSrc: `${gallery}/${archive.suzukiRg400}/decal.jpeg`,
      imageAlt: `pg.gallery.${archive.suzukiRg400}.alt.decal`,
      width: 828,
      height: 1472,
    }, 
    {
      imageSrc: `${gallery}/${archive.suzukiRg400}/enoshima.jpeg`,
      imageAlt: `pg.gallery.${archive.suzukiRg400}.alt.enoshima`,
      width: 1000,
      height: 1000,
    }, 
    {
      imageSrc: `${gallery}/${archive.suzukiRg400}/zushi-marina.jpeg`,
      imageAlt: `pg.gallery.${archive.suzukiRg400}.alt.zushi-marina`,
      width: 1000,
      height: 1333,
    }, 
    {
      imageSrc: `${gallery}/${archive.suzukiRg400}/rear.jpeg`,
      imageAlt: `pg.gallery.${archive.suzukiRg400}.alt.rear`,
      width: 828,
      height: 1408,
    }, 
    {
      imageSrc: `${gallery}/${archive.suzukiRg400}/side-view.jpeg`,
      imageAlt: `pg.gallery.${archive.suzukiRg400}.alt.side-view`,
      width: 2500,
      height: 1875,
    }, 
    {
      imageSrc: `${gallery}/${archive.suzukiRg400}/truck.jpeg`,
      imageAlt: `pg.gallery.${archive.suzukiRg400}.alt.truck`,
      width: 1000,
      height: 750,
    }, 
  ]
}
