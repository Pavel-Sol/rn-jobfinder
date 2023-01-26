import {createSlice} from '@reduxjs/toolkit';
import {Slices} from 'src/constants/reducers';
import {IVacancy} from 'src/models/vacancy';
import {getVacancies} from '../asyncActions/vacancyActions';

type initialStateT = {
  vacancies: IVacancy[];
};

const initialState: initialStateT = {
  vacancies: [],
};

export const vacancySlice = createSlice({
  name: Slices.vacancy,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getVacancies.fulfilled, (state, action) => {
      if (action.payload?.data) {
        state.vacancies = action.payload?.data;
      }
    });
  },
});

export default vacancySlice.reducer;
