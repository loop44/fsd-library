import { useState } from 'react';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [items, setItems] = useState([]);

  const getResults = () => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&startIndex=0`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => setItems(data.items));
  };

  return (
    <>
      <div className="bg-black p-3">
        <div className="bg-white flex justify-between items-center p-1 gap-1 rounded">
          <button onClick={getResults}>
            <img src="/icons/search.svg" alt="" />
          </button>
          <input
            className="flex-1 outline-none"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <img src="/icons/clear.svg" alt="" />
        </div>
      </div>
      <div>
        {items.map((item) => (
          <div className="m-5" key={item.id}>
            {item.volumeInfo.title}
          </div>
        ))}
      </div>
    </>
  );
};

export default Search;
