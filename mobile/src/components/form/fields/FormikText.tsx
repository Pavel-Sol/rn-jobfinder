import {useField, useFormikContext} from 'formik';
import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

interface IFormikText extends TextInputProps {
  name: string;
}

export const FormikText = (props: IFormikText) => {
  const {name = '', onChange, ...other} = props;
  const [field, meta] = useField(name);
  const form = useFormikContext();

  const handleChange = (value: any): void => {
    form.setFieldValue(name, value);

    if (onChange) {
      onChange(value);
    }
  };

  const inputValue = field.value || '';

  return <TextInput onChangeText={handleChange} value={inputValue} />;
};
