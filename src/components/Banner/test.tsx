import { screen } from '@testing-library/react';
import renderWithTheme from 'utils/tests/helpers';

import Banner from '.';

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subTitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death',
};

describe('<Banner />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Banner {...props} />);
    // Verifica se o title existe renderizado no componente
    expect(
      screen.getByRole('heading', { name: /defy death/i }),
    ).toBeInTheDocument();

    // Verifica se o subtitle existe renderizado
    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season/i }),
    ).toBeInTheDocument();

    // Verifica se a imagem existe renderizado
    expect(
      screen.getByRole('img', { name: /defy death/i }),
    ).toBeInTheDocument();
  });
});
