import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fillWidth?: boolean;
  icon?: JSX.Element;
  as?: React.ElementType;
} & ButtonTypes;

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
