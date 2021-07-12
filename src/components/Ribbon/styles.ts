import styled, { css, DefaultTheme } from 'styled-components';
import { RibbonColors, RibbonProps } from '.';

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};
  `,

  normal: (theme: DefaultTheme) => css`
    height: 3.6rem;
    font: ${theme.font.sizes.small};
  `,

  small: (theme: DefaultTheme) => css`
    height: 2.6rem;
    font: ${theme.font.sizes.xsmall};
  `,
};

export const Wrapper = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ theme, color, size }) => css`
    ${!!color && wrapperModifiers.color(theme, color)}

    ${!!size && wrapperModifiers[size](theme)}
  `}
`;
