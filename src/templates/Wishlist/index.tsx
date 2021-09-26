import { v4 } from 'uuid';

import Heading from 'components/Heading';
import Showcase from 'components/Showcase';
import GameCard, { GameCardProps } from 'components/GameCard';
import Base from 'templates/Base';

import Grid from 'components/Grid';
import Container from 'components/Container';

// import * as S from './styles';

import { HighlightProps } from 'components/Highlight';

export type WishlistTemplateProps = {
  games?: GameCardProps[];
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
};

const WishlistTemplate = ({
  games,
  recommendedGames,
  recommendedHighlight,
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      <Grid>
        {games?.map((game) => (
          <GameCard key={v4()} {...game} />
        ))}
      </Grid>
    </Container>

    <Showcase
      title="You may like these games"
      highlight={recommendedHighlight}
      games={recommendedGames}
    />
  </Base>
);

export default WishlistTemplate;
