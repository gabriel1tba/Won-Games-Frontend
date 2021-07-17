import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos';

import * as S from './styles';

import GameCard, { GameCardProps } from 'components/GameCard';
import Slider, { SliderSettings } from 'components/Slider';

import v4 from 'utils/uuidv4';

type GameCardSliderProps = {
  items: GameCardProps[];
  color?: 'white' | 'black';
};

const settings: SliderSettings = {
  nextArrow: <ArrowRight aria-label="next game" />,
  prevArrow: <ArrowLeft aria-label="previus game" />,
};

const GameCardSlider = ({ items, color = 'black' }: GameCardSliderProps) => (
  <S.Wrapper color={color}>
    <Slider settings={settings}>
      {items.map((item) => (
        <GameCard key={v4()} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
);

export default GameCardSlider;
