import { useState, useEffect, useContext, createContext } from 'react';

import { useQueryGames } from 'graphql/queries/games';

import { getStorageItem } from 'utils/localStorage';

import { cartMapper } from 'utils/mappers';

type CartItem = {
  id: string;
  img: string;
  title: string;
  price: string;
};

export type CartContextData = {
  items: CartItem[];
};

export const CartContext = createContext({} as CartContextData);

export type CartProviderProps = {
  children: React.ReactNode;
};

const CART_KEY = 'cartItems';

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const data = getStorageItem(CART_KEY);

    if (data) {
      setCartItems(data);
    }
  }, []);

  const { data } = useQueryGames({
    skip: !cartItems?.length,
    variables: {
      where: {
        id: cartItems,
      },
    },
  });

  return (
    <CartContext.Provider
      value={{
        items: cartMapper(data?.games),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
