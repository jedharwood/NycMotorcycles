import userEvent from '@testing-library/user-event';
import { AppProps } from 'next/app';
import mockRouter from 'next-router-mock';

import { render, act, screen, waitFor, within } from '@/test-utils';
import { langs } from '@/types/languages';

import App from '../../pages/_app';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));
const mockPush = jest.spyOn(mockRouter, 'push');

const renderApp = (Component: React.ComponentType, pageProps: any = {}) => {
    const props: AppProps = {
        Component,
        pageProps,
        router: mockRouter as any,
    };

    return render(<App {...props} />);
};

const activeNavLinkClasses: string = 'underline opacity-100';
const navLinkRacingDesktopTestId: string = 'nav-link-racing-desktop';
const languageSwitcherTestId: string = 'language-switcher';

const checkHomePageNavLinkIsActiveAsync = async (): Promise<void> => {
    await waitFor(() => {
        const homeNavLink: HTMLElement = screen.getByTestId('nav-link-home-desktop');
        expect(homeNavLink).toHaveClass(activeNavLinkClasses);
    });
    await checkRacingPageNavLinkIsActiveAsync(false);
};

const checkRacingPageNavLinkIsActiveAsync = async (
    shouldBeActive: boolean = true
): Promise<void> => {
    await waitFor(() => {
        const racingNavLink: HTMLElement = screen.getByTestId(navLinkRacingDesktopTestId);
        shouldBeActive
            ? expect(racingNavLink).toHaveClass(activeNavLinkClasses)
            : expect(racingNavLink).not.toHaveClass(activeNavLinkClasses);
    });
};

const navigateToRacingPageAsync = async () => {
    await act(() => {
        const racingNavLink: HTMLElement = screen.getByTestId(
            navLinkRacingDesktopTestId
        );
        userEvent.click(racingNavLink);
    });
    await checkRacingPageNavLinkIsActiveAsync();
};

const checkLanguageSwitcherRendersWithExpectedTitleAsync = async (expectedTitle: string) => {
    await waitFor(() => {
        const languageSwitcher = screen.getByTestId(languageSwitcherTestId);
        const languageSwitcherFlagTitle = within(languageSwitcher).getByTitle(expectedTitle);

        expect(languageSwitcherFlagTitle).toBeInTheDocument();
    });
};

const clickLanguageSwitcherAsync = async () => {
    await act(() => {
        const languageSwitcher = screen.getByTestId(languageSwitcherTestId);
        userEvent.click(languageSwitcher);
    });
};

describe('App', () => {
    beforeEach(() => {
        mockRouter.setCurrentUrl('/');
        mockRouter.locale = langs.en;
    });

    afterEach(() => {
        mockPush.mockClear();
        jest.clearAllMocks();
    });

    const TestPage = (): JSX.Element => <div>Test Page</div>;

    describe('when locale: en', () => {
        it('should render Layout in English and matches snapshot', () => {
            const { container } = renderApp(TestPage);
    
            expect(container).toMatchSnapshot();
        });
    
        it('should render language switcher with title 日本語', async () => {
            renderApp(TestPage);

            await checkLanguageSwitcherRendersWithExpectedTitleAsync('日本語');
        });

        it('should switch locale to ja when language switcher clicked', async () => {
            renderApp(TestPage);
            await checkLanguageSwitcherRendersWithExpectedTitleAsync('日本語');

            await clickLanguageSwitcherAsync();

            await waitFor(() => {
                expect(mockPush).toHaveBeenCalledWith(
                    { pathname: '/', query: {} },
                    '/',
                    { locale: langs.ja }
                );
            });
        });
    });

    describe('when locale: ja', () => {
        beforeEach(async () => {
            await act(() => {
                mockRouter.locale = langs.ja;
            });
        });

        it('renders Layout in Japanese and matches snapshot', () => {
            const { container } = renderApp(TestPage);
    
            expect(container).toMatchSnapshot();
        });

        it('renders language switcher with title English', async () => {
            renderApp(TestPage);

            await checkLanguageSwitcherRendersWithExpectedTitleAsync('English');
        });

        it('should switch locale to en when language switcher clicked', async () => {
            renderApp(TestPage);
            await checkLanguageSwitcherRendersWithExpectedTitleAsync('English');

            await clickLanguageSwitcherAsync();

            await waitFor(() => {
                expect(mockPush).toHaveBeenCalledWith(
                    { pathname: '/', query: {} },
                    '/',
                    { locale: langs.en }
                );
            });
        });
    });
    

    describe('Header component', () => {
        it('should set active style on clicked nav link', async () => {
            renderApp(TestPage);

            await act(() => {
                const racingNavLink: HTMLElement = screen.getByTestId(
                    navLinkRacingDesktopTestId
                );
                userEvent.click(racingNavLink);
            });

            await checkRacingPageNavLinkIsActiveAsync();
        });

        it('should set active style on home link when logo image is clicked', async () => {
            renderApp(TestPage);
            await navigateToRacingPageAsync();

            await act(() => {
                const nycmcLogo: HTMLElement = screen.getByAltText(
                    'New york city motorcycles logo'
                );
                userEvent.click(nycmcLogo);
            });

            await checkHomePageNavLinkIsActiveAsync();
        });

        it('should set active style on home link when header h1 page name is clicked', async () => {
            renderApp(TestPage);
            await navigateToRacingPageAsync();

            await act(() => {
                const homepageLinks = screen.getAllByRole('link', {
                    name: /new york city motorcycles/i,
                });
                const textLink = homepageLinks.find((link) => link.querySelector('h1'));
                userEvent.click(textLink!);
            });

            await checkHomePageNavLinkIsActiveAsync();
        });
    });
});
