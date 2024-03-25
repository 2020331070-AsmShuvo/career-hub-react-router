const getStoredJobApplication = ()=>{
    const storedJobs = localStorage.getItem('job-application') // will return an array of job ids
    if(storedJobs){
        return JSON.parse(storedJobs);
    }
    return [];
}

const saveJob = id =>{
    const storedJobs = getStoredJobApplication();
    const isJObExists = storedJobs.find(jobId => jobId === id);
    if(!isJObExists){
        storedJobs.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedJobs));
    }
}
export {saveJob, getStoredJobApplication};