import 'session.mock';
import 'match-media-mock';
import { render, screen } from 'utils/test-utils';

import Wishlist from '.';

import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

import { WishlistContextMock } from 'context/Wishlist';

const props = {
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
    const wishlistProviderProps = {
      ...WishlistContextMock,
      items: [gamesMock[0]],
    };

    render(<Wishlist {...props} />, { wishlistProviderProps });

    expect(screen.getByText(/population zero/i)).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Wishlist/i }),
    ).toBeInTheDocument();

    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument();
  });

  it('should render empty when there are no games', () => {
    const wishlistProviderProps = {
      ...WishlistContextMock,
      items: [],
    };

    render(
      <Wishlist
        recommendedTitle="You may like these games"
        recommendedGames={gamesMock}
        recommendedHighlight={highlightMock}
      />,
      { wishlistProviderProps },
    );

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i }),
    ).toBeInTheDocument();
  });
});
