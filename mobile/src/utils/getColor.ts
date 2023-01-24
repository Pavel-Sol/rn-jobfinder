import {COLORS} from 'src/constants/colors';

export const getColor = (theme?: string) => {
  if (!theme) {
    return COLORS.light;
  }

  return theme === 'light' ? COLORS.light : COLORS.dark;
};
