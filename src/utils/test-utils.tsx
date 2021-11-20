import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';
import {
  CartContext,
  CartContextProps,
  CartContextMockValues,
} from 'context/Cart';

import {
  WishlistContext,
  WishlistContextProps,
  WishlistContextMock,
} from 'context/Wishlist';

type CustomRenderProps = {
  cartProviderProps?: CartContextProps;
  wishlistProviderProps?: WishlistContextProps;
} & Omit<RenderOptions, 'queries'>;

const customRender = (
  ui: ReactElement,
  {
    cartProviderProps = CartContextMockValues,
    wishlistProviderProps = WishlistContextMock,
    ...renderOptions
  }: CustomRenderProps = {},
) =>
  render(
    <ThemeProvider theme={theme}>
      <CartContext.Provider value={cartProviderProps}>
        <WishlistContext.Provider value={wishlistProviderProps}>
          {ui}
        </WishlistContext.Provider>
      </CartContext.Provider>
    </ThemeProvider>,
    renderOptions,
  );

export * from '@testing-library/react';
export { customRender as render };
