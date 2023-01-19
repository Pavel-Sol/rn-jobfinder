import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import RestAPI from 'src/api/rest';
import {increaseCount} from 'src/redux/reducers/countReducer';
import {RootState} from 'src/redux/store';

export const TestScreen = () => {
  const count = useSelector((state: RootState) => state.count.count);
  const dispatch = useDispatch();

  const handleClick = async () => {
    console.log('click');
    const response = await RestAPI.get('/users');
    console.log('response ', response.data);
  };

  const handleInc = () => {
    dispatch(increaseCount());
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>TestScreen</Text>
      <TouchableOpacity style={s.btn} onPress={handleClick}>
        <Text>send REQUEST!!!</Text>
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
