import ContactPage from '@/pages/contact';
import { render, screen, waitFor } from '@/test-utils';
import userEvent from '@testing-library/user-event';

const findAndPopulateInputAsync = async (screen: any, testId: string, value: string): Promise<void> => {
    const input: HTMLElement = screen.getByTestId(testId);
    await userEvent.type(input, value);
}

const emailValidationMessage: string = 'Please enter a valid email address';
const requiredFieldValidationMessage: string = 'This is a required field';

describe('ContactPage', () => {
  it('should render page in English', () => {
    const { container } = render(<ContactPage />);

    expect(container).toMatchSnapshot();
  });

  it('validator should display message for invalid email input', async () => {
    render(<ContactPage />);
    await findAndPopulateInputAsync(screen, 'email', 'invalid email address');
    await findAndPopulateInputAsync(screen, 'senderName', 'valid input');
    await findAndPopulateInputAsync(screen, 'subject', 'valid input');
    await findAndPopulateInputAsync(screen, 'message', 'valid input');

    const submitButton: HTMLElement = screen.getByTestId('contact-form-submit-button');

    await waitFor(() => {
        userEvent.click(submitButton);
        expect(screen.queryByText(emailValidationMessage)).toBeInTheDocument();
        expect(screen.queryByText(requiredFieldValidationMessage)).not.toBeInTheDocument();
    });

    // Assert that post has not been called
  });
});


