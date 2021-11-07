import { CartProvider } from './Cart';

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => (
  <CartProvider>{children}</CartProvider>
);

export default AppProvider;
