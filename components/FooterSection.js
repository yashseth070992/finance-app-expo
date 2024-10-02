import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native'; // Import useTheme

const FooterSection = () => {
  const { colors } = useTheme(); // Get colors from the current theme

  return (
    <View style={[styles.footer, { backgroundColor: colors.primary }]}>
      <Text style={[styles.footerText, { color: colors.text }]}>
        © 2024 COMPOUNDIT. All rights reserved.
      </Text>
      <Text style={[styles.footerSubtitle, { color: colors.text }]}>
        Crafted with care by Your Team
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginTop: 24,
    padding: 16,
    borderRadius: 8,
    textAlign: 'center',
  },
  footerText: {
    fontSize: 16,
    letterSpacing: 0.5,
  },
  footerSubtitle: {
    fontSize: 12,
    opacity: 0.7,
  },
});

export default FooterSection;
