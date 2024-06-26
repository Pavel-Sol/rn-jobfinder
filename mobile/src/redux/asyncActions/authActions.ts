import {SERVICE_API} from 'src/api';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const login = createAsyncThunk(
  'auth/login',
  async (payload: any, thunkAPI) => {
    try {
      const response = await SERVICE_API.AuthAPI.login(payload);
      // console.log('user/login', response?.data?.user?.username);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      console.log('error user/login thunk => ', error);
    }
  },
);
