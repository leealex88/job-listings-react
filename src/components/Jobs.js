import React from "react";
import Job from "./Job";
function Jobs({ setSearchTerm, filterTheRole }) {
  return (
    <>
      {filterTheRole.map((job, index) => (
        <div className="col-12 sm-col-12 md-col-12">
          <div key={index} className="each-job">
            <Job job={job} setSearchTerm={setSearchTerm} />
          </div>
        </div>
      ))}
    </>
  );
}
export default Jobs;
