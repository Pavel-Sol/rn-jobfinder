import {SERVICE_API} from 'src/api';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchMyResumes = createAsyncThunk(
  'resume/fetchMyResumes',
  async (_, thunkAPI) => {
    try {
      const response = await SERVICE_API.ResumeAPI.getMyResumes();
      // console.log('resume/fetchMyResumes', response.data);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      console.log('fetchMyResumes error', error);
      return thunkAPI.rejectWithValue('error');
    }
  },
);
