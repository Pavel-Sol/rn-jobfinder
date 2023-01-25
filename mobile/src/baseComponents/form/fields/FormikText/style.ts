import {StyleSheet} from 'react-native';
import {getColor} from 'src/utils/getColor';

export const makeStyle = (theme: string, variant: 'filled' | 'outlined') =>
  StyleSheet.create({
    input: {
      color: getColor(theme).PRIMARY_TEXT_COLOR,
      backgroundColor: 'transparent',
      borderBottomWidth: 1,
      borderWidth: variant === 'outlined' ? 1 : 0,
      borderColor: getColor(theme).PRIMARY_BORDER_COLOR,
      height: 60,
      paddingHorizontal: 15,
      borderRadius: variant === 'outlined' ? 8 : 0,
      width: '100%',
    },

    inputError: {
      borderColor: getColor().ERROR,
    },

    errorMessage: {
      color: getColor().ERROR,
    },

    label: {
      marginBottom: 7,
    },
  });
