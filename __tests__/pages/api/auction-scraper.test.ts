import yahooAuctionScraper from '@/pages/api/auction-scraper';

import { mockHtml } from '../../../__mocks__/test-data/mock-html';

jest.mock('node-fetch', () => jest.fn());
const { Response } = jest.requireActual('node-fetch');

const originalEnv = process.env;
const mockEnv = {
    SELECTOR_PRODUCT: '.Product',
    SELECTOR_PRODUCT_PRICE: '.Product__price',
    SELECTOR_PRODUCT_TIME: '.Product__time',
    SELECTOR_PRODUCT_TITLE: '.Product__title',
    SELECTOR_PRODUCT_BID: '.Product__bid',
    YAHOO_AUCTION_PROFILE_PAGE_URL: 'https://auctions.yahoo.co.jp/seller/mockseller',
};
const req = {} as any;
const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
} as any;

describe('yahooAuctionScraper', () => {
    beforeEach(() => {
        for (const [key, value] of Object.entries(mockEnv)) {
            process.env[key] = String(value);
        }
        global.fetch = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();
        process.env = originalEnv;
    });

    it('should fetch auction data and return active auctions', async () => {
        (global.fetch as jest.Mock).mockResolvedValue(
            new Response(mockHtml, { status: 200 }) as unknown as Response
        );

        await yahooAuctionScraper(req, res);

        expect(fetch).toHaveBeenCalledWith(mockEnv.YAHOO_AUCTION_PROFILE_PAGE_URL, {
            mode: 'no-cors',
        });
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            activeAuctions: [
                {
                    bidders: '0',
                    currentPrice: '30,000,000円',
                    image: {
                        imageAlt: 'Auction 1',
                        imageSrc: 'https://images.auctions.yahoo.co.jp/image/1',
                    },
                    promptDecisionPrice: '33,000,000円',
                    title: 'Auction 1',
                    url: 'https://page.auctions.yahoo.co.jp/jp/auction/1',
                    timeRemaining: {
                        time: 7,
                        unit: 'days',
                    },
                },
                {
                    bidders: '0',
                    currentPrice: undefined,
                    image: {
                        imageAlt: 'Auction 2',
                        imageSrc: 'https://images.auctions.yahoo.co.jp/image/2',
                    },
                    promptDecisionPrice: '25,000円',
                    title: 'Auction 2',
                    url: 'https://page.auctions.yahoo.co.jp/jp/auction/2',
                    timeRemaining: {
                        time: 4,
                        unit: 'hours',
                    },
                },
                {
                    bidders: undefined,
                    currentPrice: undefined,
                    image: {
                        imageAlt: '',
                        imageSrc: '',
                    },
                    promptDecisionPrice: undefined,
                    title: undefined,
                    url: undefined,
                    timeRemaining: {
                        time: 4,
                        unit: 'minutes',
                    },
                },
                {
                    bidders: undefined,
                    currentPrice: undefined,
                    image: {
                        imageAlt: '',
                        imageSrc: '',
                    },
                    promptDecisionPrice: undefined,
                    title: undefined,
                    url: undefined,
                    timeRemaining: {
                        time: undefined,
                        unit: 'days',
                    },
                },
            ],
        });
    });

    it('should return 403 if fetch response status is 403', async () => {
        (global.fetch as jest.Mock).mockResolvedValue(
            new Response('', { status: 403 }) as unknown as Response
        );

        await yahooAuctionScraper(req, res);

        expect(fetch).toHaveBeenCalledWith(mockEnv.YAHOO_AUCTION_PROFILE_PAGE_URL, {
            mode: 'no-cors',
        });
        expect(res.status).toHaveBeenCalledWith(403);
        expect(res.json).toHaveBeenCalledWith({ activeAuctions: [] });
    });

    it('should return 500 if fetch response contains error', async () => {
        (global.fetch as jest.Mock).mockRejectedValue(new Error('Network error'));

        await yahooAuctionScraper(req, res);

        expect(fetch).toHaveBeenCalledWith(mockEnv.YAHOO_AUCTION_PROFILE_PAGE_URL, {
            mode: 'no-cors',
        });
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ activeAuctions: [] });
    });
});
