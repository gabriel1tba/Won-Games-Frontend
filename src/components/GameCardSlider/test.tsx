import 'match-media-mock';
import renderWithTheme from 'utils/tests/helpers';

import GameCardSlider from '.';

describe('<GameCardSlider />', () => {
  it('should render the heading', () => {
    renderWithTheme(<GameCardSlider items={[]} />);
  });
});
