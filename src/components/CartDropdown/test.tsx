import { render, screen } from 'utils/test-utils';

import CartDropdown from '.';

import { CartContextMockValues } from 'context/Cart';

import items from 'components/CartList/mock';

describe('<CartDropdown />', () => {
  beforeEach(() => {
    const cartProviderProps = {
      ...CartContextMockValues,
      items,
      quantity: items.length,
      total: 'R$ 300,00',
    };

    render(<CartDropdown />, { cartProviderProps });
  });

  it('should render <CartIcon /> and its badge', () => {
    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
    expect(screen.getByText(`${items.length}`)).toBeInTheDocument();
  });

  it('should render Dropdown content with cart items and total', () => {
    expect(screen.getByText(`${items[0].title}`)).toBeInTheDocument();
  });
});
