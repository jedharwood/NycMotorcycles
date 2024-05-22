import { archiveBikes as archive } from '@/modules/archive-bikes';
import { StaticImage } from '@/types/image-types';

type GalleryCatalog = {
  [key in ArchiveBikeKey]: StaticImage[];
};

type FileType = 'jpeg' | 'png';

const buildStaticImage = (
  archiveKey: ArchiveBikeKey,
  imageName: string,
  fileType: FileType = 'jpeg'
): StaticImage => {
  const archiveName: string = String(archiveKey);

  return {
    image: require(`./${archiveName}/${imageName}.${fileType}`).default,
    altText: `pg.gallery.${archiveName}.alt.${imageName}`,
  };
};

export const images: GalleryCatalog = {
  hondaRc30: [
    buildStaticImage(archive.hondaRc30, 'side-view'),
    buildStaticImage(archive.hondaRc30, 'front-view'),
    buildStaticImage(archive.hondaRc30, 'customs-side'),
    buildStaticImage(archive.hondaRc30, 'customs-front'),
    buildStaticImage(archive.hondaRc30, 'truck'),
    buildStaticImage(archive.hondaRc30, 'packing'),
  ],
  suzukiRg400: [
    buildStaticImage(archive.suzukiRg400, 'decal'),
    buildStaticImage(archive.suzukiRg400, 'enoshima'),
    buildStaticImage(archive.suzukiRg400, 'zushi-marina'),
    buildStaticImage(archive.suzukiRg400, 'rear'),
    buildStaticImage(archive.suzukiRg400, 'side-view'),
    buildStaticImage(archive.suzukiRg400, 'truck'),
  ],
  shovelheadChopper: [
    buildStaticImage(archive.shovelheadChopper, 'right-side', 'png'),
    buildStaticImage(archive.shovelheadChopper, 'ferris-wheel'),
    buildStaticImage(archive.shovelheadChopper, 'speedo', 'png'),
    buildStaticImage(archive.shovelheadChopper, 'left-side', 'png'),
    buildStaticImage(archive.shovelheadChopper, 'tank-angle', 'png'),
    buildStaticImage(archive.shovelheadChopper, 'saddle', 'png'),
    buildStaticImage(archive.shovelheadChopper, 'tank-straight', 'png'),
  ],
  laverda750Sfc: [
    buildStaticImage(archive.laverda750Sfc, 'left-side'),
    buildStaticImage(archive.laverda750Sfc, 'front-wheel'),
    buildStaticImage(archive.laverda750Sfc, 'muhammad-ali'),
    buildStaticImage(archive.laverda750Sfc, 'exterior'),
    buildStaticImage(archive.laverda750Sfc, 'interior'),
  ],
  harleyXr750: [
    buildStaticImage(archive.harleyXr750, 'ridden'),
    buildStaticImage(archive.harleyXr750, 'right-side'),
    buildStaticImage(archive.harleyXr750, 'engine-close'),
    buildStaticImage(archive.harleyXr750, 'racing'),
    buildStaticImage(archive.harleyXr750, 'tyre'),
  ],
  kawasakiH2: [
    buildStaticImage(archive.kawasakiH2, 'tank'),
    buildStaticImage(archive.kawasakiH2, 'engine'),
    buildStaticImage(archive.kawasakiH2, 'left-side'),
  ],
  suzukiStinger: [
    buildStaticImage(archive.suzukiStinger, 'left-side'),
    buildStaticImage(archive.suzukiStinger, 'green-green'),
    buildStaticImage(archive.suzukiStinger, 'red-green'),
    buildStaticImage(archive.suzukiStinger, 'rider'),
    buildStaticImage(archive.suzukiStinger, 'fuel'),
  ],
  bsaStarfire: [
    buildStaticImage(archive.bsaStarfire, 'right-side'),
    buildStaticImage(archive.bsaStarfire, 'port'),
    buildStaticImage(archive.bsaStarfire, 'rider'),
    buildStaticImage(archive.bsaStarfire, 'left-side'),
    buildStaticImage(archive.bsaStarfire, 'silver'),
  ],
  kawasakiH1: [
    buildStaticImage(archive.kawasakiH1, 'larry'),
    buildStaticImage(archive.kawasakiH1, 'graf'),
    buildStaticImage(archive.kawasakiH1, 'showroom'),
    buildStaticImage(archive.kawasakiH1, 'fairing'),
    buildStaticImage(archive.kawasakiH1, 'pier'),
  ],
  harleyXr750Replica: [
    {
      image: require(`./${archive.harleyXr750Replica}/right-side.jpeg`).default,
      altText: `pg.gallery.${archive.harleyXr750Replica}.alt.right-side`,
    },
    {
      image: require(`./${archive.harleyXr750Replica}/graf.jpeg`).default,
      altText: `pg.gallery.${archive.harleyXr750Replica}.alt.graf`,
    },
    {
      image: require(`./${archive.harleyXr750Replica}/rider.jpeg`).default,
      altText: `pg.gallery.${archive.harleyXr750Replica}.alt.rider`,
    },
    {
      image: require(`./${archive.harleyXr750Replica}/larry.jpeg`).default,
      altText: `pg.gallery.${archive.harleyXr750Replica}.alt.larry`,
    },
  ],
  kawasakiS3: [
    {
      image: require(`./${archive.kawasakiS3}/right-side.jpeg`).default,
      altText: `pg.gallery.${archive.kawasakiS3}.alt.right-side`,
    },
    {
      image: require(`./${archive.kawasakiS3}/showroom.jpeg`).default,
      altText: `pg.gallery.${archive.kawasakiS3}.alt.showroom`,
    },
  ],
  kawasakiG7s: [
    {
      image: require(`./${archive.kawasakiG7s}/right-angle.jpeg`).default,
      altText: `pg.gallery.${archive.kawasakiG7s}.alt.right-angle`,
    },
    {
      image: require(`./${archive.kawasakiG7s}/right-straight.jpeg`).default,
      altText: `pg.gallery.${archive.kawasakiG7s}.alt.right-straight`,
    },
  ],
  nortonCommando: [
    {
      image: require(`./${archive.nortonCommando}/right-side.jpeg`).default,
      altText: `pg.gallery.${archive.nortonCommando}.alt.right-side`,
    },
    {
      image: require(`./${archive.nortonCommando}/helmet.jpeg`).default,
      altText: `pg.gallery.${archive.nortonCommando}.alt.helmet`,
    },
    {
      image: require(`./${archive.nortonCommando}/saddle.jpeg`).default,
      altText: `pg.gallery.${archive.nortonCommando}.alt.saddle`,
    },
    {
      image: require(`./${archive.nortonCommando}/chicken.jpeg`).default,
      altText: `pg.gallery.${archive.nortonCommando}.alt.chicken`,
    },
    {
      image: require(`./${archive.nortonCommando}/graf.jpeg`).default,
      altText: `pg.gallery.${archive.nortonCommando}.alt.graf`,
    },
  ],
};
