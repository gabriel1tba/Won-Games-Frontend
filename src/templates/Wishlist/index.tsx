import Heading from 'components/Heading';
import Showcase from 'components/Showcase';
import Base from 'templates/Base';
import Container from 'components/Container';

// import * as S from './styles';

import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';

export type WishlistTemplateProps = {
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
};

const WishlistTemplate = ({
  recommendedGames,
  recommendedHighlight,
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>
    </Container>

    <Showcase
      title="You may like these games"
      highlight={recommendedHighlight}
      games={recommendedGames}
    />
  </Base>
);

export default WishlistTemplate;
