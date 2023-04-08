import React from 'react';

interface InputDateProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
  value: string | number | readonly string[] | undefined;
}

const SearchBar: React.FC<InputDateProps> = (props) => {
  const { onSubmit, value, onChange } = props;
  return (
    <form method="get" onSubmit={onSubmit}>
      <input
        className="input-search"
        name="search"
        onChange={onChange}
        value={value}
        placeholder="Enter Plant Name Here..."
        type="search"
      ></input>
      <button className="button" type="submit" data-testid="button-search">
        <div className="search-icon"></div>
      </button>
    </form>
  );
};

export default SearchBar;
