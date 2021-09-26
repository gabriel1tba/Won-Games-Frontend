import { screen } from '@testing-library/react';
import renderWithTheme from 'utils/tests/helpers';

import PaymentOptions from '.';

import cardsMock from './mock';

describe('<PaymentOptions />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <PaymentOptions
        handlePayment={() => {
          console.log('test');
        }}
        cards={cardsMock}
      />,
    );

    expect(
      screen.getByRole('heading', { name: /Payment/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
