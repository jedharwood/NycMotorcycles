import { useQuery } from 'react-query';

import ActiveAuctionsPage from '@/pages/active-auctions';
import { render, screen } from '@/test-utils';

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

    it('should render access denied display when status is 403', async () => {
        (useQuery as jest.Mock).mockReturnValue({
            isLoading: false,
            data: {
                status: 403,
                data: {},
            },
        });
        render(<ActiveAuctionsPage />);

        const accessDeniedDisplayText = await screen.findByText(
            'If you are accessing the site from the UK/EU try connecting through a VPN.'
        );
        expect(accessDeniedDisplayText).toBeInTheDocument();
    });

    it('should render there has been a problem display when status is 500', async () => {
        (useQuery as jest.Mock).mockReturnValue({
            isLoading: false,
            data: {
                status: 500,
                data: {},
            },
        });
        render(<ActiveAuctionsPage />);

        const problemDisplayText = await screen.findByText(
            'There has been a problem connecting you to Yahoo auctions'
        );
        expect(problemDisplayText).toBeInTheDocument();
    });
});
