import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomCardsContainer from './CustomCardsContainer'; // Import CustomCardsContainer
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native'; // Import useTheme

const cardData = [
  {
    title: 'Explore Asset Classes',
    description:
      'Gain insights and compare various investment options to make informed decisions.',
    screen: 'AssetExplore',
    icon: 'pie-chart',
  },
  {
    title: 'Manage Your Money',
    description:
      'Take control of your finances by tracking income, expenses, and savings.',
    screen: 'ManageMoney',
    icon: 'trending-up',
  },
  {
    title: 'Set Goals',
    description:
      'Set and achieve your financial goals with our advanced goal-setting tools.',
    screen: 'SetGoals',
    icon: 'flag',
  },
  {
    title: 'Manage Your Debt',
    description:
      'Stay on top of your debt and keep track of payments with our debt manager tool.',
    screen: 'DebtManager',
    icon: 'attach-money',
  },
];

const ManageExploreSection = () => {
  const navigation = useNavigation(); // Navigation hook
  const { colors } = useTheme(); // Get colors from the current theme

  const cardDataWithColors = cardData.map((item) => ({
    ...item,
    backgroundColor: colors.card, // Use theme card color
  }));

  return (
    <View style={styles.container}>
      <Text style={[styles.heading, { color: colors.text }]}>
        Explore and Manage Your Finances
      </Text>
      <CustomCardsContainer data={cardDataWithColors} />{' '}
      {/* Use CustomCardsContainer */}
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

export default ManageExploreSection;
