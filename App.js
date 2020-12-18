/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'react-native-elements';
import { Appearance } from 'react-native';
import Main from './App/main';
import Report from './App/report';

// Make navigation controller
const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={Main} options={{ title: 'Contact Tracing' }} />
          <Stack.Screen name="Report" component={Report} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
