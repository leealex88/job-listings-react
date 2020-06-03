import React from "react";
import Job from "./Job";
function Jobs({ jobsToShow, addKeyWord }) {
  return (
    <>
      {jobsToShow.map((job, index) => (
        <div className="col-12 sm-col-12 md-col-12" key={index}>
          <div className="each-job">
            <Job job={job} addKeyWord={addKeyWord} />
          </div>
        </div>
      ))}
    </>
  );
}
export default Jobs;

// if searchTerm === [] ? includes(job.role || job.level :  <Job /> )
