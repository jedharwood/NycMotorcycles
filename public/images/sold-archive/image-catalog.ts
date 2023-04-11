import { archiveBikes as archive } from '@/modules/archive-bikes'

type ArchiveCatalog = {
  [key in ArchiveBikeKey]: GridImage
}

const buildGridImage = (
  bikeName: string,
  width: number,
  height: number,
): GridImage => {
  return {
    imageSrc: `/images/sold-archive/${bikeName}.jpeg`,
    imageAlt: `pg.sold-archive.alt.${bikeName}`,
    width,
    height,
  }
}

export const images: ArchiveCatalog = {
  hondaRc30: buildGridImage(archive.hondaRc30, 1500, 1000),
  suzukiRg400: buildGridImage(archive.suzukiRg400, 1500, 1125),
  shovelheadChopper: buildGridImage(archive.shovelheadChopper, 1500, 1125),
  laverda750Sfc: buildGridImage(archive.laverda750Sfc, 1500, 836),
  harleyXr750: buildGridImage(archive.harleyXr750, 1080, 720),
  kawasakiH2: buildGridImage(archive.kawasakiH2, 747, 748),
  suzukiStinger: buildGridImage(archive.suzukiStinger, 1500, 986),
  bsaStarfire: buildGridImage(archive.bsaStarfire, 1500, 1125),
  kawasakiH1: buildGridImage(archive.kawasakiH1, 640, 451),
  harleyXr750Replica: buildGridImage(archive.harleyXr750Replica, 816, 605),
  kawasakiS3: buildGridImage(archive.kawasakiS3, 1500, 885),
  kawasakiG7s: buildGridImage(archive.kawasakiG7s, 1500, 976),
  nortonCommando: buildGridImage(archive.nortonCommando, 1500, 1125),
  hondaDream: buildGridImage(archive.hondaDream, 750, 851),
  hondaSs: buildGridImage(archive.hondaSs, 1500, 1500),
  laverda500: buildGridImage(archive.laverda500, 558, 423),
  benelli250: buildGridImage(archive.benelli250, 640, 433),
  matchless61: buildGridImage(archive.matchless61, 1500, 882),
  matchless59: buildGridImage(archive.matchless59, 1500, 1262),
  ducati250: buildGridImage(archive.ducati250, 1500, 853),
  harleyXr75075: buildGridImage(archive.harleyXr75075, 1500, 1500),
  laverdaFormula500: buildGridImage(archive.laverdaFormula500, 705, 705),
  laverda750Racer: buildGridImage(archive.laverda750Racer, 1500, 1158),
  kawasakiH1ra: buildGridImage(archive.kawasakiH1ra, 934, 540),
}
