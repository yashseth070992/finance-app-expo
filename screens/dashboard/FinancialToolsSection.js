import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomCardsContainer from './CustomCardsContainer'; // Import the new CustomCardsContainer
import { useTheme } from '@react-navigation/native';

const dashboardCardData = [
  {
    title: 'Sip Calculator',
    screen: 'SIPCalculator',
    backgroundColor: '#D6EAF8', // Light Blue tone to match the soft palette
    description: 'Calculate the returns of your Systematic Investment Plan.',
    iconName: 'calculator-outline', // Ionicons icon name
  },
  {
    title: 'Lumpsum Calculator',
    screen: 'LumpsumCalculator',
    backgroundColor: '#D4EFDF', // Light Green to complement the existing green
    description: 'Compute the growth of a one-time lumpsum investment.',
    iconName: 'cash-outline', // Ionicons icon name
  },
  {
    title: 'SWP Calculator',
    screen: 'SWPCalculator',
    backgroundColor: '#EBDEF0', // Light Purple tone to complement the darker purple
    description:
      'Find out how much you can withdraw periodically from your investments.',
    iconName: 'trending-up-outline', // Ionicons icon name
  },
];

const FinancialToolsSection = () => {
  const { colors } = useTheme(); // Get colors from the current theme

  return (
    <View style={styles.container}>
      <Text style={[styles.heading, { color: colors.text }]}>
        Explore Our Financial Calculators
      </Text>
      <CustomCardsContainer data={dashboardCardData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
  },
  heading: {
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default FinancialToolsSection;
