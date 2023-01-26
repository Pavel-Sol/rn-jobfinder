import {SERVICE_API} from 'src/api';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const getVacancies = createAsyncThunk(
  'vacancy/getVacancies',
  async (queryParams: string, thunkAPI) => {
    try {
      const response = await SERVICE_API.VacancyAPI.getVacancies(queryParams);
      // console.log('vacancy/getVacancies', response.data);

      return response.data;
    } catch (error) {
      console.log('vacancy/getVacancies error', error);
    }
  },
);
