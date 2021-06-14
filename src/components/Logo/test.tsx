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

  it('should render a black label by default color', () => {
    renderWithTheme(<Logo color="black" />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517',
    });
  });

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem',
    });
  });

  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo />);

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem',
    });
  });
});
