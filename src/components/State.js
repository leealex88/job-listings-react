import React, { useState } from "react";
import data from "../data/data.json";
import Header from "./Header";
import SearchInput from "./SearchInput";
import Jobs from "./Jobs";

function State() {
  // const [allJobs, setAllJobs] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  console.log(data);

  const filterTheRole =
    searchTerm === ""
      ? data
      : data.filter((job) => job.role.toLowerCase() === searchTerm);

  return (
    <>
      <Header />
      <div className="container">
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="row">
          <Jobs setSearchTerm={setSearchTerm} filterTheRole={filterTheRole} />
        </div>
      </div>
    </>
  );
}

export default State;
