import Image from 'next/image';

import GameInfo, { GameInfoProps } from 'components/GameInfo';
import Gallery, { GalleryImageProps } from 'components/Gallery';
import GameDetails, { GameDetailsProps } from 'components/GameDetails';
import Divider from 'components/Divider';
import Showcase from 'components/Showcase';

import Base from 'templates/Base';

import TextContent from 'components/TextContent';

import * as S from './styles';

import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';

export type GameTemplateProps = {
  recommendedTitle?: string;
  cover: string;
  gameInfo: GameInfoProps;
  gallery?: GalleryImageProps[];
  description: string;
  details: GameDetailsProps;
  upcomingTitle: string;
  upcomingGames: GameCardProps[];
  upcomingHighlight: HighlightProps;
  recommendedGames: GameCardProps[];
};

const Game = ({
  cover,
  recommendedTitle,
  gameInfo,
  gallery,
  description,
  details,
  upcomingTitle,
  upcomingGames,
  upcomingHighlight,
  recommendedGames,
}: GameTemplateProps) => (
  <Base>
    <S.Cover>
      <Image src={cover} alt={gameInfo.title} layout="fill" />
    </S.Cover>

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>

      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>

      <S.SectionGameDetails>
        <GameDetails {...details} />
        <Divider />
      </S.SectionGameDetails>

      <Showcase
        title={upcomingTitle}
        highlight={upcomingHighlight}
        games={upcomingGames}
      />

      <Showcase title={recommendedTitle} games={recommendedGames} />
    </S.Main>
  </Base>
);

export default Game;
