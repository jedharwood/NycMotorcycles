import ConsignPage from '@/pages/consign';
import { render } from '@/test-utils';
import { langs } from '@/types/languages';

describe('ConsignPage', () => {
    it('should render page in English', () => {
        const { container } = render(<ConsignPage />);

        expect(container).toMatchSnapshot();
    });

    it('should render page in Japanese', () => {
        const { container } = render(<ConsignPage />, { locale: langs.ja });

        expect(container).toMatchSnapshot();
    });
});
