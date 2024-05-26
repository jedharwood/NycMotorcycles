import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../../pages/_app';
import { AppProps } from 'next/app';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

const renderApp = (Component: React.ComponentType, pageProps: any = {}) => {
  const props: AppProps = {
    Component,
    pageProps,
    router: {
      locale: 'en',
    } as any,
  };

  return render(<App {...props} />);
};

describe('App', () => {
  it('renders Layout and matches snapshot', () => {
    const TestPage = (): JSX.Element => <div>Test Page</div>;

    const { container } = renderApp(TestPage);

    expect(container).toMatchSnapshot();
  });
});
