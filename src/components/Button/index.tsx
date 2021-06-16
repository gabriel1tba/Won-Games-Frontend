import * as S from './styles';

export type ButtonProps = {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  fillWidth?: boolean;
  icon?: JSX.Element;
};

const Button = ({
  children,
  icon,
  size = 'medium',
  fillWidth = false,
}: ButtonProps) => (
  <S.Wrapper size={size} fillWidth={fillWidth} hasIcon={!!icon}>
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export default Button;
