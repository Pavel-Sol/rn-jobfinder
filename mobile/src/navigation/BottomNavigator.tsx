import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from 'src/screens/HomeScreen';
import {SettingsScreen} from 'src/screens/SettingsScreen/SettingsScreen';
import {TestScreen} from 'src/screens/TestScreen';
import {CatalogScreen} from 'src/screens/CatalogScreen';

const Tab = createBottomTabNavigator();

export const BottomNavigator = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name="Поиск"
          component={CatalogScreen}
          options={({route}) => ({
            tabBarIcon: ({color, size}) => (
              <AntDesign name="search1" size={34} color={'blue'} />
            ),
          })}
        />
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
    </>
  );
};
