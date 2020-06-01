import React from "react";
import Job from "./Job";
function Jobs({
  setSearchTerm,
  data,
  searchTerm,
  setSearchTermExcludeDuplicates,
  filterJobRole,
  filterJobLevel,
  filterJobLanguage,
}) {
  return (
    <>
      {data.map((job, index) => (
        <div className="col-12 sm-col-12 md-col-12">
          <div key={index} className="each-job">
            <Job
              job={job}
              setSearchTerm={setSearchTerm}
              searchTerm={searchTerm}
              setSearchTermExcludeDuplicates={setSearchTermExcludeDuplicates}
              filterJobRole={filterJobRole}
              filterJobLevel={filterJobLevel}
              filterJobLanguage={filterJobLanguage}
            />
          </div>
        </div>
      ))}
    </>
  );
}
export default Jobs;

// if searchTerm === [] ? includes(job.role || job.level :  <Job /> )
