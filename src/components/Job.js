import React, { Fragment } from "react";

function Job({ job, addKeyWord }) {
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
            {job.company}{" "}
            {job.new ? <button className="label-new"> New! </button> : null}{" "}
            {job.featured ? (
              <button className="label-future"> FEATURED </button>
            ) : null}{" "}
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

      <div className="buttons">
        <button
          className="singleB"
          onClick={() => {
            addKeyWord(job.role);
          }}
        >
          {job.role}
        </button>

        <button
          className="singleB"
          onClick={() => {
            addKeyWord(job.level);
          }}
        >
          {job.level}
        </button>
        {job.languages.map((language, index) => (
          <button
            className="singleB"
            key={index}
            onClick={() => {
              addKeyWord(language);
            }}
          >
            {language}
          </button>
        ))}
        {job.tools.map((tool, index) => (
          <button
            className="singleB"
            key={index}
            onClick={() => {
              addKeyWord(tool);
            }}
          >
            {tool}
          </button>
        ))}
      </div>
    </Fragment>
  );
}
export default Job;
