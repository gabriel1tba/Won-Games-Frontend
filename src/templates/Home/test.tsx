import 'match-media-mock';
import { render, screen } from 'utils/test-utils';

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
  freeGames: [gamesMock[0]],
  freeHighligth: highlightMock,
};

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
  it('should render Showcase and BannerSlider', () => {
    render(<Home {...props} />);

    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(4);
    expect(screen.getByTestId('Mock BannerSlider')).toBeInTheDocument();
  });
});
