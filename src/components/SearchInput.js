import React from "react";

function SearchInput({
  searchTerm,
  removedButton,
  setCurrentJobs,
  currentJobs,
}) {
  return (
    <div className="search-input">
      {searchTerm.map((element, index) => (
        <button
          className="singleB"
          key={index}
          onClick={() => {
            removedButton(element);
          }}
        >
          {element}
        </button>
      ))}
    </div>
  );
}
export default SearchInput;
