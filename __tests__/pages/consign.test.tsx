import { render } from '@testing-library/react';
import ConsignPage from '@/pages/consign';
import { IntlProvider } from 'react-intl';
import en from '../../languages/en.json';

describe('ConsignPage', () => {
    it('should render page in English', () => {
    const { container } = render(
      <IntlProvider locale='en' messages={en}>
        <ConsignPage />
      </IntlProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
