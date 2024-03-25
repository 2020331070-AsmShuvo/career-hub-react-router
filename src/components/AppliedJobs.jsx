import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "./LocalStorage";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleFilter = (filtertext) => {
    if (filtertext === "all") {
      setDisplayJobs(appliedJobs);
    } 
    else if (filtertext == "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      )
      setDisplayJobs(remoteJobs);
      console.log("remote")
    } 
    else if (filtertext == "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);

      console.log("onsite")
    }
  };

  const jobs = useLoaderData();
  useEffect(() => {
    // console.log(jobs);
    const storedJobs = getStoredJobApplication();
    // console.log(storedJobs);
    if (jobs.length > 0) {
      const jobsApplied = [];
      for (let id of storedJobs) {
        const job = jobs.find((job) => job.id == id);
        // console.log(job);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, []);

  return (
    <div className="p-20 text-center">
      <h2 className="text-3xl mb-2 font-bold text-green-950">
        Jobs you applied :{" "}
        <sapn className="text-bold text-5xl  text-green-600">
          {displayJobs.length}
        </sapn>
      </h2>
      <details className="dropdown">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleFilter("all")}><a>All</a></li>
          <li onClick={() => handleFilter("remote")}><a>Remote</a></li>
          <li onClick={() => handleFilter("onsite")}><a>Onsite</a></li>
        </ul>
      </details>
      <hr className="mb-10" />
      <ul>
        {displayJobs.map((job) => (
          <li
            className="border rounded-md mx-auto px-3 py-2 w-fit m-2"
            key={job.id}
          >
            <span className="text-gray-500 font-semibold text-lg mx-2">
              {job.job_title}
            </span>
            <span>|</span>
            <span className="text-gray-500 font-semibold text-lg mx-2">
              {job.company_name}
            </span>
            <span>|</span>
            <span className="text-gray-500 font-semibold text-lg mx-2">
              {job.remote_or_onsite}
            </span>
            <span>|</span>
            <span className="text-gray-500 font-semibold text-lg mx-2">
              {job.salary}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
