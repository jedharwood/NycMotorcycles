import RacingPage from '@/pages/racing';
import { render } from '@/test-utils';

describe('RacingPage', () => {
    it('should render page in English', () => {
        const { container } = render(<RacingPage />);

        expect(container).toMatchSnapshot();
    });
});
