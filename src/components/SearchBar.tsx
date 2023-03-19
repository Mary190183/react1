import { SetStateAction, useState } from 'react';
import data from '../data/plants.json';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e: {
    preventDefault: () => void;
    target: { value: SetStateAction<string> };
  }) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    data.plants.filter((plant) => {
      return plant.name.match(searchInput);
    });
  }
  return (
    <form action="/" method="get">
      <input
        className="input-search"
        name="search"
        onChange={handleChange}
        value={searchInput}
        placeholder="Enter plant ..."
        type="search"
        required
      ></input>
      <button className="button" type="submit">
        <div className="search-icon"></div>
      </button>
    </form>
  );
};

export default SearchBar;
