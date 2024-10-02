import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Correct
import { useNavigation } from '@react-navigation/native';

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

  // Clone the passed icon and apply the same styles
  const iconElement = buttonIcon ? (
    React.cloneElement(buttonIcon, {
      size: iconSize,
      color: titleTextColor || '#FFF',
    })
  ) : (
    <Ionicons name="arrow-forward" size={iconSize} color={titleTextColor || '#FFF'} />
  );

  return (
    <View
      style={[
        styles.cardContainer,
        { backgroundColor: backgroundColor || '#A3C4F3' },
      ]}
    >
      {/* Icon Section */}
      <TouchableOpacity style={styles.iconButton} disabled>
        {iconElement} {/* Render the cloned or default icon */}
      </TouchableOpacity>

      {/* Title */}
      <Text style={[styles.titleText, { color: titleTextColor || '#FFF' }]}>
        {title}
      </Text>

      {/* Description */}
      <Text
        style={[
          styles.descriptionText,
          { color: descriptionTextColor || '#7F8C8D' },
        ]}
      >
        {description}
      </Text>

      {/* Arrow Button Section */}
      <TouchableOpacity
        style={styles.iconButton}
        onPress={buttonAction || (() => navigation.navigate('/'))}
      >
        <Ionicons name="arrow-forward" size={iconSize} color={titleTextColor || '#FFF'} />
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