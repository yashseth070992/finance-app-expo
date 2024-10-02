import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CustomCard from './CustomCard'; // Import your CustomCard component

const dashboardCardData = [
  {
    title: 'Sip Calculator',
    screen: 'SipCalculator',
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
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Explore Our Financial Calculators</Text>
      <FlatList
        data={dashboardCardData}
        renderItem={({ item }) => (
          <CustomCard
            title={item.title}
            description={item.description}
            buttonAction={() => navigation.navigate(item.screen)}
            backgroundColor={item.backgroundColor}
          />
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
});

export default FinancialToolsSection;
