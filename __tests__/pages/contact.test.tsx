import userEvent from '@testing-library/user-event';

import ContactPage from '@/pages/contact';
import { render, screen, waitFor, act } from '@/test-utils';
import { langs } from '@/types/languages';

const emailValidationMessage: string = 'Please enter a valid email address';
const requiredFieldValidationMessage: string = 'This is a required field';
const validInput: string = 'valid input';
const invalidEmailAddress: string = 'invalid email address';
const validEmailAddress: string = 'valid.email@address.co.ck';

const contactFormSubmitButtonTestId: string = 'contact-form-submit-button';
const confirmationModalCloseButtonTestId: string = 'confirmation-modal-close-button';
const confirmationModalRetryButtonTestId: string = 'confirmation-modal-retry-button';

const findAndPopulateInputAsync = async (
    screen: any,
    testId: string,
    value: string
): Promise<void> => {
    const input: HTMLElement = screen.getByTestId(testId);
    await userEvent.type(input, value);
};

const clickButtonAsync = async (screen: any, testId: string): Promise<void> => {
    const button: HTMLElement = screen.getByTestId(testId);
    await userEvent.click(button);
};

describe('ContactPage', () => {
    beforeEach(() => {
        global.fetch = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render page in English', () => {
        const { container } = render(<ContactPage />);

        expect(container).toMatchSnapshot();
    });

    it('should render page in Japanese', () => {
        const { container } = render(<ContactPage />, { locale: langs.ja });

        expect(container).toMatchSnapshot();
    });

    it('validator should display message for invalid email input and prevent submission on click', async () => {
        render(<ContactPage />);
        await findAndPopulateInputAsync(screen, 'email', invalidEmailAddress);
        await findAndPopulateInputAsync(screen, 'senderName', validInput);
        await findAndPopulateInputAsync(screen, 'subject', validInput);
        await findAndPopulateInputAsync(screen, 'message', validInput);

        await act(() => {
            clickButtonAsync(screen, contactFormSubmitButtonTestId);
        });

        await waitFor(() => {
            expect(screen.queryByText(emailValidationMessage)).toBeInTheDocument();
            expect(
                screen.queryByText(requiredFieldValidationMessage)
            ).not.toBeInTheDocument();
            expect(fetch).toHaveBeenCalledTimes(0);
        });
    });

    it('validator should display message for empty email input and prevent submission on click', async () => {
        render(<ContactPage />);
        await findAndPopulateInputAsync(screen, 'senderName', validInput);
        await findAndPopulateInputAsync(screen, 'subject', validInput);
        await findAndPopulateInputAsync(screen, 'message', validInput);

        await act(() => {
            clickButtonAsync(screen, contactFormSubmitButtonTestId);
        });

        await waitFor(() => {
            expect(screen.queryByText(emailValidationMessage)).toBeInTheDocument();
            expect(
                screen.queryByText(requiredFieldValidationMessage)
            ).not.toBeInTheDocument();
            expect(fetch).toHaveBeenCalledTimes(0);
        });
    });

    it('validator should display message for empty senderName input and prevent submission on click', async () => {
        render(<ContactPage />);
        await findAndPopulateInputAsync(screen, 'email', validEmailAddress);
        await findAndPopulateInputAsync(screen, 'subject', validInput);
        await findAndPopulateInputAsync(screen, 'message', validInput);

        await act(() => {
            clickButtonAsync(screen, contactFormSubmitButtonTestId);
        });

        await waitFor(() => {
            expect(screen.queryByText(emailValidationMessage)).not.toBeInTheDocument();
            expect(screen.queryAllByText(requiredFieldValidationMessage).length).toEqual(
                1
            );
            expect(fetch).toHaveBeenCalledTimes(0);
        });
    });

    it('validator should display message for empty subject input and prevent submission on click', async () => {
        render(<ContactPage />);
        await findAndPopulateInputAsync(screen, 'email', validEmailAddress);
        await findAndPopulateInputAsync(screen, 'senderName', validInput);
        await findAndPopulateInputAsync(screen, 'message', validInput);

        await act(() => {
            clickButtonAsync(screen, contactFormSubmitButtonTestId);
        });

        await waitFor(() => {
            expect(screen.queryByText(emailValidationMessage)).not.toBeInTheDocument();
            expect(screen.queryAllByText(requiredFieldValidationMessage).length).toEqual(
                1
            );
            expect(fetch).toHaveBeenCalledTimes(0);
        });
    });

    it('validator should display message for empty message input and prevent submission on click', async () => {
        render(<ContactPage />);
        await findAndPopulateInputAsync(screen, 'email', validEmailAddress);
        await findAndPopulateInputAsync(screen, 'senderName', validInput);
        await findAndPopulateInputAsync(screen, 'subject', validInput);

        await act(() => {
            clickButtonAsync(screen, contactFormSubmitButtonTestId);
        });

        await waitFor(() => {
            expect(screen.queryByText(emailValidationMessage)).not.toBeInTheDocument();
            expect(screen.queryAllByText(requiredFieldValidationMessage).length).toEqual(
                1
            );
            expect(fetch).toHaveBeenCalledTimes(0);
        });
    });

    it('validator should display multiple validation messages and prevent submission on click', async () => {
        render(<ContactPage />);

        await act(() => {
            clickButtonAsync(screen, contactFormSubmitButtonTestId);
        });

        await waitFor(() => {
            expect(screen.queryByText(emailValidationMessage)).toBeInTheDocument();
            expect(screen.queryAllByText(requiredFieldValidationMessage).length).toEqual(
                3
            );
            expect(fetch).toHaveBeenCalledTimes(0);
        });
    });

    it('validator should display no validation messages if all inputs valid and submit on click', async () => {
        render(<ContactPage />);
        await findAndPopulateInputAsync(screen, 'email', validEmailAddress);
        await findAndPopulateInputAsync(screen, 'senderName', validInput);
        await findAndPopulateInputAsync(screen, 'subject', validInput);
        await findAndPopulateInputAsync(screen, 'message', validInput);

        await act(() => {
            clickButtonAsync(screen, contactFormSubmitButtonTestId);
        });

        await waitFor(() => {
            expect(screen.queryByText(emailValidationMessage)).not.toBeInTheDocument();
            expect(
                screen.queryByText(requiredFieldValidationMessage)
            ).not.toBeInTheDocument();
            expect(fetch).toHaveBeenCalledTimes(1);
            expect(fetch).toHaveBeenCalledWith('/api/mailer', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: validEmailAddress,
                    senderName: validInput,
                    subject: validInput,
                    message: validInput,
                }),
            });
        });
    });

    it('should display success confirmation modal on successful submission', async () => {
        const confirmationModalSuccessMessage: string =
            'Your message has been sent. We will reply as soon as we can.';
        (global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue({}), // don't think I can get rid of the json
        });
        render(<ContactPage />);
        await findAndPopulateInputAsync(screen, 'email', validEmailAddress);
        await findAndPopulateInputAsync(screen, 'senderName', validInput);
        await findAndPopulateInputAsync(screen, 'subject', validInput);
        await findAndPopulateInputAsync(screen, 'message', validInput);

        await act(() => {
            clickButtonAsync(screen, contactFormSubmitButtonTestId);
        });

        await waitFor(() => {
            expect(
                screen.queryByText(confirmationModalSuccessMessage)
            ).toBeInTheDocument();
            const closeButton: HTMLElement = screen.getByTestId(
                'confirmation-modal-close-button'
            );
            expect(closeButton).toBeInTheDocument();
        });

        await act(() => {
            clickButtonAsync(screen, confirmationModalCloseButtonTestId);
        });

        await waitFor(() => {
            expect(
                screen.queryByText(confirmationModalSuccessMessage)
            ).not.toBeInTheDocument();
            // can I assert that the button is not present by test id?
            expect(screen.queryByText('Close')).not.toBeInTheDocument();
            // can I give the modal an Id and assert on that?
        });
    });

    it('should display retry confirmation modal on failed submission', async () => {
        const somethingWentWrongMessage: string = 'Something went wrong';
        const tryAgainMessage: string = 'Try again?';
        (global.fetch as jest.Mock).mockResolvedValue({
            ok: false,
            // json: jest.fn().mockResolvedValue({}), // maybe I can lose the json?
        });
        render(<ContactPage />);
        await findAndPopulateInputAsync(screen, 'email', validEmailAddress);
        await findAndPopulateInputAsync(screen, 'senderName', validInput);
        await findAndPopulateInputAsync(screen, 'subject', validInput);
        await findAndPopulateInputAsync(screen, 'message', validInput);

        await act(() => {
            clickButtonAsync(screen, contactFormSubmitButtonTestId);
        });

        await waitFor(() => {
            expect(
                screen.queryByText(somethingWentWrongMessage)
            ).toBeInTheDocument();
            expect(
                screen.queryByText(tryAgainMessage)
            ).toBeInTheDocument();
            const closeButton: HTMLElement = screen.getByTestId(
                confirmationModalCloseButtonTestId
            );
            expect(closeButton).toBeInTheDocument();
            const retryButton: HTMLElement = screen.getByTestId(
                confirmationModalRetryButtonTestId
            );
            expect(retryButton).toBeInTheDocument();
        });

        await act(() => {
            clickButtonAsync(screen, confirmationModalCloseButtonTestId);
        });

        await waitFor(() => {
            expect(
                screen.queryByText(somethingWentWrongMessage)
            ).not.toBeInTheDocument();
            expect(
                screen.queryByText(tryAgainMessage)
            ).not.toBeInTheDocument();
            // can I assert that the button is not present by test id?
            expect(screen.queryByText('Close')).not.toBeInTheDocument();
            // can I give the modal an Id and assert on that?
        });
    });

    it.only('should display failed completely confirmation modal on after three retries', async () => {
        const somethingWentWrongMessage: string = 'Something went wrong';
        const tryAgainMessage: string = 'Try again?';
        (global.fetch as jest.Mock).mockResolvedValue({
            ok: false,
            json: jest.fn().mockResolvedValue({}), // maybe I can lose the json?
            // swallow error in test
        });
        render(<ContactPage />);
        await findAndPopulateInputAsync(screen, 'email', validEmailAddress);
        await findAndPopulateInputAsync(screen, 'senderName', validInput);
        await findAndPopulateInputAsync(screen, 'subject', validInput);
        await findAndPopulateInputAsync(screen, 'message', validInput);

        await act(() => {
            clickButtonAsync(screen, contactFormSubmitButtonTestId);
        });

        await waitFor(() => {
            expect(
                screen.queryByText(somethingWentWrongMessage)
            ).toBeInTheDocument();
            expect(
                screen.queryByText(tryAgainMessage)
            ).toBeInTheDocument();
            const closeButton: HTMLElement = screen.getByTestId(
                confirmationModalCloseButtonTestId
            );
            expect(closeButton).toBeInTheDocument();
            const retryButton: HTMLElement = screen.getByTestId(
                confirmationModalRetryButtonTestId
            );
            expect(retryButton).toBeInTheDocument();
        });

        await act(() => {
            console.log('test retry 1');
            clickButtonAsync(screen, confirmationModalRetryButtonTestId);
        });

        await waitFor(() => {
            expect(
                screen.queryByText(somethingWentWrongMessage)
            ).toBeInTheDocument();
            expect(
                screen.queryByText(tryAgainMessage)
            ).toBeInTheDocument();
            // can I assert that the button is not present by test id?
            const retryButton: HTMLElement = screen.getByTestId(
                confirmationModalRetryButtonTestId
            );
            expect(retryButton).toBeInTheDocument();
        });

        // await act(() => {
        //     console.log('test retry 2');
        //     clickButtonAsync(screen, confirmationModalRetryButtonTestId);
        // });

        // await waitFor(() => {
        //     expect(
        //         screen.queryByText(somethingWentWrongMessage)
        //     ).toBeInTheDocument();
        //     expect(
        //         screen.queryByText(tryAgainMessage)
        //     ).toBeInTheDocument();
        //     // can I assert that the button is not present by test id?
        //     const retryButton: HTMLElement = screen.getByTestId(
        //         confirmationModalRetryButtonTestId
        //     );
        //     expect(retryButton).toBeInTheDocument();
        // });
    });
});
