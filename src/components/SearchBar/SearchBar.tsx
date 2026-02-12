import React from 'react';
import { useState, useEffect } from 'react';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState(localStorage.getItem('searchInput') || '');

  useEffect(() => {
    // storing input name
    localStorage.setItem('searchInput', searchInput);
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
