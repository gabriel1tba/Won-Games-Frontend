import 'match-media-mock';
import { screen } from '@testing-library/react';
import renderWithTheme from 'utils/tests/helpers';

import bannerMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

import Home from '.';

const props = {
  banners: bannerMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcommingGames: [gamesMock[0]],
  upcommingHighligth: highlightMock,
  upcommingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighligth: highlightMock,
};

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu"></div>;
    },
  };
});

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Footer"></div>;
    },
  };
});

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>;
    },
  };
});

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock BannerSlider"></div>;
    },
  };
});

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />);

    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument();
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(5);
    expect(screen.getByTestId('Mock BannerSlider')).toBeInTheDocument();
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument();
  });
});
