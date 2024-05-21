import { archiveBikes as archive } from '@/modules/archive-bikes';
import { StaticImage } from '@/types/image-types';

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
  kawasakiH2: [
    {
      image: require(`./${archive.kawasakiH2}/tank.jpeg`).default,
      altText: `pg.gallery.${archive.kawasakiH2}.alt.tank`,
    },
    {
      image: require(`./${archive.kawasakiH2}/engine.jpeg`).default,
      altText: `pg.gallery.${archive.kawasakiH2}.alt.engine`,
    },
    {
      image: require(`./${archive.kawasakiH2}/left-side.jpeg`).default,
      altText: `pg.gallery.${archive.kawasakiH2}.alt.left-side`,
    },
  ],
  suzukiStinger: [
    {
      image: require(`./${archive.suzukiStinger}/left-side.jpeg`).default,
      altText: `pg.gallery.${archive.suzukiStinger}.alt.left-side`,
    },
    {
      image: require(`./${archive.suzukiStinger}/green-green.jpeg`).default,
      altText: `pg.gallery.${archive.suzukiStinger}.alt.green-green`,
    },
    {
      image: require(`./${archive.suzukiStinger}/red-green.jpeg`).default,
      altText: `pg.gallery.${archive.suzukiStinger}.alt.red-green`,
    },
    {
      image: require(`./${archive.suzukiStinger}/rider.jpeg`).default,
      altText: `pg.gallery.${archive.suzukiStinger}.alt.rider`,
    },
    {
      image: require(`./${archive.suzukiStinger}/fuel.jpeg`).default,
      altText: `pg.gallery.${archive.suzukiStinger}.alt.fuel`,
    },
  ],
  bsaStarfire: [
    {
      image: require(`./${archive.bsaStarfire}/right-side.jpeg`).default,
      altText: `pg.gallery.${archive.bsaStarfire}.alt.right-side`,
    },  
    {
      image: require(`./${archive.bsaStarfire}/port.jpeg`).default,
      altText: `pg.gallery.${archive.bsaStarfire}.alt.port`,
    }, 
    {
      image: require(`./${archive.bsaStarfire}/rider.jpeg`).default,
      altText: `pg.gallery.${archive.bsaStarfire}.alt.rider`,
    },  
    {
      image: require(`./${archive.bsaStarfire}/left-side.jpeg`).default,
      altText: `pg.gallery.${archive.bsaStarfire}.alt.left-side`,
    },   
    {
      image: require(`./${archive.bsaStarfire}/silver.jpeg`).default,
      altText: `pg.gallery.${archive.bsaStarfire}.alt.silver`,
    },    
  ],
  kawasakiH1: [
    {
      image: require(`./${archive.kawasakiH1}/larry.jpeg`).default,
      altText: `pg.gallery.${archive.kawasakiH1}.alt.larry`,
    }, 
    {
      image: require(`./${archive.kawasakiH1}/graf.jpeg`).default,
      altText: `pg.gallery.${archive.kawasakiH1}.alt.graf`,
    }, 
    {
      image: require(`./${archive.kawasakiH1}/showroom.jpeg`).default,
      altText: `pg.gallery.${archive.kawasakiH1}.alt.showroom`,
    }, 
    {
      image: require(`./${archive.kawasakiH1}/fairing.jpeg`).default,
      altText: `pg.gallery.${archive.kawasakiH1}.alt.fairing`,
    }, 
    {
      image: require(`./${archive.kawasakiH1}/pier.jpeg`).default,
      altText: `pg.gallery.${archive.kawasakiH1}.alt.pier`,
    }, 
  ]
};
