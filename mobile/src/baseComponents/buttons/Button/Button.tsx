import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  TextStyle,
} from 'react-native';
import {makeStyle} from './style';

export interface IButton extends TouchableOpacityProps {
  variant?: 'text' | 'contained' | 'outlined';
  fullWidth?: boolean;
  textStyle?: TextStyle;
}

export const Button = (props: IButton) => {
  const {
    onPress,
    children,
    variant = 'contained',
    fullWidth = false,
    style,
    textStyle,
    ...other
  } = props;

  const s = makeStyle(variant, fullWidth);

  return (
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={onPress}
      {...other}
      style={[s.button, style]}>
      {typeof children === 'string' ? (
        <Text style={[s.text, textStyle]}>{children}</Text>
      ) : (
        <>{children}</>
      )}
    </TouchableOpacity>
  );
};
