import { RootState } from 'app/store';

import { createSlice } from '@reduxjs/toolkit';

import { fetchBooks } from './getBooks';
import { Book, FetchStatus } from './types';

interface BooksInitialState {
  books: Book[] | [];
  fetchBooksStatus: FetchStatus;
  error: string;
  page: number;
  totalPages: number;
}

const initialState: BooksInitialState = {
  books: [],
  fetchBooksStatus: FetchStatus.LOADING,
  error: '',
  page: 0,
  totalPages: 0
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks(state, action) {
      state.books = action.payload;
    },
    setNextPage(state) {
      if (state.page < state.totalPages) {
        state.page += 1;
      }
    },
    setPrevPage(state) {
      if (state.page > 0) {
        state.page -= 1;
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.fetchBooksStatus = FetchStatus.LOADING;
      state.books = [];
      state.error = '';
    });

    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.fetchBooksStatus = FetchStatus.SUCCESS;
      state.books = action.payload.bookData;
      state.totalPages = action.payload.totalPages;
      state.error = '';
    });

    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.fetchBooksStatus = FetchStatus.ERROR;
      state.books = [];
      state.error = action.error.message ? action.error.message : 'Something went wrong';
    });
  }
});

export const selectBooks = (state: RootState) => state.books.books;
export const selectBooksError = (state: RootState) => state.books.error;
export const selectCurrentPage = (state: RootState) => state.books.page;
export const selectTotalPages = (state: RootState) => state.books.totalPages;

export const { setBooks, setNextPage, setPrevPage } = booksSlice.actions;

export default booksSlice.reducer;
