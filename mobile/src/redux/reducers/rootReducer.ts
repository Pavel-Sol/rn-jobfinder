import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './authReducer';
import appReducer from './appReducer';
import vacancyReducer from './vacancyReducer';
import userReducer from './userReducer';
import resumeReducer from './resumeReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
  vacancy: vacancyReducer,
  user: userReducer,
  resume: resumeReducer,
});
