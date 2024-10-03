import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native'; // Import useTheme
import CustomCardsContainer from './CustomCardsContainer'; // Import CustomCardsContainer
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons

const financeRulesData = [
  {
    title: 'The Rule of 72',
    description:
      'This rule helps estimate the time it takes for an investment to double, by dividing 72 by the annual interest rate.',
    iconName: 'calculator-outline', // Ionicon name for calculate
    backgroundColor: '#F9EBEA',
  },
  {
    title: '50/30/20 Rule',
    description:
      'This budgeting rule suggests allocating 50% to needs, 30% to wants, and 20% to savings and debt repayment.',
    iconName: 'speedometer-outline', // Ionicon name for speed
    backgroundColor: '#E8F8F5',
  },
  {
    title: 'The 4% Rule',
    description:
      'A retirement rule of thumb that suggests withdrawing 4% of your retirement savings annually.',
    iconName: 'trending-up-outline', // Ionicon name for timeline
    backgroundColor: '#FEF9E7',
  },
];

const FinanceRulesSection = () => {
  const { colors } = useTheme(); // Get colors from the current theme

  const financeRulesDataWithColors = financeRulesData.map((item) => ({
    ...item,
    titleTextColor: colors.text,
    descriptionTextColor: colors.secondaryText,
    icon: (
      <Ionicons name={item.iconName} size={50} color={colors.text} />
    ), // Use Ionicons and theme color
  }));

  return (
    <View style={styles.container}>
      <Text style={[styles.heading, { color: colors.text }]}>
        Best Rules of Finance
      </Text>
      <CustomCardsContainer data={financeRulesDataWithColors} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 16,
  },
  heading: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default FinanceRulesSection;