import { screen, waitFor } from '@testing-library/react';
import InvestPage from '@/pages/invest';
import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';
import { renderWithProviders } from '@/__mocks__/test-utils';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

describe('InvestPage', () => {
  it('should render page in English', () => {
    const { container } = renderWithProviders(<InvestPage />);

    expect(container).toMatchSnapshot();
  });

  it('should navigate to contact page when Contact button is clicked', async () => {
    const user = userEvent.setup();
    renderWithProviders(<InvestPage />);

    await expect(mockRouter.asPath).toEqual('/');

    const contactButton: HTMLElement = screen.getByTestId(
      'invest-page-contact-button'
    );

    await waitFor(() => {
      user.click(contactButton);
      expect(mockRouter.asPath).toEqual('/contact');
    });
  });
});
