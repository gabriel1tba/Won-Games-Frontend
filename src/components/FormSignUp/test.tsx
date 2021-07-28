import { screen } from '@testing-library/react';
import renderWithTheme from 'utils/tests/helpers';

import FormSignUp from '.';

describe('<FormSignUp />', () => {
  it('should render the heading', () => {
    renderWithTheme(<FormSignUp />);

    expect(
      screen.getByRole('heading', { name: /FormSignUp/i }),
    ).toBeInTheDocument();
  });
});
