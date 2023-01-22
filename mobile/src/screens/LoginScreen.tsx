import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useAppDispatch} from 'src/hooks';
import {login} from 'src/redux/asyncActions/userActions';

export const LoginScreen = () => {
  const dispatch = useAppDispatch();

  const handleClick = async () => {
    dispatch(login({identifier: 'Pavel', password: 'Pavel123'}));
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
