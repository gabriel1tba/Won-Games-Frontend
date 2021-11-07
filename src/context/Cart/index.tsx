import { useState, useEffect, createContext } from 'react';

import { useQueryGames } from 'graphql/queries/games';
import { getStorageItem } from 'utils/localStorage';
import { cartMapper } from 'utils/mappers';
import formatPrice from 'utils/format-price';

type CartItem = {
  id: string;
  img: string;
  title: string;
  price: string;
};

export type CartContextProps = {
  items: CartItem[];
  quantity: number;
  total: string;
};

const CartContext = createContext({} as CartContextProps);

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

  const total = data?.games.reduce((acc, game) => {
    return acc + game.price;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        items: cartMapper(data?.games),
        quantity: cartItems.length,
        total: formatPrice(total || 0),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
