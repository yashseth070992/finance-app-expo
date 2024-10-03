import React from 'react';
import { FlatList, View, StyleSheet, Dimensions } from 'react-native';
import CustomCard from './CustomCard';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width / 2 - 30;

const CustomCardsContainer = ({ data }) => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.cardWrapper}>
          <CustomCard
            title={item.title}
            description={item.description}
            buttonAction={() => navigation.navigate(item.screen)}
            backgroundColor={item.backgroundColor}
            iconName={item.iconName} // Pass the icon name to the card
          />
        </View>
      )}
      keyExtractor={(item) => item.title}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cardWrapper: {
    width: CARD_WIDTH,
    marginHorizontal: 10,
  },
});

export default CustomCardsContainer;
