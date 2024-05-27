import ConsignPage from '@/pages/consign';
import { renderWithProviders } from '@/__mocks__/test-utils';

describe('ConsignPage', () => {
  it('should render page in English', () => {
    const { container } = renderWithProviders(<ConsignPage />);

    expect(container).toMatchSnapshot();
  });
});
