import { render, screen, waitFor } from '@testing-library/react';
import HomePage from '@/pages';
import { IntlProvider } from 'react-intl';
import en from '../../languages/en.json';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

jest.mock('next/image');

jest.mock('../../public/images/home/', () => ({
  images: {
    racing: {
      image: './racing.jpeg',
      altText: 'pg.home.alt.racing',
    },
  },
}));

describe('HomePage', () => {
  it('should render page in English', () => {
    const { container } = render(
      <IntlProvider locale='en' messages={en}>
        <HomePage />
      </IntlProvider>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render navigate to contact page when ClickForAQuote button is clicked', () => {
    const user = userEvent.setup();
    const {} = render(
      <IntlProvider locale='en' messages={en}>
        <HomePage />
      </IntlProvider>
    );

    const homePageContactButton: HTMLElement = screen.getByTestId('home-page-contact-button'); 

    waitFor(() => {
      user.click(homePageContactButton);
      expect(window.location.pathname).toBe('/contact');
    });
  });
});
