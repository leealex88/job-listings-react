import React, { useState } from "react";
import data from "../data/data.json";
import Header from "./Header";
import SearchInput from "./SearchInput";
import Jobs from "./Jobs";

function State() {
  const [currentJobs, setCurrentJobs] = useState([...data]);
  const [searchTerm, setSearchTerm] = useState([]);

  console.log(data);
  console.log("currentSearch", currentJobs);

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

  return (
    <>
      <Header />
      <div className="container">
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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
          />
        </div>
      </div>
    </>
  );
}

export default State;
