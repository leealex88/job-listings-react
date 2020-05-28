import React, { Fragment } from "react";
function Job({ job, setSearchTerm }) {
  return (
    <Fragment>
      <div>
        <img src={`${process.env.PUBLIC_URL}/${job.logo.slice(2)}`} alt="" />
      </div>
      <div>
        <p>{job.company}</p>
        <p>{job.level}</p>
        <p>{job.postedAt}</p>
        <p>{job.contract}</p>
        <p>{job.location}</p>
        <div>
          <div onClick={() => setSearchTerm(job.role.toLowerCase())}>
            {job.role}
          </div>
          <div>{job.level}</div>
          {job.languages.map((language, index) => (
            <div key={index}>{language}</div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
export default Job;
