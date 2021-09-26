import 'match-media-mock';
import { screen } from '@testing-library/react';
import renderWithTheme from 'utils/tests/helpers';

import Wishlist from '.';

import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

const props = {
  games: gamesMock,
  recommendedHighlight: highlightMock,
  recommendedGames: gamesMock,
};

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />;
  },
}));

describe('<Wishlist />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Wishlist {...props} />);

    expect(screen.getAllByText(/population zero/i)).toHaveLength(6);

    expect(
      screen.getByRole('heading', { name: /Wishlist/i }),
    ).toBeInTheDocument();

    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument();
  });
});
