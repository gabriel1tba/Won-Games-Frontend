import * as S from './styles';

import Heading from 'components/Heading';
import GameCardSlider from 'components/GameCardSlider';
import Highlight, { HighlightProps } from 'components/Highlight';
import { GameCardProps } from 'components/GameCard';

export type ShowcaseProps = {
  title?: string;
  highlight?: HighlightProps;
  games?: GameCardProps[];
  color?: 'black' | 'white';
};

const Showcase = ({
  title,
  highlight,
  games,
  color = 'white',
}: ShowcaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider items={games} color={color} />}
  </S.Wrapper>
);

export default Showcase;
