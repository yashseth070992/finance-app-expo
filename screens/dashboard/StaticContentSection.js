import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native'; // Import useTheme
import CustomCardsContainer from './CustomCardsContainer'; // Import the CustomCardsContainer

const StaticContentSection = () => {
  const { colors } = useTheme(); // Get colors from the current theme
  const contentData = [
    {
      title: 'Investment Strategies',
      description:
        'Explore various investment strategies to diversify your portfolio and maximize returns.',
      iconName: 'bar-chart',
      backgroundColor: '#E8F6F3',
    },
    {
      title: 'Market Trends',
      description:
        'Stay updated on the latest market trends and make data-driven financial decisions.',
      iconName: 'trending-up',
      backgroundColor: '#EAF2F8',
    },
    {
      title: 'Financial Health',
      description:
        'Track your financial health and get personalized tips to improve your financial well-being.',
      iconName: 'cash',
      backgroundColor: '#F5EEF8',
    },
  ].map((item) => ({
    ...item,
    titleTextColor: colors.text,
    descriptionTextColor: colors.secondaryText,
  }));

  return (
    <View style={styles.container}>
      <Text style={[styles.heading, { color: colors.text }]}>
        Explore Financial Insights
      </Text>
      <CustomCardsContainer data={contentData} />
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
