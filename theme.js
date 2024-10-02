// theme.js

import { DefaultTheme, DarkTheme } from '@react-navigation/native';

export const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1976d2',
    background: '#ffffff',
    card: '#f4f8fc',
    text: '#2c3e50',
  },
};

export const DarkThemeConfig = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#bb86fc',
    background: '#121212',
    card: '#1f1f1f',
    text: '#ffffff',
  },
};
