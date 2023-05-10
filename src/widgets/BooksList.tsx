import { selectBooks, selectBooksError } from 'entities/Book/model/slice';
import { Book as BookType } from 'entities/Book/model/types';
import Book from 'entities/Book/ui';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from 'shared/ui/Button';
import Modal from 'shared/ui/Modal';

const BooksList = () => {
  const [selectedBook, setSelectedBook] = useState<null | BookType>(null);
  const books = useSelector(selectBooks);
  const error = useSelector(selectBooksError);

  const setBookToDB = (book: BookType) => {
    const booksData = localStorage.getItem('books');

    if (!booksData) {
      localStorage.setItem('books', JSON.stringify([]));
    }
    const booksArr: BookType[] = JSON.parse(booksData || '{}');

    const dublicateBook = booksArr.find((item) => item.uid === book.uid);

    if (!dublicateBook) {
      booksArr.push(book);
    }

    localStorage.setItem('books', JSON.stringify(booksArr));
    setSelectedBook(null);
  };

  return (
    <div className="py-3">
      <div>
        {books.map((item, index) => (
          <Book
            key={item.uid}
            number={index + 1}
            title={item.title}
            buttons={
              <Button size="md" text="Add" color="green" onClick={() => setSelectedBook(item)} />
            }
          />
        ))}
      </div>
      <h3 className="text-center text-fsd-red text-lg">{error}</h3>
      {selectedBook ? (
        <Modal
          title="Add book"
          text="Are you sure you want to add this book?"
          onClickNo={() => setSelectedBook(null)}
          onClickYes={() => setBookToDB(selectedBook)}
        />
      ) : null}
    </div>
  );
};

export default BooksList;
