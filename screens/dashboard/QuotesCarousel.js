import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const Swiper = require('react-native-swiper').default;

const quotes = [
  {
    text: 'Compound interest is the eighth wonder of the world.',
    author: 'Albert Einstein',
    backgroundColor: '#FCE4EC',
    textColor: '#37474F',
  },
  {
    text: 'The most powerful force in the universe is compound interest.',
    author: 'Albert Einstein',
    backgroundColor: '#D1C4E9',
    textColor: '#5E35B1',
  },
  {
    text: 'Money makes money. And the money that money makes, makes money.',
    author: 'Benjamin Franklin',
    backgroundColor: '#FFF9C4',
    textColor: '#F57F17',
  },
  {
    text: 'The magic of compounding returns is in its ability to build wealth over time.',
    author: 'John C. Bogle',
    backgroundColor: '#E8F5E9',
    textColor: '#388E3C',
  },
  {
    text: 'Compound interest is the greatest mathematical discovery of all time.',
    author: 'Albert Einstein',
    backgroundColor: '#E3F2FD',
    textColor: '#1976D2',
  },
];

const QuotesCarousel = () => {
  return (
    <View style={styles.container}>
      <Swiper
        autoplay
        autoplayTimeout={10}
        paginationStyle={styles.paginationStyle}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
      >
        {quotes.map((quote, index) => (
          <View
            key={index}
            style={[
              styles.quoteCard,
              { backgroundColor: quote.backgroundColor },
            ]}
          >
            <Text style={[styles.quoteText, { color: quote.textColor }]}>
              “{quote.text}”
            </Text>
            <Text style={[styles.authorText, { color: quote.textColor }]}>
              – {quote.author}
            </Text>
          </View>
        ))}
      </Swiper>
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
  paginationStyle: {
    bottom: 10,
  },
  dotStyle: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDotStyle: {
    backgroundColor: '#007AFF', // Active dot color
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

export default QuotesCarousel;
