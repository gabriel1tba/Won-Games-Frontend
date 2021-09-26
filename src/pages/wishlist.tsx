import WishlistTemplate, { WishlistTemplateProps } from 'templates/Wishlist';

import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

const WishlistPage = (props: WishlistTemplateProps) => {
  return <WishlistTemplate {...props} />;
};

export default WishlistPage;

export const getStaticProps = async () => {
  return {
    props: {
      games: gamesMock,
      recommendedGames: gamesMock.slice(0, 5),
      recommendedHighlight: highlightMock,
    },
  };
};
