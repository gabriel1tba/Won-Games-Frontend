import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder,
} from '@styled-icons/material-outlined';
import Link from 'next/link';

import Button from 'components/Button';
import Ribbon, { RibbonSizes, RibbonColors } from 'components/Ribbon';
import * as S from './styles';

export type GameCardProps = {
  slug: string;
  title: string;
  developer: string;
  img: string;
  price: string;
  promotionalPrice?: string;
  favorite?: boolean;
  onFav?: () => void;
  ribbon?: React.ReactNode;
  ribbonSize?: RibbonSizes;
  ribbonColor?: RibbonColors;
};

const GameCard = ({
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
        {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
        <S.Price>{promotionalPrice || price}</S.Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
);

export default GameCard;
