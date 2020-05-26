import React, { useState } from "react";
import data from "../data/data.json";
function State() {
  const [allJobs, setAllJobs] = useState(data);

  console.log(allJobs);

  return (
    <div>
      {allJobs.map((job, index) => (
        <div key={index}>
          <div>
            <img src={job.logo} alt="" />
          </div>
          <div>
            <p>{job.company}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default State;
