import Image from 'next/image';
import Link from 'next/link';

import Ribbon from 'components/Ribbon';
import CartButton from 'components/CartButton';
import WishlistButton from 'components/WishlistButton';

import formatPrice from 'utils/format-price';

import * as S from './styles';

export type GameCardProps = {
  id: string;
  slug: string;
  title: string;
  developer: string;
  img: string;
  price: number;
  promotionalPrice?: number;
};

const GameCard = ({
  id,
  slug,
  title,
  developer,
  img,
  price,
  promotionalPrice,
}: GameCardProps) => (
  <S.Wrapper data-cy="game-card">
    {price === 0 && (
      <Ribbon color="secondary" size="small">
        FREE
      </Ribbon>
    )}
    <Link href={`/game/${slug}`} passHref>
      <S.ImageBox>
        <Image src={img} alt={title} layout="fill" objectFit="cover" />
      </S.ImageBox>
    </Link>
    <S.Content>
      <Link href={`/game/${slug}`} passHref>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
      </Link>
      <S.FavButton>
        <WishlistButton id={id} />
      </S.FavButton>
      <S.BuyBox>
        {!!promotionalPrice && (
          <S.Price isPromotional>{formatPrice(price)}</S.Price>
        )}
        {price > 0 && (
          <S.Price>{formatPrice(promotionalPrice || price)}</S.Price>
        )}
        <CartButton id={id} />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
);

export default GameCard;
