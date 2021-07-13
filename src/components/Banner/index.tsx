import Button from 'components/Button';
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon';
import * as S from './styles';

export type BannerProps = {
  img: string;
  title: string;
  subTitle: string;
  buttonLabel: string;
  buttonLink: string;
  ribbon?: React.ReactNode;
  ribbonSize?: RibbonSizes;
  ribbonColor?: RibbonColors;
};

const Banner = ({
  img,
  title,
  subTitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'normal',
}: BannerProps) => (
  <S.Wrapper>
    <S.Image src={img} role="img" aria-label={title} />

    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}

    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.SubTitle dangerouslySetInnerHTML={{ __html: subTitle }} />
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.Wrapper>
);

export default Banner;
