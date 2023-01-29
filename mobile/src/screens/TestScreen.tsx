import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {AuthAPI} from 'src/api/authApi';
import {useAppSelector} from 'src/hooks';
import {logOut} from 'src/redux/reducers/authReducer';
import {RootState} from 'src/redux/store';

export const TestScreen = () => {
  const dispatch = useDispatch();
  const resumes = useAppSelector(state => state.resume.resumes);
  const activeResume = resumes.find(
    resume => resume.attributes.isActive === true,
  );

  if (activeResume) {
    console.log('activeResume ', activeResume.attributes.title);
  }

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>TestScreen</Text>
      <TouchableOpacity style={s.btn} onPress={handleClick}>
        <Text>LOGOUT</Text>
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
