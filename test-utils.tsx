import React, { ReactElement } from 'react';

import { render, RenderOptions } from '@testing-library/react';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { IntlProvider } from 'react-intl';
import { QueryClient, QueryClientProvider } from 'react-query';

import en from './languages/en.json';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    const queryClient = new QueryClient();

    return (
        <MemoryRouterProvider>
            <QueryClientProvider client={queryClient}>
                <IntlProvider locale='en' messages={en}>
                    {children}
                </IntlProvider>
            </QueryClientProvider>
        </MemoryRouterProvider>
    );
};

const renderWithProviders = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { renderWithProviders as render };
