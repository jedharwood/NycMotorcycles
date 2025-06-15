import { createReadStream } from 'fs';
import { join } from 'path';
import { Readable } from 'stream';

import type { NextApiRequest, NextApiResponse } from 'next';

const proxyImageFetcher = async (
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void> => {
    const queryUrl = req.query.url;
    const url = Array.isArray(queryUrl) ? queryUrl[0] : queryUrl;

    if (!url || typeof url !== 'string') {
        return streamDefaultImageOnFailure(
            res,
            `Missing or invalid image url parameter. Url: ${url}`
        );
    }

    try {
        const response = await fetch(url);

        if (!response.ok) {
            return streamDefaultImageOnFailure(
                res,
                `Response not ok fetching image from: ${url}`
            );
        }

        res.setHeader(
            'Content-Type',
            response.headers.get('content-type') || 'image/jpeg'
        );
        res.setHeader('Cache-Control', 'public, max-age=3600');

        const readableStream = Readable.from(response.body as any);
        readableStream.pipe(res);
    } catch (error) {
        return streamDefaultImageOnFailure(
            res,
            `An error occurred while fetching the image from ${url}. ${error}`
        );
    }
};

export default proxyImageFetcher;

const streamDefaultImageOnFailure = (
    res: NextApiResponse,
    errorMessage: string
): void => {
    console.error(errorMessage);

    const defaultImagePath = join(
        process.cwd(),
        'public/images',
        'background.jpg'
    );
    res.setHeader('Content-Type', 'image/jpeg');

    createReadStream(defaultImagePath).pipe(res);
};
