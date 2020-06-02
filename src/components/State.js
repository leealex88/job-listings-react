import React, { useState, useEffect } from "react";
import data from "../data/data.json";
import Header from "./Header";
import SearchInput from "./SearchInput";
import Jobs from "./Jobs";

function State() {
  const [currentJobs, setCurrentJobs] = useState([...data]);
  const [searchTerm, setSearchTerm] = useState([]);

  console.log("searchTerm", searchTerm);
  console.log("currentJobs", currentJobs);
  useEffect(() => {
    effect;
    return () => {
      cleanup;
    };
  }, [searchTerm]);

  const filterJobRole = (checkedValue) => {
    const filterRole = currentJobs.filter((job) => job.role === checkedValue);
    setCurrentJobs(filterRole);
    console.log("1 role", filterRole);
  };

  const filterJobLevel = (checkedValue) => {
    const filterRole = currentJobs.filter((job) => job.level === checkedValue);
    setCurrentJobs(filterRole);
    console.log("2 value", filterRole);
  };

  const filterJobLanguage = (checkedValue) => {
    const filterRole = currentJobs.filter((job) =>
      job.languages.includes(checkedValue)
    );
    console.log("3 value", filterRole);
    setCurrentJobs(filterRole);
  };

  const setSearchTermExcludeDuplicates = (checkedValue) => {
    return searchTerm.includes(checkedValue)
      ? null
      : setSearchTerm([...searchTerm, checkedValue]);
  };
  const removedButton = (buttonValue) => {
    const filter = searchTerm.filter((string) => string !== buttonValue);
    setSearchTerm(filter);
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
