import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter, NextRouter } from 'next/router';

import LanguageSwitcher from '@/components/language-switcher/language-switcher';
import { langs } from '@/types/languages';

jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));

describe('LanguageSwitcher', () => {
    let mockPush: jest.Mock;
    const routerProps: Partial<NextRouter> = {
        pathname: '/test',
        query: {},
        asPath: '/test',
    };

    beforeEach(() => {
        mockPush = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('when locale is en', () => {
        beforeEach(() => {
            (useRouter as jest.Mock).mockReturnValue({
                ...routerProps,
                locale: langs.en,
                push: mockPush,
            });
        });

        it('should display the Japanese flag', () => {
            render(<LanguageSwitcher />);
            const jpFlag: HTMLElement = screen.getByTitle('日本語');

            expect(jpFlag).toBeInTheDocument();
        });

        it('should switch locale to ja onClick', async () => {
            render(<LanguageSwitcher />);
            const languageSwitcherButton: HTMLElement = screen.getByRole('button');

            await act(() => {
                userEvent.click(languageSwitcherButton);
            });

            await waitFor(() => {
                expect(mockPush).toHaveBeenCalledWith(
                    { pathname: '/test', query: {} },
                    '/test',
                    { locale: langs.ja }
                );
            });
        });
    });

    describe('when locale is ja', () => {
        beforeEach(() => {
            (useRouter as jest.Mock).mockReturnValue({
                ...routerProps,
                locale: langs.ja,
                push: mockPush,
            });
        });

        it('should display the US flag', () => {
            render(<LanguageSwitcher />);
            const usFlag: HTMLElement = screen.getByTitle('English');

            expect(usFlag).toBeInTheDocument();
        });

        it('should switch locale to en onClick', async () => {
            render(<LanguageSwitcher />);
            const languageSwitcherButton: HTMLElement = screen.getByRole('button');

            await act(() => {
                userEvent.click(languageSwitcherButton);
            });

            await waitFor(() => {
                expect(mockPush).toHaveBeenCalledWith(
                    { pathname: '/test', query: {} },
                    '/test',
                    { locale: langs.en }
                );
            });
        });
    });
});
