import {StyleSheet} from 'react-native';
import {getColor} from 'src/utils/getColor';

export const makeStyle = (theme: string) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 15,
      backgroundColor: getColor(theme).PRIMARY_BG_COLOR,
    },
  });
