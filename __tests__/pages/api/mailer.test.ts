import mailer from '@/pages/api/mailer';

jest.mock('mailgun.js', () => {
    return jest.fn().mockImplementation(() => ({
        client: jest.fn().mockReturnValue({
            messages: {
                create: jest.fn().mockResolvedValue({
                    status: 200,
                    message: 'Queued. Thank you.',
                }),
            },
        }),
    }));
});

const originalEnv = process.env;
const mockEnv = {
    MAILGUN_API_KEY: 'test-api-key',
    MAILGUN_DOMAIN: 'sandbox.domain.mailgun.org',
    DELIVERY_EMAIL: 'receiver@example.com',
};
const mockBody = {
    email: 'sender@example.com',
    subject: 'Test Subject',
    senderName: 'Indian Larry',
    message: 'Hello world!',
};
const req = {
    body: mockBody,
} as any;
const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
} as any;

describe('mailer', () => {
    beforeEach(() => {
        for (const [key, value] of Object.entries(mockEnv)) {
            process.env[key] = String(value);
        }
    });

    afterEach(() => {
        jest.clearAllMocks();
        process.env = originalEnv;
    });

    it('should queue an email and return 200', async () => {
        await mailer(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ message: 'Queued. Thank you.' });
    });

    it('should return 500 if mailgun response contains an error', async () => {
        const Mailgun = (await import('mailgun.js')).default as unknown as jest.Mock;
        const mockedCreate = jest
            .fn()
            .mockRejectedValue(new Error('Message queueing failed'));
        Mailgun.mockImplementation(() => ({
            client: () => ({
                messages: {
                    create: mockedCreate,
                },
            }),
        }));

        await mailer(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({
            message: JSON.stringify(new Error('Message queueing  failed')),
        });
    });
});
