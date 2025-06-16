import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';

import InvestPage from '@/pages/invest';
import { render, screen, waitFor, act } from '@/test-utils';
import { langs } from '@/utilities/resources';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

describe('InvestPage', () => {
    it('should render page in English', () => {
        const { container } = render(<InvestPage />);

        expect(container).toMatchSnapshot();
    });

    it('should render page in Japanese', () => {
        const { container } = render(<InvestPage />, { locale: langs.ja });

        expect(container).toMatchSnapshot();
    });

    it('should navigate to contact page when Contact button is clicked', async () => {
        const user = userEvent.setup();
        render(<InvestPage />);

        await expect(mockRouter.asPath).toEqual('/');

        const contactButton: HTMLElement = screen.getByTestId(
            'invest-page-contact-button'
        );

        await act(() => {
            user.click(contactButton);
        });

        await waitFor(() => {
            expect(mockRouter.asPath).toEqual('/contact');
        });
    });
});
