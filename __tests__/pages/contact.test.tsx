import ContactPage from '@/pages/contact';
import { render } from '@/test-utils';

describe('ContactPage', () => {
  it('should render page in English', () => {
    const { container } = render(<ContactPage />);

    expect(container).toMatchSnapshot();
  });
});