import {createSlice} from '@reduxjs/toolkit';
import {Slices} from 'src/constants/reducers';
import {login} from '../asyncActions/authActions';

type initialStateT = {
  token: string;
};

const initialState: initialStateT = {
  token: '',
};

export const authSlice = createSlice({
  name: Slices.auth,
  initialState,
  reducers: {
    logOut(state) {
      state.token = '';
    },
  },
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload?.jwt;
    });
  },
});

export const {logOut} = authSlice.actions;
export default authSlice.reducer;
