import { useContext } from "react";
import { JobsContext } from "../context/Jobs.context";
import { JobCard } from "./JobCard";
import { FadeLoader } from "react-spinners";

const JobsList = ({
  selectedCompany = null,
  setSelectedJob,
  selectedJob = null,
  width = "40",
  setShowJobModal,
}) => {
  const { jobs } = useContext(JobsContext);

  return (
    <div
      className={`${
        (selectedCompany && !selectedCompany.id) ||
        (selectedJob && selectedJob.id)
          ? "hidden"
          : "flex"
      } md:flex flex-col gap-4 md:w-[${width}vw] w-full`}
    >
      <div className=" inline-flex justify-evenly border-b-2 border-b-slate-500 mx-2 w-full mb-3 py-2">
        <h1 className="text-center text-4xl  py-2 font-semibold  ">Jobs</h1>
        <button
          className="bg-green-600 px-2 rounded-xl text-white font-semibold my-2 hover:scale-105 hover:opacity-70"
          onClick={() => setShowJobModal(true)}
        >
          {" "}
          Add New
        </button>
      </div>
      <div className="flex justify-between items-center"></div>

      <div className="flex flex-col gap-3 md:overflow-y-auto pb-2 ">
        {selectedCompany ? (
          <>
            {jobs ? (
              selectedCompany.id ? (
                jobs
                  .filter((job) => job.companyId === selectedCompany.id)
                  .map((job) => <JobCard job={job} key={job.id} />)
              ) : (
                jobs.map((job) => <JobCard job={job} key={job.id} />)
              )
            ) : (
              <FadeLoader />
            )}
          </>
        ) : (
          <>
            {jobs ? (
              jobs.map((job) => (
                <div
                  onClick={() => setSelectedJob(job)}
                  className={`cursor-pointer mr-2 mx-2 rounded-lg ${
                    selectedJob.id === job.id
                      ? "border-4 border-solid border-slate-300 "
                      : "border-none"
                  }`}
                  key={job.id}
                >
                  <JobCard job={job} key={job.id} />
                </div>
              ))
            ) : (
              <FadeLoader />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default JobsList;
