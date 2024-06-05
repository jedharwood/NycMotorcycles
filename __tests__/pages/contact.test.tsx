import ContactPage from '@/pages/contact';
import { render, screen, waitFor } from '@/test-utils';
import userEvent from '@testing-library/user-event';

const emailValidationMessage: string = 'Please enter a valid email address';
const requiredFieldValidationMessage: string = 'This is a required field';
const validInput: string = 'valid input';
const invalidEmailAddress: string = 'invalid email address';
const validEmailAddress: string = 'valid.email@address.co.ck';

const findAndPopulateInputAsync = async (screen: any, testId: string, value: string): Promise<void> => {
    const input: HTMLElement = screen.getByTestId(testId);
    await userEvent.type(input, value);
}

describe('ContactPage', () => {
  it('should render page in English', () => {
    const { container } = render(<ContactPage />);

    expect(container).toMatchSnapshot();
  });

  it('validator should display message for invalid email input', async () => {
    render(<ContactPage />);
    await findAndPopulateInputAsync(screen, 'email', invalidEmailAddress);
    await findAndPopulateInputAsync(screen, 'senderName', validInput);
    await findAndPopulateInputAsync(screen, 'subject', validInput);
    await findAndPopulateInputAsync(screen, 'message', validInput);

    const submitButton: HTMLElement = screen.getByTestId('contact-form-submit-button');

    await waitFor(() => {
        userEvent.click(submitButton);
        expect(screen.queryByText(emailValidationMessage)).toBeInTheDocument();
        expect(screen.queryByText(requiredFieldValidationMessage)).not.toBeInTheDocument();
    });

    // Assert that post has not been called
  });

  it('validator should display message for empty email input', async () => {
    render(<ContactPage />);
    await findAndPopulateInputAsync(screen, 'senderName', validInput);
    await findAndPopulateInputAsync(screen, 'subject', validInput);
    await findAndPopulateInputAsync(screen, 'message', validInput);

    const submitButton: HTMLElement = screen.getByTestId('contact-form-submit-button');

    await waitFor(() => {
        userEvent.click(submitButton);
        expect(screen.queryByText(emailValidationMessage)).toBeInTheDocument();
        expect(screen.queryByText(requiredFieldValidationMessage)).not.toBeInTheDocument();
    });

    // Assert that post has not been called
  });

  it('validator should display message for empty senderName input', async () => {
    render(<ContactPage />);
    await findAndPopulateInputAsync(screen, 'email', validEmailAddress);
    await findAndPopulateInputAsync(screen, 'subject', validInput);
    await findAndPopulateInputAsync(screen, 'message', validInput);

    const submitButton: HTMLElement = screen.getByTestId('contact-form-submit-button');

    await waitFor(() => {
        userEvent.click(submitButton);
        expect(screen.queryByText(emailValidationMessage)).not.toBeInTheDocument();
        expect(screen.queryAllByText(requiredFieldValidationMessage).length).toEqual(1);
    });

    // Assert that post has not been called
  });

  it('validator should display message for empty subject input', async () => {
    render(<ContactPage />);
    await findAndPopulateInputAsync(screen, 'email', validEmailAddress);
    await findAndPopulateInputAsync(screen, 'senderName', validInput);
    await findAndPopulateInputAsync(screen, 'message', validInput);

    const submitButton: HTMLElement = screen.getByTestId('contact-form-submit-button');

    await waitFor(() => {
        userEvent.click(submitButton);
        expect(screen.queryByText(emailValidationMessage)).not.toBeInTheDocument();
        expect(screen.queryAllByText(requiredFieldValidationMessage).length).toEqual(1);
    });

    // Assert that post has not been called
  });

  it('validator should display message for empty message input', async () => {
    render(<ContactPage />);
    await findAndPopulateInputAsync(screen, 'email', validEmailAddress);
    await findAndPopulateInputAsync(screen, 'senderName', validInput);
    await findAndPopulateInputAsync(screen, 'subject', validInput);

    const submitButton: HTMLElement = screen.getByTestId('contact-form-submit-button');

    await waitFor(() => {
        userEvent.click(submitButton);
        expect(screen.queryByText(emailValidationMessage)).not.toBeInTheDocument();
        expect(screen.queryAllByText(requiredFieldValidationMessage).length).toEqual(1);
    });

    // Assert that post has not been called
  });

  it('validator should display multiple validation messages', async () => {
    render(<ContactPage />);

    const submitButton: HTMLElement = screen.getByTestId('contact-form-submit-button');

    await waitFor(() => {
        userEvent.click(submitButton);
        expect(screen.queryByText(emailValidationMessage)).toBeInTheDocument();
        expect(screen.queryAllByText(requiredFieldValidationMessage).length).toEqual(3);
    });

    // Assert that post has not been called
  });

  it('validator should display no validation messages if all inputs valid', async () => {
    render(<ContactPage />);
    await findAndPopulateInputAsync(screen, 'email', validEmailAddress);
    await findAndPopulateInputAsync(screen, 'senderName', validInput);
    await findAndPopulateInputAsync(screen, 'subject', validInput);
    await findAndPopulateInputAsync(screen, 'message', validInput);

    const submitButton: HTMLElement = screen.getByTestId('contact-form-submit-button');

    await waitFor(() => {
        userEvent.click(submitButton);
        expect(screen.queryByText(emailValidationMessage)).not.toBeInTheDocument();
        expect(screen.queryByText(requiredFieldValidationMessage)).not.toBeInTheDocument();
    });

    // Assert that post has been called
  });
});


