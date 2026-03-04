export const theme = {
  colors: {
    primary: '#61dafb',
    secondary: '#a18fff',
    background: {
      main: '#000000',
      dark: '#000000',
    },
    text: {
      primary: '#ffffff',
      secondary: '#bdbdbd',
      dark: '#181818',
    },
    border: 'rgba(255, 255, 255, 0.12)',
    overlay: 'rgba(30, 32, 60, 0.2)',
  },
  spacing: {
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '48px',
    xxl: '60px',
  },
  borderRadius: {
    sm: '16px',
    md: '20px',
    lg: '24px',
  },
  shadows: {
    small: '0 4px 30px rgba(0, 0, 0, 0.4)',
    medium: '0 8px 40px rgba(0, 0, 0, 0.5)',
    glow: {
      primary: '0 0 16px rgba(97, 218, 251, 0.6)',
      secondary: '0 0 16px rgba(161, 143, 255, 0.6)',
    },
  },
  transitions: {
    fast: '0.2s',
    medium: '0.3s',
  },
  zIndex: {
    background: 0,
    content: 1,
    navbar: 10,
  },
};

export type Theme = typeof theme;
