import React, { useState, useEffect } from "react";
import data from "../data/data.json";
import Header from "./Header";
import SearchInput from "./SearchInput";
import Jobs from "./Jobs";

function State() {
  const [currentJobs, setCurrentJobs] = useState([...data]);
  // const [filterData, setFilterData] = [];
  const [searchTerm, setSearchTerm] = useState([]);

  // console.log("searchTerm", searchTerm);
  console.log("currentJobs", currentJobs);

  const filterJobRole = (checkedValue) => {
    const filterRole = currentJobs.filter((job) => job.role === checkedValue);
    setCurrentJobs(filterRole);
  };

  const filterJobLevel = (checkedValue) => {
    const filterRole = currentJobs.filter((job) => job.level === checkedValue);
    setCurrentJobs(filterRole);
  };

  const filterJobLanguage = (checkedValue) => {
    const filterRole = currentJobs.filter((job) =>
      job.languages.includes(checkedValue)
    );
    setCurrentJobs(filterRole);
  };

  // const filterOnSelect = (searchInput, checkedValue) => {
  //   searchInput.map((element) => {
  //     if (element === checkedValue) {
  //       return setCurrentJobs(element);
  //     }
  //   });
  // };

  const setSearchTermExcludeDuplicates = (checkedValue) => {
    return searchTerm.includes(checkedValue)
      ? null
      : setSearchTerm([...searchTerm, checkedValue]);
  };
  // const filterOutRoleButton = (buttonValue) => {
  //   const filterOutButton = data.filter((obj) => obj.role !== buttonValue);
  //   setCurrentJobs([...currentJobs, ...filterOutButton]);
  //   console.log("filterOutButton", filterOutButton);
  // };

  // const filterOutLevelButton = (buttonValue) => {
  //   const filterOutButton = data.filter((obj) => obj.level !== buttonValue);
  //   setCurrentJobs([...currentJobs, ...filterOutButton]);
  //   console.log("filterOutButton", filterOutButton);
  // };

  const removedButton = (buttonValue) => {
    const filter = searchTerm.filter((string) => string !== buttonValue);
    // console.log(filterOutButton);

    setSearchTerm(filter);
    setCurrentJobs(searchTerm.length === 1 ? data : null);
  };

  return (
    <>
      <Header />
      <div className="container">
        <SearchInput
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          removedButton={removedButton}
          setCurrentJobs={setCurrentJobs}
          currentJobs={currentJobs}
          // filterOnSelect={filterOnSelect}
          // filterOutRoleButton={filterOutRoleButton}
          // filterOutLevelButton={filterOutLevelButton}
        />
        <div className="row">
          {}
          <Jobs
            setSearchTerm={setSearchTerm}
            data={currentJobs}
            searchTerm={searchTerm}
            setSearchTermExcludeDuplicates={setSearchTermExcludeDuplicates}
            filterJobRole={filterJobRole}
            filterJobLevel={filterJobLevel}
            filterJobLanguage={filterJobLanguage}
            setCurrentJobs={setCurrentJobs}
          />
        </div>
      </div>
    </>
  );
}

export default State;
