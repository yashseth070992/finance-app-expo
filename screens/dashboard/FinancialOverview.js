import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper'; // Use Card from react-native-paper

const financialData = [
  {
    title: 'Your Credit Score',
    value: '830',
    description: 'Rating: Excellent',
    backgroundColor: '#E8F5E9',
    textColor: '#37474F',
  },
  {
    title: 'Debt Profile',
    value: '₹15,32,680',
    description: 'Total Debt',
    backgroundColor: '#FFF9C4',
    textColor: '#F57F17',
  },
  {
    title: 'Investments',
    value: '₹25,00,000',
    description: 'Total Investments',
    backgroundColor: '#E3F2FD',
    textColor: '#1976D2',
  },
];

const FinancialOverview = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Financial Overview</Text>

      <FlatList
        data={financialData}
        renderItem={({ item }) => (
          <Card
            style={[styles.card, { backgroundColor: item.backgroundColor }]}
          >
            <Card.Content>
              <Text style={[styles.title, { color: item.textColor }]}>
                {item.title}
              </Text>
              <Text style={[styles.value, { color: item.textColor }]}>
                {item.value}
              </Text>
              <Text style={[styles.description, { color: item.textColor }]}>
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
