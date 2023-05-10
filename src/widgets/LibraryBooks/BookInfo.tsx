import { Book } from 'entities/Book/model/types';

interface BookProps {
  book: Book;
  onClose: () => void;
}

const BookInfo: React.FC<BookProps> = ({ book, onClose }) => (
  <div className="absolute h-full left-0 top-0 w-full bg-white p-8 overflow-y-auto">
    <h1 className="text-3xl mb-3 font-medium">{book.title}</h1>
    <div className="flex gap-1 mb-2">
      {book.authors.map((author, index) => (
        <div
          className="border border-solid flex items-center justify-center text-center rounded-full p-2 border-fsd-blue bg-sky-100 text-fsd-blue "
          key={index}
        >
          {author}
        </div>
      ))}
    </div>
    <p className="text-xl">
      {book.description ? book.description : "This book doesn't have any description"}
    </p>
    <button className="absolute right-10 top-10" onClick={onClose}>
      <img src="/icons/close.svg" alt="" />
    </button>
  </div>
);

export default BookInfo;
