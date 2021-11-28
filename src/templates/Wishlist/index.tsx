import Heading from 'components/Heading';
import Showcase from 'components/Showcase';
import GameCard, { GameCardProps } from 'components/GameCard';
import Base from 'templates/Base';
import Empty from 'components/Empty';

import Grid from 'components/Grid';
import Divider from 'components/Divider';
import Container from 'components/Container';
import Loader from 'components/Loader';

import { useWishlist } from 'hooks';

import * as S from './styles';

// import * as S from './styles';

import { HighlightProps } from 'components/Highlight';

export type WishlistTemplateProps = {
  recommendedTitle?: string;
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
};

const WishlistTemplate = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight,
}: WishlistTemplateProps) => {
  const { items, loading } = useWishlist();

  return (
    <Base>
      <Container data-cy="wishlist">
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>

        {loading ? (
          <S.Loading>
            <Loader />
          </S.Loading>
        ) : items.length >= 1 ? (
          <Grid>
            {items?.map((game, index) => (
              <GameCard key={`wishlist-${index}`} {...game} />
            ))}
          </Grid>
        ) : (
          <Empty
            title="Your wishlist is empty"
            description="Games added to your wishlist will appear here"
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

export default WishlistTemplate;
