import { screen } from '@testing-library/react';
import renderWithTheme from 'utils/tests/helpers';

import Wishlist from '.';

describe('<Wishlist />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Wishlist />);

    expect(
      screen.getByRole('heading', { name: /Wishlist/i }),
    ).toBeInTheDocument();
  });
});
