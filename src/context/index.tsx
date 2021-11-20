import { CartProvider } from './Cart';
import { WishlistProvider } from './Wishlist';

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => (
  <CartProvider>
    <WishlistProvider>{children}</WishlistProvider>
  </CartProvider>
);

export default AppProvider;
