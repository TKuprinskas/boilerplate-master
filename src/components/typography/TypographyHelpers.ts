import { css } from 'styled-components/macro';
import { TextType } from './Typography';
import { Theme } from 'styles/theme';
import { useQuery } from 'styles/breakpoints';

export const applyTextType = (type: TextType, theme: Theme) => {
  const { isTablet } = useQuery();
  switch (type) {
    case 'h1':
      return css`
        font-size: ${theme.typography.h1.fontSize};
        line-height: ${theme.typography.h1.lineHeight};
        font-weight: ${theme.typography.h1.fontWeight};

        ${isTablet
          ? css`
              font-size: ${theme.typography.h1.fontSizeMobile};
              line-height: ${theme.typography.h1.lineHeightMobile};
            `
          : ''}
      `;
    case 'h2':
      return css`
        font-size: ${theme.typography.h2.fontSize};
        line-height: ${theme.typography.h2.lineHeight};
        font-weight: ${theme.typography.h2.fontWeight};
        ${isTablet
          ? css`
              font-size: ${theme.typography.h2.fontSizeMobile};
              line-height: ${theme.typography.h2.lineHeightMobile};
            `
          : ''}
      `;
    case 'h3':
      return css`
        font-size: ${theme.typography.h3.fontSize};
        line-height: ${theme.typography.h3.lineHeight};
        font-weight: ${theme.typography.h3.fontWeight};
        ${isTablet
          ? css`
              font-size: ${theme.typography.h3.fontSizeMobile};
              line-height: ${theme.typography.h3.lineHeightMobile};
            `
          : ''}
      `;
    case 'h4':
      return css`
        font-size: ${theme.typography.h4.fontSize};
        line-height: ${theme.typography.h4.lineHeight};
        font-weight: ${theme.typography.h4.fontWeight};
        ${isTablet
          ? css`
              font-size: ${theme.typography.h4.fontSizeMobile};
              line-height: ${theme.typography.h4.lineHeightMobile};
            `
          : ''}
      `;
    case 'h5':
      return css`
        font-size: ${theme.typography.h5.fontSize};
        line-height: ${theme.typography.h3.lineHeight};
        font-weight: ${theme.typography.h3.fontWeight};
        ${isTablet
          ? css`
              font-size: ${theme.typography.h5.fontSizeMobile};
              line-height: ${theme.typography.h5.lineHeightMobile};
            `
          : ''}
      `;
    case 'h6':
      return css`
        font-size: ${theme.typography.h6.fontSize};
        line-height: ${theme.typography.h6.lineHeight};
        font-weight: ${theme.typography.h6.fontWeight};
        ${isTablet
          ? css`
              font-size: ${theme.typography.h6.fontSizeMobile};
              line-height: ${theme.typography.h6.lineHeightMobile};
            `
          : ''}
      `;
    case 'h7':
      return css`
        font-size: ${theme.typography.h7.fontSize};
        line-height: ${theme.typography.h7.lineHeight};
        font-weight: ${theme.typography.h7.fontWeight};
        ${isTablet
          ? css`
              font-size: ${theme.typography.h7.fontSizeMobile};
              line-height: ${theme.typography.h7.lineHeightMobile};
            `
          : ''}
      `;
    case 'body16':
      return css`
        font-size: ${theme.typography.p.fontSize};
        line-height: ${theme.typography.p.lineHeight};
        font-weight: ${theme.typography.p.fontWeight};
      `;
    case 'body16':
      return css`
        font-size: ${theme.typography.h1.fontSize};
        line-height: ${theme.typography.h1.lineHeight};
        font-weight: ${theme.typography.h1.fontWeight};
      `;
    case 'caption12':
      return css`
        font-size: ${theme.typography.h1.fontSize};
        line-height: ${theme.typography.h1.lineHeight};
        font-weight: ${theme.typography.h1.fontWeight};
      `;
  }
};
