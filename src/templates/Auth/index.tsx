import Heading from 'components/Heading';
import Logo from 'components/Logo';
import * as S from './styles';

export type AuthProps = {
  title: string;
  children: React.ReactNode;
};

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <Logo />
      <Heading>All your favorite games in one place</Heading>
      <S.Subtitle>
        <strong>WON</strong> is best most complete gaming plataform
      </S.Subtitle>
      <S.Footer>Won Games 2021 © Todos os direitos reservados</S.Footer>
    </S.BannerBlock>

    <S.Content>
      <Logo color="black" size="large" />
      <Heading color="black" lineColor="secondary" lineLeft>
        {title}
      </Heading>

      {children}
    </S.Content>
  </S.Wrapper>
);

export default Auth;
