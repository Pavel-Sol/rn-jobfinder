import {combineReducers} from '@reduxjs/toolkit';
import countReducer from './countReducer';
import userReducer from './userReducer';
import appReducer from './appReducer';
import vacancyReducer from './vacancyReducer';

export const rootReducer = combineReducers({
  count: countReducer,
  user: userReducer,
  app: appReducer,
  vacancy: vacancyReducer,
});
