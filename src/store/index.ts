import { configureStore } from '@reduxjs/toolkit';
import recycleReducer from './recycleSlice';

export type RootState = ReturnType<ReturnType<typeof store>['getState']>;
export type AppDispatch = ReturnType<typeof store>['dispatch'];

export const store = () => {
  return configureStore({
    reducer: {
      cards: recycleReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
  });
};
