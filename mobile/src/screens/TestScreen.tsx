import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import RestAPI from 'src/api/rest';

export const TestScreen = () => {
  const handleClick = async () => {
    console.log('click');
    const response = await RestAPI.get('/users');
    console.log('response ', response.data);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>TestScreen</Text>
      <TouchableOpacity style={s.btn} onPress={handleClick}>
        <Text>send REQUEST!!!</Text>
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
