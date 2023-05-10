import React from 'react';

interface BookProps {
  number: number;
  title: string;
  buttons?: React.ReactNode;
  favourite?: boolean;
}

const Book: React.FC<BookProps> = ({ number, title, buttons, favourite }) => (
  <div className="flex items-center py-4 px-3 m-1 border border-solid border-[#CCCCCC] relative">
    <div className={`absolute left-0 h-full w-1 bg-[#cccccc] ${favourite ? 'bg-fsd-green' : ''}`} />
    <p className="mr-6 pl-3">{number}</p>
    <h4 className="pr-6 truncate flex-1">{title}</h4>
    {buttons}
  </div>
);

export default Book;
