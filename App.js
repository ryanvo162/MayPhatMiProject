import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import WelcomeScreen from './components/WelcomeScreen';
import InformationScreen from './components/InformationScreen';
import DoneScreen from './components/DoneScreen';
import ErrorScreen from './components/ErrorScreen';
import OutOfNoodlesScreen from './components/OutOfNoodlesScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  const [loaded] = useFonts({
    NexaFont: require('./assets/fonts/Nexa.ttf'),
    NunitoExtraBold: require('./assets/fonts/Nunito-ExtraBold.ttf'),
    NunitoRegular: require('./assets/fonts/Nunito-Regular.ttf'),
    PaytoneOne: require('./assets/fonts/PaytoneOne-Regular.ttf'),
    MPLUS1p: require('./assets/fonts/MPLUS1p-ExtraBold.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Welcome" >
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Information" component={InformationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Done" component={DoneScreen} options={{ headerShown: false }} />       
        <Stack.Screen name="SoldOut" component={OutOfNoodlesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Error" component={ErrorScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
