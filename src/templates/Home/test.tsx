import 'match-media-mock';

import { screen } from '@testing-library/react';
import renderWithTheme from 'utils/tests/helpers';

import Home from '.';

import bannersMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

const props = {
  banners: bannersMock,
  newGames: gamesMock,
  mostPopularHighlight: highlightMock,
  mostPopularGames: gamesMock,
  upcommingGames: gamesMock,
  upcommingHighligth: highlightMock,
  upcommingMoreGames: gamesMock,
  freeGames: gamesMock,
  freeHighligth: highlightMock,
};

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />);

    // Testando Menu
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();

    // Testando Footer
    expect(
      screen.getByRole('heading', { name: /contact us/i }),
    ).toBeInTheDocument();
  });

  it('should render the sections', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByRole('heading', { name: /News/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Most Popular/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Upcomming/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Free Games/i }),
    ).toBeInTheDocument();
  });
});
