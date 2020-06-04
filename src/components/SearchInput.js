import React from "react";

function SearchInput({ keyWords, setKeyWords, removedButton }) {
  return keyWords.length > 0 ? (
    <div className="search-input">
      {keyWords.map((element, index) => (
        <div>
          <button className="singleB-input key-button" key={index}>
            {element}
          </button>
          <button
            className="singleB-input x-button"
            onClick={() => {
              removedButton(element);
            }}
          >
            X
          </button>
        </div>
      ))}
      <p className="singleB-input clear-button" onClick={() => setKeyWords([])}>
        Clear
      </p>
    </div>
  ) : null;
}
export default SearchInput;
