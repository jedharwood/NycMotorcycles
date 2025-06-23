import userEvent from '@testing-library/user-event';
import { AppProps } from 'next/app';
import mockRouter from 'next-router-mock';

import { render, act, screen, waitFor } from '@/test-utils';
import { langs } from '@/types/languages';

import App from '../../pages/_app';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

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

const checkHomePageNavLinkIsActive = async (): Promise<void> => {
    await waitFor(() => {
        const homeNavLink: HTMLElement = screen.getByTestId('nav-link-home-desktop');
        expect(homeNavLink).toHaveClass(activeNavLinkClasses);
    });

    await checkRacingPageNavLinkIsActive(false);
};

const checkRacingPageNavLinkIsActive = async (
    shouldBeActive: boolean = true
): Promise<void> => {
    await waitFor(() => {
        const racingNavLink: HTMLElement = screen.getByTestId(navLinkRacingDesktopTestId);
        shouldBeActive
            ? expect(racingNavLink).toHaveClass(activeNavLinkClasses)
            : expect(racingNavLink).not.toHaveClass(activeNavLinkClasses);
    });
};

describe('App', () => {
    beforeEach(() => {
        mockRouter.setCurrentUrl('/');
        mockRouter.locale = langs.en;
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    const TestPage = (): JSX.Element => <div>Test Page</div>;

    it('renders Layout in English and matches snapshot', () => {
        const { container } = renderApp(TestPage);

        expect(container).toMatchSnapshot();
    });

    it('renders Layout in Japanese and matches snapshot', () => {
        mockRouter.locale = langs.ja;
        const { container } = renderApp(TestPage);

        expect(container).toMatchSnapshot();
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

            await checkRacingPageNavLinkIsActive();
        });

        it('should set active style on home link when logo image is clicked', async () => {
            mockRouter.setCurrentUrl('/racing');
            renderApp(TestPage);

            await checkRacingPageNavLinkIsActive();

            await act(() => {
                const nycmcLogo: HTMLElement = screen.getByAltText(
                    'New york city motorcycles logo'
                );
                userEvent.click(nycmcLogo);
            });

            await checkHomePageNavLinkIsActive();
        });

        it('should set active style on home link when header h1 page name is clicked', async () => {
            mockRouter.setCurrentUrl('/racing');
            renderApp(TestPage);

            await checkRacingPageNavLinkIsActive();

            await act(() => {
                const homepageLinks = screen.getAllByRole('link', {
                    name: /new york city motorcycles/i,
                });
                const textLink = homepageLinks.find((link) => link.querySelector('h1'));
                userEvent.click(textLink!);
            });

            await checkHomePageNavLinkIsActive();
        });

        // can maybe click test the flag lang switcher...
        // test click mibile menu
    });
});
