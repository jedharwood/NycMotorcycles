import '@testing-library/jest-dom';
import Footer from '@/components/footer/footer';
import userEvent from '@testing-library/user-event';
import { instagramLink } from '@/utilities/resources';
import { render, screen, waitFor } from '@/test-utils';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));
window.scrollTo = jest.fn();

const footerProps: FooterProps = {
  address: 'mock address',
  disclaimer: 'mock disclaimer',
  chevronText: 'mock chevronText',
  altTextInstagramButton: 'mock altTextInstagramButton'
}

describe('Footer', () => {
  it('instagram button has expected href attribute', () => {
    render(<Footer {...footerProps} />);

    const instagramButton: HTMLElement = screen.getByTestId(
      'instagram-button-footer'
    );

    expect(instagramButton).toHaveAttribute('href', instagramLink);
  });

  it('ScrollToTop button scrolls to top on click', async () => {
    const user = userEvent.setup();
    render(<Footer {...footerProps} />);

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
