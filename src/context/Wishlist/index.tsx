import { useState, useEffect, createContext } from 'react';
import { useSession } from 'next-auth/client';

import { QueryWishlist_wishlists_games } from 'graphql/generated/QueryWishlist';
import { useQueryWishlist } from 'graphql/queries/wishlist';
import { GameCardProps } from 'components/GameCard';
import { gamesMapper } from 'utils/mappers';

export type WishlistContextProps = {
  items: GameCardProps[];
  isInWishlist: (id: string) => boolean;
  addToWishlist: (id: string) => void;
  removeFromWishlist: (id: string) => void;
  loading: boolean;
};

export const WishlistContextDefaultValues = {
  items: [],
  isInWishlist: () => false,
  addToWishlist: () => null,
  removeFromWishlist: () => null,
  loading: false,
};

const WishlistContext = createContext<WishlistContextProps>(
  WishlistContextDefaultValues,
);

export type WishlistProviderProps = {
  children: React.ReactNode;
};

const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [session] = useSession();
  const [wishlistItems, setWishlistItems] = useState<
    QueryWishlist_wishlists_games[]
  >([]);

  const isInWishlist = (id: string) => false;
  const addToWishlist = (id: string) => ({});
  const removeFromWishlist = (id: string) => ({});

  const { data, loading } = useQueryWishlist({
    skip: !session?.user?.email,
    context: { session },
    variables: {
      identifier: session?.user?.email as string,
    },
  });

  useEffect(() => {
    setWishlistItems(data?.wishlists[0]?.games || []);
  }, [data]);

  return (
    <WishlistContext.Provider
      value={{
        items: gamesMapper(wishlistItems),
        isInWishlist,
        addToWishlist,
        removeFromWishlist,
        loading,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export { WishlistProvider, WishlistContext };
