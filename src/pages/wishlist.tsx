import { GetServerSidePropsContext } from 'next';
import { initializeApollo } from 'utils/apollo';
import { QueryRecommended } from 'graphql/generated/QueryRecommended';
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended';
import { gamesMapper, highlightMapper } from 'utils/mappers';

import WishlistTemplate, { WishlistTemplateProps } from 'templates/Wishlist';

import protectedRoutes from 'utils/protected-routes';

import gamesMock from 'components/GameCardSlider/mock';

const WishlistPage = (props: WishlistTemplateProps) => {
  return <WishlistTemplate {...props} />;
};

export default WishlistPage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const session = await protectedRoutes(context);
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED,
  });

  return {
    props: {
      session,
      games: gamesMock,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight,
      ),
    },
  };
};
