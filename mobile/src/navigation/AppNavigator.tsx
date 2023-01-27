import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {BottomNavigator} from './BottomNavigator';
import {AuthNavigator} from './AuthNavigator';
import {useAppSelector} from 'src/hooks';

export const AppNavigator = () => {
  const token = useAppSelector(state => state.auth.token);

  return (
    <NavigationContainer>
      {token ? <BottomNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
