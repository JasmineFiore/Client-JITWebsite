import { useState } from "react";

const JobOpenings = ({ jobs }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedJob = jobs[selectedIndex];

  return (
    <section className="py-10 px-6 md:px-12 bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0A2342]">
        CURRENT OPENINGS
      </h2>

      <p className="text-center mt-3 text-gray-600 max-w-4xl mx-auto">
        Join our esteemed faculty! We are actively searching for passionate and
        talented individuals to join our college. If ready to inspire and shape
        the minds of future generations, complete the application form below or
        drop your CV at
        <span className="text-red-500 font-semibold"> hr@jit.edu.in</span>
      </p>

      <div className="mt-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* LEFT — Job Tabs */}
        <div className="space-y-3">
          {jobs.map((job, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`w-full text-left px-4 py-4 rounded-md font-semibold border 
                ${
                  selectedIndex === index
                    ? "bg-[#0A2342] text-white"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }
              `}
            >
              {job.title}
            </button>
          ))}
        </div>

        {/* RIGHT — Job Details */}
        <div className="md:col-span-2 bg-gray-200 rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-[#0A2342] mb-4">
            {selectedJob.jobtitle}
          </h3>

          {selectedJob.qualification && (
            <p className="mb-3">
              <span className="font-bold">Minimum Qualification: </span>
              {selectedJob.qualification}
            </p>
          )}

          {selectedJob.specialization && (
            <p className="mb-3">
              <span className="font-bold">Specialization: </span>
              {selectedJob.specialization}
            </p>
          )}
          {selectedJob.experience && (
            <p className="mb-6">
              <span className="font-bold">Experience: </span>
              {selectedJob.experience}
            </p>
          )}
          {selectedJob.branch && (
            <p className="mb-6">
              <span className="font-bold">Deptt/Branch: </span>
              {selectedJob.branch}
            </p>
          )}

          <button className="bg-[#0A2342] text-white px-6 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition-all">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobOpenings;
