import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import { QueryClient, QueryClientProvider } from 'react-query';

import Layout from '@/components/layout/layout';
import { langs, messages } from '@/types/languages';

import { AppContext } from '../context/app-context';
import { useAppContext } from '../context/use-app-context';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'true') {
    import('../mocks').then(({ setupMocks }) => {
        setupMocks();
    });
}

export default function App({ Component, pageProps }: AppProps) {
    const [state, actions] = useAppContext();
    const { locale = langs.en } = useRouter();
    const queryClient = new QueryClient();

    return (
        <AppContext.Provider value={{ ...state, ...actions }}>
            <QueryClientProvider client={queryClient} contextSharing={false}>
                <IntlProvider locale={locale} messages={messages[locale]}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </IntlProvider>
            </QueryClientProvider>
        </AppContext.Provider>
    );
}
