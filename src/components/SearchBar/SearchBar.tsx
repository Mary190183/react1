import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSearchValue } from '../../store/searchSlice';
import { RootState } from '../../store';

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state: RootState) => state.cardsSearch.searchValue);
  const [value, setValue] = useState(searchValue);

  return (
    <form
      method="get"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addSearchValue(value));
      }}
    >
      <input
        className="input-search"
        name="search"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="Enter Plant Name Here..."
        required
        type="search"
      ></input>
      <button className="button" type="submit" data-testid="button-search">
        <div className="search-icon"></div>
      </button>
    </form>
  );
};

export default SearchBar;
