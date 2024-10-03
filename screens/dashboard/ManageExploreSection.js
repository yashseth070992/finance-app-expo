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
    iconName: 'pie-chart',
    backgroundColor: '#E8F6F3', // Soft teal
  },
  {
    title: 'Manage Your Money',
    description:
      'Take control of your finances by tracking income, expenses, and savings.',
    screen: 'ManageMoney',
    iconName: 'trending-up',
    backgroundColor: '#FDEDEC', // Soft red-pink
  },
  {
    title: 'Set Goals',
    description:
      'Set and achieve your financial goals with our advanced goal-setting tools.',
    screen: 'SetGoals',
    iconName: 'flag',
    backgroundColor: '#FEF9E7', // Soft yellow
  },
  {
    title: 'Manage Your Debt',
    description:
      'Stay on top of your debt and keep track of payments with our debt manager tool.',
    screen: 'DebtManager',
    iconName: 'wallet-outline',
    backgroundColor: '#EBF5FB', // Soft light blue
  },
];
const ManageExploreSection = () => {
  const navigation = useNavigation(); // Navigation hook
  const { colors } = useTheme(); // Get colors from the current theme

  return (
    <View style={styles.container}>
      <Text style={[styles.heading, { color: colors.text }]}>
        Explore and Manage Your Finances
      </Text>
      <CustomCardsContainer data={cardData} />
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
