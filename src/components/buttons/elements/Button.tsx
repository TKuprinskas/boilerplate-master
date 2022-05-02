import styled from 'styled-components/macro';
import {
  borderRadius,
  BorderRadiusProps,
  color,
  ColorProps,
  compose,
  position,
  PositionProps,
  layout,
  LayoutProps,
} from 'styled-system';

import { mobile, tablet } from 'styles/breakpoints';

import { Theme } from 'styles/theme';

const buttonProps = compose(borderRadius, color, position, layout);

interface Styles<T> extends BorderRadiusProps<T>, ColorProps<T>, PositionProps<T>, LayoutProps<T> {
  margin?: string;
  padding?: string;
  width?: string;
  type?: 'submit' | 'button';
}

export const Button = styled.button<Styles<Theme>>`
  display: block;
  padding: ${({ padding }) => (padding ? padding : '0.5rem 1rem')};
  width: 100%;
  font-weight: ${({ theme }) => theme.fontWeights.fw700};

  && {
    ${buttonProps};
  }

  @media ${mobile} {
    max-width: 100%;
  }

  @media ${tablet} {
    max-width: 100%;
  }
`;
