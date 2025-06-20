import userEvent from '@testing-library/user-event';

import ContactPage from '@/pages/contact';
import { render, screen, waitFor, act } from '@/test-utils';
import { langs } from '@/types/languages';

const emailValidationMessage: string = 'Please enter a valid email address';
const requiredFieldValidationMessage: string = 'This is a required field';
const validInput: string = 'valid input';
const invalidEmailAddress: string = 'invalid email address';
const validEmailAddress: string = 'valid.email@address.co.ck';

const completeFormAndSubmit = async (screen: any): Promise<void> => {
    await findAndPopulateInputAsync(screen, 'email', validEmailAddress);
    await findAndPopulateInputAsync(screen, 'senderName', validInput);
    await findAndPopulateInputAsync(screen, 'subject', validInput);
    await findAndPopulateInputAsync(screen, 'message', validInput);

    await act(() => {
        clickButtonAsync('submit', screen);
    });
}; 

const findAndPopulateInputAsync = async (
    screen: any,
    testId: string,
    value: string
): Promise<void> => {
    const input: HTMLElement = screen.getByTestId(testId);
    await userEvent.type(input, value);
};

const clickButtonAsync = async (
    buttonType: 'submit' | 'close' | 'retry',
    screen: any
): Promise<void> => {
    let testId: string;
    switch (buttonType) {
        case 'submit':
            testId = 'contact-form-submit-button';
            break;
        case 'close':
            testId = 'confirmation-modal-close-button';
            break;
        case 'retry':
            testId = 'confirmation-modal-retry-button';
            break;
    }

    const button: HTMLElement = screen.getByTestId(testId);
    await userEvent.click(button);
};

const checkDocumentContainsConfirmationModal = (
    messageType: 'success' | 'went-wrong' | 'completely-failed',
    screen: any
): void => {
    const confirmationModal: HTMLElement = screen.getByTestId('confirmation-modal');
    expect(confirmationModal).toBeInTheDocument();

    let message: string;
    switch (messageType) {
        case 'success':
            message = 'Your message has been sent. We will reply as soon as we can.';
            break;
        case 'went-wrong':
            message = 'Something went wrong';
            break;
        case 'completely-failed':
            message = "Sorry, we're unable to send your email at this time";
            break;
    }

    expect(screen.queryByText(message)).toBeInTheDocument();
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
            clickButtonAsync('submit', screen);
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
            clickButtonAsync('submit', screen);
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
            clickButtonAsync('submit', screen);
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
            clickButtonAsync('submit', screen);
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
            clickButtonAsync('submit', screen);
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
            clickButtonAsync('submit', screen);
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
        
        await completeFormAndSubmit(screen);

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
        (global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue({}), // don't think I can get rid of the json
        });
        render(<ContactPage />);
        
        await completeFormAndSubmit(screen);

        await waitFor(() => {
            checkDocumentContainsConfirmationModal('success', screen);
        });

        await act(() => {
            clickButtonAsync('close', screen);
        });

        await waitFor(() => {
            // assert modal not in document
            expect(screen.queryByText('Close')).not.toBeInTheDocument();
        });
    });

    it('should display retry confirmation modal on failed submission', async () => {
        (global.fetch as jest.Mock).mockResolvedValue({
            ok: false,
            // json: jest.fn().mockResolvedValue({}), // maybe I can lose the json?
        });
        render(<ContactPage />);
        
        await completeFormAndSubmit(screen);

        await waitFor(() => {
            checkDocumentContainsConfirmationModal('went-wrong', screen);
        });

        await act(() => {
            clickButtonAsync('close', screen);
        });

        await waitFor(() => {
            // assert modal not in document
            expect(screen.queryByText('Close')).not.toBeInTheDocument();
        });
    });

    it('should display failed completely confirmation modal on after two retries', async () => {
        (global.fetch as jest.Mock).mockResolvedValue({
            ok: false,
            json: jest.fn().mockResolvedValue({}), // maybe I can lose the json?
            // swallow error in test
        });
        render(<ContactPage />);
        
        await completeFormAndSubmit(screen);

        await waitFor(() => {
            checkDocumentContainsConfirmationModal('went-wrong', screen);
        });

        await act(() => {
            clickButtonAsync('retry', screen);
        });

        await waitFor(() => {
            checkDocumentContainsConfirmationModal('went-wrong', screen);
        });

        await act(() => {
            clickButtonAsync('retry', screen);
        });

        await waitFor(() => {
            checkDocumentContainsConfirmationModal('completely-failed', screen);
        });

        await act(() => {
            clickButtonAsync('close', screen);
        });
        // click close
        // confirm modal noo longer present
    });
});
