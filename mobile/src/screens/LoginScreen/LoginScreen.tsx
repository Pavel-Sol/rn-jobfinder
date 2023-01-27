import {Formik} from 'formik';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Button} from 'src/baseComponents/buttons/Button/Button';
import {FormikText} from 'src/baseComponents/form/fields';
import {useAppSelector, useAppDispatch} from 'src/hooks';
import {login} from 'src/redux/asyncActions/authActions';
import {makeStyle} from './style';

export const LoginScreen = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(state => state.app.theme);
  const s = makeStyle(theme);

  const initialValues = {
    identifier: 'Pavel',
    password: 'Pavel123',
  };

  const onSubmit = (values: any) => {
    dispatch(login(values));
  };

  return (
    <View style={s.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({handleSubmit}) => (
          <View style={s.container}>
            <FormikText name="identifier" placeholder="email" style={s.input} />

            <FormikText name="password" placeholder="password" />

            <Button style={s.btn} fullWidth onPress={handleSubmit}>
              send LOGIN
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};
