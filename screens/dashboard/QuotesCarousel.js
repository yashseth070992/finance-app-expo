import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useTheme } from '@react-navigation/native'; // Import useTheme

const quotes = [
  {
    text: 'Compound interest is the eighth wonder of the world.',
    author: 'Albert Einstein',
    backgroundColor: '#FCE4EC',
  },
  {
    text: 'The most powerful force in the universe is compound interest.',
    author: 'Albert Einstein',
    backgroundColor: '#D1C4E9',
  },
  {
    text: 'Money makes money. And the money that money makes, makes money.',
    author: 'Benjamin Franklin',
    backgroundColor: '#FFF9C4',
  },
  {
    text: 'The magic of compounding returns is in its ability to build wealth over time.',
    author: 'John C. Bogle',
    backgroundColor: '#E8F5E9',
  },
  {
    text: 'Compound interest is the greatest mathematical discovery of all time.',
    author: 'Albert Einstein',
    backgroundColor: '#E3F2FD',
  },
];

const QuotesCarousel = () => {
  const { colors } = useTheme(); // Get colors from the current theme
  const windowWidth = Dimensions.get('window').width; // Get the width of the screen

  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={windowWidth}
        height={200}
        autoPlay={true}
        data={quotes}
        renderItem={({ item }) => (
          <View
            style={[styles.quoteCard, { backgroundColor: item.backgroundColor }]}
          >
            <Text style={[styles.quoteText, { color: colors.text }]}>
              “{item.text}”
            </Text>
            <Text style={[styles.authorText, { color: colors.secondaryText }]}>
              – {item.author}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    padding: 10,
  },
  quoteCard: {
    padding: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  quoteText: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
  },
  authorText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default QuotesCarousel;