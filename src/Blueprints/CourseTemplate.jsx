import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DepartmentActivities from "./DepartmentActivities";
import EnquiryModal from "./EnquiryModal";
import PlacementHighlights from "./PlacementHighlights";

export default function CourseTemplate({
  title,
  overviewHeading,
  overviewParagraphs,
  image,
  hodLink,
  departmentTitle,
  departmentImages,
  achieversTitle,
  achievers,
  careerProspects,
  eligibility,
  admission,
  duration,
  courseDetails,
  scholarship,
  hasScholarship, // boolean flag
  hasAdmissionProcess, // boolean flag
  hasSyllabus,
  syllabusLinks,
}) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* 🔹 Hero Section */}
      <section className="bg-[#0A2342] flex items-center justify-center px-10 py-7">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="text-white md:w-1/2">
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              {title}
            </h1>
          </div>
        </div>
      </section>

      {/* 🔸 Info Section */}
      <section className="bg-linear-to-r from-white to-gray-50 py-20 px-6 md:px-12 flex justify-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="md:w-1/2 text-gray-700 space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] border-l-4 border-[#0A2342] pl-3 leading-snug">
              {overviewHeading}
            </h2>

            {overviewParagraphs.map((text, i) => (
              <p key={i} className="text-base leading-relaxed text-gray-600">
                {text}
              </p>
            ))}

            <div className="flex flex-wrap gap-4 mt-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-yellow-300 text-black font-semibold cursor-pointer px-6 py-2 rounded-md shadow-lg hover:bg-yellow-400 transition-all"
              >
                Counselling Now
              </button>
              {/* <button
                onClick={() =>
                  window.open(
                    "https://jit-cet.uc-school.com/site/mobile-registration",
                    "_blank"
                  )
                }
                className="border border-yellow-400 text-[#0A2342] font-semibold cursor-pointer px-6 py-2 rounded-md bg-yellow-300 hover:bg-yellow-400 hover:text-black transition-all"
              >
                Apply Now
              </button> */}
              {hodLink && (
                <button
                  onClick={() => navigate(hodLink)}
                  className="border border-yellow-400 text-white font-semibold cursor-pointer px-6 py-2 rounded-md bg-[#0A2342] transition-all"
                >
                  Hod Profile
                </button>
              )}
            </div>
          </div>

          {/* ✅ Right Image */}
          <div className="relative md:w-1/2 flex justify-center items-center">
            <img
              src={image}
              alt={title}
              className="rounded-2xl shadow-xl w-full h-[350px] object-contain transition-all duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* 🎓 Details Section */}
      <section className="bg-linear-to-b from-[#0A2342] via-[#0E2E5C] to-[#0A2342] py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Career Prospective */}
          <div className="bg-yellow-400 backdrop-blur-sm border border-white/20 text-white rounded-2xl shadow-lg p-8 hover:scale-[1.03] transition-transform duration-300">
            <h3 className="text-3xl font-bold mb-4 text-[#0A2342]">
              Career Prospective
            </h3>
            <div className="text-sm leading-relaxed text-[#0A2342] space-y-2 mt-2">
              {careerProspects.map((item, i) =>
                typeof item === "string" ? (
                  <li key={i} className="list-disc list-inside">
                    {item}
                  </li>
                ) : (
                  <div key={i} className="mt-4">
                    {item.paragraphs?.map((p, j) => (
                      <p key={j} className="text-[#0A2342] mt-1">
                        {p}
                      </p>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Eligibility & Duration */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 hover:scale-[1.03] transition-transform duration-300">
            <h3 className="text-3xl font-bold mb-4 text-[#0A2342]">
              Eligibility Criteria
            </h3>
            <p className="text-sm leading-relaxed text-gray-700">
              {eligibility}
            </p>

            {duration && (
              <div className="mt-6">
                <h3 className="text-3xl font-bold mb-4 text-[#0A2342]">
                  Duration
                </h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  {duration}
                </p>

                <ul className="list-inside text-sm leading-relaxed text-gray-700 space-y-1 mt-2">
                  {courseDetails.map((detail, i) => {
                    const [key, value] = detail.split(":");
                    return (
                      <li key={i}>
                        <span className="font-semibold">{key.trim()}:</span>
                        {value && <span> {value.trim()}</span>}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

          {/* Scholarship (if present) */}
          {hasScholarship && (
            <div className="bg-white text-gray-900 rounded-2xl shadow-lg p-8 hover:scale-[1.03] transition-transform duration-300 border border-gray-200">
              <h3 className="text-3xl font-bold mb-2 text-center text-[#0A2342]">
                Scholarship
              </h3>
              <p className="text-sm text-center text-gray-600 mb-6">
                Fee Concession for Meritorious Students
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 rounded-lg text-sm text-center">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 font-semibold">
                        Qualifying Percentage
                      </th>
                      <th className="border border-gray-300 px-4 py-2 font-semibold">
                        Rebate in Tuition Fees
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {scholarship.map((row, i) => (
                      <tr key={i}>
                        <td className="border border-gray-300 px-4 py-2">
                          {row.percentage}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {row.rebate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-linear-to-r from-[#0A2342] to-[#143109] text-white font-semibold cursor-pointer px-6 py-2 rounded-md hover:from-yellow-400 hover:to-yellow-400 hover:text-black transition-all"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          )}

          {/* Admission Process (if present) */}
          {hasAdmissionProcess && (
            <div className="bg-white/10 text-gray-100 rounded-2xl shadow-lg p-8 hover:scale-[1.03] transition-transform duration-300">
              <h3 className="text-3xl font-bold mb-6 text-center">
                Admission Process
              </h3>
              <p className="text-lg text-center text-gray-100 mb-6">
                {admission}
              </p>

              <div className="flex justify-center mt-8">
                {/* <button
                  onClick={() =>
                    window.open(
                      "https://jit-cet.uc-school.com/site/mobile-registration",
                      "_blank"
                    )
                  }
                  className="bg-yellow-400 text-black font-semibold cursor-pointer px-6 py-2 rounded-md hover:bg-gray-900 hover:text-yellow-400 transition-all"
                >
                  Apply Now
                </button> */}
              </div>
            </div>
          )}

          {/* Download Syllabus (if present) */}
          {hasSyllabus && (
            <div className="bg-yellow-400 text-gray-900 rounded-lg shadow-lg hover:scale-[1.03] transition-transform duration-300 p-10 text-center">
              <h3 className="text-3xl font-bold mb-10">Download Syllabus</h3>
              <div className="flex justify-center gap-24">
                {syllabusLinks?.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-[#0A2342] hover:text-blue-700 transition-transform hover:scale-110"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-10 h-10 mb-2"
                    >
                      <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm8 2H4v2h16v-2z" />
                    </svg>
                    <span className="text-lg font-bold">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 🏫 Department Activities */}
      <DepartmentActivities title={departmentTitle} images={departmentImages} />

      {/* 🏆 Achievers */}
      <PlacementHighlights title={achieversTitle} achievers={achievers} />

      {/* 📨 Enquiry Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
