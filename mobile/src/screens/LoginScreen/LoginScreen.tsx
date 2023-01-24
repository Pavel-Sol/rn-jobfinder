import {Formik} from 'formik';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FormikText} from 'src/components/form/fields';
import {useAppSelector, useAppDispatch} from 'src/hooks';
import {login} from 'src/redux/asyncActions/userActions';
import {s} from './style';

export const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(state => state.app.theme);

  const initialValues = {
    identifier: 'Pavel',
    password: 'Pavel123',
  };

  const onSubmit = (values: any) => {
    dispatch(login(values));
  };

  return (
    <View style={s(theme).container}>
      <Text>LoginScreen</Text>

      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({handleSubmit}) => (
          <View style={s(theme).container}>
            <FormikText name="identifier" placeholder="email" />

            <FormikText name="password" placeholder="password" />

            <TouchableOpacity style={s(theme).btn} onPress={handleSubmit}>
              <Text>send LOGIN</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};
