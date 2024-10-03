// HeaderTabs.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HeaderTabs = ({ sectionsConfig, activeSection, onSectionChange }) => {
  return (
    <View style={styles.header}>
      {sectionsConfig.map((section) => (
        <TouchableOpacity
          key={section.key}
          style={[
            styles.tab,
            activeSection === section.key && styles.activeTab,
          ]}
          onPress={() => onSectionChange(section.key)}
        >
          <Text
            style={
              activeSection === section.key
                ? styles.activeTabText
                : styles.tabText
            }
          >
            {section.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#F8F9FB',
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#D0E8FF',
  },
  tabText: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  activeTabText: {
    fontSize: 14,
    color: '#1976D2',
  },
});

export default HeaderTabs;
