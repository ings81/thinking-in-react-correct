import React from "react";

const SearchBar = ({ handleSearch, handleCheckBox }) => {
  return (
    <div>
      <p>Search</p>
      <input onChange={handleSearch} type="text" name="search" />
      <label htmlFor="checkBox">Only show products in stock</label>
      <input onChange={handleCheckBox} type="checkbox" name="checkBox" />
    </div>
  );
};

export default SearchBar;
