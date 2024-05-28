import SoldArchivePage from '@/pages/sold-archive';
import { render } from '@/test-utils';

describe('SoldArchivePage', () => {
  it('should render page in English', () => {
    const { container } = render(<SoldArchivePage />);

    expect(container).toMatchSnapshot();
  });
});
