import userEvent from '@testing-library/user-event';

import RacingPage from '@/pages/racing';
import { act, render, screen, waitFor, within } from '@/test-utils';
import { langs } from '@/types/languages';

const clickFirstGridImageAndCheckImageModalIsOpenAsync = async () => {
    await act(() => {
        const imageGrid: HTMLElement = screen.getByTestId('image-grid');
        const firstGridItem = within(imageGrid).getAllByRole('button')[0];
        userEvent.click(firstGridItem);
    });

    await checkImageModalIsOpenAsync();
};

const checkImageModalIsOpenAsync = async (shouldBeOpen: boolean = true) => {
    const imageModalTestId: string = 'image-modal';

    await waitFor(() => {
        if (shouldBeOpen) {
            const imageModal: HTMLElement = screen.getByTestId(imageModalTestId);
            expect(imageModal).toBeInTheDocument();
        } else {
            expect(screen.queryByTestId(imageModalTestId)).not.toBeInTheDocument();
        }
    });
};

describe('RacingPage', () => {
    it('should render page in English', () => {
        const { container } = render(<RacingPage />);

        expect(container).toMatchSnapshot();
    });

    it('should render page in Japanese', () => {
        const { container } = render(<RacingPage />, { locale: langs.ja });

        expect(container).toMatchSnapshot();
    });

    it('should open image modal when a grid image is clicked', async () => {
        render(<RacingPage />);
        await checkImageModalIsOpenAsync(false);

        await clickFirstGridImageAndCheckImageModalIsOpenAsync();
    });

    it('should close image modal when modal close button is clicked', async () => {
        render(<RacingPage />);
        await checkImageModalIsOpenAsync(false);
        await clickFirstGridImageAndCheckImageModalIsOpenAsync();

        await act(() => {
            const closeButton: HTMLElement = screen.getByTestId('image-modal-close-button');
            userEvent.click(closeButton);
        });

        await checkImageModalIsOpenAsync(false);
    });
});
