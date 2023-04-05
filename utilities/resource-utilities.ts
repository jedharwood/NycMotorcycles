export const yahooAuctionProfilePage: string =
  'https://auctions.yahoo.co.jp/seller/lazzamoto?'

export const instagramProfilePage: string =
  'https://www.instagram.com/newyorkcitymotorcycles/'

export const routes: { [key: string]: string } = {
  home: '/',
  activeAuctions: '/active-auctions',
  soldArchive: '/sold-archive',
  history: '/history',
  racing: '/racing',
  contact: '/contact',
  consign: '/consign',
  invest: '/invest',
  download: '/download',
}

const gallery: string = '/sold-archive/gallery/'
export const galleryRoutes: { [key: string]: string } = {
  hondaRc30: `${gallery}honda-rc30`,
  suzukiRg400: `${gallery}suzuki-rg400`,
  shovelheadChopper: `${gallery}shovelhead-chopper`,
  laverda750Sfc: `${gallery}laverda-750-sfc`,
  harleyXr750: `${gallery}harley-xr750`,
  kawasakiH2: `${gallery}kawasaki-h2`,
  suzukiStinger: `${gallery}suzuki-stinger`,
  bsaStarfire: `${gallery}bsa-starfire`,
  kawasakiH1: `${gallery}kawasaki-h1`,
}
