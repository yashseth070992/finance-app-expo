import React, { useState, useCallback } from 'react';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
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

  // Memoized function to update the header title, avoids unnecessary re-renders
  const memoizedSetHeaderTitle = useCallback((title) => {
    setHeaderTitle(title);
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const menuBarOptions = React.useMemo(
    () => ({
      header: () => <MenuBar title={headerTitle} onLogout={handleLogout} />,
    }),
    [headerTitle, handleLogout]
  );

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={LightTheme}>
        {isLoggedIn ? (
          <Stack.Navigator initialRouteName="Dashboard">
            <Stack.Screen name="Dashboard" options={menuBarOptions}>
              {() => <Dashboard setHeaderTitle={memoizedSetHeaderTitle} />}
            </Stack.Screen>
            <Stack.Screen
              name="FinancialJourney"
              options={menuBarOptions}
            >
              {() => <FinancialJourney setHeaderTitle={memoizedSetHeaderTitle} />}
            </Stack.Screen>
            <Stack.Screen
              name="ManageMoney"
              options={menuBarOptions}
            >
              {() => <ManageMoney setHeaderTitle={memoizedSetHeaderTitle} />}
            </Stack.Screen>
            <Stack.Screen
              name="AssetExplore"
              options={menuBarOptions}
            >
              {() => <AssetExplore setHeaderTitle={memoizedSetHeaderTitle} />}
            </Stack.Screen>
            <Stack.Screen
              name="DebtManager"
              options={menuBarOptions}
            >
              {() => <DebtManager setHeaderTitle={memoizedSetHeaderTitle} />}
            </Stack.Screen>
            <Stack.Screen
              name="SetGoals"
              options={menuBarOptions}
            >
              {() => <SetGoals setHeaderTitle={memoizedSetHeaderTitle} />}
            </Stack.Screen>
            <Stack.Screen
              name="SIPCalculator"
              options={menuBarOptions}
            >
              {() => <SIPCalculator setHeaderTitle={memoizedSetHeaderTitle} />}
            </Stack.Screen>
            <Stack.Screen
              name="SWPCalculator"
              options={menuBarOptions}
            >
              {() => <SWPCalculator setHeaderTitle={memoizedSetHeaderTitle} />}
            </Stack.Screen>
            <Stack.Screen
              name="LumpsumCalculator"
              options={menuBarOptions}
            >
              {() => <LumpsumCalculator setHeaderTitle={memoizedSetHeaderTitle} />}
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
        <StatusBar style="light" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}