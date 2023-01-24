import {createSlice} from '@reduxjs/toolkit';
import {Slices} from 'src/constants/reducers';

type initialStateT = {
  theme: string;
};

const initialState: initialStateT = {
  theme: 'light',
};

export const appSlice = createSlice({
  name: Slices.app,
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

export const {setTheme} = appSlice.actions;

export default appSlice.reducer;
