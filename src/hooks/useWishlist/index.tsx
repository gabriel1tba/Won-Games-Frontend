import { useContext } from 'react';

import { WishlistContext, WishlistContextProps } from 'context/Wishlist';

const useWishlist = (): WishlistContextProps => {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error('useWishlist depends on WishlistProvider');
  }

  return context;
};

export default useWishlist;
