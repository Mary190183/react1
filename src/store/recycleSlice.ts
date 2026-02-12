import { SliceCaseReducers, createSlice } from '@reduxjs/toolkit';
import { DataFormCard } from '../types/types';

interface CardsState {
  cards: DataFormCard[];
}
const initialState: CardsState = {
  cards: [],
};
const recycleSlice = createSlice<CardsState, SliceCaseReducers<CardsState>>({
  name: 'cardList',
  initialState,
  reducers: {
    deleteCard(state, action) {
      state.cards = state.cards.filter((item) => item.id !== action.payload.id);
    },
    addCard(state, action) {
      state.cards.push({
        id: Date.now(),
        date: action.payload.date,
        title: action.payload.title,
        select: action.payload.select,
        file: action.payload.file?.[0],
        check: action.payload.check,
        radio: action.payload.radio,
        submit: action.payload.submit,
      });
    },
  },
});

export const { addCard, deleteCard } = recycleSlice.actions;
export default recycleSlice.reducer;
