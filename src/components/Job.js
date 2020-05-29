import React, { Fragment } from "react";
// import data from "../data/data.json";
function Job({ job, setSearchTerm }) {
  // console.log("job", job);

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
        <div>
          <p className="company">
            {job.company} {job.new ? <button> New! </button> : null}{" "}
            {job.featured ? <button> FEATURED </button> : null}{" "}
          </p>
        </div>
        <div>
          <p className="position">{job.position}</p>
        </div>
        <div className="dots-listings">
          <p>
            {job.postedAt} <span>&#8226;</span>
          </p>

          <p>
            {job.contract} <span>&#8226;</span>
          </p>

          <p>{job.location}</p>
        </div>
      </div>

      <div
        className="buttons"
        onClick={() => setSearchTerm(job.role.toLowerCase())}
      >
        <button className="singleB">{job.role}</button>

        <button className="singleB">{job.level}</button>
        {job.languages.map((language, index) => (
          <button className="singleB" key={index}>
            {language}
          </button>
        ))}
      </div>
    </Fragment>
  );
}
export default Job;
