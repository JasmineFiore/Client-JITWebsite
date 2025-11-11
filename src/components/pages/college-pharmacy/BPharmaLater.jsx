import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EnquiryModal from "../../EnquiryModal";

export default function BPharmaLater() {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* 🔹 Hero Section */}
      <section className="bg-[#0A2342] flex items-center justify-center px-10 py-7">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Left Text Section */}
          <div className="text-white md:w-1/2">
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              B.Pharma
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
              B.Pharma Program – Overview
            </h2>

            <p className="text-base leading-relaxed text-gray-600">
              B. Pharma is Approved by PCI and AICTE affiliated to Dr. APJ Abdul
              Kalam Technical University (AKTU), Uttar Pradesh.
            </p>
            <p className="text-base leading-relaxed text-gray-600">
              Pharmacy is an art and science of preparing, manufacturing,
              marketing and dispensing medicines. Bachelor of Pharmacy is a
              semester program (8, Semesters/4 years). The curriculum provides
              soft skills, value added training and professional practice
              skills. The scheme is customized to train the students to play an
              important role in healthcare system and the pharmaceutical
              industry.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-yellow-300 text-black font-semibold cursor-pointer px-6 py-2 rounded-md shadow-lg hover:bg-yellow-400 transition-all"
              >
                Enquire Now
              </button>

              <button
                onClick={() => navigate("/hod/pharmacy")}
                className="border border-yellow-400 cursor-pointer text-white font-semibold px-6 py-2 rounded-md bg-[#0A2342] transition-all"
              >
                Hod Profile
              </button>
            </div>
          </div>

          {/* ✅ Right Image / Carousel */}
          <div className="relative md:w-1/2 flex justify-center items-center">
            <img
              src="/images/pharmacy/courses/ph1.jpg"
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
          <div className="bg-[#f4b942] text-black rounded-xl shadow-md p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Career Prospective
            </h2>
            <p className="font-medium text-center mb-6">
              Many job opportunities are available for B.Pharmacy Degree
              holders.
            </p>

            <ol className="list-decimal list-inside space-y-2 font-medium">
              <li>Community Pharmacy</li>
              <li>Hospital Pharmacy</li>
              <li>Production &amp; Manufacturing</li>
              <li>Marketing</li>
              <li>Analysis &amp; Testing</li>
              <li>Drug Inspector</li>
              <li>Academics</li>
              <li>Research &amp; Development</li>
              <li>Regulatory Affairs</li>
              <li>Clinical Research</li>
              <li>Data Manager</li>
            </ol>
          </div>

          {/* Eligibility */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 hover:scale-[1.03] transition-transform duration-300">
            <h3 className="text-3xl font-bold mb-4 text-[#0A2342]">
              Eligibility
            </h3>
            <div className="max-w-3xl mx-auto text-left space-y-3 text-lg">
              <p>
                <strong>Minimum Qualification Required:</strong> A candidate
                must have 10+2 science passed with Physics, Chemistry, and
                Biology or Mathematics from a recognized Board/ University.
              </p>
              <p>
                <strong>Minimum Marks Required:</strong> 45% for open category
                students and 40% for reserved category students.
              </p>
              <p>
                <strong>Course:</strong> B.Pharm (Bachelor of Pharmacy)
              </p>
              <p>
                <strong>Course Duration:</strong> 4 years
              </p>
              <p>
                <strong>Type of Course:</strong> Undergraduate Degree
              </p>

              <p>
                <strong>College/Faculty:</strong> College of Pharmacy
              </p>
            </div>
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
              B.Pharm Admission 2025
            </h3>

            <p className="text-lg text-center text-gray-900 mb-6">
              Applicants will have to go on online Multiple Choice Question
              (MCQ) test of 2 hours duration and personal interview
            </p>

            <div className="flex justify-center mt-8">
              <button
                onClick={() =>
                  window.open(
                    "https://jit-cet.uc-school.com/site/mobile-registration",
                    "_blank"
                  )
                }
                className="bg-[#0A2342] text-white font-semibold cursor-pointer px-6 py-2 rounded-md hover:bg-gray-900 hover:text-yellow-400 transition-all"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
