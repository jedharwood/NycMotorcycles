import { archiveBikes as archive } from "@/modules/archive-bikes"

type ArchiveCatalog = {
  [key in ArchiveBikeKey]: GridImage
}

const soldArchive = '/images/sold-archive/'

export const images: ArchiveCatalog = {
  hondaRc30: {
    imageSrc: `${soldArchive}${archive.hondaRc30}.jpeg`,
    imageAlt: `pg.sold-archive.alt.${archive.hondaRc30}`,
    width: 1500,
    height: 1000,
  },
  suzukiRg400: {
    imageSrc: `${soldArchive}${archive.suzukiRg400}.jpeg`,
    imageAlt: `pg.sold-archive.alt.${archive.suzukiRg400}`,
    width: 1500,
    height: 1125,
  },
  shovelheadChopper: {
    imageSrc: `${soldArchive}${archive.shovelheadChopper}.jpeg`,
    imageAlt: `pg.sold-archive.alt.${archive.shovelheadChopper}`,
    width: 1500,
    height: 1125,
  },
  laverda750Sfc: {
    imageSrc: `${soldArchive}${archive.laverda750Sfc}.jpeg`,
    imageAlt: `pg.sold-archive.alt.${archive.laverda750Sfc}`,
    width: 1500,
    height: 836,
  },
  harleyXr750: {
    imageSrc: `${soldArchive}${archive.harleyXr750}.jpeg`,
    imageAlt: `pg.sold-archive.alt.${archive.harleyXr750}`,
    width: 1080,
    height: 720,
  },
  kawasakiH2: {
    imageSrc: `${soldArchive}${archive.kawasakiH2}.jpeg`,
    imageAlt: `pg.sold-archive.alt.${archive.kawasakiH2}`,
    width: 747,
    height: 748,
  },
  suzukiStinger: {
    imageSrc: `${soldArchive}${archive.suzukiStinger}.jpeg`,
    imageAlt: `pg.sold-archive.alt.${archive.suzukiStinger}`,
    width: 1500,
    height: 986,
  },
  bsaStarfire: {
    imageSrc: `${soldArchive}${archive.bsaStarfire}.jpeg`,
    imageAlt: `pg.sold-archive.alt.${archive.bsaStarfire}`,
    width: 1500,
    height: 1125,
  },
  kawasakiH1: {
    imageSrc: `${soldArchive}${archive.kawasakiH1}.jpeg`,
    imageAlt: `pg.sold-archive.alt.${archive.kawasakiH1}`,
    width: 640,
    height: 451,
  },
  harleyXr750Replica: {
    imageSrc: `${soldArchive}${archive.harleyXr750Replica}.jpeg`,
    imageAlt: `pg.sold-archive.alt.${archive.harleyXr750Replica}`,
    width: 816,
    height: 605,
  },
  kawasakiS3: {
    imageSrc: `${soldArchive}${archive.kawasakiS3}.jpeg`,
    imageAlt: `pg.sold-archive.alt.${archive.kawasakiS3}`,
    width: 1500,
    height: 885,
  },
  kawasakiG7s: {
    imageSrc: `${soldArchive}${archive.kawasakiG7s}.jpeg`,
    imageAlt: `pg.sold-archive.alt.${archive.kawasakiG7s}`,
    width: 1500,
    height: 976,
  },
  nortonCommando: {
    imageSrc: `${soldArchive}${archive.nortonCommando}.jpeg`,
    imageAlt: `pg.sold-archive.alt.${archive.nortonCommando}`,
    width: 1500,
    height: 1125,
  },
  hondaDream: {
    imageSrc: `${soldArchive}${archive.hondaDream}.jpeg`,
    imageAlt: `pg.sold-archive.alt.${archive.hondaDream}`,
    width: 750,
    height: 851,
  },
  hondaSs: {
    imageSrc: `${soldArchive}${archive.hondaSs}.jpeg`,
    imageAlt: `pg.sold-archive.alt.${archive.hondaSs}`,
    width: 1500,
    height: 1500,
  },
  laverda500: {
    imageSrc: `${soldArchive}${archive.laverda500}.jpeg`,
    imageAlt: `pg.sold-archive.alt.${archive.laverda500}`,
    width: 558,
    height: 423,
  },
  benelli250: {
    imageSrc: `${soldArchive}${archive.benelli250}.jpeg`,
    imageAlt: `pg.sold-archive.alt.${archive.benelli250}`,
    width: 640,
    height: 433,
  },
  matchless61: {
    imageSrc: `${soldArchive}${archive.matchless61}.jpeg`,
    imageAlt: `pg.sold-archive.alt.${archive.matchless61}`,
    width: 1500,
    height: 882,
  },
  matchless59: {
    imageSrc: `${soldArchive}${archive.matchless59}.jpeg`,
    imageAlt: `pg.sold-archive.alt.${archive.matchless59}`,
    width: 1500,
    height: 1262,
  },
  ducati250: {
    imageSrc: `${soldArchive}${archive.ducati250}.jpeg`,
    imageAlt: `pg.sold-archive.alt.${archive.ducati250}`,
    width: 1500,
    height: 853,
  },
  harleyXr75075: {
    imageSrc: `${soldArchive}${archive.harleyXr75075}.jpeg`,
    imageAlt: `pg.sold-archive.alt.${archive.harleyXr75075}`,
    width: 1500,
    height: 1500,
  },
  laverdaFormula500: {
    imageSrc: `${soldArchive}${archive.laverdaFormula500}.jpeg`,
    imageAlt: `pg.sold-archive.alt.${archive.laverdaFormula500}`,
    width: 705,
    height: 705,
  },
  laverda750Racer: {
    imageSrc: `${soldArchive}${archive.laverda750Racer}.jpeg`,
    imageAlt: `pg.sold-archive.alt.${archive.laverda750Racer}`,
    width: 1500,
    height: 1158,
  },
  kawasakiH1ra: {
    imageSrc: `${soldArchive}${archive.kawasakiH1ra}.jpeg`,
    imageAlt: `pg.sold-archive.alt.${archive.kawasakiH1ra}`,
    width: 934,
    height: 540,
  },
}
