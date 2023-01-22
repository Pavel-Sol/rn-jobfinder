import {Slices} from './../../constant/reducers';
import {createSlice} from '@reduxjs/toolkit';
import {login} from '../asyncActions/userActions';

type initialStateT = {
  token: string;
  username: string;
};

const initialState: initialStateT = {
  token: '',
  username: '',
};

export const userSlice = createSlice({
  name: Slices.user,
  initialState,
  reducers: {
    logOut(state) {
      state.token = '';
      state.username = '';
    },
  },
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.username = action.payload?.user?.username;
      state.token = action.payload?.jwt;
    });
  },
});

export const {logOut} = userSlice.actions;
export default userSlice.reducer;
