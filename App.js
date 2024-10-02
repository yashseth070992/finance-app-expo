import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Login from './screens/Login'; // Import the updated Login component
import Dashboard from './screens/dashboard/Dashboard'; // Import Dashboard

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Pass Login component directly */}
        <Stack.Screen name="Login" children={() => <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});