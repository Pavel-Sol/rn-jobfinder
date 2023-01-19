import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import RestAPI from 'src/api/rest';

export const LoginScreen = () => {
  const handleClick = async () => {
    const response = await RestAPI.post('/api/auth/local', {
      identifier: 'Pavel',
      password: 'Pavel123',
    });

    console.log('LoginScreen response', response?.data);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>LoginScreen</Text>
      <TouchableOpacity style={s.btn} onPress={handleClick}>
        <Text>LOGIN!!!!</Text>
      </TouchableOpacity>
    </View>
  );
};

const s = StyleSheet.create({
  btn: {
    backgroundColor: 'blue',
    padding: 10,
  },
});
