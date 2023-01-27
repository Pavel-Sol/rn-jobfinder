import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileScreen} from 'src/screens/ProfileScreen';
import {ResumeScreen} from 'src/screens/ResumeScreen';
const Stack = createNativeStackNavigator();

export const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="resume"
        component={ResumeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
