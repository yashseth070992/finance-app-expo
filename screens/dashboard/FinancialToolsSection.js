import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomCardsContainer from './CustomCardsContainer'; // Import the new CustomCardsContainer
import { useTheme } from '@react-navigation/native';

const dashboardCardData = [
  {
    title: 'Sip Calculator',
    screen: 'SIPCalculator',
    backgroundColor: '#3498db',
    description: 'Calculate the returns of your Systematic Investment Plan.',
  },
  {
    title: 'Lumpsum Calculator',
    screen: 'LumpsumCalculator',
    backgroundColor: '#2ecc71',
    description: 'Compute the growth of a one-time lumpsum investment.',
  },
  {
    title: 'SWP Calculator',
    screen: 'SWPCalculator',
    backgroundColor: '#8e44ad',
    description:
      'Find out how much you can withdraw periodically from your investments.',
  },
];

const FinancialToolsSection = () => {
  const { colors } = useTheme(); // Get colors from the current theme

  return (
    <View style={styles.container}>
      <Text style={[styles.heading, { color: colors.text }]}>
        Explore Our Financial Calculators
      </Text>
      {/* Use CustomCardsContainer to render the cards */}
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
