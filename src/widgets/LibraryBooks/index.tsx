import { Book as BookType } from 'entities/Book/model/types';
import Book from 'entities/Book/ui';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from 'shared/ui/Button';
import Modal from 'shared/ui/Modal';

import BookInfo from './BookInfo';

const LibraryBooks = () => {
  const [books, setBooks] = useState<[] | BookType[]>([]);
  const [selectedBook, setSelectedBook] = useState<null | BookType>(null);
  const [selectedInfoBook, setSelectedInfoBook] = useState<null | BookType>(null);

  const location = useLocation();

  const getBooksFromLS = () => {
    const booksData = localStorage.getItem('books');

    if (!booksData) {
      localStorage.setItem('books', JSON.stringify([]));
    }
    const booksArr: BookType[] = JSON.parse(booksData || '{}');

    setBooks(booksArr);
  };

  const addBookToFavourites = (book: BookType) => {
    const booksData = localStorage.getItem('books');
    const booksArr: BookType[] = JSON.parse(booksData || '{}');

    booksArr.forEach((item) => {
      if (item.uid === book.uid) {
        item.favourite = Number(!item.favourite);
      }
    });

    localStorage.setItem('books', JSON.stringify(booksArr));
    setBooks(booksArr);
  };

  useEffect(() => {
    getBooksFromLS();
  }, [selectedBook, location]);

  const deleteBook = (book: BookType) => {
    const booksData = localStorage.getItem('books');
    const booksArr: BookType[] = JSON.parse(booksData || '{}');

    const res = booksArr.filter((item) => item.uid !== book.uid);

    localStorage.setItem('books', JSON.stringify(res));
    setBooks(res);
    setSelectedBook(null);
  };

  const filteredBooks = books.filter((item) => {
    if (location.pathname === '/favourite') {
      return item.favourite;
    }
    return item;
  });

  return (
    <div className="py-3 relative">
      <div>
        {filteredBooks.map((item, index) => (
          <Book
            key={item.uid}
            number={index + 1}
            title={item.title}
            favourite={Boolean(item.favourite)}
            buttons={
              <div className="flex gap-1">
                <Button
                  size="sm"
                  text="F"
                  color="green"
                  onClick={() => addBookToFavourites(item)}
                />
                <Button size="sm" text="D" color="red" onClick={() => setSelectedBook(item)} />
                <Button size="sm" text="I" color="blue" onClick={() => setSelectedInfoBook(item)} />
              </div>
            }
          />
        ))}
      </div>
      {selectedInfoBook ? (
        <BookInfo book={selectedInfoBook} onClose={() => setSelectedInfoBook(null)} />
      ) : null}
      {selectedBook ? (
        <Modal
          title="Delete book"
          text="Are you sure you want to delete this book?"
          onClickNo={() => setSelectedBook(null)}
          onClickYes={() => deleteBook(selectedBook)}
        />
      ) : null}
    </div>
  );
};

export default LibraryBooks;
