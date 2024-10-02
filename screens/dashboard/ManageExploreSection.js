import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import CustomCard from './CustomCard'; // Import your CustomCard component
import  Ionicons  from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import { useNavigation } from '@react-navigation/native';

const cardData = [
  {
    title: 'Explore Asset Classes',
    description: 'Gain insights and compare various investment options to make informed decisions.',
    screen: 'AssetClasses',
    icon: <Ionicons name="pie-chart" size={24} />, // Use the appropriate Ionicon
  },
  {
    title: 'Manage Your Money',
    description: 'Take control of your finances by tracking income, expenses, and savings.',
    screen: 'ManageMoney',
    icon: <Ionicons name="trending-up" size={24} />,
  },
  {
    title: 'Set Goals',
    description: 'Set and achieve your financial goals with our advanced goal-setting tools.',
    screen: 'SetGoals',
    icon: <Ionicons name="flag" size={24} />,
  },
  {
    title: 'Manage Your Debt',
    description: 'Stay on top of your debt and keep track of payments with our debt manager tool.',
    screen: 'ManageDebt',
    icon: <Ionicons name="attach-money" size={24} />,
  },
];

const ManageExploreSection = () => {
  const navigation = useNavigation(); // Add this line

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Explore and Manage Your Finances</Text>
      <FlatList
        data={cardData}
        renderItem={({ item }) => (
          <CustomCard
            title={item.title}
            description={item.description}
            buttonAction={() => navigation.navigate(item.screen)}
            buttonIcon={item.icon}
          />
        )}
        keyExtractor={(item) => item.title}
        numColumns={2}
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

export default ManageExploreSection;