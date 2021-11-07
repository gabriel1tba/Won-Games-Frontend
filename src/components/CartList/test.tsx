import { render, screen } from 'utils/test-utils';

import CartList from '.';
import items from './mock';

const CartContextDefaultValues = {
  items: [],
  quantity: 0,
  total: '$0.00',
  isInCart: () => false,
  addToCart: () => null,
  removeFromCart: () => null,
  clearCart: () => null,
  loading: false,
};

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items,
      total: 'R$ 330,00',
    };

    const { container } = render(<CartList />, { cartProviderProps });

    expect(screen.getAllByRole('heading')).toHaveLength(2);
    expect(screen.getByText('R$ 330,00')).toHaveStyle({ color: '#F231A5' });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the button', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items,
    };

    render(<CartList hasButton />, { cartProviderProps });

    expect(screen.getByText(/buy it now/i)).toBeInTheDocument();
  });

  it('should render empty if there are no games', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items: [],
    };
    render(<CartList />, { cartProviderProps });

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
    expect(screen.queryByText(/total/i)).not.toBeInTheDocument();
  });
});
