import { useState } from "react";
import DepartmentActivities from "../../DepartmentActivities";
import EnquiryModal from "../../EnquiryModal";

export default function DiplomaMe() {
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
      name: "ASHUTOSH VERMA",
      company:
        "PRODUCTION DEPT/QUALITY/ASSEMBLY(: Dhoot Transmissions Private limited)",
      img: "/images/our-achiever/ach15.jpg",
    },
    {
      name: "MD AFTAB ALAM",
      company:
        "PRODUCTION DEPT/QUALITY/ASSEMBLY(: Dhoot Transmissions Private limited)",
      img: "/images/our-achiever/ach16.jpg",
    },
    {
      name: "SIDDHARTH SINGH",
      company:
        "PRODUCTION DEPT/QUALITY/ASSEMBLY(: Dhoot Transmissions Private limited)",
      img: "/images/our-achiever/ach17.jpg",
    },
    {
      name: "Sandhya Sahni",
      company: "Anand Group ACYM Gurugram",
      img: "/images/our-achiever/ach18.jpg",
    },
    {
      name: "Zeeshan Abbas",
      company: "Quality Engineer(Webco)",
      img: "/images/our-achiever/ach19.jpg",
    },
    {
      name: "Nishant Singh",
      company: "Quality Engineer(Webco)",
      img: "/images/our-achiever/ach20.jpg",
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
              Diploma Mechanical Engineering
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
              Diploma Mechanical Engineering
            </h2>

            <p className="text-base leading-relaxed text-gray-600">
              Mechanical Engineering finds application in all fields of
              technology. It is one of the primitive branches of Engineering
              which have remained always in demand and continue to be in the
              future. This is why Mechanical trade is called as an Evergreen
              trade (branch). Mechanical engineers have always been needed as an
              essential staff personnel in various industries of both public and
              private sector. Their work criteria change according to the type
              and domain of the company they are working with. As the Industrial
              sector has drastically risen in pace, the need for more mechanical
              Engineers has increased exponentially. Every manufacturing and
              production industry requires mechanical engineers to carry out
              jobs efficiently and flawlessly for their companies.
            </p>

            {/* Buttons */}
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
            </div>
          </div>

          {/* ✅ Right Image / Carousel */}
          <div className="relative md:w-1/2 flex justify-center items-center">
            <img
              src="/images/Mechanical-engineering.jpg"
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
              Graduates of a diploma in mechanical engineering program may work
              as mechanical engineering technicians, mechanical design
              technicians, or quality control technicians. They may also work in
              industries such as manufacturing, aerospace, automotive, or
              energy. Career prospects may include positions such as design
              engineer, production engineer, maintenance engineer, or project
              manager. Further education, such as a bachelor’s or master’s
              degree, may be pursued for advanced career opportunities.
            </p>
          </div>

          {/* Eligibility */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 hover:scale-[1.03] transition-transform duration-300">
            <h3 className="text-3xl font-bold mb-4 text-[#0A2342]">
              Eligibility Criteria
            </h3>
            <p className="text-sm leading-relaxed text-gray-700">
              Eligibility for a diploma in mechanical engineering A candidate
              must have passed 10th standard or equivalent with 35%., Lateral
              Entry – Intermediate Science OR Intermediate Science with
              Vocational / Technical subjects OR ITI Trade.
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

      <div>
        <DepartmentActivities
          title="departmental activities"
          images={cseImages}
        />
      </div>

      <section
        id="placement-highlights"
        className="bg-yellow-400 py-10 px-6 md:px-12 flex flex-col items-center"
      >
        <div className="max-w-7xl w-full text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2342] mb-10">
            Our Achievers
          </h2>

          {/* ✅ Placement Cards */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            {achievers.map((person, index) => (
              <div
                key={index}
                className="bg-white rounded-md shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 w-72"
              >
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-80 object-contain p-2"
                />
                <div className="pl-4 py-2 text-left">
                  <p className="text-lg text-gray-700 font-bold">
                    {person.name}
                  </p>
                  <p className="text-sm text-gray-600 font-semibold">
                    {person.jobprofile}
                  </p>
                  <p className="text-sm text-gray-600 font-semibold">
                    {person.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
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
