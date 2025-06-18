import { setupServer } from 'msw/node';

import { handlers } from '@/mocks/handlers'
import ActiveAuctionsPage from '@/pages/active-auctions';
import { screen } from '@/test-utils';
import { render } from '@/test-utils';

const server = setupServer(...handlers);

describe('ActiveAuctionsPage', () => {
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers);
    afterAll(() => server.close);

    it('should render spinner when data is loading', async () => {
        render(<ActiveAuctionsPage />);

        const spinner = await screen.findByTestId('loading-spinner', {}, { timeout: 2000 });
        
        expect(spinner).toBeInTheDocument();
    });
});
