import Base from 'templates/Base';
import Container from 'components/Container';
import BannerSlider from 'components/BannerSlider';
import Showcase from 'components/Showcase';

import * as S from './styles';

import { BannerProps } from 'components/Banner';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGamesTitle: string;
  newGames: GameCardProps[];
  mostPopularGamesTitle: string;
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upcomingGames: GameCardProps[];
  upcomingGamesTitle: string;
  upcommingHighligth: HighlightProps;
  freeGamesTitle: string;
  freeGames: GameCardProps[];
  freeHighligth: HighlightProps;
};

const Home = ({
  banners,
  newGamesTitle,
  newGames,
  mostPopularGamesTitle,
  mostPopularHighlight,
  upcomingGamesTitle,
  mostPopularGames,
  upcomingGames,
  upcommingHighligth,
  freeGamesTitle,
  freeGames,
  freeHighligth,
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title={newGamesTitle} games={newGames} color="black" />
    </S.SectionNews>

    <Showcase
      title={mostPopularGamesTitle}
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <Showcase
      title={upcomingGamesTitle}
      games={upcomingGames}
      highlight={upcommingHighligth}
    />

    <Showcase
      title={freeGamesTitle}
      highlight={freeHighligth}
      games={freeGames}
    />
  </Base>
);

export default Home;
