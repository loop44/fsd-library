import { RootState } from 'app/store';

import { createSlice } from '@reduxjs/toolkit';

interface SearchInitialState {
  searchText: string;
}

const initialState: SearchInitialState = {
  searchText: ''
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchText = action.payload;
    },
    removeSearchValue(state) {
      state.searchText = '';
    }
  }
});

export const selectSearchValue = (state: RootState) => state.search.searchText;

export const { removeSearchValue, setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
