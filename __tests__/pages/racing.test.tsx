import RacingPage from '@/pages/racing';
import { render } from '@/test-utils';
import { langs } from '@/utilities/resources';

describe('RacingPage', () => {
    it('should render page in English', () => {
        const { container } = render(<RacingPage />);

        expect(container).toMatchSnapshot();
    });

    it('should render page in Japanese', () => {
        const { container } = render(<RacingPage />, { locale: langs.ja });

        expect(container).toMatchSnapshot();
    });
});
