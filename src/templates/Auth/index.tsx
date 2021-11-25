import Link from 'next/link';
import Image from 'next/image';
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
      <Image
        src="/img/auth-bg.jpg"
        alt="Won Games Auth Page"
        layout="fill"
        objectFit="cover"
      />
      <S.BannerContent>
        <Link href="/">
          <a>
            <Logo id="side-a" />
          </a>
        </Link>
        <div>
          <Heading size="huge">All your favorite games in one place</Heading>
          <S.Subtitle>
            <strong>WON</strong> is best most complete gaming plataform
          </S.Subtitle>
        </div>
        <S.Footer>Won Games 2021 © Todos os direitos reservados</S.Footer>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <Link href="/">
          <a>
            <Logo color="black" size="large" id="side-b" />
          </a>
        </Link>
        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>
        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
);

export default Auth;
