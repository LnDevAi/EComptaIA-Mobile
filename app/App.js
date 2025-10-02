import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import DashboardScreen from './screens/DashboardScreen';
import CompteScreen from './screens/CompteScreen';
import EcritureScreen from './screens/EcritureScreen';
import AbonnementScreen from './screens/AbonnementScreen';
import GEDScreen from './screens/GEDScreen';
import IAScreen from './screens/IAScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Comptes" component={CompteScreen} />
        <Stack.Screen name="Ecritures" component={EcritureScreen} />
        <Stack.Screen name="Abonnement" component={AbonnementScreen} />
        <Stack.Screen name="GED" component={GEDScreen} />
        <Stack.Screen name="IA" component={IAScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
