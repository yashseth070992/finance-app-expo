// SectionContent.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width / 3 - 20;

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
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  option: {
    width: CARD_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 10,
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
