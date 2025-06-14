import { AppProps } from 'next/app';

import { render } from '@/test-utils';

import App from '../../pages/_app';

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
