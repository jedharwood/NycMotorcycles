import { render} from '@testing-library/react';
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
    const { container } = render(
      <IntlProvider locale='en' messages={en}>
        <HomePage />
      </IntlProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
