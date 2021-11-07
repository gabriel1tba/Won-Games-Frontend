import { useContext, createContext } from 'react';

export type CartContextData = {};

export const CartContext = createContext({} as CartContextData);

export type CartProviderProps = {
  children: React.ReactNode;
};

const CartProvider = ({ children }: CartProviderProps) => {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
