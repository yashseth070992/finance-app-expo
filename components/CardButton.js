import React from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';
import { IconButton } from 'react-native-paper'; // Using react-native-paper for IconButton
import { useTheme } from '@react-navigation/native'; // Import useTheme

const CardButton = ({ title, onClick, icon: Icon }) => {
  const { colors } = useTheme(); // Get colors from the current theme

  return (
    <Button
      style={[styles.cardButton, { backgroundColor: colors.card }]}
      onPress={onClick}
    >
      <IconButton style={styles.iconButton} color={colors.text}>
        <Icon size={24} />
      </IconButton>
      <Text style={[styles.cardTitle, { color: colors.text }]}>{title}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  cardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
    marginBottom: 10,
  },
  iconButton: {
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 18,
  },
});

export default CardButton;
