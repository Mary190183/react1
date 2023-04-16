import { configureStore } from '@reduxjs/toolkit';
import recycleReducer from './recycleSlice';
import cardsReducer from './searchSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    cards: recycleReducer,
    cardsSearch: cardsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});
