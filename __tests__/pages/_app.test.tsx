import { AppProps } from 'next/app';

import { render } from '@/test-utils';
import { langs } from '@/types/languages';

import App from '../../pages/_app';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

const renderApp = (Component: React.ComponentType, pageProps: any = {}) => {
    const props: AppProps = {
        Component,
        pageProps,
        router: {
            locale: langs.en,
        } as any,
    };

    return render(<App {...props} />);
};

describe('App', () => {
    const TestPage = (): JSX.Element => <div>Test Page</div>;

    it('renders Layout in English and matches snapshot', () => {
        const { container } = renderApp(TestPage);

        expect(container).toMatchSnapshot();
    });

    it('renders Layout in Japanese and matches snapshot', () => {
        const router = require('next-router-mock');
        router.useRouter = jest.fn(() => ({
            locale: langs.ja,
        }));

        const { container } = renderApp(TestPage);

        expect(container).toMatchSnapshot();
    });
});
