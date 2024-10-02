// CustomCardsContainer.js
import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import CustomCard from './CustomCard'; // Import your CustomCard component
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';

const CustomCardsContainer = ({ data }) => {
  const navigation = useNavigation(); // Get navigation object
  const { colors } = useTheme(); // Get colors from the current theme

  return (
    <FlatList
      data={data}
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
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
  },
});

export default CustomCardsContainer;
