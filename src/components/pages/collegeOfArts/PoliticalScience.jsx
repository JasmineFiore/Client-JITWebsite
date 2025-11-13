import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DepartmentActivities from "../../../Blueprints/DepartmentActivities";
import EnquiryModal from "../../../Blueprints/EnquiryModal";
import PlacementHighlights from "../../../Blueprints/PlacementHighlights";

export default function PoliticalScience() {
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
              B.A Political Science
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
              B.A Political Science – Overview
            </h2>

            <p className="text-base leading-relaxed text-gray-600">
              The Bachelor of Arts (BA) in Political Science is an undergraduate
              degree program that provides students with a comprehensive
              understanding of political systems, theories, and practices. This
              course offers an overview of domestic and international political
              issues, including governance, public policy, political ideologies,
              international relations, and comparative politics. Students will
              study topics such as political theory, political institutions,
              political behaviour, and political analysis.
            </p>
            <p className="text-base leading-relaxed text-gray-600">
              The program aims to develop critical thinking, research,
              analytical, and communication skills. Graduates with a BA in
              Political Science can pursue careers in government, non-profit
              organizations, international relations, policy analysis,
              journalism, law, or further their education in political science
              or related fields at the postgraduate level. This degree equips
              students with a strong foundation for understanding and engaging
              with the complex world of politics.
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
              <button
                onClick={() => navigate("/hod/arts")}
                className="border border-yellow-400 text-white font-semibold cursor-pointer px-6 py-2 rounded-md bg-[#0A2342] transition-all"
              >
                Hod Profile
              </button>
            </div>
          </div>

          {/* ✅ Right Image / Carousel */}
          <div className="relative md:w-1/2 flex justify-center items-center">
            <img
              src="/images/collegeArts/politicalsci.png"
              alt="AI & ML Engineering"
              className="rounded-2xl shadow-xl w-full h-[400px] object-contain transition-all duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* 🎓 B.Tech AI & ML Details Section */}
      <section className="bg-linear-to-b from-[#0A2342] via-[#0E2E5C] to-[#0A2342] py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {/* Career Prospective */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl shadow-lg p-8 hover:scale-[1.03] transition-transform duration-300">
            <h3 className="text-3xl font-bold mb-4 text-yellow-400">
              Career Prospective
            </h3>

            <ul className="list-disc list-inside text-sm leading-relaxed text-gray-100 space-y-2 mt-2">
              <li>
                Government: Opportunities in public administration, policy
                analysis, diplomacy, and political consulting.
              </li>
              <li>
                Law: Pursue a legal career, working as a lawyer, advocate, or
                legal researcher.
              </li>
              <li>
                International Relations: Work in global organizations, NGOs, or
                diplomatic services, dealing with international policies and
                relations.
              </li>
              <li>
                Journalism: Become a political journalist, news analyst, or
                political commentator.
              </li>
              <li>
                Research and Analysis: Conduct research in think tanks, research
                institutions, or academia.
              </li>
              <li>
                Campaign Management: Engage in political campaigns, managing
                strategies, communications, and grassroots mobilization.
              </li>
              <li>
                Public Relations: Handle public affairs, government relations,
                and strategic communications for organizations.
              </li>
              <li>
                Non-profit Sector: Work in advocacy organizations, non-profits,
                or social services, addressing political and social issues.
              </li>
            </ul>
          </div>

          {/* Eligibility */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 hover:scale-[1.03] transition-transform duration-300">
            <h3 className="text-3xl font-bold mb-4 text-[#0A2342]">
              Eligibility Criteria
            </h3>
            <p className="text-sm leading-relaxed text-gray-700">
              Eligibility criteria for a Bachelor of Arts (BA) in Political
              Science typically include a high school diploma or equivalent
              qualification, with no specific subject requirements.
            </p>

            <h3 className="text-3xl font-bold mb-4 text-[#0A2342]">Duration</h3>

            <ul className="list-decimal list-inside text-sm leading-relaxed text-gray-700 space-y-1">
              <li>
                <span className="font-semibold">Course:</span> Bachelor of Arts
                (Political Science)
              </li>
              <li>
                <span className="font-semibold">Course Duration:</span> 3 years
              </li>
              <li>
                <span className="font-semibold">Type of Course:</span> B.A.,
                Undergraduate Courses
              </li>
              <li>
                <span className="font-semibold">College/Faculty:</span>College
                of Arts
              </li>
              <li>
                <span className="font-semibold">Department:</span>Political
                Science
              </li>
            </ul>
          </div>

          {/* Admission Process */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 hover:scale-[1.03] transition-transform duration-300">
            <h3 className="text-3xl font-bold mb-4 text-[#0A2342]">
              Admission Process
            </h3>
            <p className="text-sm leading-relaxed text-gray-700">
              Applicants will have to go through the following process On the
              basis of performance in the online Multiple Choice Question (MCQ)
              test of 2 hours duration and personal interview
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

      <div>
        <DepartmentActivities
          title="Electrical Departmental Activities"
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
    </div>
  );
}
