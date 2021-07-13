import { screen } from '@testing-library/react';
import renderWithTheme from 'utils/tests/helpers';

import GameCard from '.';

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00',
};

describe('<GameCard />', () => {
  it('should render the correctly', () => {
    // renderizar o GameCard
    renderWithTheme(<GameCard {...props} />);

    // Verificar se o title foi renderizado
    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();

    // Verificar se o developer foi renderizado
    expect(
      screen.getByRole('heading', { name: props.developer }),
    ).toBeInTheDocument();

    // Verificar se o img foi renderizado
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img,
    );

    // Verificar se o botão de compra foi renderizado
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();
  });
});
