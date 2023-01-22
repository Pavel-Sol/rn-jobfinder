import {combineReducers} from '@reduxjs/toolkit';
import countReducer from './countReducer';
import userReducer from './userReducer';

export const rootReducer = combineReducers({
  count: countReducer,
  user: userReducer,
});
