import * as fs from 'fs';
import { join } from 'path';

import proxyImageFetcher from '../../../pages/api/image-proxy';

jest.mock('fs', () => ({
  ...jest.requireActual('fs'),
  createReadStream: jest.fn(() => ({
    pipe: jest.fn(),
  })),
}));

const mockRes = () => {
  return {
    setHeader: jest.fn(),
    end: jest.fn(),
  } as any;
};

const defaultImagePath = join(process.cwd(), 'public/images', 'background.jpg');

describe('proxyImageFetcher', () => {
    beforeEach(() => {
        global.fetch = jest.fn();
        jest.spyOn(console, 'error').mockImplementation(() => {});
    });
    
      afterEach(() => {
        jest.restoreAllMocks();
      });

  it('should stream default image if url is undefined', async () => {
    const req = {
      query: {
        url: undefined,
      },
    } as any;
    const res = mockRes();

    await proxyImageFetcher(req, res);

    expect(fs.createReadStream).toHaveBeenCalledWith(defaultImagePath);
    expect(res.setHeader).toHaveBeenCalledWith('Content-Type', 'image/jpeg');
    expect(console.error).toHaveBeenCalledWith('Missing or invalid image url parameter. Url: undefined');
  });

  it('should stream default image if url is not a string', async () => {
    const req = {
      query: {
        url: 1,
      },
    } as any;
    const res = mockRes();

    await proxyImageFetcher(req, res);

    expect(fs.createReadStream).toHaveBeenCalledWith(defaultImagePath);
    expect(res.setHeader).toHaveBeenCalledWith('Content-Type', 'image/jpeg');
    expect(console.error).toHaveBeenCalledWith('Missing or invalid image url parameter. Url: 1');
  });

  it('should stream default image if fetch response !ok', async () => {
    const req = {
      query: {
        url: 'http://www.trashbat.co.ck',
      },
    } as any;
    const res = mockRes();
    (global.fetch as jest.Mock).mockResolvedValue({ ok: false });

    await proxyImageFetcher(req, res);

    expect(fs.createReadStream).toHaveBeenCalledWith(defaultImagePath);
    expect(res.setHeader).toHaveBeenCalledWith('Content-Type', 'image/jpeg');
    expect(console.error).toHaveBeenCalledWith('Response not ok fetching image from: http://www.trashbat.co.ck');
  });

  it('should stream default image if fetch response errors', async () => {
    const req = {
      query: {
        url: 'http://www.trashbat.co.ck',
      },
    } as any;
    const res = mockRes();
    global.fetch = jest.fn().mockRejectedValue(new Error('Network error'));

    await proxyImageFetcher(req, res);

    expect(fs.createReadStream).toHaveBeenCalledWith(defaultImagePath);
    expect(res.setHeader).toHaveBeenCalledWith('Content-Type', 'image/jpeg');
    expect(console.error).toHaveBeenCalledWith('An error occurred while fetching the image from http://www.trashbat.co.ck. Error: Network error');
});
});
