import { screen } from '@testing-library/react';
import renderWithTheme from 'utils/tests/helpers';

import Auth from '.';

describe('<Auth />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Auth />);

    expect(screen.getByRole('heading', { name: /Auth/i })).toBeInTheDocument();
  });
});
