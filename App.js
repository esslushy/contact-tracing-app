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
import { ThemeProvider, Button } from 'react-native-elements';
import Main from './App/main';
import Report from './App/report';
import MoreInfo from './App/more_info'

// Make navigation controller
const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={Main} options={{ title: 'Contact Tracing' }} />
          <Stack.Screen name="Report" component={Report} />
          <Stack.Screen name="More Info" component={MoreInfo} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
