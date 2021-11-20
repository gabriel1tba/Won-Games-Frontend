import { GameCardProps } from 'components/GameCard';
import { createContext } from 'react';

export type WishlistContextProps = {
  // items: GameCardProps[];
  isInWishlist: (id: string) => boolean;
  addToWishlist: (id: string) => void;
  removeFromWishlist: (id: string) => void;
  // loading: boolean;
};

export const WishlistContextDefaultValues = {
  // items: [],
  isInWishlist: () => false,
  addToWishlist: () => null,
  removeFromWishlist: () => null,
  // loading: false,
};

const WishlistContext = createContext<WishlistContextProps>(
  WishlistContextDefaultValues,
);

export type WishlistProviderProps = {
  children: React.ReactNode;
};

const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const isInWishlist = (id: string) => false;
  const addToWishlist = (id: string) => ({});
  const removeFromWishlist = (id: string) => ({});

  return (
    <WishlistContext.Provider
      value={{
        isInWishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export { WishlistProvider, WishlistContext };
