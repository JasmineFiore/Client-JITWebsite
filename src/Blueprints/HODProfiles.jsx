import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const HODProfiles = ({ hods }) => {
  const { dept } = useParams(); // Get department from URL
  const formattedDept = dept ? dept.toLowerCase() : null;

  // Find matching HOD or fallback to first
  const defaultHOD =
    hods.find((hod) => hod.department.toLowerCase().includes(formattedDept)) ||
    hods[0];

  const [selectedHOD, setSelectedHOD] = useState(defaultHOD);

  useEffect(() => {
    if (formattedDept) {
      const hod = hods.find((h) =>
        h.department.toLowerCase().includes(formattedDept)
      );
      if (hod) setSelectedHOD(hod);
    }
  }, [dept]);

  return (
    <section className="bg-gradient-to-b from-[#0A2342] via-[#0E2E5C] to-[#0A2342] text-white py-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-2">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
            HOD Profile&apos;s
          </h1>
          <p className="text-gray-200 text-sm md:text-base">
            Meet our Heads of Departments — leading excellence and innovation.
          </p>
        </div>

        {/* Department Info */}
        <div className="text-center mb-5">
          <h2 className="text-yellow-400 text-lg font-semibold tracking-wide uppercase">
            Department of {selectedHOD.headerdepartment}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mt-2">
            {selectedHOD.name}
          </h3>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start bg-amber-100 p-4 rounded-lg shadow-xl">
          {/* Left Sidebar */}
          <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible gap-2">
            {hods.map((hod, index) => (
              <button
                key={index}
                onClick={() => setSelectedHOD(hod)}
                className={`whitespace-nowrap text-left px-4 py-2 rounded-md font-semibold transition-all duration-300 ${
                  selectedHOD.department === hod.department
                    ? "bg-[#0A2342] text-white border-l-4 border-yellow-400"
                    : "text-gray-900 hover:bg-black/10"
                }`}
              >
                HOD {hod.department}
              </button>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <img
              src={selectedHOD.image}
              alt={selectedHOD.name}
              className="w-64 h-72 sm:w-56 sm:h-64 object-cover rounded-lg shadow-lg border-4 border-yellow-400 transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Info */}
          <div className="space-y-3 text-gray-900 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-[#0A2342]">
              {selectedHOD.name}
            </h3>
            <p className="text-gray-700 italic">{selectedHOD.tagline}</p>
            <p>
              <span className="font-semibold text-[#0A2342]">Designation:</span>{" "}
              {selectedHOD.designation}
            </p>
            <p>
              <span className="font-semibold text-[#0A2342]">
                Educational Qualification:
              </span>{" "}
              {selectedHOD.qualification}
            </p>
            <p>
              <span className="font-semibold text-[#0A2342]">Experience:</span>{" "}
              {selectedHOD.experience}
            </p>
            <p>
              <span className="font-semibold text-[#0A2342]">
                Area of Specialization:
              </span>{" "}
              {selectedHOD.specialization}
            </p>
            <p>
              <span className="font-semibold text-[#0A2342]">Email:</span>{" "}
              <a
                href={`mailto:${selectedHOD.email}`}
                className="text-yellow-600 hover:underline"
              >
                {selectedHOD.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HODProfiles;
