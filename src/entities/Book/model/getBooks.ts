import { RootState } from 'app/store';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { Book } from './types';

export const fetchBooks = createAsyncThunk<
  {
    bookData: Book[];
    totalPages: number;
  },
  any,
  { state: RootState }
>('books/fetchBooks', async (_, { getState }) => {
  const { searchText } = getState().search;
  const { page } = getState().books;

  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchText}&startIndex=${page}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  const data = await res.json();

  if (data.totalItems === 0) {
    throw new Error('Books not found');
  }
  if (data.error) {
    throw new Error(data.error.message);
  }

  const booksData = data.items.map((item: any) => ({
    uid: item.id,
    title: item.volumeInfo.title,
    description: item.volumeInfo.description,
    authors: item.volumeInfo.authors,
    favourite: 0
  }));

  return {
    bookData: booksData,
    totalPages: Math.ceil(data.totalItems / 10)
  };
});
