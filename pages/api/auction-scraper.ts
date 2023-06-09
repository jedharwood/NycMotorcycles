import { JSDOM } from 'jsdom'
import type { NextApiRequest, NextApiResponse } from 'next'
import { yahooAuctionProfilePage } from '../../utilities/resource-utilities'

type Prices = {
  currentPrice?: string
  promptDecisionPrice?: string
}

const yahooAuctionScraper = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const activeAuctions: ActiveAuction[] = []

  try {
    const profilePage: Response = await fetch(yahooAuctionProfilePage, {
      mode: 'no-cors',
    })
    const html: string = await profilePage.text()
    const dom: JSDOM = new JSDOM(html)
    const document: Document = dom.window.document
    const auctionListings: NodeListOf<Element> =
      document.querySelectorAll('.bd.cf')

    auctionListings.forEach((listing) => {
      activeAuctions.push(mapAuctionListing(listing))
    })

    res.status(200).json({ activeAuctions })
  } catch (error) {
    res.status(500).json({ activeAuctions })
  }
}

export default yahooAuctionScraper

const mapAuctionListing = (listing: Element): ActiveAuction => {
  const priceElements: NodeListOf<Element> = listing.querySelectorAll('.pri1')
  const prices: Prices = mapPrices(priceElements)
  const timeRemaining: TimeRemaining = formatRemainingTime(
    listing.querySelector('dt.rem + dd')?.textContent ?? undefined,
  )

  return {
    title: listing.querySelector('h3')?.textContent ?? undefined,
    url: listing.querySelector('a')?.href ?? undefined,
    image: {
      imageSrc: listing.querySelector('a > img')?.getAttribute('src') ?? '',
      imageAlt: listing.querySelector('a > img')?.getAttribute('alt') ?? '',
    },
    bidders: listing.querySelector('dt.bi + dd')?.textContent ?? undefined,
    timeRemaining: timeRemaining,
    currentPrice: prices.currentPrice,
    promptDecisionPrice: prices.promptDecisionPrice,
  }
}

const mapPrices = (priceElements: NodeListOf<Element>): Prices => {
  const currentPriceSymbol: string = '現在'
  const promptDecisionPriceSymbol: string = '即決'

  let prices: Prices = {
    currentPrice: undefined,
    promptDecisionPrice: undefined,
  }

  priceElements.forEach((p) => {
    const symbol = p.querySelector('dt')?.textContent
    const amount = p.querySelector('dd')?.textContent

    if (symbol === currentPriceSymbol && amount) {
      prices.currentPrice = amount
    } else if (symbol === promptDecisionPriceSymbol && amount) {
      prices.promptDecisionPrice = amount
    }
  })

  return prices
}

const formatRemainingTime = (
  timeRemaining: string | undefined,
): TimeRemaining => {
  const days: string = '日'
  const hours: string = '時間'

  if (!timeRemaining) return { time: undefined, unit: 'days' }

  if (timeRemaining.includes(hours)) {
    const time: number = parseInt(
      timeRemaining.substring(0, timeRemaining.length - 2),
    )
    return { time: time, unit: 'hours' }
  }

  const time: number = parseInt(
    timeRemaining.substring(0, timeRemaining.length - 1),
  )
  return timeRemaining.includes(days)
    ? { time: time, unit: 'days' }
    : { time: time, unit: 'minutes' }
}
