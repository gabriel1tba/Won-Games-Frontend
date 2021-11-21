import { act, render, screen, waitFor } from 'utils/test-utils';
import userEvent from '@testing-library/user-event';

import WishlistButton from '.';

import { WishlistContextMock } from 'context/Wishlist';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useSession = jest.spyOn(require('next-auth/client'), 'useSession');
const session = { jwt: '123', user: { email: 'lorem@ipsum.com' } };
useSession.mockImplementation(() => [session]);

describe('<WishlistButton />', () => {
  it('should render a button to add to wishlist', () => {
    const wishlistProviderProps = {
      ...WishlistContextMock,
      isInWishlist: () => false,
    };

    render(<WishlistButton id="1" />, { wishlistProviderProps });

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();
  });

  it('should render a button to remove from wishlist', () => {
    const wishlistProviderProps = {
      ...WishlistContextMock,
      isInWishlist: () => true,
    };

    render(<WishlistButton id="1" />, { wishlistProviderProps });

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
  });

  it('should render a button with add to wishlist text', () => {
    const wishlistProviderProps = {
      ...WishlistContextMock,
      isInWishlist: () => false,
    };

    render(<WishlistButton id="1" hasText />, { wishlistProviderProps });

    expect(screen.getByText(/add to wishlist/i)).toBeInTheDocument();
  });

  it('should render a button with remove from wishlist text', () => {
    const wishlistProviderProps = {
      ...WishlistContextMock,
      isInWishlist: () => true,
    };

    render(<WishlistButton id="1" hasText />, { wishlistProviderProps });

    expect(screen.getByText(/remove from wishlist/i)).toBeInTheDocument();
  });

  it('should not render if not logged', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const useSession = jest.spyOn(require('next-auth/client'), 'useSession');
    useSession.mockImplementationOnce(() => [null]);

    const wishlistProviderProps = {
      ...WishlistContextMock,
      isInWishlist: () => true,
    };

    render(<WishlistButton id="1" hasText />, { wishlistProviderProps });

    expect(screen.queryByText(/remove from wishlist/i)).not.toBeInTheDocument();
  });

  it('should add to wishlist', async () => {
    const wishlistProviderProps = {
      ...WishlistContextMock,
      isInWishlist: () => false,
      addToWishlist: jest.fn(),
    };

    render(<WishlistButton id="1" hasText />, { wishlistProviderProps });

    act(() => {
      userEvent.click(screen.getByText(/add to wishlist/i));
    });

    waitFor(() => {
      expect(wishlistProviderProps.addToWishlist).toHaveBeenCalledWith('1');
    });
  });

  it('should remove from wishlist', async () => {
    const wishlistProviderProps = {
      ...WishlistContextMock,
      isInWishlist: () => true,
      removeFromWishlist: jest.fn(),
    };

    render(<WishlistButton id="1" hasText />, { wishlistProviderProps });

    act(() => {
      userEvent.click(screen.getByText(/remove from wishlist/i));
    });

    waitFor(() => {
      expect(wishlistProviderProps.removeFromWishlist).toHaveBeenCalledWith(
        '1',
      );
    });
  });
});
