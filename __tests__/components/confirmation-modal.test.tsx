import '@testing-library/jest-dom';

import ConfirmationModal from '@/components/confirmation-modal/confirmation-modal';
import { render } from '@/test-utils';

describe('ConfirmationModal', () => {
    it('should display a loading state', () => {
        const confirmationModalProps: ConfirmationModalProps = {
            isVisible: true,
            closeButtonClick: () => {},
            isLoading: true,
            isSuccess: false,
            retryButtonClick: () => {},
            failedCompletely: false,
        };
        const { container } = render(<ConfirmationModal {...confirmationModalProps} />);

        expect(container).toMatchSnapshot();
    });
});
