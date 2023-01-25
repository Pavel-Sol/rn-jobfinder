import React from 'react';
import {useField, useFormikContext} from 'formik';
import {useAppSelector} from 'src/hooks';
import {TextInput, TextInputProps, Text} from 'react-native';
import {getColor} from 'src/utils/getColor';
import {makeStyle} from './style';

interface IFormikText extends TextInputProps {
  name: string;
  isError?: boolean;
  errorMessage?: string;
  label?: string;
  variant?: 'filled' | 'outlined';
}

export const FormikText = (props: IFormikText) => {
  const {
    name = '',
    onChange,
    style,
    errorMessage,
    isError = false,
    label,
    variant = 'outlined',
    ...other
  } = props;
  const [field, meta] = useField(name);
  const form = useFormikContext();
  const theme = useAppSelector(state => state.app.theme);
  const s = makeStyle(theme, variant);

  const handleChange = (value: any): void => {
    form.setFieldValue(name, value);

    if (onChange) {
      onChange(value);
    }
  };

  const inputValue = field.value || '';

  return (
    <>
      {label && variant === 'outlined' && <Text style={s.label}>{label}</Text>}

      <TextInput
        placeholderTextColor={getColor().SECONDARY_BG_COLOR}
        onChangeText={handleChange}
        value={inputValue}
        {...other}
        style={[s.input, isError && s.inputError, style]}
      />

      {errorMessage && <Text style={s.errorMessage}>{errorMessage}</Text>}
    </>
  );
};
