import { archiveBikes as archive } from '@/modules/archive-bikes';
import { StaticImage } from '@/types/image-types';

type ArchiveCatalog = {
  [key in ArchiveBikeKey]: StaticImage;
};

const buildStaticImage = (bikeName: string): StaticImage => {
  return {
    image: require(`./${bikeName}.jpeg`).default,
    altText: `pg.sold-archive.alt.${bikeName}`,
  };
};

export const images: ArchiveCatalog = {
  hondaRc30: buildStaticImage(archive.hondaRc30),
  suzukiRg400: buildStaticImage(archive.suzukiRg400),
  shovelheadChopper: buildStaticImage(archive.shovelheadChopper),
  laverda750Sfc: buildStaticImage(archive.laverda750Sfc),
  harleyXr750: buildStaticImage(archive.harleyXr750),
  kawasakiH2: buildStaticImage(archive.kawasakiH2),
  suzukiStinger: buildStaticImage(archive.suzukiStinger),
  bsaStarfire: buildStaticImage(archive.bsaStarfire),
  kawasakiH1: buildStaticImage(archive.kawasakiH1),
  harleyXr750Replica: buildStaticImage(archive.harleyXr750Replica),
  kawasakiS3: buildStaticImage(archive.kawasakiS3),
  kawasakiG7s: buildStaticImage(archive.kawasakiG7s),
  nortonCommando: buildStaticImage(archive.nortonCommando),
  hondaDream: buildStaticImage(archive.hondaDream),
  hondaSs: buildStaticImage(archive.hondaSs),
  laverda500: buildStaticImage(archive.laverda500),
  benelli250: buildStaticImage(archive.benelli250),
  matchless61: buildStaticImage(archive.matchless61),
  matchless59: buildStaticImage(archive.matchless59),
  ducati250: buildStaticImage(archive.ducati250),
  harleyXr75075: buildStaticImage(archive.harleyXr75075),
  laverdaFormula500: buildStaticImage(archive.laverdaFormula500),
  laverda750Racer: buildStaticImage(archive.laverda750Racer),
  kawasakiH1ra: buildStaticImage(archive.kawasakiH1ra),
  placeholder: buildStaticImage(archive.placeholder),
};
