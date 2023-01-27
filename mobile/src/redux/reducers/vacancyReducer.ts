import {createSlice} from '@reduxjs/toolkit';
import {Slices} from 'src/constants/reducers';
import {IVacancy} from 'src/models/vacancy';
import {fetchVacancies} from '../asyncActions/vacancyActions';

type initialStateT = {
  vacancies: IVacancy[];
  total: number;
};

const initialState: initialStateT = {
  vacancies: [],
  total: 0,
};

export const vacancySlice = createSlice({
  name: Slices.vacancy,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchVacancies.fulfilled, (state, action) => {
      state.vacancies = action.payload?.data;
      state.total = action.payload?.meta?.pagination?.total;
    });
  },
});

export default vacancySlice.reducer;
