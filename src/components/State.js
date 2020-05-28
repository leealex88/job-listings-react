import React, { useState } from "react";
import data from "../data/data.json";
import Job from "./Job";
function State() {
  // const [allJobs, setAllJobs] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  console.log(data);

  const filterTheRole =
    searchTerm === ""
      ? data
      : data.filter((job) => job.role.toLowerCase() === searchTerm);

  return (
    <div>
      <div>
        <input
          placeholder="search the job"
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          value={searchTerm}
        ></input>
      </div>

      {filterTheRole.map((job, index) => (
        <div key={index}>
          <Job job={job} setSearchTerm={setSearchTerm} />
        </div>
      ))}
    </div>
  );
}

export default State;
