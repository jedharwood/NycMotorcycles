import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import en from './languages/en.json';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <MemoryRouterProvider>
      <IntlProvider locale='en' messages={en}>
        {children}
      </IntlProvider>
    </MemoryRouterProvider>
  );
};

const renderWithProviders = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { renderWithProviders as render };
