import DownloadPage from '@/pages/download';
import { render } from '@/test-utils';
import { langs } from '@/utilities/resources';

describe('DownloadPage', () => {
    it('should render page in English', () => {
        const { container } = render(<DownloadPage />);

        expect(container).toMatchSnapshot();
    });

    it('should render page in Japanese', () => {
        const { container } = render(<DownloadPage />, { locale: langs.ja });

        expect(container).toMatchSnapshot();
    });
});
