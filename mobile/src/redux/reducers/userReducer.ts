import {createSlice} from '@reduxjs/toolkit';
import {Slices} from 'src/constants/reducers';
import {fetchUserInfo} from '../asyncActions/userActions';

type initialStateT = {
  id: number | null;
  username: string;
  email: string;
};

const initialState: initialStateT = {
  id: null,
  username: '',
  email: '',
};

export const userSlice = createSlice({
  name: Slices.user,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
      state.username = action.payload?.username;
      state.email = action.payload?.email;
    });
  },
});

export default userSlice.reducer;
