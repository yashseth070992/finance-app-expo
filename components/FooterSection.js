import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FooterSection = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        © 2024 COMPOUNDIT. All rights reserved.
      </Text>
      <Text style={styles.footerSubtitle}>
        Crafted with care by Your Team
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#1FB28B',
    borderRadius: 8,
    textAlign: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
    letterSpacing: 0.5,
  },
  footerSubtitle: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.7,
  },
});

export default FooterSection;