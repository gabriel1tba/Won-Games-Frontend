import { screen } from '@testing-library/react';
import renderWithTheme from 'utils/tests/helpers';

import Auth from '.';

describe('<Auth />', () => {
  it('should render all components and children', () => {
    renderWithTheme(
      <Auth title="Auth title">
        <input type="text" name="" id="" />
      </Auth>,
    );

    // Verifica se tem 2 logos
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2);

    // Verifica se tem o heading principal do banner
    expect(
      screen.getByRole('heading', {
        name: /all your favorite games in one place/i,
      }),
    ).toBeInTheDocument();

    // Verifica se tem o subtitle
    expect(
      screen.getByRole('heading', {
        name: /won is best most complete gaming plataform/i,
      }),
    ).toBeInTheDocument();

    // Verifica se tem o title do content
    expect(
      screen.getByRole('heading', { name: /auth title/i }),
    ).toBeInTheDocument();

    // Verifica se o children esta sendo renderizado
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
