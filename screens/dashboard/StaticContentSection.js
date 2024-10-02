import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import CustomCard from './CustomCard'; // Import your CustomCard component
import  Ionicons  from 'react-native-vector-icons/Ionicons'; // Import Ionicons

const StaticContentSection = () => {
  const contentData = [
    {
      title: 'Investment Strategies',
      description: 'Explore various investment strategies to diversify your portfolio and maximize returns.',
      icon: <Ionicons name="bar-chart" size={24} />, // Use Ionicons for the icon
      backgroundColor: '#E8F6F3',
      titleTextColor: '#34495E',
      descriptionTextColor: '#7F8C8D',
    },
    {
      title: 'Market Trends',
      description: 'Stay updated on the latest market trends and make data-driven financial decisions.',
      icon: <Ionicons name="trending-up" size={24} />, // Use Ionicons for the icon
      backgroundColor: '#EAF2F8',
      titleTextColor: '#34495E',
      descriptionTextColor: '#7F8C8D',
    },
    {
      title: 'Financial Health',
      description: 'Track your financial health and get personalized tips to improve your financial well-being.',
      icon: <Ionicons name="cash" size={24} />, // Use Ionicons for the icon
      backgroundColor: '#F5EEF8',
      titleTextColor: '#8E44AD',
      descriptionTextColor: '#7F8C8D',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Explore Financial Insights</Text>
      <FlatList
        data={contentData}
        renderItem={({ item }) => (
          <CustomCard
            title={item.title}
            description={item.description}
            buttonIcon={item.icon}
            backgroundColor={item.backgroundColor}
            titleTextColor={item.titleTextColor}
            descriptionTextColor={item.descriptionTextColor}
            buttonAction={() => console.log(`Navigate to ${item.title}`)} // Placeholder for action
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

export default StaticContentSection;