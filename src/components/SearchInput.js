import React from "react";

function SearchInput({ searchTerm, setSearchTerm }) {
  return (
    <div className="input-container">
      <input
        className="search-input"
        placeholder="search the job"
        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        value={searchTerm}
      ></input>
    </div>
  );
}
export default SearchInput;
