/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import RootStack from './src/navigations/navRoot';
import {navigationRef} from './src/navigations/navhelpers';
import {NavigationContainer} from '@react-navigation/native';

const App = () => (
  <NavigationContainer ref={navigationRef}>
    <RootStack />
  </NavigationContainer>
);

export default App;
