'use client';

import { createTheme } from '@mui/material/styles';

const colorSchemes = { light: true, dark: false };

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 768,
    lg: 1025,
    xl: 1200,
    xxl: 1400,
  },
};

const palette = {
  background: {
    white: 'rgba(255, 255, 255, 1)',
    default: 'rgba(255, 251, 251, 1)',
    black: 'black',
  },
  accent: {
    main: 'rgba(218, 150, 148, 1)',
  },
  primary: {
    main: 'rgba(0, 0, 0, 1)',
  },
  text: {
    primary: 'rgba(0, 0, 0, 1)',
    secondary: 'rgba(120, 120, 120, 1)',
    grey: 'rgba(180, 180, 180, 1)',
    light: 'rgba(255, 255, 255, 1)',
  },
  secondary:{
    main: 'rgba(218, 150, 148, 1)', 
  }
};

const theme = createTheme({
  palette,
  colorSchemes,
  breakpoints,
});

export default theme;