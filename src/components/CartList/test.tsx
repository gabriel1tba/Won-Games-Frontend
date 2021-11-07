import { render, screen } from 'utils/test-utils';

import CartList from '.';

import items from './mock';
import { CartContextMockValues } from 'context/Cart';

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const cartProviderProps = {
      ...CartContextMockValues,
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
      ...CartContextMockValues,
      items,
    };

    render(<CartList hasButton />, { cartProviderProps });

    expect(screen.getByText(/buy it now/i)).toBeInTheDocument();
  });

  it('should render loading', () => {
    const cartProviderProps = {
      ...CartContextMockValues,
      loading: true,
    };

    render(<CartList hasButton />, { cartProviderProps });

    expect(screen.getByTitle(/loading/i)).toBeInTheDocument();
  });

  it('should render empty if there are no games', () => {
    const cartProviderProps = {
      ...CartContextMockValues,
      items: [],
    };
    render(<CartList />, { cartProviderProps });

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
    expect(screen.queryByText(/total/i)).not.toBeInTheDocument();
  });
});
