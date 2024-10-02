import React, { useState } from 'react';
import '@babel/polyfill'; // Add this line at the top
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LightTheme, DarkThemeConfig } from './theme'; // Import the custom themes
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
      {/* Set theme to DarkThemeConfig explicitly */}
      <NavigationContainer theme={LightTheme}>
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

        {/* Set the status bar style to match the dark theme */}
        <StatusBar style="light" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
