
import { useLoaderData, useParams } from 'react-router-dom';
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { PiBagLight } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationArrow1 } from "react-icons/ci";
import { AiOutlineCheck } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJob } from './LocalStorage';


const JobDetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams();
    const job = jobs.find(job=>job.id == parseInt(id));
    
    const handleToast = ()=>{
        saveJob(parseInt(id));
        toast("You have applied for this job");
    }

    return (
        <div className='p-20 '>
           <div className='grid grid-cols-4 gap-2'>
                <div className=' space-y-4 col-span-3'> 
                    <p className='text-gray-500'><span className='font-semibold text-black'>Job Description : </span>{job.job_description}</p>
                    <p className='text-gray-500'><span  className='font-semibold text-black'>Job Responsibility :</span> {job.job_responsibility}</p>
                    <p className='font-semibold text-black'>Educational Requirements : </p>
                    <p>{job.educational_requirements}</p>
                    <p className='font-semibold text-black'>Experiences:</p>
                    <p> {job.experiences}</p>
                </div>
                <div className='py-4 px-8 bg-gray-100 space-y-2'>
                    <h2 className='font-semibold'>Job Details</h2>
                    <hr/>
                    <p><span className='font-semibold flex items-center gap-1'><RiMoneyDollarCircleLine /> Salary</span> {job.salary}/Mo</p>
                    <p><span className='font-semibold  flex items-center gap-1'><PiBagLight />Job title</span> {job.job_title}</p>

                    <p className='font-semibold  flex items-center gap-1'>Contact Information</p>
                    <hr/>
                    <p><span className='font-semibold  flex items-center gap-1'><FiPhone />Phone</span>{job.contact_information.phone}</p>
                    <p><span className='font-semibold  flex items-center gap-1'><AiOutlineMail />Email</span>{job.contact_information.email}</p>
                    <p><span className='font-semibold  flex items-center gap-1'><CiLocationArrow1 />Adress</span>{job.contact_information.address}</p>

                    <button onClick={handleToast} className='btn btn-success'><AiOutlineCheck />Apply now</button>
                </div>
           </div>
           <ToastContainer />
        </div>
    );
};

export default JobDetails;