import { initializeApollo } from 'utils/apollo';
import { QueryRecommended } from 'graphql/generated/QueryRecommended';
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended';
import { gamesMapper, highlightMapper } from 'utils/mappers';

import CartTemplate, { CartProps } from 'templates/Cart';

import itemsMock from 'components/CartList/mock';
import cardsMock from 'components/PaymentOptions/mock';

const CartPage = (props: CartProps) => {
  return <CartTemplate {...props} />;
};

export default CartPage;

export const getServerSideProps = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED,
  });

  return {
    props: {
      items: itemsMock,
      total: '$ 430,00',
      cards: cardsMock,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight,
      ),
    },
  };
};
