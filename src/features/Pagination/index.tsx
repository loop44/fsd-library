import { useAppDispatch } from 'app/store';
import { fetchBooks } from 'entities/Book/model/getBooks';
import {
  selectBooks,
  selectCurrentPage,
  selectTotalPages,
  setNextPage,
  setPrevPage
} from 'entities/Book/model/slice';
import { useSelector } from 'react-redux';
import Button from 'shared/ui/Button';

const Pagination = () => {
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const books = useSelector(selectBooks);

  const dispatch = useAppDispatch();

  const clickPrevPage = () => {
    dispatch(setPrevPage());
    dispatch(fetchBooks(null));
  };

  const clickNextPage = () => {
    dispatch(setNextPage());
    dispatch(fetchBooks(null));
  };

  if (books.length > 0) {
    return (
      <div className="w-full flex justify-center items-center gap-2">
        <Button onClick={clickPrevPage} color="blue" size="md" text="Prev" />
        <span>Page {currentPage + 1}</span>
        <span>of</span>
        <span>{totalPages}</span>
        <Button onClick={clickNextPage} color="blue" size="md" text="Next" />
      </div>
    );
  }

  return null;
};

export default Pagination;
