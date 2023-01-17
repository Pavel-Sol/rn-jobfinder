import React, {ReactElement} from 'react';
import {Formik, FormikConfig, FormikProps} from 'formik';
import {TValues} from '../types';
import {View} from 'react-native';
// import {FormErrorContainer} from './FormErrorContainer';

interface IFormContainer extends FormikConfig<any> {
  children: (props: FormikProps<TValues>) => ReactElement;
}

export const FormikContainer = (props: IFormContainer) => {
  const {children, ...other} = props;

  return (
    <Formik {...other}>
      {formik => {
        return <>{children(formik)}</>;
      }}
    </Formik>
  );
};
