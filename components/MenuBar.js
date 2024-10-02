import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const MenuBar = ({ onLogout, title }) => {
  const navigation = useNavigation();

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title={title} />
      <Appbar.Action icon="account" onPress={() => navigation.navigate('Profile')} />
      <Appbar.Action icon="logout" onPress={onLogout} />
    </Appbar.Header>
  );
};

export default MenuBar;