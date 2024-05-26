import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from '@/components/layout/layout';
import { IntlProvider } from 'react-intl';
import en from '../../languages/en.json';
import userEvent from '@testing-library/user-event';
import { instagramLink } from '@/utilities/resources';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));
window.scrollTo = jest.fn();

describe('Layout', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <IntlProvider locale='en' messages={en}>
        <Layout>
          <div>Test Child</div>
        </Layout>
      </IntlProvider>
    );

    expect(container).toMatchSnapshot();
  });

  it('footer instagram button has expected href attribute', () => {
    render(
      <IntlProvider locale='en' messages={en}>
        <Layout>
          <div>Test Child</div>
        </Layout>
      </IntlProvider>
    );

    const instagramButton: HTMLElement = screen.getByTestId(
      'instagram-button-footer'
    );

    expect(instagramButton).toHaveAttribute('href', instagramLink);
  });

  it('footer ScrollToTop button scrolls to top on click', async () => {
    const user = userEvent.setup();
    render(
      <IntlProvider locale='en' messages={en}>
        <Layout>
          <div>Test Child</div>
        </Layout>
      </IntlProvider>
    );

    const scrollToTopButton: HTMLElement = screen.getByTestId(
      'scroll-to-top-button'
    );

    await waitFor(() => {
      user.click(scrollToTopButton);
      expect(window.scrollTo).toHaveBeenCalledTimes(1);
      expect(window.scrollTo).toHaveBeenCalledWith({
        top: 0,
        behavior: 'smooth',
      });
    });
  });
});
