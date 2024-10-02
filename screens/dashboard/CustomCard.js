import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Correct
import { useNavigation, useTheme } from '@react-navigation/native';

const CustomCard = ({
  title,
  description,
  buttonAction,
  buttonIcon,
  backgroundColor,
  titleTextColor,
  descriptionTextColor,
  iconSize = 50, // Default icon size
}) => {
  const navigation = useNavigation();
  const { colors } = useTheme(); // Get colors from the current theme

  // Clone the passed icon and apply the same styles
  const iconElement = buttonIcon ? (
    React.cloneElement(buttonIcon, {
      size: iconSize,
      color: titleTextColor || colors.text, // Use theme text color
    })
  ) : (
    <Ionicons
      name="arrow-forward"
      size={iconSize}
      color={titleTextColor || colors.text} // Use theme text color
    />
  );

  return (
    <View
      style={[
        styles.cardContainer,
        {
          backgroundColor: backgroundColor || colors.card, // Use theme card color
        },
      ]}
    >
      {/* Icon Section */}
      <TouchableOpacity style={styles.iconButton} disabled>
        {iconElement} {/* Render the cloned or default icon */}
      </TouchableOpacity>

      {/* Title */}
      <Text
        style={[styles.titleText, { color: titleTextColor || colors.text }]}
      >
        {title}
      </Text>

      {/* Description */}
      <Text
        style={[
          styles.descriptionText,
          { color: descriptionTextColor || colors.secondaryText }, // Use theme secondary text color
        ]}
      >
        {description}
      </Text>

      {/* Arrow Button Section */}
      <TouchableOpacity
        onPress={buttonAction || (() => alert('No action assigned'))} // Fallback to an alert
      >
        <Ionicons
          name="arrow-forward"
          size={iconSize}
          color={titleTextColor || colors.text} // Use theme text color
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    textAlign: 'center',
    padding: 16,
    borderRadius: 16,
    minHeight: 250,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  iconButton: {
    marginBottom: 10,
    pointerEvents: 'none', // Disable hover and click
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
  },
});

export default CustomCard;
