import * as S from './styles'

const Main = ({
  title = 'React Avançado!',
  description = 'TypeScript, ReactJS, NextJS, Styled-Components, Jest...'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo - React Avançado escrito ao lado."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para tela com código."
    />
  </S.Wrapper>
)

export default Main
