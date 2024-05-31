import { useState, useEffect, createContext } from "react";
import axios from "axios";
const JobsContext = createContext();
const API_URL = "https://json-server-tpl.adaptable.app/jobs/";

function JobsProvider({ children }) {
  const [jobs, setJobs] = useState([]);

  const getAllJobs = async () => {
    try {
      const response = await axios.get(API_URL);
      setJobs(response.data.reverse());
    } catch (error) {
      console.log(error.message);
    }
  };
  //need to be called in useEffect after companies state changes
  const getJob = (jobId) => {
    return companies.find((job) => job.id === jobId);
  };

  const addJob = async (jobData) => {
    try {
      const response = await axios.post(API_URL, jobData);
      response.status === 201 &&
        toast.success("Job Added Successfull!", {
          position: "top-center",
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteJob = async (jobId) => {
    try {
      const response = await axios.delete(API_URL + jobId);
      response.status === 200 &&
        toast.error("Job Deleted!", {
          position: "top-center",
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateJob = async (jobData, jobId) => {
    try {
      const response = await axios.put(API_URL + jobId, jobData);
      response.status === 200 &&
        toast.success("Job Updated Successfull!", {
          position: "top-center",
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAllJobs();
  }, []);

  return (
    <JobsContext.Provider
      value={{ jobs, getAllJobs, getJob, updateJob, deleteJob, addJob }}
    >
      {children}
    </JobsContext.Provider>
  );
}

export { JobsProvider, JobsContext };