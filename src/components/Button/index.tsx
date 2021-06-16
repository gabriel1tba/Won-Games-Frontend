import * as S from './styles';

export type ButtonProps = {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  fillWidth?: boolean;
};

const Button = ({
  children,
  size = 'medium',
  fillWidth = false,
}: ButtonProps) => (
  <S.Wrapper size={size} fillWidth={fillWidth}>
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export default Button;
