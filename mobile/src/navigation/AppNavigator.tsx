import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {BottomNavigator} from './BottomNavigator';
import {AuthNavigator} from './AuthNavigator';

export const AppNavigator = () => {
  const token = false;

  return (
    <NavigationContainer>
      {token ? <BottomNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
