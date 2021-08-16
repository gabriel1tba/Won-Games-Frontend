import { screen } from '@testing-library/react';
import renderWithTheme from 'utils/tests/helpers';

import GameInfo from '.';

describe('<GameInfo />', () => {
  it('should render the heading', () => {
    renderWithTheme(<GameInfo />);

    expect(
      screen.getByRole('heading', { name: /GameInfo/i }),
    ).toBeInTheDocument();
  });
});
