import DownloadPage from '@/pages/download';
import { render } from '@/test-utils';

describe('DownloadPage', () => {
    it('should render page in English', () => {
        const { container } = render(<DownloadPage />);

        expect(container).toMatchSnapshot();
    });
});
