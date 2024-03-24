import React, { useEffect, useState } from 'react';
import Job from './Job';

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])

    console.log(jobs);

    return (
        <div className='grid grid-cols-2'>
            {
                jobs.map(job => <Job job={job}/>)
            }
        </div>
    );
};

export default FeaturedJobs;