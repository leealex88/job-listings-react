import React from "react";

function SearchInput({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-input">
      {searchTerm.map((element, index) => (
        <button className="singleB" key={index}>
          {element}
        </button>
      ))}
    </div>
  );
}
export default SearchInput;

// import React from "react";

// function SearchInput({ searchTerm, setSearchTerm }) {
//   return (
//     <div className="input-container">
//       <input
//         className="search-input"
//         placeholder="search the job"
//         onChange={(e) => setSearchTerm(e.target.value)}
//         value={searchTerm}
//       ></input>
//     </div>
//   );
// }
// export default SearchInput;
