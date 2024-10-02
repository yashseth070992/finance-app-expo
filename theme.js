import { DefaultTheme, DarkTheme } from '@react-navigation/native';

// Define the custom Light Theme using the colors from your CSS variables
export const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1976d2', // Button background
    background: '#f4f8fc', // Primary background
    card: '#ffffff', // Card background
    text: '#2c3e50', // Primary text color
    secondaryText: '#7f8c8d', // Secondary text color
    buttonText: '#ffffff', // Button text color
    buttonBackground: '#1976d2', // Button background
    buttonHoverBackground: '#1565c0', // Button hover background
    iconBackground: '#eef2f9', // Icon background
    accent: '#ffca28', // Accent color
    borderColor: '#d1d9e6', // Border color
    inputBackground: '#f0f5fa', // Input field background
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.12)', // Box shadow for elevated elements
  },
};

// Define the custom Dark Theme configuration
export const DarkThemeConfig = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#bb86fc', // Primary color in dark mode
    background: '#121212', // Dark background
    card: '#1f1f1f', // Dark card background
    text: '#ffffff', // White text
    secondaryText: '#7f8c8d', // Secondary text (gray tone)
    buttonText: '#ffffff', // Button text in dark mode
    buttonBackground: '#1976d2', // Button background in dark mode
    buttonHoverBackground: '#1565c0', // Button hover state
    iconBackground: '#eef2f9', // Icon background in dark mode
    accent: '#ffca28', // Accent color (same for light and dark mode)
    borderColor: '#d1d9e6', // Border color (same as light mode)
    inputBackground: '#2f2f2f', // Dark input background
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.12)', // Box shadow
  },
};
