import React, { useEffect, useState } from "react";
import Job from "./Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [showItems, setShowItems] = useState([4]);

     useEffect(() => {
    fetch("jobs.json")
        .then((res) => res.json())
        .then((data) => setJobs(data));
    }, []);

    const handleShow = ()=>{
        setShowItems(jobs.length);
        // console.log("done")
    }

    return (
        <div>
            <div className="grid grid-cols-2">
                {jobs.slice(0,showItems).map((job) => (
                <Job job={job} key={job.id}/>
                ))}
            </div>
            <div className={`text-center my-4 ${jobs.length==showItems && 'hidden'}`}>
                <button onClick={()=>handleShow()} className="btn btn-info ">Viwe More jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;
