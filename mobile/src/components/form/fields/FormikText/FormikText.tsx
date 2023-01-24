import React from 'react';
import {useField, useFormikContext} from 'formik';
import {TextInput, TextInputProps, Text} from 'react-native';
import {s} from './style';

interface IFormikText extends TextInputProps {
  name: string;
  customStyle?: any;
  isError?: boolean;
  errorMessage?: string;
  label?: string;
}

export const FormikText = (props: IFormikText) => {
  const {
    name = '',
    onChange,
    customStyle = {},
    errorMessage,
    isError = false,
    label,
    ...other
  } = props;
  const [field, meta] = useField(name);
  const form = useFormikContext();

  const handleChange = (value: any): void => {
    form.setFieldValue(name, value);

    if (onChange) {
      onChange(value);
    }
  };

  const inputValue = field.value || '';

  return (
    <>
      {label && <Text style={s().label}>{label}</Text>}

      <TextInput
        onChangeText={handleChange}
        value={inputValue}
        {...other}
        style={[s().input, isError && s().inputError, customStyle]}
      />

      {errorMessage && <Text style={s().errorMessage}>{errorMessage}</Text>}
    </>
  );
};
