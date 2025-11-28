import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DepartmentActivities from "../../../Blueprints/DepartmentActivities";
import EnquiryModal from "../../../Blueprints/EnquiryModal";
import PlacementHighlights from "../../../Blueprints/PlacementHighlights";

export default function LLB() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const llbImages = [
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
          <div className="text-white md:w-1/2">
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              Bachelor of Laws (LL.B)
            </h1>
          </div>
        </div>
      </section>

      {/* 🔸 Info Section */}
      <section className="bg-linear-to-r from-white to-gray-50 py-20 px-6 md:px-12 flex justify-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Left Text */}
          <div className="md:w-1/2 text-gray-700 space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] border-l-4 border-[#0A2342] pl-3 leading-snug">
              Bachelor of Laws (LL.B) – Overview
            </h2>

            <p className="text-base leading-relaxed text-gray-600">
              The Bachelor of Laws (LL.B) is an undergraduate professional
              degree in law that provides students with comprehensive knowledge
              of the legal system, its principles, and applications. The program
              covers various aspects of constitutional law, criminal law,
              contract law, civil law, corporate law, and legal procedures.
            </p>

            <p className="text-base leading-relaxed text-gray-600">
              The LL.B program equips students with analytical, logical
              reasoning, and advocacy skills essential for legal practice.
              Graduates can pursue careers as advocates, legal advisors, judges,
              consultants, or corporate legal officers, or further their studies
              through an LL.M or judicial exams.
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
              <button
                onClick={() => navigate("/hod/arts")}
                className="border border-yellow-400 text-white font-semibold cursor-pointer px-6 py-2 rounded-md bg-[#0A2342] transition-all"
              >
                Hod Profile
              </button>
            </div>
          </div>

          {/* ✅ Right Image */}
          <div className="relative md:w-1/2 flex justify-center items-center">
            <img
              src="/images/collegeArts/llb.jpg"
              alt="Bachelor of Laws"
              className="rounded-2xl shadow-xl w-full h-[300px] object-contain transition-all duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* 🎓 Program Details Section */}
      <section className="bg-linear-to-b from-[#0A2342] via-[#0E2E5C] to-[#0A2342] py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {/* Career Prospective */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl shadow-lg p-8 hover:scale-[1.03] transition-transform duration-300">
            <h3 className="text-3xl font-bold mb-4 text-yellow-400">
              Career Prospective
            </h3>
            <p className="text-sm leading-relaxed text-gray-100">
              Graduates of the LL.B program can pursue a variety of legal and
              non-legal careers:
            </p>

            <ul className="list-disc list-inside text-sm leading-relaxed text-gray-100 space-y-2 mt-2">
              <li>Advocate / Lawyer</li>
              <li>Legal Advisor / Consultant</li>
              <li>Corporate Legal Officer</li>
              <li>Judicial Services (Judge / Magistrate)</li>
              <li>Legal Analyst or Researcher</li>
              <li>Government Legal Officer or Prosecutor</li>
              <li>Law Firm Associate / Partner</li>
              <li>Public Policy Expert or Human Rights Activist</li>
              <li>Further studies (LL.M, Ph.D., etc.)</li>
            </ul>
          </div>

          {/* Eligibility */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 hover:scale-[1.03] transition-transform duration-300">
            <h3 className="text-3xl font-bold mb-4 text-[#0A2342]">
              Eligibility Criteria
            </h3>
            <p className="text-sm leading-relaxed text-gray-700">
              Candidates must have completed 10+2 or equivalent from a
              recognized board with a minimum aggregate of 45% marks (40% for
              SC/ST).
            </p>

            <h3 className="text-3xl font-bold mb-4 mt-6 text-[#0A2342]">
              Duration
            </h3>
            <p className="text-sm leading-relaxed text-gray-700">
              The LL.B program is typically of 3 years (for graduates) or 5
              years (integrated program after 12th).
            </p>
            <ul className="list-decimal list-inside text-sm leading-relaxed text-gray-700 space-y-1 mt-2">
              <li>
                <span className="font-semibold">Course:</span> Bachelor of Laws
                (LL.B)
              </li>
              <li>
                <span className="font-semibold">Type:</span> Undergraduate /
                Professional Course
              </li>
              <li>
                <span className="font-semibold">College/Faculty:</span> College
                of Law
              </li>
            </ul>
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
                      Rebate in Tuition Fees
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

            <p className="text-lg text-center text-gray-900 mb-6">
              Admission to the LL.B program is based on merit or performance in
              the entrance test followed by a personal interview.
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

      {/*  Department Activities */}
      <div>
        <DepartmentActivities
          title="Law Department Activities"
          images={llbImages}
        />
      </div>

      {/*  Achievers */}
      <PlacementHighlights title="Our Law Achievers" achievers={achievers} />

      {/*  Enquiry Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
