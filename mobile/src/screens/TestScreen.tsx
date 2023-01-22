import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {UserAPI} from 'src/api/userApi';
import {increaseCount} from 'src/redux/reducers/countReducer';
import {logOut} from 'src/redux/reducers/userReducer';
import {RootState} from 'src/redux/store';

export const TestScreen = () => {
  const count = useSelector((state: RootState) => state.count.count);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };

  const handleGetMyINFO = async () => {
    const res = await UserAPI.getMyInfo();
    console.log('handleGetMyINFO,', res?.data);
  };

  const handleInc = () => {
    dispatch(increaseCount());
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

      <View style={s.count}>
        <Text>{count}</Text>

        <TouchableOpacity style={s.btn} onPress={handleInc}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
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
