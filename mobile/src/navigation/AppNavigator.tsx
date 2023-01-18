import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from 'src/screens/HomeScreen';
import {SettingsScreen} from 'src/screens/SettingsScreen';
import {TestScreen} from 'src/screens/TestScreen';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={({route}) => ({
            tabBarIcon: ({color, size}) => (
              <AntDesign name="home" size={34} color={'blue'} />
            ),
          })}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={({route}) => ({
            // tabBarStyle: {
            //   backgroundColor: '#AD40AF',
            // },
            tabBarIcon: ({color, size}) => (
              <AntDesign name="setting" size={34} color={'blue'} />
            ),
          })}
        />
        <Tab.Screen
          name="Test"
          component={TestScreen}
          options={({route}) => ({
            tabBarIcon: ({color, size}) => (
              <AntDesign name="customerservice" size={34} color={'blue'} />
            ),
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
