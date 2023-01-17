import React from 'react';
import {FormikContainer} from 'src/components/form/containers/FormikContainer';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, TouchableOpacity} from 'react-native';
import {FormikText} from 'src/components/form/fields/FormikText';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home1111!!!</Text>
    </View>
  );
}

function SettingsScreen() {
  const initialValues = {
    text: '',
  };

  const onSubmit = (val: any) => {
    console.log('onSubmit ', val);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>

      <FormikContainer initialValues={initialValues} onSubmit={onSubmit}>
        {({handleSubmit}) => (
          <View>
            <FormikText name="text" />
            <TouchableOpacity onPress={handleSubmit}>
              <Text>send</Text>
            </TouchableOpacity>
          </View>
        )}
      </FormikContainer>
    </View>
  );
}

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
