type TimeRemaining = {
  time: number | undefined
  unit: 'days' | 'hours' | 'minutes'
}

type ActiveAuction = {
  title?: string
  url?: string
  imageSrc?: string
  imageAlt?: string
  bidders?: string
  timeRemaining?: TimeRemaining
  currentPrice?: string
  promptDecisionPrice?: string
}
