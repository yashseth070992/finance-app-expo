import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';

const CustomCard = ({
  title,
  description,
  buttonAction,
  iconName, // New prop to accept the icon name
  backgroundColor,
  titleTextColor,
  descriptionTextColor,
  iconSize = 50,
}) => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.cardContainer,
        { backgroundColor: backgroundColor || colors.card },
      ]}
    >
      <View style={styles.iconButton}>
        <Ionicons
          name={iconName} // Dynamically use the icon name passed
          size={iconSize}
          color={titleTextColor || colors.text}
        />
      </View>

      <Text
        style={[styles.titleText, { color: titleTextColor || colors.text }]}
      >
        {title}
      </Text>

      <Text
        style={[
          styles.descriptionText,
          { color: descriptionTextColor || colors.secondaryText },
        ]}
      >
        {description}
      </Text>

      <TouchableOpacity
        style={styles.arrowButton}
        onPress={buttonAction || (() => alert('No action assigned'))}
      >
        <Ionicons
          name="arrow-forward"
          size={iconSize}
          color={titleTextColor || colors.text}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 16,
    minHeight: 250,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  iconButton: {
    marginBottom: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
  },
  arrowButton: {
    marginTop: 10,
  },
});

export default CustomCard;
