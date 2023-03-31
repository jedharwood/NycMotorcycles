type TimeRemaining = {
  time: number | undefined
  unit: 'days' | 'hours' | 'minutes'
}

type ImageSrcAndAlt = {
  imageSrc: string
  imageAlt: string
}

type ActiveAuction = {
  title?: string
  url?: string
  image: ImageSrcAndAlt
  bidders?: string
  timeRemaining?: TimeRemaining
  currentPrice?: string
  promptDecisionPrice?: string
}

type GridImageProps = {
  image: ImageSrcAndAlt
  width?: number
  height?: number
  onImageClick?: () => void
}
