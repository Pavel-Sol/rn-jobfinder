import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {FormikText} from 'src/baseComponents/form/fields/FormikText/FormikText';
import {Formik} from 'formik';
import {useAppSelector, useAppDispatch} from 'src/hooks';
import {setTheme} from 'src/redux/reducers/appReducer';
import {s} from './SettingsScreen.style';

export const SettingsScreen = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(state => state.app.theme);
  const initialValues = {
    text: '',
  };

  const onSubmit = (val: any) => {
    console.log('onSubmit ', val);
  };

  const handleChangeTheme = () => {
    if (theme === 'light') {
      dispatch(setTheme('dark'));
    } else {
      dispatch(setTheme('light'));
    }
  };

  return (
    <View style={s(theme).container}>
      <View>
        <Ionicons name="md-location" size={34} color={'blue'} />
        <Text style={s(theme).title}>Settingsddd!</Text>
      </View>

      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({handleSubmit}) => (
          <View>
            <FormikText name="text" />
            <TouchableOpacity style={s(theme).button} onPress={handleSubmit}>
              <Text>send</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>

      <TouchableOpacity style={s(theme).button} onPress={handleChangeTheme}>
        <Text>{theme === 'light' ? 'set dark' : 'set light'}</Text>
      </TouchableOpacity>
    </View>
  );
};
