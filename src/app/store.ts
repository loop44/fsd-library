import books from 'entities/Book/model/slice';
import error from 'features/ErrorAlert/model/slice';
import search from 'features/Search/model/slice';
import { useDispatch } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    error,
    books,
    search
  }
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
