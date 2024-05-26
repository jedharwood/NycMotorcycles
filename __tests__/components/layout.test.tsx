import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from '@/components/layout/layout';
import { IntlProvider } from 'react-intl';
import en from '../../languages/en.json';
import userEvent from '@testing-library/user-event';
import { instagramLink } from '@/utilities/resources';

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

  it('footer instagram button has expected href attribute', () => {
    const user = userEvent.setup();
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
});
