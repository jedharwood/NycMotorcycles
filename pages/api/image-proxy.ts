import { Readable } from 'stream';

import type { NextApiRequest, NextApiResponse } from 'next';

const proxyImageFetcher = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
    const queryUrl = req.query.url;
    const url = Array.isArray(queryUrl) ? queryUrl[0] : queryUrl;

    if (!url || typeof url !== 'string') {
        return res.status(400).json({ error: `Missing or invalid image url parameter. Url: ${url}` });
        // return a default image on failure
    }

    try {
        const response = await fetch(url);

        if (!response.ok) {
            return res.status(response.status).json({ error: `Response not ok fetching image from: ${url}`});
        }

        res.setHeader('Content-Type', response.headers.get('content-type') || 'image/jpeg');
        res.setHeader('Cache-Control', 'public, max-age=3600');

        const readableStream = Readable.from(response.body as any);
        readableStream.pipe(res);
    } catch (error) {
        console.error(`An error occurred while fetching the image from ${url}. Error:`, error);
        res.status(500).json({ error: 'Internal server error'});
    }

};
  
  export default proxyImageFetcher;