import { render, screen, waitFor } from '@testing-library/react';
import HomePage from '@/pages';
import { IntlProvider } from 'react-intl';
import en from '../../languages/en.json';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

jest.mock('next/image');

jest.mock('../../public/images/home/', () => ({
  images: {
    racing: {
      image: './racing.jpeg',
      altText: 'pg.home.alt.racing',
    },
  },
}));

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

describe('HomePage', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render page in English', () => {
    const { container } = render(
      <IntlProvider locale='en' messages={en}>
        <HomePage />
      </IntlProvider>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render navigate to contact page when ClickForAQuote button is clicked', async () => {
    const user = userEvent.setup();
    render(
      <IntlProvider locale='en' messages={en}>
        <HomePage />
      </IntlProvider>,
      { wrapper: MemoryRouterProvider }
    );

    await expect(mockRouter.asPath).toEqual('/');

    const clickForAQuoteButton: HTMLElement = screen.getByTestId(
      'home-page-contact-button-1'
    );

    await waitFor(() => {
      user.click(clickForAQuoteButton);
      expect(mockRouter.asPath).toEqual('/contact');
    });
  });

  it('should render navigate to download page when DownloadForms button is clicked', async () => {
    const user = userEvent.setup();
    render(
      <IntlProvider locale='en' messages={en}>
        <HomePage />
      </IntlProvider>,
      { wrapper: MemoryRouterProvider }
    );

    await expect(mockRouter.asPath).toEqual('/');

    const downloadFormsButton: HTMLElement = screen.getByTestId(
      'home-page-download-button'
    );

    await waitFor(() => {
      user.click(downloadFormsButton);
      expect(mockRouter.asPath).toEqual('/download');
    });
  });

  it('should render navigate to contact page when Contact button is clicked', async () => {
    const user = userEvent.setup();
    render(
      <IntlProvider locale='en' messages={en}>
        <HomePage />
      </IntlProvider>,
      { wrapper: MemoryRouterProvider }
    );

    await expect(mockRouter.asPath).toEqual('/');

    const contactButton: HTMLElement = screen.getByTestId(
      'home-page-contact-button-2'
    );

    await waitFor(() => {
      user.click(contactButton);
      expect(mockRouter.asPath).toEqual('/contact');
    });
  });
});
