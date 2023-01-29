import {createSlice} from '@reduxjs/toolkit';
import {Slices} from 'src/constants/reducers';
import {IResume} from 'src/models/resume';
import {fetchMyResumes} from '../asyncActions/resumeActions';

type initialStateT = {
  resumes: IResume[];
};

const initialState: initialStateT = {
  resumes: [],
};

export const resumeSlice = createSlice({
  name: Slices.resume,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMyResumes.fulfilled, (state, action) => {
      state.resumes = action.payload.data;
    });
  },
});

export default resumeSlice.reducer;
