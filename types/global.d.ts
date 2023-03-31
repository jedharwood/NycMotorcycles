type TimeRemaining = {
  time: number | undefined
  unit: 'days' | 'hours' | 'minutes'
}

type ActiveAuction = {
  title?: string
  url?: string
  image: GridImage
  bidders?: string
  timeRemaining?: TimeRemaining
  currentPrice?: string
  promptDecisionPrice?: string
}

type GridImage = {
  imageSrc: string
  imageAlt: string
  width?: number
  height?: number
  onImageClick?: () => void
}
