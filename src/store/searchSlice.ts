import { createSlice, PayloadAction, Slice, SliceCaseReducers } from '@reduxjs/toolkit';
import { DataPlant } from '../types/types';

interface CardsState {
  cardsSearch: DataPlant[];
  search: string;
  status: string | null;
  error: string | null;
}

const initialState: CardsState = {
  cardsSearch: [],
  search: '',
  status: null,
  error: null,
};

export const searchSlice: Slice<CardsState, SliceCaseReducers<CardsState>, 'search'> = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addSearchValue(state, action: PayloadAction<CardsState>) {
      state.search = action.payload.search;
    },
    clearSearchValue(state) {
      state.search = '';
    },
  },
});

export const { addSearchValue, clearSearchValue } = searchSlice.actions;
export default searchSlice.reducer;
