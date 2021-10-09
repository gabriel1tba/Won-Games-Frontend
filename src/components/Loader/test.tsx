import { screen } from '@testing-library/react';
import renderWithTheme from 'utils/tests/helpers';

import Loader from '.';

describe('<Loader />', () => {
  it('Should render correctly', () => {
    renderWithTheme(<Loader />);

    expect(screen.getByTitle(/loading/i)).toBeInTheDocument();
  });
});
