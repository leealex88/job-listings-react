import React from "react";

function SearchInput({ keyWords, removedButton }) {
  return (
    <div className="search-input">
      {keyWords.map((element, index) => (
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
