import { auctionScraperHandlers } from "./api/auction-scraper"
import { mailerHandlers } from "./api/mailer"

export const handlers = [
    ...auctionScraperHandlers,
    ...mailerHandlers
]