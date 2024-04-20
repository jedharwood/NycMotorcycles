import { rest } from 'msw'

const activeAuctions: ActiveAuction[] = [
    {
        title: 'Vincent Black Shadow',
        url: 'https://www.google.com/',
        image: {
            imageSrc: 'http://placekitten.com/200/300',
            imageAlt: 'An image of a cat',
        },
        timeRemaining: {
            time: 56,
            unit: 'minutes'
        },
        bidders: '3',
        currentPrice: '100',
        promptDecisionPrice: '200'
    },
    {
        title: 'Another Vincent Black Shadow',
        url: 'https://www.google.com/',
        image: {
            imageSrc: 'http://placekitten.com/200/300',
            imageAlt: 'Another image of a cat',
        },
        timeRemaining: {
            time: 9,
            unit: 'hours'
        },
        bidders: '3',
        currentPrice: '100',
    },
    {
        title: 'Yet Another Vincent Black Shadow',
        url: 'https://www.google.com/',
        image: {
            imageSrc: 'http://placekitten.com/200/300',
            imageAlt: 'Are you starting to see a pattern forming, yet?',
        },
        timeRemaining: {
            time: 3,
            unit: 'days'
        },
        bidders: '0',
        currentPrice: '100',
        promptDecisionPrice: '200'
    }
]

export const auctionScraperHandlers = [
    rest.get('api/auction-scraper', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ activeAuctions }))
    })
]

