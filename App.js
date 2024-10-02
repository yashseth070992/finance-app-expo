import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import Login from './screens/Login';
import Signup from './screens/SignUp';
import Dashboard from './screens/dashboard/Dashboard';
import FinancialJourney from './screens/journey/FinancialJourney';
import AssetExplore from './screens/AssetExplore';
import ManageMoney from './screens/ManageMoney';
import DebtManager from './screens/DebtManager';
import SetGoals from './screens/SetGoals';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [headerTitle, setHeaderTitle] = useState(''); // State to manage header title

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login">
          {() => <Login setIsLoggedIn={setIsLoggedIn} />}
        </Stack.Screen>
        <Stack.Screen name="Signup">
          {() => <Signup setIsLoggedIn={setIsLoggedIn} />}
        </Stack.Screen>
        <Stack.Screen name="Dashboard">
          {() => <Dashboard setHeaderTitle={setHeaderTitle} />}
        </Stack.Screen>
        <Stack.Screen name="FinancialJourney">
          {() => <FinancialJourney setHeaderTitle={setHeaderTitle} />}
        </Stack.Screen>
        <Stack.Screen name="ManageMoney">
          {() => <ManageMoney setHeaderTitle={setHeaderTitle} />}
        </Stack.Screen>
        <Stack.Screen name="AssetExplore">
          {() => <AssetExplore setHeaderTitle={setHeaderTitle} />}
        </Stack.Screen>
        <Stack.Screen name="DebtManager">
          {() => <DebtManager setHeaderTitle={setHeaderTitle} />}
        </Stack.Screen>
        <Stack.Screen name="SetGoals">
          {() => <SetGoals setHeaderTitle={setHeaderTitle} />}
        </Stack.Screen>
        {/* <Stack.Screen name="SetGoals">
          {() => <SetGoals setHeaderTitle={setHeaderTitle} />}
        </Stack.Screen>
        <Stack.Screen name="SetGoals">
          {() => <SetGoals setHeaderTitle={setHeaderTitle} />}
        </Stack.Screen>
        <Stack.Screen name="SetGoals">
          {() => <SetGoals setHeaderTitle={setHeaderTitle} />}
        </Stack.Screen> */}
      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
