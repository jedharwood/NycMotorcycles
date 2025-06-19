import { useQuery } from 'react-query';

import { activeAuctions } from '@/__mocks__/test-data/active-auctions';
import ActiveAuctionsPage from '@/pages/active-auctions';
import { render, screen } from '@/test-utils';
import { langs } from '@/types/languages';

jest.mock('react-query', () => ({
    ...jest.requireActual('react-query'),
    useQuery: jest.fn(),
}));

afterEach(() => {
    jest.clearAllMocks();
});

describe('ActiveAuctionsPage', () => {
    it('should render spinner when data is loading', async () => {
        (useQuery as jest.Mock).mockReturnValue({
            isLoading: true,
        });
        render(<ActiveAuctionsPage />);

        const spinner: HTMLElement = await screen.findByTestId(
            'loading-spinner',
            {},
            { timeout: 2000 }
        );
        expect(spinner).toBeInTheDocument();
    });

    describe('should render access denied display when status is 403', () => {
        beforeEach(() => {
            (useQuery as jest.Mock).mockReturnValue({
                isLoading: false,
                data: {
                    status: 403,
                    data: {},
                },
            });
        });

        it('in English', async () => {
            const { container } = render(<ActiveAuctionsPage />);

            expect(container).toMatchSnapshot();
        });

        it('in Japanese', async () => {
            const { container } = render(<ActiveAuctionsPage />, { locale: langs.ja });

            expect(container).toMatchSnapshot();
        });
    });

    describe('should render there has been a problem display when status is 500', () => {
        beforeEach(() => {
            (useQuery as jest.Mock).mockReturnValue({
                isLoading: false,
                data: {
                    status: 500,
                    data: {},
                },
            });
        });

        it('in English', async () => {
            const { container } = render(<ActiveAuctionsPage />);

            expect(container).toMatchSnapshot();
        });

        it('in Japanese', async () => {
            const { container } = render(<ActiveAuctionsPage />, { locale: langs.ja });

            expect(container).toMatchSnapshot();
        });
    });

    describe('should render no active auctions display when activeAuctions is empty array', () => {
        beforeEach(() => {
            (useQuery as jest.Mock).mockReturnValue({
                isLoading: false,
                data: {
                    status: 200,
                    data: {
                        activeAuctions: [],
                    },
                },
            });
        });

        it('in English', async () => {
            const { container } = render(<ActiveAuctionsPage />);

            expect(container).toMatchSnapshot();
        });

        it('in Japanese', async () => {
            const { container } = render(<ActiveAuctionsPage />, { locale: langs.ja });

            expect(container).toMatchSnapshot();
        });
    });

    describe('should render active auctions', () => {
        beforeEach(() => {
            (useQuery as jest.Mock).mockReturnValue({
                isLoading: false,
                data: {
                    status: 200,
                    data: {
                        activeAuctions,
                    },
                },
            });
        });

        it('in English', async () => {
            const { container } = render(<ActiveAuctionsPage />);

            expect(container).toMatchSnapshot();
        });

        it('in Japanese', async () => {
            const { container } = render(<ActiveAuctionsPage />, { locale: langs.ja });

            expect(container).toMatchSnapshot();
        });
    });
});
