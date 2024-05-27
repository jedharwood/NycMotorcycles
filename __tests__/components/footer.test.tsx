import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '@/components/footer/footer';
import { IntlProvider } from 'react-intl';
import en from '../../languages/en.json';
import userEvent from '@testing-library/user-event';
import { instagramLink } from '@/utilities/resources';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));
window.scrollTo = jest.fn();

describe('Footer', () => {
  it('instagram button has expected href attribute', () => {
    render(
      <IntlProvider locale='en' messages={en}>
        <Footer />
      </IntlProvider>
    );

    const instagramButton: HTMLElement = screen.getByTestId(
      'instagram-button-footer'
    );

    expect(instagramButton).toHaveAttribute('href', instagramLink);
  });

  it('ScrollToTop button scrolls to top on click', async () => {
    const user = userEvent.setup();
    render(
      <IntlProvider locale='en' messages={en}>
        <Footer />
      </IntlProvider>
    );

    const scrollToTopButton: HTMLElement = screen.getByTestId(
      'scroll-to-top-button'
    );

    await waitFor(() => {
      user.click(scrollToTopButton);
      expect(window.scrollTo).toHaveBeenCalledWith({
        top: 0,
        behavior: 'smooth',
      });
    });
  });
});
