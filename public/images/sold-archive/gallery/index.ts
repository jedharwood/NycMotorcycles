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
    buildStaticImage(archive.harleyXr750Replica, 'right-side'),
    buildStaticImage(archive.harleyXr750Replica, 'graf'),
    buildStaticImage(archive.harleyXr750Replica, 'rider'),
    buildStaticImage(archive.harleyXr750Replica, 'larry'),
  ],
  kawasakiS3: [
    buildStaticImage(archive.kawasakiS3, 'right-side'),
    buildStaticImage(archive.kawasakiS3, 'showroom'),
  ],
  kawasakiG7s: [
    buildStaticImage(archive.kawasakiG7s, 'right-angle'),
    buildStaticImage(archive.kawasakiG7s, 'right-straight'),
  ],
  nortonCommando: [
    buildStaticImage(archive.nortonCommando, 'right-side'),
    buildStaticImage(archive.nortonCommando, 'helmet'),
    buildStaticImage(archive.nortonCommando, 'saddle'),
    buildStaticImage(archive.nortonCommando, 'chicken'),
    buildStaticImage(archive.nortonCommando, 'graf'),
  ],
  hondaDream: [
    buildStaticImage(archive.hondaDream, 'showroom'),
    buildStaticImage(archive.hondaDream, 'harbour'),
    buildStaticImage(archive.hondaDream, 'rear-centre'),
    buildStaticImage(archive.hondaDream, 'right-side'),
    buildStaticImage(archive.hondaDream, 'rear'),
  ],
  hondaSs: [
    buildStaticImage(archive.hondaSs, 'right-side'),
    buildStaticImage(archive.hondaSs, 'shorts'),
    buildStaticImage(archive.hondaSs, 'beard'),
    buildStaticImage(archive.hondaSs, 'fence'),
    buildStaticImage(archive.hondaSs, 'underside'),
  ],
  laverda500: [
    buildStaticImage(archive.laverda500, 'tank'),
    buildStaticImage(archive.laverda500, 'right-side'),
    buildStaticImage(archive.laverda500, 'front'),
    buildStaticImage(archive.laverda500, 'left-side'),
    buildStaticImage(archive.laverda500, 'david'),
  ]
};
