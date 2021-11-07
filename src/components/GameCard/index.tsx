import Link from 'next/link';
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined';
import formatPrice from 'utils/format-price';

import CartButton from 'components/CartButton';
import Ribbon, { RibbonSizes, RibbonColors } from 'components/Ribbon';
import * as S from './styles';

export type GameCardProps = {
  id: string;
  slug: string;
  title: string;
  developer: string;
  img: string;
  price: number;
  promotionalPrice?: number;
  favorite?: boolean;
  onFav?: () => void;
  ribbon?: React.ReactNode;
  ribbonSize?: RibbonSizes;
  ribbonColor?: RibbonColors;
};

const GameCard = ({
  id,
  slug,
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small',
  onFav,
}: GameCardProps) => (
  <S.Wrapper>
    <Link href={`game/${slug}`} passHref>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
    </Link>

    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}

    {price === 0 && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        FREE
      </Ribbon>
    )}

    <S.Content>
      <Link href={`game/${slug}`} passHref>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
      </Link>

      <S.FavButton onClick={onFav} role="button">
        {favorite ? (
          <Favorite aria-label="Remove from Wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to Wishlist" />
        )}
      </S.FavButton>
      <S.BuyBox>
        {!!promotionalPrice && (
          <S.Price isPromotional>{formatPrice(price)}</S.Price>
        )}
        {price === 0 ? null : (
          <S.Price>{formatPrice(promotionalPrice || price)}</S.Price>
        )}
        <CartButton id={id} />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
);

export default GameCard;
