import { configureStore } from '@reduxjs/toolkit';
import recycleReducer from './recycleSlice';
import cardsReducer from './searchSlice';
import { plantsApi } from './plantsApi';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    [plantsApi.reducerPath]: plantsApi.reducer,
    cards: recycleReducer,
    cardsSearch: cardsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(plantsApi.middleware),
});
