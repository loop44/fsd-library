import { RootState } from 'app/store';

import { createSlice } from '@reduxjs/toolkit';

interface ErrorInitialState {
  error: string | null;
}

const initialState: ErrorInitialState = {
  error: null
};

export const errorSlise = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError(state, action) {
      state.error = action.payload;
    },
    removeError(state) {
      state.error = null;
    }
  }
});

export const selectError = (state: RootState) => state.error.error;

export const { setError, removeError } = errorSlise.actions;

export default errorSlise.reducer;
