import { initializeApollo } from 'utils/apollo';
import { QueryRecommended } from 'graphql/generated/QueryRecommended';
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended';
import { gamesMapper, highlightMapper } from 'utils/mappers';

import WishlistTemplate, { WishlistTemplateProps } from 'templates/Wishlist';

import gamesMock from 'components/GameCardSlider/mock';

const WishlistPage = (props: WishlistTemplateProps) => {
  return <WishlistTemplate {...props} />;
};

export default WishlistPage;

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED,
  });

  return {
    props: {
      games: gamesMock,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight,
      ),
    },
  };
};
