import React, { Fragment } from "react";
function Job({ job, setSearchTerm }) {
  return (
    <Fragment>
      <div>
        <img
          className="job-picture"
          src={`${process.env.PUBLIC_URL}/${job.logo.slice(2)}`}
          alt=""
        />
      </div>
      <div className="left-panel-listings">
        <p>{job.company}</p>
        <p>{job.position}</p>
        <div className="dots-listings">
          <p>{job.postedAt}</p>
          <p>{job.contract}</p>
          <p>{job.location}</p>
        </div>
      </div>
      <div className="right-panel-listings">
        <div onClick={() => setSearchTerm(job.role.toLowerCase())}>
          {job.role}
        </div>
        <div>{job.level}</div>
        {job.languages.map((language, index) => (
          <div key={index}>{language}</div>
        ))}
      </div>
    </Fragment>
  );
}
export default Job;
