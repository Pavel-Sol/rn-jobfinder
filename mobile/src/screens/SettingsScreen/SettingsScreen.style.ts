import {StyleSheet} from 'react-native';
import {getColor} from 'src/utils/getColor';

export const s = (theme: string) =>
  StyleSheet.create({
    container: {
      backgroundColor: getColor(theme).PRIMARY_BG_COLOR,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    button: {
      backgroundColor: getColor(theme).PRIMARY_BUTTON_COLOR,
      padding: 15,
    },
    title: {
      color: getColor(theme).PRIMARY_TEXT_COLOR,
    },
  });
