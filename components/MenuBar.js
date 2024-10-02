import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation, useTheme } from '@react-navigation/native'; // Import useTheme from @react-navigation/native

const MenuBar = ({ onLogout, title }) => {
  const navigation = useNavigation();
  const { colors } = useTheme(); // Get theme colors from the current theme

  return (
    <Appbar.Header
      style={{
        backgroundColor: colors.background, // Use the theme's background color
        shadowColor: colors.boxShadow, // Apply box shadow color
      }}
    >
      <Appbar.BackAction
        onPress={() => navigation.goBack()}
        color={colors.text} // Set text color from theme
      />
      <Appbar.Content
        title={title}
        titleStyle={{ color: colors.text }} // Set title color from theme
      />
      <Appbar.Action
        icon="account"
        onPress={() => navigation.navigate('Profile')}
        color={colors.iconBackground} // Use icon background color from theme
      />
      <Appbar.Action
        icon="logout"
        onPress={onLogout}
        color={colors.iconBackground} // Use icon background color from theme
      />
    </Appbar.Header>
  );
};

export default MenuBar;
