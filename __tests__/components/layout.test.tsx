import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from '@/components/layout/layout';
import { IntlProvider } from 'react-intl';
import en from '../../languages/en.json';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

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

  // Add more specific tests for Layout
});
