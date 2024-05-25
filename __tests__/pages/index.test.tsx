import { render } from '@testing-library/react';
import HomePage from '@/pages';
import { IntlProvider } from 'react-intl';
import en from '../../languages/en.json';
import '@testing-library/jest-dom';

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
    const { getByText, getByAltText } = render(
      <IntlProvider locale='en' messages={en}>
        <HomePage />
      </IntlProvider>
    );

    expect(getByText("What's my bike worth in Japan?")).toBeInTheDocument();
    expect(
      getByAltText(
        'An image of Larry from New York City Motorcycles racing a vintage orange Laverda around a track.'
      )
    ).toBeInTheDocument();
  });
});

