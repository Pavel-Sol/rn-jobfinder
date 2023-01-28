import {SERVICE_API} from 'src/api';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchUserInfo = createAsyncThunk(
  'user/fetchUserInfo',
  async (_, thunkAPI) => {
    try {
      const response = await SERVICE_API.UserAPI.getMyInfo();
      console.log('user/fetchUserInfo', response.data);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      console.log('user/fetchUserInfo error', error);
      return thunkAPI.rejectWithValue('error');
    }
  },
);
