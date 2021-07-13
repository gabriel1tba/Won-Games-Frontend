import Banner, { BannerProps } from 'components/Banner';
import Slider, { SliderSettings } from 'components/Slider';
import v4 from 'utils/uuidv4';
import * as S from './styles';

export type BannerSliderProps = {
  items: BannerProps[];
};

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false,
      },
    },
  ],
};

const BannerSlider = ({ items }: BannerSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item) => (
        <Banner key={v4()} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
);

export default BannerSlider;
