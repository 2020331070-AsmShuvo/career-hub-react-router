import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
  } = job;
  
  return (
    <div className=" p-4 space-y-1 mx-auto">
      <div className="card w-[450px] bg-base-100 border p-4">
        <figure>
          <img src={logo} alt="logo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {job_title}
            <div className="badge badge-secondary">Available</div>
          </h2>
          <h2 className=" text-blue-900 font-bold text-lg my-2">
            {company_name}
          </h2>
          <div className="card-actions justify-start">
            <div className="badge badge-neutral"> {job_type}</div>
            <div className="badge badge-outline"> {remote_or_onsite}</div>
          </div>
          <div className="flex my-2">
            <p className="text-gray-500 flex items-center justify-start">
              <FaLocationDot /> {location}
            </p>
            <p className="text-gray-500 flex items-center justify-center">
              {" "}
              Salary: <MdOutlineAttachMoney /> {salary}
            </p>
          </div>
          <div>
            <Link to={`/job/${id}`}> <button className="btn btn-outline">Show Details</button> </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
