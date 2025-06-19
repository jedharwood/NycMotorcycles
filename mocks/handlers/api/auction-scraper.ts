import { rest } from 'msw';

import { activeAuctions } from '@/__mocks__/test-data/active-auctions';

export const auctionScraperHandlers = [
    rest.get('api/auction-scraper', async (req, res, ctx) => {
        return res(ctx.status(200), ctx.json({ activeAuctions }), ctx.delay(3000));
    }),
];
