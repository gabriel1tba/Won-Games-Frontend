import styled, { css } from 'styled-components';
import { CheckBoxProps } from '.';

export const Wrapper = styled.main``;

export const Label = styled.label<Pick<CheckBoxProps, 'labelColor'>>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
  `}
`;
