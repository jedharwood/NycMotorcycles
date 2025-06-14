import * as fs from 'fs';
import { join } from 'path';

import proxyImageFetcher from '../../../pages/api/image-proxy';

jest.mock('fs', () => ({
    ...jest.requireActual('fs'),
    createReadStream: jest.fn(() => ({
        pipe: jest.fn(),
    })),
}));

describe('proxyImageFetcher', () => {
    let req = {} as any;
    const res = {
        setHeader: jest.fn(),
        end: jest.fn(),
    } as any;
    const imageUrl = 'http://www.trashbat.co.ck'

    beforeEach(() => {
        req = {
            query: {
                url: imageUrl,
            },
        } as any;
        global.fetch = jest.fn();
        jest.spyOn(console, 'error').mockImplementation(() => {});
    });
    
    afterEach(() => {
        req = null;
        jest.restoreAllMocks();
    });

    describe('should stream default image', () => {
        const defaultImagePath = join(process.cwd(), 'public/images', 'background.jpg');

        it('when url is undefined', async () => {
            req.query.url = undefined;
    
            await proxyImageFetcher(req, res);
    
            expect(fetch).not.toHaveBeenCalled();
            expect(fs.createReadStream).toHaveBeenCalledWith(defaultImagePath);
            expect(res.setHeader).toHaveBeenCalledWith('Content-Type', 'image/jpeg');
            expect(console.error).toHaveBeenCalledWith('Missing or invalid image url parameter. Url: undefined');
        });
    
        it('when url is not a string', async () => {
            req.query.url = 1;
    
            await proxyImageFetcher(req, res);
    
            expect(fetch).not.toHaveBeenCalled();
            expect(fs.createReadStream).toHaveBeenCalledWith(defaultImagePath);
            expect(res.setHeader).toHaveBeenCalledWith('Content-Type', 'image/jpeg');
            expect(console.error).toHaveBeenCalledWith('Missing or invalid image url parameter. Url: 1');
        });
    
        it('when fetch response !ok', async () => {
            (global.fetch as jest.Mock).mockResolvedValue({ ok: false });
    
            await proxyImageFetcher(req, res);
    
            expect(fetch).toHaveBeenCalledTimes(1);
            expect(fetch).toHaveBeenCalledWith(imageUrl);
            expect(fs.createReadStream).toHaveBeenCalledWith(defaultImagePath);
            expect(res.setHeader).toHaveBeenCalledWith('Content-Type', 'image/jpeg');
            expect(console.error).toHaveBeenCalledWith(`Response not ok fetching image from: ${imageUrl}`);
        });
    
        it('when fetch response contains error', async () => {
            global.fetch = jest.fn().mockRejectedValue(new Error('Network error'));
    
            await proxyImageFetcher(req, res);
    
            expect(fetch).toHaveBeenCalledTimes(1);
            expect(fetch).toHaveBeenCalledWith(imageUrl);
            expect(fs.createReadStream).toHaveBeenCalledWith(defaultImagePath);
            expect(res.setHeader).toHaveBeenCalledWith('Content-Type', 'image/jpeg');
            expect(console.error).toHaveBeenCalledWith(`An error occurred while fetching the image from ${imageUrl}. Error: Network error`);
        });
    });
});
