import { useState } from "react";
import cseImage from "/images/ee2.jpg";
import placed from "/images/our-achiever/PLACED.jpg";
import EnquiryModal from "../../../Blueprints/EnquiryModal";
import { useNavigate } from "react-router-dom";
import DepartmentActivities from "../../../Blueprints/DepartmentActivities";

export default function BtechEe() {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const cseImages = [
    "/images/deparmental-activites/cse1.jpg",
    "/images/deparmental-activites/cse2.jpg",
    "/images/deparmental-activites/cse3.jpg",
    "/images/deparmental-activites/cse4.jpg",
    "/images/deparmental-activites/cse5.jpg",
    "/images/deparmental-activites/cse6.jpg",
  ];

  return (
    <div>
      {/* 🔹 Hero Section */}
      <section className="bg-[#0A2342] flex items-center justify-center px-10 py-7">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Left Text Section */}
          <div className="text-white md:w-1/2">
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              B.Tech Electrical Engineering
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
              B.Tech Electrical Engineering – Overview
            </h2>

            <p className="text-base leading-relaxed text-gray-600">
              Electrical engineering is a field that has captivated human
              imagination for decades. From the invention of the light bulb to
              the development of wireless communication systems, electrical
              engineering has been at the forefront of technological innovation.
              B.Tech in Electrical Engineering is a program that is designed to
              provide students with a strong foundation in the principles of
              electrical engineering. Students who enroll in this program will
              be introduced to a wide range of subjects that cover the core
              areas of electrical engineering, including circuit analysis,
              electromagnetics, digital logic design, power systems, and control
              systems. These subjects are taught through a combination of
              lectures, laboratory experiments, and project-based assignments,
              giving students a well-rounded understanding of the subject
              matter.
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
                onClick={() => navigate("/hod/electrical")}
                className="border border-yellow-400 text-white cursor-pointer font-semibold px-6 py-2 rounded-md bg-[#0A2342] transition-all"
              >
                Hod Profile
              </button>
            </div>
          </div>

          {/* ✅ Right Image / Carousel */}
          <div className="relative md:w-1/2 flex justify-center items-center">
            <img
              src={cseImage}
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
              Some of the career prospects for electrical engineers are:
            </p>
            <ol className="list-decimal list-inside text-sm leading-relaxed text-gray-100 space-y-2 mt-2">
              <li>
                <strong>Power and Energy:</strong> Power and energy is a growing
                field in electrical engineering, where you may work on
                designing, developing, and maintaining power systems, such as
                electrical grids, renewable energy systems, and power
                electronics.
              </li>
              <li>
                <strong>Telecommunications:</strong> This field focuses on
                designing, developing, and maintaining communication systems,
                such as mobile phones, satellite systems, and network
                infrastructure.
              </li>
              <li>
                <strong>Robotics and Automation:</strong> Involves designing and
                developing robots and automated systems for various
                applications, such as manufacturing, healthcare, and
                transportation.
              </li>
              <li>
                <strong>Electronics and Microelectronics:</strong> Focuses on
                designing, developing, and testing electronic devices, such as
                microchips, circuit boards, and sensors.
              </li>
              <li>
                <strong>Computer Hardware and Software:</strong> Electrical
                engineers may also work in computer hardware and software
                design, including developing and testing computer systems,
                microprocessors, and integrated circuits.
              </li>
            </ol>
          </div>

          {/* Eligibility */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 hover:scale-[1.03] transition-transform duration-300">
            <h3 className="text-3xl font-bold mb-4 text-[#0A2342]">
              Eligibility
            </h3>
            <p className="text-sm leading-relaxed text-gray-700">
              Applicants must have passed the 10+2 examination with Physics and
              Mathematics as compulsory subjects and Chemistry / Computer
              Science. With at least 50% marks in the above subjects, taken
              together and 50% marks overall.
            </p>
            <h3 className="text-3xl font-bold mb-4 text-[#0A2342]">Duration</h3>
            <p className="text-sm leading-relaxed text-gray-700 mb-3">
              Electrical Engineering typically takes four years to complete.
              This includes general education courses as well as core courses in
              electrical engineering, communication systems, and other related
              topics.
            </p>

            <ul className="list-decimal list-inside text-sm leading-relaxed text-gray-700 space-y-1">
              <li>
                <span className="font-semibold">For Regular:</span> 4 years
              </li>
              <li>
                <span className="font-semibold">Lateral Entry:</span> 3 years
              </li>
              <li>
                <span className="font-semibold">Type of Course:</span> Under
                Graduate Course
              </li>
              <li>
                <span className="font-semibold">College/Faculty:</span> College
                of Engineering
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

            <p className="text-sm leading-relaxed mt-6 text-gray-700 text-center">
              Counselling through <strong>AKTU</strong> or Direct Admission (as
              per AKTU norms)
            </p>
            <p className="text-sm leading-relaxed mt-4 text-gray-700 text-center">
              <strong>Course Fee:</strong> <br />
              B.Tech 1st Year: ₹57,500 (approx.) <br />
              B.Tech 2nd Year (Lateral Entry): ₹30,000 – ₹32,000 (with
              scholarship)
            </p>

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

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start space-x-4">
                <div className="bg-[#0A2342] text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Online Application</h4>
                  <p className="text-sm leading-relaxed">
                    Fill out the online admission form with your academic and
                    personal details.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-4">
                <div className="bg-[#0A2342] text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Entrance Test</h4>
                  <p className="text-sm leading-relaxed">
                    Appear for an online{" "}
                    <strong>Multiple Choice Question (MCQ)</strong> test of 2
                    hours duration.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-4">
                <div className="bg-[#0A2342] text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Personal Interview</h4>
                  <p className="text-sm leading-relaxed">
                    Shortlisted applicants will be invited for an interview to
                    assess eligibility and interest.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start space-x-4">
                <div className="bg-[#0A2342] text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Final Admission</h4>
                  <p className="text-sm leading-relaxed">
                    Based on your performance, final admission will be granted
                    as per AKTU norms.
                  </p>
                </div>
              </div>
            </div>

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
          title="Electrical Departmental Activities"
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

          <div className="flex justify-center">
            <div className="bg-white rounded-md shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src={placed}
                alt="Archita Agarwal"
                className="w-full h-96 object-contain p-2"
              />
              <div className="pl-6 text-left">
                <p className="text-lg text-gray-600 font-bold">
                  Archita Agarwal
                </p>
                <p className="text-sm text-gray-600 font-bold">
                  Trainee (Tech Mech Private Limited)
                </p>
              </div>
            </div>
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
