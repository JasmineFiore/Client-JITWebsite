import { useState } from "react";
import EnquiryModal from "../../../Blueprints/EnquiryModal";
import DepartmentActivities from "../../../Blueprints/DepartmentActivities";
import PlacementHighlights from "../../../Blueprints/PlacementHighlights";

export default function DiplomaLis() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cseImages = [
    "/images/deparmental-activites/cse3.jpg",
    "/images/deparmental-activites/cse2.jpg",
    "/images/deparmental-activites/cse1.jpg",
    "/images/deparmental-activites/dep1.jpg",
    "/images/deparmental-activites/dep2.jpg",
    "/images/deparmental-activites/cse4.jpg",
  ];

  const achievers = [
    {
      name: "Mohd Vais",
      company: "Placed in Infosys",
      img: "/images/our-achiever/5.jpg",
    },
    {
      name: "Ms Ruokuokhrienuo Soupfunuo",
      company: "Placed in Pie Infocom",
      img: "/images/RuokuImg.jpg",
    },
    {
      name: "Mohd. Sohib Ansari",
      company: "Pursuing MS in Youngstown University",
      img: "/images/SohibAnsariImg.jpg",
    },
  ];

  return (
    <div>
      {/* 🔹 Hero Section */}
      <section className="bg-[#0A2342] flex items-center justify-center px-10 py-7">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Left Text Section */}
          <div className="text-white md:w-1/2">
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              Diploma Library & Information Science
            </h1>
          </div>
        </div>
      </section>

      {/* 🔸 Info Section - Improved Version */}
      <section className="bg-linear-to-r from-white to-gray-50 py-20 px-6 md:px-12 flex justify-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Left Text */}
          <div className="md:w-1/2 text-gray-700 space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] border-l-4 border-[#0A2342] pl-3 leading-snug">
              Diploma Library & Information Science
            </h2>

            <p className="text-base leading-relaxed text-gray-600">
              A diploma in Library and Information Science (LIS) is an
              educational program that provides students with the knowledge and
              skills needed to work in libraries and related organizations. The
              program typically covers topics such as library systems and
              services, cataloguing and classification, reference services,
              collection development and management, and information technology.
              Graduates of this program may work in public, academic, or special
              libraries, archives, museums, and other information organizations.
              The program can be completed in one to two years and may be
              offered by community colleges, technical schools, or universities.
              The program is open to anyone with a high school diploma or
              equivalent.
            </p>

            {/* Buttons */}
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
            </div>
          </div>

          {/* ✅ Right Image / Carousel */}
          <div className="relative md:w-1/2 flex justify-center items-center">
            <img
              src="/images/diploma/Diplomalibrary.jpg"
              alt="AI & ML Engineering"
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover transition-all duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* 🎓 B.Tech AI & ML Details Section */}
      <section className="bg-gradient-to-b from-[#0A2342] via-[#0E2E5C] to-[#0A2342] py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {/* Career Prospective */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl shadow-lg p-8 hover:scale-[1.03] transition-transform duration-300">
            <h3 className="text-3xl font-bold mb-4 text-yellow-400">
              Career Prospective
            </h3>
            <p className="text-sm leading-relaxed text-gray-100">
              A diploma in Library and Information Science can lead to a variety
              of career opportunities in libraries, archives, museums, and other
              information-based organizations. Graduates may work as librarians,
              library assistants, information specialists, or archivists. They
              may also work in information technology or knowledge management
              roles. With further education and experience, diploma holders may
              advance to leadership positions in the field.
            </p>
          </div>

          {/* Eligibility */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 hover:scale-[1.03] transition-transform duration-300">
            <h3 className="text-3xl font-bold mb-4 text-[#0A2342]">
              Eligibility Criteria
            </h3>
            <p className="text-sm leading-relaxed text-gray-700">
              Eligibility for a diploma in LIS typically requires a high school
              diploma or equivalent. Some programs may require specific
              coursework in English, communication, or social sciences. or
              Graduate in any discipline Without Grace Mark
            </p>
          </div>

          {/* Scholarship */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 hover:scale-[1.03] transition-transform duration-300 border border-gray-200">
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
                      Rebate in Tuition Fees Only
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      85% and Above
                    </td>
                    <td className="border border-gray-300 px-4 py-2">100%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      80% – 84%
                    </td>
                    <td className="border border-gray-300 px-4 py-2">40%</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      75% – 79%
                    </td>
                    <td className="border border-gray-300 px-4 py-2">30%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-[#0A2342] to-[#143109] text-white font-semibold cursor-pointer px-6 py-2 rounded-md hover:from-yellow-400 hover:to-yellow-400 hover:text-black transition-all"
              >
                Enquire Now
              </button>
            </div>
          </div>

          {/* Admission Process */}
          <div className="bg-yellow-400 text-gray-900 rounded-2xl shadow-lg p-8 hover:scale-[1.03] transition-transform duration-300">
            <h3 className="text-3xl font-bold mb-6 text-center">
              Admission Process
            </h3>

            <p className="text-lg text-center text-gray-600 mb-6">
              Applicants will have to go through the following process On the
              basis of performance in the online Multiple Choice Question (MCQ)
              test of 2 hours duration and personal interview
            </p>

            <div className="flex justify-center mt-8">
              {/* <button
                onClick={() =>
                  window.open(
                    "https://jit-cet.uc-school.com/site/mobile-registration",
                    "_blank"
                  )
                }
                className="bg-[#0A2342] text-white font-semibold cursor-pointer px-6 py-2 rounded-md hover:bg-gray-900 hover:text-yellow-400 transition-all"
              >
                Apply Now
              </button> */}
            </div>
          </div>
        </div>
      </section>

      <div>
        <DepartmentActivities
          title="departmental activities"
          images={cseImages}
        />
      </div>

      {/* ✅ Placement Cards */}
      <PlacementHighlights title="Our Achievers" achievers={achievers} />

      {/* Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <section
        id="get-started"
        className="text-white py-16 px-6 md:px-12 flex justify-center"
      >
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between bg-[#0A2342] border border-gray-600 rounded-lg p-8 shadow-lg">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">
              Ready to get Started?
            </h2>
            <p className="text-sm text-gray-200">
              Don’t miss out on this opportunity. Elevate your career with us.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-6 md:mt-0 bg-yellow-400 text-black font-semibold cursor-pointer px-6 py-2 rounded-md hover:bg-yellow-500 transition-all"
          >
            Enquire Now
          </button>
        </div>
      </section>
    </div>
  );
}
