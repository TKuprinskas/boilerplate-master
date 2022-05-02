import styled from 'styled-components/macro';
import {
  compose,
  borderRadius,
  BorderRadiusProps,
  flexDirection,
  FlexDirectionProps,
  flexGrow,
  FlexGrowProps,
  flexShrink,
  FlexShrinkProps,
  flexWrap,
  FlexWrapProps,
  flexBasis,
  FlexBasisProps,
  justifyContent,
  JustifyContentProps,
  alignItems,
  AlignItemsProps,
  alignContent,
  AlignContentProps,
  alignSelf,
  AlignSelfProps,
} from 'styled-system';
import { Box } from './Box';

import { Theme } from 'styles/theme';

const flexProps = compose(
  borderRadius,
  flexDirection,
  flexGrow,
  flexShrink,
  flexWrap,
  flexBasis,
  justifyContent,
  alignItems,
  alignContent,
  alignSelf,
);

interface Styles<T>
  extends FlexDirectionProps<T>,
    FlexGrowProps<T>,
    FlexShrinkProps<T>,
    FlexWrapProps<T>,
    FlexBasisProps<T>,
    JustifyContentProps<T>,
    AlignItemsProps<T>,
    AlignContentProps<T>,
    AlignSelfProps<T>,
    BorderRadiusProps<T> {
  display?: string;
}

export const FlexWrapper = styled(Box)<Styles<Theme>>`
  display: flex;

  && {
    ${flexProps};
  }
`;
