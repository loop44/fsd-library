import { useAppDispatch } from 'app/store';
import { fetchBooks } from 'entities/Book/model/getBooks';
import debounce from 'lodash.debounce';
import React from 'react';
import { useSelector } from 'react-redux';

import { removeSearchValue, selectSearchValue, setSearchValue } from './model/slice';

const Search = () => {
  const dispatch = useAppDispatch();

  const searchValue = useSelector(selectSearchValue);

  const getResults = React.useCallback(
    debounce(() => {
      dispatch(fetchBooks(null));
    }, 500),
    []
  );

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(setSearchValue(value));
    getResults();
  };

  const clearSearch = () => {
    dispatch(removeSearchValue());
    getResults();
  };

  return (
    <div className="bg-black p-3">
      <div className="bg-white flex justify-between items-center p-1 gap-1 rounded">
        <button onClick={getResults}>
          <img src="/icons/search.svg" alt="" />
        </button>
        <input
          className="flex-1 outline-none"
          type="text"
          onChange={onChangeInput}
          value={searchValue}
          placeholder="Search book..."
        />
        <button onClick={clearSearch}>
          <img src="/icons/clear.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Search;
