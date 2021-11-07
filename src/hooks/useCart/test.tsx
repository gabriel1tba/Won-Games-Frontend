import { renderHook } from '@testing-library/react-hooks';

import { MockedProvider } from '@apollo/client/testing';
import { setStorageItem } from 'utils/localStorage';

import { CartProvider, CartProviderProps } from 'context/Cart';

import useCart from '.';

import { cartItems, gamesMock } from './mock';

describe('useCart', () => {
  it('should display an error when not passing the provider', () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[gamesMock]}>{children}</MockedProvider>
    );

    setStorageItem('cartItems', ['1', '2']);

    const { result } = renderHook(() => useCart(), {
      wrapper,
    });

    expect(result.error).toStrictEqual(undefined);
  });

  it('should return items and its info if there are any in the cart', async () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[gamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    );

    setStorageItem('cartItems', ['1', '2']);

    const { result, waitForNextUpdate } = renderHook(() => useCart(), {
      wrapper,
    });

    await waitForNextUpdate();

    expect(result.current.items).toStrictEqual(cartItems);
    expect(result.current.quantity).toBe(2);
    expect(result.current.total).toBe('$21.00');
  });
});
