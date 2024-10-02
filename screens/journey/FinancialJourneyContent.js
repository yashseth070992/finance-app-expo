import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import financialJourneyData from './data/financialJourneyData'; // Adjust the path based on your project structure
import { useTheme } from '@react-navigation/native'; // Import useTheme

const FinancialJourneyContent = () => {
  const { colors } = useTheme(); // Get colors from the current theme

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.header, { color: colors.text }]}>
        Key Questions to Ask Yourself
      </Text>
      <ScrollView>
        {financialJourneyData.map((section, index) => (
          <View key={index} style={styles.card}>
            <Text style={[styles.cardTitle, { color: colors.text }]}>
              {section.title}
            </Text>
            <Text style={[styles.cardContent, { color: colors.secondaryText }]}>
              {section.content.map((item, idx) => (
                <Text key={idx}>
                  - {item}
                  {'\n'}
                </Text>
              ))}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    fontSize: 24,
  },
  card: {
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
    fontSize: 18,
  },
  cardContent: {
    fontSize: 16,
  },
});

export default FinancialJourneyContent;
