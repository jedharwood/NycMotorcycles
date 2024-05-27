import ConsignPage from '@/pages/consign';
import { render } from '@/test-utils';

describe('ConsignPage', () => {
  it('should render page in English', () => {
    const { container } = render(<ConsignPage />);

    expect(container).toMatchSnapshot();
  });
});
