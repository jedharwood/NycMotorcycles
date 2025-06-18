import { useQuery } from 'react-query';

import ActiveAuctionsPage from '@/pages/active-auctions';
import { render, screen } from '@/test-utils';

jest.mock('react-query', () => ({
    ...jest.requireActual('react-query'),
    useQuery: jest.fn(),
}))

afterEach(() => {
    jest.clearAllMocks();
})

describe('ActiveAuctionsPage', () => {
    it('should render spinner when data is loading', async () => {
        (useQuery as jest.Mock).mockReturnValue({
            isLoading: true,
        });
        render(<ActiveAuctionsPage />);

        const spinner: HTMLElement = await screen.findByTestId('loading-spinner', {}, { timeout: 2000 });
        expect(spinner).toBeInTheDocument();
    });

    it('should render no active auctions display when status is 403', async () => {
        (useQuery as jest.Mock).mockReturnValue({
            isLoading: false,
            data: {
                data: {
                    status: 403
                }
            },
        });
        render(<ActiveAuctionsPage />);

        const noAuctionItemDisplayText = await screen.findByText('There are currently no active auctions');
        expect(noAuctionItemDisplayText).toBeInTheDocument();
    });
});
