import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useColorScheme } from 'react-native'; // Import useColorScheme for theme detection
import { LightTheme, DarkThemeConfig } from './theme'; // Import the theme from theme.js
import Login from './screens/Login';
import Signup from './screens/SignUp';
import Dashboard from './screens/dashboard/Dashboard';
import FinancialJourney from './screens/journey/FinancialJourney';
import AssetExplore from './screens/AssetExplore';
import ManageMoney from './screens/ManageMoney';
import DebtManager from './screens/DebtManager';
import SetGoals from './screens/SetGoals';
import SIPCalculator from './screens/calculators/SIPCalculator';
import SWPCalculator from './screens/calculators/SWPCalculator';
import LumpsumCalculator from './screens/calculators/LumpsumCalculator';
import MenuBar from './components/MenuBar';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [headerTitle, setHeaderTitle] = useState('');
  
  // Get the user's color scheme preference
  const colorScheme = useColorScheme(); // Automatically detects light/dark mode

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Function to render MenuBar in stack screen options
  const renderMenuBar = (title) => ({
    header: () => <MenuBar title={title} onLogout={handleLogout} />,
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={colorScheme === 'dark' ? DarkThemeConfig : LightTheme}>
        {isLoggedIn ? (
          <Stack.Navigator initialRouteName="Dashboard">
            <Stack.Screen name="Dashboard" options={renderMenuBar(headerTitle)}>
              {() => <Dashboard setHeaderTitle={setHeaderTitle} />}
            </Stack.Screen>
            <Stack.Screen
              name="FinancialJourney"
              options={renderMenuBar(headerTitle)}
            >
              {() => <FinancialJourney setHeaderTitle={setHeaderTitle} />}
            </Stack.Screen>
            <Stack.Screen
              name="ManageMoney"
              options={renderMenuBar(headerTitle)}
            >
              {() => <ManageMoney setHeaderTitle={setHeaderTitle} />}
            </Stack.Screen>
            <Stack.Screen
              name="AssetExplore"
              options={renderMenuBar(headerTitle)}
            >
              {() => <AssetExplore setHeaderTitle={setHeaderTitle} />}
            </Stack.Screen>
            <Stack.Screen
              name="DebtManager"
              options={renderMenuBar(headerTitle)}
            >
              {() => <DebtManager setHeaderTitle={setHeaderTitle} />}
            </Stack.Screen>
            <Stack.Screen name="SetGoals" options={renderMenuBar(headerTitle)}>
              {() => <SetGoals setHeaderTitle={setHeaderTitle} />}
            </Stack.Screen>
            <Stack.Screen
              name="SIPCalculator"
              options={renderMenuBar(headerTitle)}
            >
              {() => <SIPCalculator setHeaderTitle={setHeaderTitle} />}
            </Stack.Screen>
            <Stack.Screen
              name="SWPCalculator"
              options={renderMenuBar(headerTitle)}
            >
              {() => <SWPCalculator setHeaderTitle={setHeaderTitle} />}
            </Stack.Screen>
            <Stack.Screen
              name="LumpsumCalculator"
              options={renderMenuBar(headerTitle)}
            >
              {() => <LumpsumCalculator setHeaderTitle={setHeaderTitle} />}
            </Stack.Screen>
          </Stack.Navigator>
        ) : (
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login">
              {() => <Login setIsLoggedIn={setIsLoggedIn} />}
            </Stack.Screen>
            <Stack.Screen name="Signup">
              {() => <Signup setIsLoggedIn={setIsLoggedIn} />}
            </Stack.Screen>
          </Stack.Navigator>
        )}

        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}