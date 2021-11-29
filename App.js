import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import WelcomeScreen from './components/WelcomeScreen';
import InfomationScreen from './components/InformationScreen';

const Stack = createNativeStackNavigator();



export default function App() {

  const [loaded] = useFonts({
    NexaFont: require('./assets/fonts/Nexa.ttf'),
    NunitoExtraBold: require('./assets/fonts/Nunito-ExtraBold.ttf'),
    NunitoRegular: require('./assets/fonts/Nunito-Regular.ttf')
  });
  if (!loaded) {
    return null;
  }
  return (
    
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Welcome" >
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Information" component={InfomationScreen} options={{ headerShown: false }}/>
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
