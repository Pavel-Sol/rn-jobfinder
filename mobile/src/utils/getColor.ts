import {COLORS} from 'src/constants/colors';

export const getColor = (theme: string) => {
  return theme === 'light' ? COLORS.light : COLORS.dark;
};
