import { archiveBikes as archive } from '@/modules/archive-bikes';
import { StaticImage } from '@/types/static-image-types';

type GalleryCatalog = {
  [key in ArchiveBikeKey]: StaticImage[];
};

export const images: GalleryCatalog = {
  hondaRc30: [
    {
      image: require(`./${archive.hondaRc30}/side-view.jpeg`).default,
      altText: `pg.gallery.${archive.hondaRc30}.alt.side-view`,
    },
    {
      image: require(`./${archive.hondaRc30}/front-view.jpeg`).default,
      altText: `pg.gallery.${archive.hondaRc30}.alt.front-view`,
    },
    {
      image: require(`./${archive.hondaRc30}/customs-side.jpeg`).default,
      altText: `pg.gallery.${archive.hondaRc30}.alt.customs-side`,
    },
    {
      image: require(`./${archive.hondaRc30}/customs-front.jpeg`).default,
      altText: `pg.gallery.${archive.hondaRc30}.alt.customs-front`,
    },
    {
      image: require(`./${archive.hondaRc30}/truck.jpeg`).default,
      altText: `pg.gallery.${archive.hondaRc30}.alt.truck`,
    },
    {
      image: require(`./${archive.hondaRc30}/packing.jpeg`).default,
      altText: `pg.gallery.${archive.hondaRc30}.alt.packing`,
    },
  ],
  suzukiRg400: [
    {
      image: require(`./${archive.suzukiRg400}/decal.jpeg`).default,
      altText: `pg.gallery.${archive.suzukiRg400}.alt.decal`,
    },
    {
      image: require(`./${archive.suzukiRg400}/enoshima.jpeg`).default,
      altText: `pg.gallery.${archive.suzukiRg400}.alt.enoshima`,
    },
    {
      image: require(`./${archive.suzukiRg400}/zushi-marina.jpeg`).default,
      altText: `pg.gallery.${archive.suzukiRg400}.alt.zushi-marina`,
    },
    {
      image: require(`./${archive.suzukiRg400}/rear.jpeg`).default,
      altText: `pg.gallery.${archive.suzukiRg400}.alt.rear`,
    },
    {
      image: require(`./${archive.suzukiRg400}/side-view.jpeg`).default,
      altText: `pg.gallery.${archive.suzukiRg400}.alt.side-view`,
    },
    {
      image: require(`./${archive.suzukiRg400}/truck.jpeg`).default,
      altText: `pg.gallery.${archive.suzukiRg400}.alt.truck`,
    },
  ],
  shovelheadChopper: [
    {
      image: require(`./${archive.shovelheadChopper}/right-side.png`).default,
      altText: `pg.gallery.${archive.shovelheadChopper}.alt.right-side`,
    },
    {
      image: require(`./${archive.shovelheadChopper}/ferris-wheel.jpeg`)
        .default,
      altText: `pg.gallery.${archive.shovelheadChopper}.alt.ferris-wheel`,
    },
    {
      image: require(`./${archive.shovelheadChopper}/speedo.png`).default,
      altText: `pg.gallery.${archive.shovelheadChopper}.alt.speedo`,
    },
    {
      image: require(`./${archive.shovelheadChopper}/left-side.png`).default,
      altText: `pg.gallery.${archive.shovelheadChopper}.alt.left-side`,
    },
    {
      image: require(`./${archive.shovelheadChopper}/tank-angle.png`).default,
      altText: `pg.gallery.${archive.shovelheadChopper}.alt.tank-angle`,
    },
    {
      image: require(`./${archive.shovelheadChopper}/tank-straight.png`)
        .default,
      altText: `pg.gallery.${archive.shovelheadChopper}.alt.tank-straight`,
    },
    {
      image: require(`./${archive.shovelheadChopper}/saddle.png`).default,
      altText: `pg.gallery.${archive.shovelheadChopper}.alt.saddle`,
    },
  ],
  laverda750Sfc: [
    {
      image: require(`./${archive.laverda750Sfc}/left-side.jpeg`).default,
      altText: `pg.gallery.${archive.laverda750Sfc}.alt.left-side`,
    },
    {
      image: require(`./${archive.laverda750Sfc}/front-wheel.jpeg`).default,
      altText: `pg.gallery.${archive.laverda750Sfc}.alt.front-wheel`,
    },
    {
      image: require(`./${archive.laverda750Sfc}/muhammad-ali.jpeg`).default,
      altText: `pg.gallery.${archive.laverda750Sfc}.alt.muhammad-ali`,
    },
    {
      image: require(`./${archive.laverda750Sfc}/exterior.jpeg`).default,
      altText: `pg.gallery.${archive.laverda750Sfc}.alt.exterior`,
    },
    {
      image: require(`./${archive.laverda750Sfc}/interior.jpeg`).default,
      altText: `pg.gallery.${archive.laverda750Sfc}.alt.interior`,
    },
  ],
  harleyXr750: [
    {
      image: require(`./${archive.harleyXr750}/ridden.jpeg`).default,
      altText: `pg.gallery.${archive.harleyXr750}.alt.ridden`,
    },
    {
      image: require(`./${archive.harleyXr750}/right-side.jpeg`).default,
      altText: `pg.gallery.${archive.harleyXr750}.alt.right-side`,
    },
    {
      image: require(`./${archive.harleyXr750}/engine-close.jpeg`).default,
      altText: `pg.gallery.${archive.harleyXr750}.alt.engine-close`,
    },
    {
      image: require(`./${archive.harleyXr750}/racing.jpeg`).default,
      altText: `pg.gallery.${archive.harleyXr750}.alt.racing`,
    },
    {
      image: require(`./${archive.harleyXr750}/tyre.jpeg`).default,
      altText: `pg.gallery.${archive.harleyXr750}.alt.tyre`,
    },
  ],
};
