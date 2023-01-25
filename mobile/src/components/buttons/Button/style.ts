import {StyleSheet} from 'react-native';
import {getColor} from 'src/utils/getColor';

export const makeStyle = (
  variant: 'text' | 'contained' | 'outlined',
  fullWidth?: boolean,
) => {
  const styleButtonByVariant = {
    text: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
    },
    contained: {
      backgroundColor: getColor().PRIMARY_BUTTON_COLOR,
      borderColor: getColor().PRIMARY_BUTTON_COLOR,
    },
    outlined: {
      backgroundColor: 'transparent',
      borderColor: getColor().PRIMARY_BUTTON_COLOR,
    },
  };

  const styleButtonTextByVariant = {
    text: {
      color: getColor().PRIMARY_BUTTON_COLOR,
    },
    contained: {
      color: getColor().WHITE,
    },
    outlined: {
      color: getColor().PRIMARY_BUTTON_COLOR,
    },
  };

  return StyleSheet.create({
    button: {
      alignSelf: fullWidth ? 'auto' : 'flex-start',
      paddingVertical: 5,
      paddingHorizontal: 15,
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 10,
      ...styleButtonByVariant[variant],
    },

    text: {
      ...styleButtonTextByVariant[variant],
      fontSize: 15,
      lineHeight: 25,
      textTransform: 'uppercase',
    },
  });
};
