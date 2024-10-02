import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import CustomCard from './CustomCard'; // Import your CustomCard component
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
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
  const navigation = useNavigation(); // Get navigation object
  const { colors } = useTheme(); // Get colors from the current theme

  return (
    <View style={styles.container}>
      <Text style={[styles.heading, { color: colors.text }]}>
        Explore Our Financial Calculators
      </Text>
      <FlatList
        data={dashboardCardData}
        renderItem={({ item }) => (
          <CustomCard
            title={item.title}
            description={item.description}
            buttonAction={() => navigation.navigate(item.screen)} // Pass navigation to CustomCard
            backgroundColor={item.backgroundColor}
          />
        )}
        keyExtractor={(item) => item.title}
        numColumns={2} // Adjust number of columns
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
});

export default FinancialToolsSection;
