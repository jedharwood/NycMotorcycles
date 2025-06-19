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

// mock fetch as well as useQuery/instead of...
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

    it('should render access denied display in English when status is 403', async () => {
        (useQuery as jest.Mock).mockReturnValue({
            isLoading: false,
            data: {
                status: 403,
                data: {},
            },
        });
        const { container } = render(<ActiveAuctionsPage />);

        expect(container).toMatchSnapshot();
    });

    it('should render access denied display in Japanese when status is 403', async () => {
        (useQuery as jest.Mock).mockReturnValue({
            isLoading: false,
            data: {
                status: 403,
                data: {},
            },
        });
        const { container } = render(<ActiveAuctionsPage />, { locale: langs.ja });

        expect(container).toMatchSnapshot();
    });

    it('should render there has been a problem display in English when status is 500', async () => {
        (useQuery as jest.Mock).mockReturnValue({
            isLoading: false,
            data: {
                status: 500,
                data: {},
            },
        });
        const { container } = render(<ActiveAuctionsPage />);

        expect(container).toMatchSnapshot();
    });

    it('should render there has been a problem display in Japanese when status is 500', async () => {
        (useQuery as jest.Mock).mockReturnValue({
            isLoading: false,
            data: {
                status: 500,
                data: {},
            },
        });
        const { container } = render(<ActiveAuctionsPage />, { locale: langs.ja });

        expect(container).toMatchSnapshot();
    });

    it('should render no active auctions display in English when activeAuctions is empty array', async () => {
        (useQuery as jest.Mock).mockReturnValue({
            isLoading: false,
            data: {
                status: 200,
                data: {
                    activeAuctions: []
                },
            },
        });
        const { container } = render(<ActiveAuctionsPage />);

        expect(container).toMatchSnapshot();
    });

    it('should render no active auctions display in Japanese when activeAuctions is empty array', async () => {
        (useQuery as jest.Mock).mockReturnValue({
            isLoading: false,
            data: {
                status: 200,
                data: {
                    activeAuctions: []
                },
            },
        });
        const { container } = render(<ActiveAuctionsPage />, { locale: langs.ja });

        expect(container).toMatchSnapshot();
    });

    it('should render active auctions in English', async () => {
        (useQuery as jest.Mock).mockReturnValue({
            isLoading: false,
            data: {
                status: 200,
                data: {
                    activeAuctions
                },
            },
        });
        const { container } = render(<ActiveAuctionsPage />);

        expect(container).toMatchSnapshot();
    });

    it('should render active auctions in Japanese', async () => {
        (useQuery as jest.Mock).mockReturnValue({
            isLoading: false,
            data: {
                status: 200,
                data: {
                    activeAuctions
                },
            },
        });
        const { container } = render(<ActiveAuctionsPage />, { locale: langs.ja });

        expect(container).toMatchSnapshot();
    });
});
