import React, { ReactElement } from 'react';

import { render, RenderOptions } from '@testing-library/react';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { IntlProvider } from 'react-intl';
import { QueryClient, QueryClientProvider } from 'react-query';

import { langs, messages } from './types/languages';

type ProviderProps = {
    children: React.ReactNode;
    locale: string;
};

const AllTheProviders = ({ children, locale }: ProviderProps): JSX.Element => {
    const queryClient = new QueryClient();

    return (
        <MemoryRouterProvider>
            <QueryClientProvider client={queryClient}>
                <IntlProvider locale={locale} messages={messages[locale]}>
                    {children}
                </IntlProvider>
            </QueryClientProvider>
        </MemoryRouterProvider>
    );
};

type RenderWithProvidersOptions = RenderOptions & {
    locale?: string;
};

const renderWithProviders = (
    ui: ReactElement,
    { locale = langs.en, ...renderOptions }: RenderWithProvidersOptions = {}
) =>
    render(ui, {
        wrapper: ({ children }) => (
            <AllTheProviders locale={locale}>{children}</AllTheProviders>
        ),
        ...renderOptions,
    });

export * from '@testing-library/react';
export { renderWithProviders as render };
