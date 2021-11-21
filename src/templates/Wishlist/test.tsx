import 'session.mock';
import 'match-media-mock';
import { render, screen } from 'utils/test-utils';

import Wishlist from '.';

import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

const props = {
  games: gamesMock,
  recommendedHighlight: highlightMock,
  recommendedTitle: 'You may like these games',
  recommendedGames: gamesMock,
};

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>;
  },
}));

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />;
  },
}));

describe('<Wishlist />', () => {
  it('should render the heading', () => {
    render(<Wishlist {...props} />);

    expect(screen.getAllByText(/population zero/i)).toHaveLength(6);

    expect(
      screen.getByRole('heading', { name: /Wishlist/i }),
    ).toBeInTheDocument();

    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument();
  });

  it('should render empty when there are no games', () => {
    render(
      <Wishlist
        recommendedTitle="You may like these games"
        recommendedGames={gamesMock}
        recommendedHighlight={highlightMock}
      />,
    );

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i }),
    ).toBeInTheDocument();
  });
});
