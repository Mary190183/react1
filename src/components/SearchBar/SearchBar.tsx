import { useState, useEffect } from 'react';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState(() => {
    const saved = localStorage.getItem('searchInput') as string;
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem('searchInput', JSON.stringify(searchInput));
  }, [searchInput]);

  return (
    <form method="get">
      <input
        className="input-search"
        name="search"
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
        placeholder="Enter text ..."
        type="search"
        required
      ></input>
      <button className="button" type="submit" data-testid="button-search">
        <div className="search-icon"></div>
      </button>
    </form>
  );
};

export default SearchBar;
