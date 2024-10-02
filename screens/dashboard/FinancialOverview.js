import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper'; // Use Card from react-native-paper
import { useTheme } from '@react-navigation/native';

const financialData = [
  {
    title: 'Your Credit Score',
    value: '830',
    description: 'Rating: Excellent',
    backgroundColor: '#E8F5E9',
  },
  {
    title: 'Debt Profile',
    value: '₹15,32,680',
    description: 'Total Debt',
    backgroundColor: '#FFF9C4',
  },
  {
    title: 'Investments',
    value: '₹25,00,000',
    description: 'Total Investments',
    backgroundColor: '#E3F2FD',
  },
];

const FinancialOverview = () => {
  const { colors } = useTheme(); // Get colors from the current theme

  return (
    <View style={styles.container}>
      <Text style={[styles.heading, { color: colors.text }]}>
        Financial Overview
      </Text>

      <FlatList
        data={financialData}
        renderItem={({ item }) => (
          <Card
            style={[styles.card, { backgroundColor: item.backgroundColor }]}
          >
            <Card.Content>
              <Text style={[styles.title, { color: colors.text }]}>
                {item.title}
              </Text>
              <Text style={[styles.value, { color: colors.text }]}>
                {item.value}
              </Text>
              <Text
                style={[styles.description, { color: colors.secondaryText }]}
              >
                {item.description}
              </Text>
            </Card.Content>
          </Card>
        )}
        keyExtractor={(item) => item.title}
        numColumns={3}
      />
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
  card: {
    flex: 1,
    margin: 10,
    padding: 20,
    borderRadius: 20,
    elevation: 6,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 100,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
  },
  value: {
    marginTop: 8,
    fontWeight: 'bold',
    fontSize: 24,
  },
  description: {
    marginTop: 4,
    fontSize: 14,
  },
});

export default FinancialOverview;
