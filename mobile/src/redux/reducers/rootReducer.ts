import {combineReducers} from '@reduxjs/toolkit';
import countReducer from './countReducer';
import authReducer from './authReducer';
import appReducer from './appReducer';
import vacancyReducer from './vacancyReducer';

export const rootReducer = combineReducers({
  count: countReducer,
  auth: authReducer,
  app: appReducer,
  vacancy: vacancyReducer,
});
