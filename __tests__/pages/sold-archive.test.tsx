import SoldArchivePage from '@/pages/sold-archive';
import { render } from '@/test-utils';
import { langs } from '@/utilities/resources';

describe('SoldArchivePage', () => {
    it('should render page in English', () => {
        const { container } = render(<SoldArchivePage />);

        expect(container).toMatchSnapshot();
    });

    it('should render page in Japanese', () => {
        const { container } = render(<SoldArchivePage />, { locale: langs.ja });

        expect(container).toMatchSnapshot();
    });
});
