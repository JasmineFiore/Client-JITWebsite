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
              <button
                onClick={() =>
                  window.open(
                    "https://jit-cet.uc-school.com/site/mobile-registration",
                    "_blank"
                  )
                }
                className="border border-yellow-400 text-[#0A2342] font-semibold cursor-pointer px-6 py-2 rounded-md bg-yellow-300 hover:bg-yellow-400 hover:text-black transition-all"
              >
                Apply Now
              </button>
              <button
                onClick={() => navigate(hodLink)}
                className="border border-yellow-400 text-white font-semibold cursor-pointer px-6 py-2 rounded-md bg-[#0A2342] transition-all"
              >
                Hod Profile
              </button>
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
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl shadow-lg p-8 hover:scale-[1.03] transition-transform duration-300">
            <h3 className="text-3xl font-bold mb-4 text-yellow-400">
              Career Prospective
            </h3>
            <div className="text-sm leading-relaxed text-gray-100 space-y-2 mt-2">
              {careerProspects.map((item, i) => {
                // If it's a string, render as list item
                if (typeof item === "string") {
                  return (
                    <li key={i} className="list-disc list-inside">
                      {item}
                    </li>
                  );
                }

                // If it's an object (e.g. with title/paragraphs)
                if (typeof item === "object") {
                  return (
                    <div key={i} className="mt-4">
                      {/* <h4 className="font-semibold text-yellow-300">
                        {item.title}
                      </h4> */}
                      {item.paragraphs?.map((p, j) => (
                        <p key={j} className="text-gray-200 mt-1">
                          {p}
                        </p>
                      ))}
                    </div>
                  );
                }

                return null;
              })}
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

            <h3 className="text-3xl font-bold mb-4 mt-6 text-[#0A2342]">
              Duration
            </h3>
            <p className="text-sm leading-relaxed text-gray-700">{duration}</p>

            <ul className="list-decimal list-inside text-sm leading-relaxed text-gray-700 space-y-1 mt-2">
              {courseDetails.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
          {/* Admission Process */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 hover:scale-[1.03] transition-transform duration-300">
            <h3 className="text-3xl font-bold mb-4 text-[#0A2342]">
              Admission Process
            </h3>
            <p className="text-sm leading-relaxed text-gray-700">
              {admission}
            </p>
          </div>

          {/* Download syllabus */}
          <div className="bg-yellow-400 text-gray-900 rounded-lg shadow-lg p-10 text-center">
            <h3 className="text-3xl font-bold mb-10">Download Syllabus</h3>

            <div className="flex justify-center gap-24">
              {/* 1st Year */}
              <a
                // href="/syllabus/MBA-1st-Year-AKTU.pdf"
                target="_blank"
                className="flex flex-col items-center text-[#0A2342] hover:text-blue-700 transition-transform hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-12 h-10 mb-2"
                >
                  <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm8 2H4v2h16v-2z" />
                </svg>
                <span className="text-lg font-bold">1st Year</span>
              </a>

              {/* 2nd Year */}
              <a
                // href="/syllabus/MBA-2nd-Year-AKTU-.pdf"
                target="_blank"
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
                <span className="text-lg font-bold">2nd Year</span>
              </a>

              {/* 3nd Year */}
              <a
                // href="/syllabus/MBA-2nd-Year-AKTU-.pdf"
                target="_blank"
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
                <span className="text-lg font-bold">2nd Year</span>
              </a>
            </div>
          </div>
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
