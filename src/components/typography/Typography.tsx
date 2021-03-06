import { Property } from 'csstype';
import React, { ReactNode } from 'react';
import styled from 'styled-components/macro';
import {
  compose,
  fontWeight,
  lineHeight,
  textAlign,
  TypographyProps,
  textStyle,
  typography,
  fontFamily,
  FontFamilyProps,
} from 'styled-system';

import { Colors, Theme } from 'styles/theme';

import { applyTextType } from './TypographyHelpers';

export type TextType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'h7'
  | 'body16'
  | 'caption12'
  | 'span';

export enum TextTag {
  'h1' = 'h1',
  'h2' = 'h2',
  'h3' = 'h3',
  'h4' = 'h4',
  'h5' = 'h5',
  'h6' = 'h6',
  'h7' = 'p',
  'span' = 'span',
  'body16' = 'p',
  'caption12' = 'p',
}

type AsAttributeType = string | React.ComponentType;

const typographyProperties = compose(
  textAlign,
  fontWeight,
  lineHeight,
  textStyle,
  typography,
  fontFamily,
);

export interface TextProps extends TypographyProps<Theme>, FontFamilyProps<Theme> {
  color?: Colors;
  type?: TextType;
  textTransform?: Property.TextTransform;
  textDecoration?: Property.TextDecoration;
  onClick?: () => void;
  children: ReactNode;
  margin?: string;
  textAlign?: Property.TextAlign;
}

export const Typography: React.FC<TextProps> = ({
  type = 'body16',
  children,
  margin,
  ...props
}) => {
  const as = TextTag[type] as AsAttributeType;

  return (
    <Text as={as} type={type} {...props}>
      {children}
    </Text>
  );
};

const Text = styled.p<TextProps>`
  padding: 0;
  ${({ type, theme }) => type && applyTextType(type as TextType, theme as Theme)};
  color: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.white)};

  && {
    ${typographyProperties}
  }
  text-transform: ${({ textTransform }) => textTransform || ''};
  text-decoration: ${({ textDecoration }) => textDecoration || ''};
`;
