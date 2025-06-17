import userEvent from '@testing-library/user-event';

import ContactPage from '@/pages/contact';
import { render, screen, waitFor, act } from '@/test-utils';
import { langs } from '@/types/languages';

const emailValidationMessage: string = 'Please enter a valid email address';
const requiredFieldValidationMessage: string = 'This is a required field';
const validInput: string = 'valid input';
const invalidEmailAddress: string = 'invalid email address';
const validEmailAddress: string = 'valid.email@address.co.ck';

const findAndPopulateInputAsync = async (
    screen: any,
    testId: string,
    value: string
): Promise<void> => {
    const input: HTMLElement = screen.getByTestId(testId);
    await userEvent.type(input, value);
};

const clickSubmitButtonAsync = async (screen: any): Promise<void> => {
    const submitButton: HTMLElement = screen.getByTestId('contact-form-submit-button');
    await userEvent.click(submitButton);
};

const fetchMock = jest.fn();
(global as any).fetch = fetchMock;

describe('ContactPage', () => {
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
            clickSubmitButtonAsync(screen);
        });

        await waitFor(() => {
            expect(screen.queryByText(emailValidationMessage)).toBeInTheDocument();
            expect(
                screen.queryByText(requiredFieldValidationMessage)
            ).not.toBeInTheDocument();
            expect(fetchMock).toHaveBeenCalledTimes(0);
        });
    });

    it('validator should display message for empty email input and prevent submission on click', async () => {
        render(<ContactPage />);
        await findAndPopulateInputAsync(screen, 'senderName', validInput);
        await findAndPopulateInputAsync(screen, 'subject', validInput);
        await findAndPopulateInputAsync(screen, 'message', validInput);

        await act(() => {
            clickSubmitButtonAsync(screen);
        });

        await waitFor(() => {
            expect(screen.queryByText(emailValidationMessage)).toBeInTheDocument();
            expect(
                screen.queryByText(requiredFieldValidationMessage)
            ).not.toBeInTheDocument();
            expect(fetchMock).toHaveBeenCalledTimes(0);
        });
    });

    it('validator should display message for empty senderName input and prevent submission on click', async () => {
        render(<ContactPage />);
        await findAndPopulateInputAsync(screen, 'email', validEmailAddress);
        await findAndPopulateInputAsync(screen, 'subject', validInput);
        await findAndPopulateInputAsync(screen, 'message', validInput);

        await act(() => {
            clickSubmitButtonAsync(screen);
        });

        await waitFor(() => {
            expect(screen.queryByText(emailValidationMessage)).not.toBeInTheDocument();
            expect(screen.queryAllByText(requiredFieldValidationMessage).length).toEqual(
                1
            );
            expect(fetchMock).toHaveBeenCalledTimes(0);
        });
    });

    it('validator should display message for empty subject input and prevent submission on click', async () => {
        render(<ContactPage />);
        await findAndPopulateInputAsync(screen, 'email', validEmailAddress);
        await findAndPopulateInputAsync(screen, 'senderName', validInput);
        await findAndPopulateInputAsync(screen, 'message', validInput);

        await act(() => {
            clickSubmitButtonAsync(screen);
        });

        await waitFor(() => {
            expect(screen.queryByText(emailValidationMessage)).not.toBeInTheDocument();
            expect(screen.queryAllByText(requiredFieldValidationMessage).length).toEqual(
                1
            );
            expect(fetchMock).toHaveBeenCalledTimes(0);
        });
    });

    it('validator should display message for empty message input and prevent submission on click', async () => {
        render(<ContactPage />);
        await findAndPopulateInputAsync(screen, 'email', validEmailAddress);
        await findAndPopulateInputAsync(screen, 'senderName', validInput);
        await findAndPopulateInputAsync(screen, 'subject', validInput);

        await act(() => {
            clickSubmitButtonAsync(screen);
        });

        await waitFor(() => {
            expect(screen.queryByText(emailValidationMessage)).not.toBeInTheDocument();
            expect(screen.queryAllByText(requiredFieldValidationMessage).length).toEqual(
                1
            );
            expect(fetchMock).toHaveBeenCalledTimes(0);
        });
    });

    it('validator should display multiple validation messages and prevent submission on click', async () => {
        render(<ContactPage />);

        await act(() => {
            clickSubmitButtonAsync(screen);
        });

        await waitFor(() => {
            expect(screen.queryByText(emailValidationMessage)).toBeInTheDocument();
            expect(screen.queryAllByText(requiredFieldValidationMessage).length).toEqual(
                3
            );
            expect(fetchMock).toHaveBeenCalledTimes(0);
        });
    });

    it('validator should display no validation messages if all inputs valid and submit on click', async () => {
        render(<ContactPage />);
        await findAndPopulateInputAsync(screen, 'email', validEmailAddress);
        await findAndPopulateInputAsync(screen, 'senderName', validInput);
        await findAndPopulateInputAsync(screen, 'subject', validInput);
        await findAndPopulateInputAsync(screen, 'message', validInput);

        await act(() => {
            clickSubmitButtonAsync(screen);
        });

        await waitFor(() => {
            expect(screen.queryByText(emailValidationMessage)).not.toBeInTheDocument();
            expect(
                screen.queryByText(requiredFieldValidationMessage)
            ).not.toBeInTheDocument();
            expect(fetchMock).toHaveBeenCalledTimes(1);
            expect(fetchMock).toHaveBeenCalledWith('/api/mailer', {
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
});
