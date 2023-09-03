import { combineReducers } from 'redux';

import { configureStore } from '@reduxjs/toolkit';

import StyleReducer from './style/StyleSlice';

export const store = configureStore({
  reducer: {
    styler: StyleReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

const rootReducer = combineReducers({
  styler: StyleReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;
