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
  ],
  shovelheadChopper: [
    {
      imageSrc: `${gallery}/${archive.shovelheadChopper}/right-side.png`,
      imageAlt: `pg.gallery.${archive.shovelheadChopper}.alt.right-side`,
      width: 547,
      height: 401,
    }, 
    {
      imageSrc: `${gallery}/${archive.shovelheadChopper}/ferris-wheel.jpeg`,
      imageAlt: `pg.gallery.${archive.shovelheadChopper}.alt.ferris-wheel`,
      width: 1500,
      height: 1125,
    }, 
    {
      imageSrc: `${gallery}/${archive.shovelheadChopper}/speedo.png`,
      imageAlt: `pg.gallery.${archive.shovelheadChopper}.alt.speedo`,
      width: 533,
      height: 400,
    }, 
    {
      imageSrc: `${gallery}/${archive.shovelheadChopper}/left-side.png`,
      imageAlt: `pg.gallery.${archive.shovelheadChopper}.alt.left-side`,
      width: 533,
      height: 396,
    }, 
    {
      imageSrc: `${gallery}/${archive.shovelheadChopper}/tank-angle.png`,
      imageAlt: `pg.gallery.${archive.shovelheadChopper}.alt.tank-angle`,
      width: 533,
      height: 400,
    }, 
    {
      imageSrc: `${gallery}/${archive.shovelheadChopper}/tank-straight.png`,
      imageAlt: `pg.gallery.${archive.shovelheadChopper}.alt.tank-straight`,
      width: 532,
      height: 396,
    }, 
    {
      imageSrc: `${gallery}/${archive.shovelheadChopper}/saddle.png`,
      imageAlt: `pg.gallery.${archive.shovelheadChopper}.alt.saddle`,
      width: 533,
      height: 396,
    }, 
  ],
  laverda750Sfc: [
    {
      imageSrc: `${gallery}/${archive.laverda750Sfc}/left-side.jpeg`,
      imageAlt: `pg.gallery.${archive.laverda750Sfc}.alt.left-side`,
      width: 1500,
      height: 1125,
    }, 
    {
      imageSrc: `${gallery}/${archive.laverda750Sfc}/front-wheel.jpeg`,
      imageAlt: `pg.gallery.${archive.laverda750Sfc}.alt.front-wheel`,
      width: 1500,
      height: 1125,
    }, 
    {
      imageSrc: `${gallery}/${archive.laverda750Sfc}/muhammad-ali.jpeg`,
      imageAlt: `pg.gallery.${archive.laverda750Sfc}.alt.muhammad-ali`,
      width: 1500,
      height: 1125,
    }, 
    {
      imageSrc: `${gallery}/${archive.laverda750Sfc}/exterior.jpeg`,
      imageAlt: `pg.gallery.${archive.laverda750Sfc}.alt.exterior`,
      width: 1500,
      height: 1125,
    }, 
    {
      imageSrc: `${gallery}/${archive.laverda750Sfc}/interior.jpeg`,
      imageAlt: `pg.gallery.${archive.laverda750Sfc}.alt.interior`,
      width: 1500,
      height: 1125,
    }, 
  ],
  harleyXr750: [
    {
      imageSrc: `${gallery}/${archive.harleyXr750}/with-rider.jpeg`,
      imageAlt: `pg.gallery.${archive.harleyXr750}.alt.with-rider`,
      width: 1357,
      height: 1357,
    }, 
    {
      imageSrc: `${gallery}/${archive.harleyXr750}/on-stand.jpeg`,
      imageAlt: `pg.gallery.${archive.harleyXr750}.alt.on-stand`,
      width: 1789,
      height: 1273,
    }, 
    {
      imageSrc: `${gallery}/${archive.harleyXr750}/right-side.jpeg`,
      imageAlt: `pg.gallery.${archive.harleyXr750}.alt.right-side`,
      width: 1000,
      height: 667,
    }, 
    {
      imageSrc: `${gallery}/${archive.harleyXr750}/engine.jpeg`,
      imageAlt: `pg.gallery.${archive.harleyXr750}.alt.engine`,
      width: 1000,
      height: 667,
    }, 
    {
      imageSrc: `${gallery}/${archive.harleyXr750}/racing.jpeg`,
      imageAlt: `pg.gallery.${archive.harleyXr750}.alt.racing`,
      width: 1000,
      height: 750,
    }, 
    {
      imageSrc: `${gallery}/${archive.harleyXr750}/back-tyre.jpeg`,
      imageAlt: `pg.gallery.${archive.harleyXr750}.alt.back-tyre`,
      width: 720,
      height: 1080,
    }, 
  ]
}
