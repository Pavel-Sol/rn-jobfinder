import React, {useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from 'src/screens/HomeScreen';
import {SettingsScreen} from 'src/screens/SettingsScreen/SettingsScreen';
import {TestScreen} from 'src/screens/TestScreen';
import {CatalogScreen} from 'src/screens/CatalogScreen';
import {ProfileNavigator} from './ProfiveNavigator';
import {useAppSelector} from 'src/hooks';
import {getColor} from 'src/utils/getColor';

const Tab = createBottomTabNavigator();

export const BottomNavigator = () => {
  const theme = useAppSelector(state => state.app.theme);
  // useEffect(() => {
  //   console.log('BottomNavigator');
  // }, []);

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: getColor(theme).PRIMARY_BG_COLOR,
            borderTopWidth: 1,
            borderTopColor: getColor(theme).SECONDARY_TEXT_COLOR,
          },
          tabBarInactiveTintColor: getColor(theme).SECONDARY_TEXT_COLOR,
          tabBarActiveTintColor: getColor(theme).PRIMARY_BUTTON_COLOR,
        }}>
        <Tab.Screen
          name="search"
          component={CatalogScreen}
          options={({route}) => ({
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="search" size={size} color={color} />
            ),
          })}
        />
        <Tab.Screen
          name="profile navigator"
          component={ProfileNavigator}
          options={({route}) => ({
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="user" size={size} color={color} />
            ),
          })}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={({route}) => ({
            tabBarIcon: ({color, size}) => (
              <Icons name="settings" size={size} color={color} />
            ),
          })}
        />
        <Tab.Screen
          name="Test"
          component={TestScreen}
          options={({route}) => ({
            tabBarIcon: ({color, size}) => (
              <AntDesign name="customerservice" size={size} color={color} />
            ),
          })}
        />
      </Tab.Navigator>
    </>
  );
};
