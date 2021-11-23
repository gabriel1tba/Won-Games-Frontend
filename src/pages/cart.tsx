import { GetServerSidePropsContext } from 'next';

import { initializeApollo } from 'utils/apollo';
import protectedRoutes from 'utils/protected-routes';
import { QueryRecommended } from 'graphql/generated/QueryRecommended';
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended';
import { gamesMapper, highlightMapper } from 'utils/mappers';

import CartTemplate, { CartProps } from 'templates/Cart';

const CartPage = (props: CartProps) => {
  return <CartTemplate {...props} />;
};

export default CartPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context);
  const apolloClient = initializeApollo(null, session);

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED,
  });

  return {
    props: {
      session,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight,
      ),
    },
  };
}
