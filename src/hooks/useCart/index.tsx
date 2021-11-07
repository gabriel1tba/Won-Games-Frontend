import { useContext } from 'react';

import { CartContext, CartContextProps } from 'context/Cart';

const useCart = (): CartContextProps => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart depends on CartProvider');
  }

  return context;
};

export default useCart;
