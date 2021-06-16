import * as S from './styles';

export type ButtonProps = {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  fillWidth?: boolean;
  icon?: JSX.Element;
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
  children,
  icon,
  size = 'medium',
  fillWidth = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper size={size} fillWidth={fillWidth} hasIcon={!!icon} {...props}>
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export default Button;
