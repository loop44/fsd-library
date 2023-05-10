import Pagination from 'features/Pagination';
import Search from 'features/Search';
import BooksList from 'widgets/BooksList';

const SearchBooksPage = () => (
  <div>
    <Search />
    <BooksList />
    <Pagination />
  </div>
);

export default SearchBooksPage;
