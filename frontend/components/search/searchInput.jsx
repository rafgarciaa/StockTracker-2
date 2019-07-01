import React, { useState } from 'react';

const SearchInput = ({ searchAction }) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = e => {
    setSearchText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    searchAction(searchText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={searchText} />
      <button onClick={handleSubmit}>CLICK ME</button>
    </form>
  );
};

export default SearchInput;
