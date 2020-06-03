import React, { useState } from "react";
import allJobs from "../data/data.json";
import Header from "./Header";
import SearchInput from "./SearchInput";
import Jobs from "./Jobs";

function JobApp() {
  const [keyWords, setKeyWords] = useState([]);
  console.log("running job app component");
  const addKeyWord = (keyWord) => {
    return keyWords.includes(keyWord)
      ? null
      : setKeyWords([...keyWords, keyWord]);
  };
  const removeKeyWord = (keyWord) => {
    const result = keyWords.filter((string) => string !== keyWord);
    setKeyWords(result);
  };

  // this funcion is taking keyWords from the surrounding scope
  // as a parameter we will use one job object from the allJobs array
  //the function will return true if the job object includes ALL OF THE KEYWORDS //check array find
  // the function will return true if each of the keyWords is in the job Object
  //TODO make case insensitive

  function testJobIncludesAllKeyWords(job) {
    function testKeyWordIsIncludedInJob(keyWord) {
      return (
        keyWord === job.role ||
        keyWord === job.level ||
        job.languages.includes(keyWord) ||
        job.tools.includes(keyWord)
      );
    }
    return keyWords.every(testKeyWordIsIncludedInJob);
  }
  const jobsToShow = allJobs.filter(testJobIncludesAllKeyWords);

  return (
    <>
      <Header />
      <div className="container">
        <SearchInput keyWords={keyWords} removedButton={removeKeyWord} />
        <div className="row">
          {}
          <Jobs jobsToShow={jobsToShow} addKeyWord={addKeyWord} />
        </div>
      </div>
    </>
  );
}

export default JobApp;
