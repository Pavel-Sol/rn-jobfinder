import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {AuthAPI} from 'src/api/authApi';
import {logOut} from 'src/redux/reducers/authReducer';
import {RootState} from 'src/redux/store';

export const TestScreen = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };

  const handleGetMyINFO = async () => {
    // const res = await UserAPI.getMyInfo();
    // console.log('handleGetMyINFO,', res?.data);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>TestScreen</Text>
      <TouchableOpacity style={s.btn} onPress={handleClick}>
        <Text>LOGOUT</Text>
      </TouchableOpacity>

      <TouchableOpacity style={s.btn} onPress={handleGetMyINFO}>
        <Text>Get MY INFOOOO!!!</Text>
      </TouchableOpacity>
    </View>
  );
};

const s = StyleSheet.create({
  btn: {
    backgroundColor: 'blue',
    padding: 10,
  },

  count: {
    marginTop: 30,
  },
});
