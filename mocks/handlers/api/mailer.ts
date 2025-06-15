import { rest } from 'msw';

const domain = process.env.MAILGUN_DOMAIN;

export const mailerHandlers = [
    rest.post(`https://api.mailgun.net/v3/${domain}/messages`, async (req, res, ctx) => {
        const body = req.body as Record<string, any>;
        const subject: string = body.subject;
        const messageId: string = `<20240504100816.e55322d54fd1064e@${domain}.mailgun.org>`;

        if (subject.toLowerCase() === 'fail') {
            return res(
                ctx.json({
                    status: 500,
                    id: messageId,
                    message: 'Failed.',
                }),
                ctx.delay(3000)
            );
        }

        return res(
            ctx.json({
                status: 200,
                id: messageId,
                message: 'Queued. Thank you.',
            }),
            ctx.delay(3000)
        );
    }),
];
