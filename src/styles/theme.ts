export type Colors = keyof typeof colors;

const colors = {
  primary: '#E5E5E5',
  secondary: '#E7FAFE',
  white: '#ffffff',
  black: '#000000',
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
    br8: '0.5rem',
    br16: '1rem',
    br30: '1.875rem',
    br60: '3.75rem',
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
      fontSize: '5rem',
      lineHeight: '6.5rem',
      fontSizeMobile: '4rem',
      lineHeightMobile: '5.25rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '4.5rem',
      lineHeight: '5.875rem',
      fontSizeMobile: '3.5rem',
      lineHeightMobile: '4.5625rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '3.5rem',
      lineHeight: '4.5625rem',
      fontSizeMobile: '2.5rem',
      lineHeightMobile: '3.25rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '3rem',
      lineHeight: '3.9375rem',
      fontSizeMobile: '2rem',
      lineHeightMobile: '2.625rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '2.5rem',
      lineHeight: '3.25rem',
      fontSizeMobile: '1.625rem',
      lineHeightMobile: '2.125rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '2rem',
      lineHeight: '2.625rem',
      fontSizeMobile: '1.5rem',
      lineHeightMobile: '2rem',
      fontWeight: 600,
    },
    h7: {
      fontSize: '1.5rem',
      lineHeight: '2rem',
      fontSizeMobile: '1.25rem',
      lineHeightMobile: '1.75rem',
      fontWeight: 600,
    },
    p: {
      fontSize: '1rem',
      lineHeight: '1.75rem',
      fontSizeMobile: '1.125rem',
      lineHeightMobile: '1.5rem',
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
