import { render } from '@testing-library/react';
import HomePage from '@/pages';
import { IntlProvider } from 'react-intl';
import en from '../../languages/en.json';
import '@testing-library/jest-dom';

describe('HomePage', () => {
  it('should render...', () => {
    const { getByText } = render(
      <IntlProvider locale='en' messages={en}>
        <HomePage />
      </IntlProvider>
    );

    expect(getByText("What's my bike worth in Japan?")).toBeInTheDocument();
  });
});
