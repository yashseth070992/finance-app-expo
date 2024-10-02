import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CustomCard from './CustomCard';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

// Data for financial rules cards
const financeRulesData = [
  {
    title: 'The Rule of 72',
    description:
      'This rule helps estimate the time it takes for an investment to double, by dividing 72 by the annual interest rate.',
    icon: 'calculate',
    backgroundColor: '#F9EBEA',
  },
  {
    title: '50/30/20 Rule',
    description:
      'This budgeting rule suggests allocating 50% to needs, 30% to wants, and 20% to savings and debt repayment.',
    icon: 'speed',
    backgroundColor: '#E8F8F5',
  },
  {
    title: 'The 4% Rule',
    description:
      'A retirement rule of thumb that suggests withdrawing 4% of your retirement savings annually.',
    icon: 'timeline',
    backgroundColor: '#FEF9E7',
  },
];

const FinanceRulesSection = () => {
  const { colors } = useTheme(); // Get colors from the current theme

  return (
    <View style={styles.container}>
      {/* Section Heading */}
      <Text style={[styles.heading, { color: colors.text }]}>
        Best Rules of Finance
      </Text>

      {/* Cards Layout */}
      <FlatList
        data={financeRulesData}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} // Change this to fit your design (2 or 3 columns)
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <CustomCard
              title={item.title}
              description={item.description}
              buttonIcon={
                <Icon name={item.icon} size={50} color={colors.text} />
              }
              backgroundColor={item.backgroundColor}
              titleTextColor={colors.secondaryText} // Use theme colors
              descriptionTextColor={colors.secondaryText}
            />
          </View>
        )}
      />
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
  cardContainer: {
    flex: 1,
    padding: 10,
  },
});

export default FinanceRulesSection;
