import {
  forwardRef,
  ForwardRefRenderFunction,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from 'react';
import * as S from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fillWidth?: boolean;
  icon?: JSX.Element;
  minimal?: boolean;
  as?: React.ElementType;
} & ButtonTypes;

const Button: ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    icon,
    size = 'medium',
    minimal = false,
    fillWidth = false,
    ...props
  },
  ref,
) => (
  <S.Wrapper
    size={size}
    fillWidth={fillWidth}
    hasIcon={!!icon}
    minimal={minimal}
    ref={ref}
    {...props}
  >
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export default forwardRef(Button);
