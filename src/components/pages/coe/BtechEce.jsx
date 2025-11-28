import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EnquiryModal from "../../../Blueprints/EnquiryModal";
import eceImage from "/images/ece.jpeg";
import DepartmentActivities from "../../../Blueprints/DepartmentActivities";

export default function BtechEce() {
  const navigate = useNavigate();

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
      name: "Mohd. Vais",
      company: "Placed in Infosys",
      img: "/images/our-achiever/5.jpg",
    },
    {
      name: "Ms Ruokuokhrienuo Soupfunuo",
      company: "Pie Infocom(4.5lpa)",
      img: "/images/RuokuImg.jpg",
    },
    {
      name: "Daniyal Khan",
      company: "MS in Youngstown University,Ohio,USA",
      img: "/images/DaniyalImg.jpg",
    },
    {
      name: "Adil Hussain",
      company: "MS in TAIPEI university of Technology, Taiwan",
      img: "/images/AdilImg.jpg",
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
              B.Tech Electronics & Communication Engineering
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
              B.Tech Electronics & Communication Engineering
            </h2>

            <p className="text-base leading-relaxed text-gray-600">
              Electrical and communication engineering is a field that focuses
              on the design, development, and application of electrical and
              communication systems. This field involves the study of various
              topics such as power systems, digital signal processing,
              electronics, and communication networks. The primary goal of this
              field is to design and develop systems that can transmit, receive,
              and process information using electrical and communication
              technologies. The electrical and communication engineering course
              curriculum typically includes a combination of theoretical
              concepts and hands-on training. Students learn about the
              fundamental principles of electrical and communication
              engineering, including circuit theory, electromagnetism, and
              signal processing. They also learn about various communication
              technologies such as wireless, fiber optics, and satellite
              communication.
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
                onClick={() => navigate("/hod/ece")}
                className="border border-yellow-400 text-white cursor-pointer font-semibold px-6 py-2 rounded-md bg-[#0A2342] transition-all"
              >
                Hod Profile
              </button>
            </div>
          </div>

          {/* ✅ Right Image / Carousel */}
          <div className="relative md:w-1/2 flex justify-center items-center">
            <img
              src={eceImage}
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
              Some of the career prospects for Electronics & Communication
              engineers are:
            </p>
            <ol className="list-decimal list-inside text-sm leading-relaxed text-gray-100 space-y-2 mt-2">
              <li>
                <strong>Electrical Engineer:</strong> Electrical engineers
                design, develop, and test electrical equipment, such as motors,
                generators, and communication systems.
              </li>
              <li>
                <strong>Communication Engineer:</strong> Communication engineers
                design, develop, and maintain communication systems, such as
                wireless networks, radio, and television broadcasting systems.
              </li>
              <li>
                <strong>Power Engineer:</strong> Power engineers design and
                maintain power generation systems, such as power plants, and
                distribution systems, such as transmission and distribution
                lines.
              </li>
              <li>
                <strong>Electronics Engineer:</strong> Electronics engineers
                design and develop electronic devices, such as microchips,
                circuit boards, and computer hardware.
              </li>
              <li>
                <strong>Control Engineer:</strong> Control engineers design and
                develop systems that control processes or machines, such as
                robotics, manufacturing systems, and traffic control systems.
              </li>
              <li>
                <strong>Instrumentation Engineer:</strong> Instrumentation
                engineers design and develop systems that measure and control
                physical quantities, such as temperature, pressure, and flow.
              </li>
              <li>
                <strong>Renewable Energy Engineer:</strong> Renewable energy
                engineers design and develop systems that generate energy from
                renewable sources, such as solar, wind, and hydro power.
              </li>
            </ol>
          </div>

          {/* Eligibility */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 hover:scale-[1.03] transition-transform duration-300">
            <h3 className="text-3xl font-bold mb-4 text-[#0A2342]">
              Eligibility Criteria
            </h3>
            <p className="text-sm leading-relaxed text-gray-700">
              Applicants must have passed the 10+2 examination with Physics and
              Mathematics as compulsory subjects and Chemistry / Computer
              Science. With at least 50% marks in the above subjects, taken
              together and 50% marks overall.
            </p>
            <h3 className="text-3xl font-bold mb-4 mt-6 text-[#0A2342]">
              Duration
            </h3>
            <p className="text-sm leading-relaxed text-gray-700 mb-3">
              Electrical & Communication Engineering typically takes four years
              to complete. This includes general education courses as well as
              core courses in electrical engineering, communication systems, and
              other related topics.
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
