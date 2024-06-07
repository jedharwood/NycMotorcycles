import HomePage from '@/pages';
import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';
import { render, screen, waitFor, act } from '@/test-utils';

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
    const { container } = render(<HomePage />);

    expect(container).toMatchSnapshot();
  });

  it('should navigate to contact page when ClickForAQuote button is clicked', async () => {
    const user = userEvent.setup();
    render(<HomePage />);

    await expect(mockRouter.asPath).toEqual('/');

    const clickForAQuoteButton: HTMLElement = screen.getByTestId(
      'home-page-contact-button-1'
    );

    await act(() => {
      user.click(clickForAQuoteButton);
    });

    await waitFor(() => {
      expect(mockRouter.asPath).toEqual('/contact');
    });
  });

  it('should navigate to download page when DownloadForms button is clicked', async () => {
    const user = userEvent.setup();
    render(<HomePage />);

    await expect(mockRouter.asPath).toEqual('/');

    const downloadFormsButton: HTMLElement = screen.getByTestId(
      'home-page-download-button'
    );

    await act(() => {
      user.click(downloadFormsButton);
    });

    await waitFor(() => {
      expect(mockRouter.asPath).toEqual('/download');
    });
  });

  it('should navigate to contact page when Contact button is clicked', async () => {
    const user = userEvent.setup();
    render(<HomePage />);

    await expect(mockRouter.asPath).toEqual('/');

    const contactButton: HTMLElement = screen.getByTestId(
      'home-page-contact-button-2'
    );

    await act(() => {
      user.click(contactButton);
    });

    await waitFor(() => {
      expect(mockRouter.asPath).toEqual('/contact');
    });
  });
});
