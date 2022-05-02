import styled from 'styled-components/macro';

import { mobile, tablet } from 'styles/breakpoints';
import { Colors } from 'styles/theme';

interface SectionWrapperStyles {
  minHeight?: string;
  backgroundColor?: Colors;
  borderBottom?: string;
  borderTop?: string;
}

export const SectionWrapper = styled.section<SectionWrapperStyles>`
  position: relative;
  padding: 64px;
  min-height: ${({ minHeight }) => minHeight || ''};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? theme.colors[backgroundColor] : ''};
  border-bottom: ${({ borderBottom }) => borderBottom || ''};

  @media ${mobile} {
    padding: 32px;
  }

  @media ${tablet} {
    padding: 48px;
  }
`;
