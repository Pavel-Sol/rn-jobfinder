import {StyleSheet} from 'react-native';
import {getColor} from 'src/utils/getColor';

export const s = () =>
  StyleSheet.create({
    input: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: '#000',
      height: 60,
      paddingHorizontal: 15,
      borderRadius: 8,
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
