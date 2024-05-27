import { render, screen, waitFor } from '@testing-library/react';
import InvestPage from '@/pages/invest';
import { IntlProvider } from 'react-intl';
import en from '../../languages/en.json';
import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

describe('InvestPage', () => {
    it('should render page in English', () => {
    const { container } = render(
      <IntlProvider locale='en' messages={en}>
        <InvestPage />
      </IntlProvider>
    );

    expect(container).toMatchSnapshot();
  });

  it('should navigate to contact page when Contact button is clicked', async () => {
    const user = userEvent.setup();
    render(
      <IntlProvider locale='en' messages={en}>
        <InvestPage />
      </IntlProvider>,
      { wrapper: MemoryRouterProvider }
    );

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
