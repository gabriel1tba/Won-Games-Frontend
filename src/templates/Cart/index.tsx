import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions';
import CartList, { CartListProps } from 'components/CartList';
import Heading from 'components/Heading';
import Showcase from 'components/Showcase';
import Base from 'templates/Base';

import Empty from 'components/Empty';
import Container from 'components/Container';
import Divider from 'components/Divider';

import * as S from './styles';

import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';

export type CartProps = {
  recommendedTitle?: string;
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>;

const CartTemplate = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight,
  items,
  total,
  cards,
}: CartProps) => {
  const handlePayment = () => ({});

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>

        {items?.length ? (
          <S.Content>
            <CartList items={items} total={total} />

            <PaymentOptions cards={cards} handlePayment={handlePayment} />
          </S.Content>
        ) : (
          <Empty
            title="Your cart is empty"
            description="Go back to the store and explore great games and offers"
            hasLink
          />
        )}

        <Divider />
      </Container>

      <Showcase
        title={recommendedTitle}
        highlight={recommendedHighlight}
        games={recommendedGames}
      />
    </Base>
  );
};

export default CartTemplate;
