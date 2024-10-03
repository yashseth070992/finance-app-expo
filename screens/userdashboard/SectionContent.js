import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width / 3 - 30; // Adjusted for better spacing

const SectionContent = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <View style={styles.option}>
          <Ionicons name={item.icon} size={32} color="#1976D2" />
          <View style={styles.optionText}>
            <Text style={styles.optionTitle}>{item.title}</Text>
            <Text style={styles.optionValue}>{item.value}</Text>
          </View>
        </View>
      )}
      numColumns={3}
      contentContainerStyle={styles.optionContainer}
    />
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  option: {
    width: CARD_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,  // Horizontal margin for spacing between items
    marginBottom: 20,      // Vertical margin for spacing between rows
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  optionText: {
    alignItems: 'center',
    marginTop: 10,
  },
  optionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
  optionValue: {
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
  },
});

export default SectionContent;