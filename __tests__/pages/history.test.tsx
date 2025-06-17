import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';

import HistoryPage from '@/pages/history';
import { render, screen, waitFor, act } from '@/test-utils';
import { langs } from '@/types/languages';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

describe('HistoryPage', () => {
    beforeEach(() => {
        mockRouter.setCurrentUrl('/history');
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should render page in English', () => {
        const { container } = render(<HistoryPage />);

        expect(container).toMatchSnapshot();
    });

    it('should render page in Japanese', () => {
        const { container } = render(<HistoryPage />, { locale: langs.ja });

        expect(container).toMatchSnapshot();
    });

    it('should navigate to home page when Home button is clicked', async () => {
        const user = userEvent.setup();
        render(<HistoryPage />);

        await expect(mockRouter.asPath).toEqual('/history');

        const homeButton: HTMLElement = screen.getByTestId('history-page-home-button');

        await act(() => {
            userEvent.click(homeButton);
        });

        await waitFor(() => {
            expect(mockRouter.asPath).toEqual('/');
        });
    });
});
