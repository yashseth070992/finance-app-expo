import React from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';
import { IconButton } from 'react-native-paper'; // Using react-native-paper for IconButton

const CardButton = ({ title, onClick, icon: Icon }) => {
  return (
    <Button style={styles.cardButton} onPress={onClick}>
      <IconButton style={styles.iconButton}>
        <Icon size={24} />
      </IconButton>
      <Text style={styles.cardTitle}>{title}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  cardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
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
