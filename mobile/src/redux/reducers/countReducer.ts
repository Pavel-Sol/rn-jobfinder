import {createSlice} from '@reduxjs/toolkit';

type initialStateT = {
  count: number;
};

const initialState: initialStateT = {
  count: 0,
};

export const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increaseCount(state) {
      state.count = state.count + 1;
    },
  },
});

export const {increaseCount} = countSlice.actions;

export default countSlice.reducer;
