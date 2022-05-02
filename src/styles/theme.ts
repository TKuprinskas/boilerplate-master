export type Colors = keyof typeof colors;

const colors = {
  primary: '#E5E5E5',
  secondary: '#E7FAFE',
  white: '#ffffff',
  black: '#000000',
  breakfast: 'linear-gradient(180deg, rgba(112, 130, 70, 0) 0%, rgba(112, 130, 70, 0.1) 100%);',
  vegan: 'linear-gradient(180deg, rgba(108, 198, 63, 0) 0%, rgba(108, 198, 63, 0.1) 100%);',
  meat: 'linear-gradient(180deg, rgba(204, 38, 27, 0) 0%, rgba(204, 38, 27, 0.1) 100%);',
  dessert: 'linear-gradient(180deg, rgba(240, 158, 0, 0) 0%, rgba(240, 158, 0, 0.1) 100%);',
  lunch: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%);',
  chocolate: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%);',
};

const borders = {
  none: 'none',
  primary: '1px solid #E5E5E5',
  secondary: '1px solid #E7FAFE',
  white: '1px solid #ffffff',
  black: '1px solid #000000',
};

export const theme = {
  colors,
  borders,
  radii: {
    br8: '8px',
    br16: '16px',
    br30: '30px',
    br60: '60px',
    br50img: '50%',
  },

  fonts: {
    base: 'Inter',
    bold: 'Lobster',
  },
  fontSizes: {
    fs14: '0.875rem',
    fs16: '1rem',
    fs18: '1.125rem',
    fs24: '1.5rem',
    fs32: '2rem',
    fs40: '2.5rem',
    fs48: '3rem',
    fs64: '4rem',
  },
  fontWeights: {
    fw100: 100,
    fw200: 200,
    fw300: 300,
    fw400: 400,
    fw500: 500,
    fw600: 600,
    fw700: 700,
  },
  zIndices: {
    base: 0,
    upperElement: 1,
    modal: 10,
    loader: 11,
  },
  breakpoints: ['24rem', '47rem', '90rem'] as unknown as Breakpoints,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512] as unknown as typeof Space,
  typography: {
    h1: {
      fontSize: '80px',
      lineHeight: '104px',
      fontSizeMobile: '64px',
      lineHeightMobile: '84px',
      fontWeight: 500,
    },
    h2: {
      fontSize: '72px',
      lineHeight: '94px',
      fontSizeMobile: '56px',
      lineHeightMobile: '73px',
      fontWeight: 500,
    },
    h3: {
      fontSize: '56px',
      lineHeight: '73px',
      fontSizeMobile: '40px',
      lineHeightMobile: '52px',
      fontWeight: 600,
    },
    h4: {
      fontSize: '48px',
      lineHeight: '63px',
      fontSizeMobile: '32px',
      lineHeightMobile: '42px',
      fontWeight: 600,
    },
    h5: {
      fontSize: '40px',
      lineHeight: '52px',
      fontSizeMobile: '26px',
      lineHeightMobile: '34px',
      fontWeight: 600,
    },
    h6: {
      fontSize: '32px',
      lineHeight: '42px',
      fontSizeMobile: '24px',
      lineHeightMobile: '32px',
      fontWeight: 600,
    },
    h7: {
      fontSize: '24px',
      lineHeight: '32px',
      fontSizeMobile: '20px',
      lineHeightMobile: '28px',
      fontWeight: 600,
    },
    p: {
      fontSize: '16px',
      lineHeight: '28px',
      fontSizeMobile: '18px',
      lineHeightMobile: '24px',
      fontWeight: 400,
    },
  },
} as const;

export type Theme = typeof theme;

const Breakpoints = theme.breakpoints as any;
Breakpoints.lmobile = Breakpoints[0];
Breakpoints.ltablet = Breakpoints[1];
Breakpoints.desktop = Breakpoints[2];

type Breakpoints<T = string> = {
  _: T;
  lmobile: T;
  ltablet: T;
  desktop: T;
};

const Space = theme.space as any;

const radii = theme.radii as any;
