import { render, screen } from 'utils/test-utils';

import CartIcon from '.';

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

describe('<CartIcon />', () => {
  it('should render without badge', () => {
    render(<CartIcon />);

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument();
  });

  it('should render with badge', () => {
    render(<CartIcon />, {
      cartProviderProps: { ...CartContextDefaultValues, quantity: 3 },
    });

    expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument();
    expect(screen.getByText(/3/)).toBeInTheDocument();
  });
});
