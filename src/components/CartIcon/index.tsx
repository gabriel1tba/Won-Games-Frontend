import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart';

import * as S from './styles';

import useCart from 'hooks/useCart';

const CartIcon = () => {
  const { quantity } = useCart();

  return (
    <S.Wrapper>
      {quantity > 0 && <S.Badge aria-label="Cart Items">{quantity}</S.Badge>}
      <ShoppingCart aria-label="Shopping Cart" />
    </S.Wrapper>
  );
};

export default CartIcon;
