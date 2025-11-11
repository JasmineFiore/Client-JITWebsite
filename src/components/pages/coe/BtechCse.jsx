import { useState } from "react";
import DepartmentActivities from "../../DepartmentActivities";
import cseImage from "/images/cse.jpg";
import placed from "/images/our-achiever/PLACED.jpg";
import EnquiryModal from "../../EnquiryModal";
import { useNavigate } from "react-router-dom";

export default function BtechCse() {
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
              B.Tech Computer Science Engineering
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
              B.Tech Computer Science & Engineering (AI & Machine Learning) –
              Overview
            </h2>

            <p className="text-base leading-relaxed text-gray-600">
              The{" "}
              <span className="font-semibold text-[#0A2342]">
                Computer Science and Engineering Department
              </span>{" "}
              offers a B.Tech program focused on{" "}
              <span className="text-[#0A2342] font-medium">
                Artificial Intelligence and Machine Learning (AI & ML)
              </span>
              . This four-year, full-time program combines the latest AI
              innovations with a strong foundation in core computer science
              concepts.
            </p>

            <p className="text-base leading-relaxed text-gray-600">
              Students gain hands-on experience developing real-world solutions
              using modern tools and technologies. The curriculum emphasizes
              computational mathematics, algorithm design, and advanced AI
              frameworks — empowering students to stay ahead in the
              ever-evolving IT world.
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Strong foundation in core CSE subjects.</li>
              <li>Specialized courses in AI & ML domains.</li>
              <li>Hands-on projects with industry exposure.</li>
              <li>Focus on innovation and real-world applications.</li>
            </ul>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-yellow-400 text-black font-semibold cursor-pointer px-6 py-2 rounded-md shadow-lg hover:bg-yellow-500 transition-all"
              >
                Enquire Now
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://jit-cet.uc-school.com/site/mobile-registration",
                    "_blank"
                  )
                }
                className="border border-yellow-400 text-[#0A2342] cursor-pointer font-semibold px-6 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition-all"
              >
                Apply Now
              </button>
              <button
                onClick={() => navigate("/hod/cse")}
                className="border border-yellow-400 text-white font-semibold px-6 py-2 rounded-md bg-[#0A2342] transition-all"
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
              A career in Computer Science Engineering opens doors to software
              development, web and app design, database management, AI & ML
              research, cybersecurity, and much more. With a degree in this
              field, students can work across industries like IT, healthcare,
              finance, and gaming, or even pursue entrepreneurial ventures in
              emerging technologies.
            </p>
          </div>

          {/* Eligibility */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 hover:scale-[1.03] transition-transform duration-300">
            <h3 className="text-3xl font-bold mb-4 text-[#0A2342]">
              Eligibility
            </h3>
            <p className="text-sm leading-relaxed text-gray-700">
              Applicants must have passed the 10+2 examination with Physics and
              Mathematics as compulsory subjects, along with Chemistry or
              Computer Science, securing at least <strong>50% marks</strong> in
              aggregate and in these subjects combined.
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

      <div>
        <DepartmentActivities
          title="CSE Departmental Activities"
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
