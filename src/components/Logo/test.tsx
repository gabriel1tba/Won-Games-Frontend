import { screen } from '@testing-library/react';
import renderWithTheme from 'utils/tests/helpers';

import Logo from '.';

describe('<Logo />', () => {
  it('should render a white label by default color', () => {
    // renderizar o componente -> render
    // selecionar o elemento a ser testado -> screen (queries) - getByLabel...
    // comparação - expectativa - análise - assertion - asserção -> expect
    renderWithTheme(<Logo />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA',
    });
  });
});
