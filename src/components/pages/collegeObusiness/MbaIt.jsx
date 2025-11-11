import cseImage from "/images/cse.jpg";
import JItStudentjourney from "/images/JIt-Student-journey-1024x1024.jpg";
import ProgramObjectivesImg from "/images/ProgramObjectivesImg.jpg";
import ReasonsToJoinImg from "/images/ReasonsToJoinImg.jpg";
import AdilImg from "/images/AdilImg.jpg";
import DaniyalImg from "/images/DaniyalImg.jpg";
import RuokuImg from "/images/RuokuImg.jpg";
import SohibAnsariImg from "/images/SohibAnsariImg.jpg";
import EnquiryModal from "../../../Blueprints/EnquiryModal";
import { useState } from "react";

export default function MbaIt() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* 🔹 Hero Section */}
      <section className="bg-[#0A2342] flex items-center justify-center px-10 py-7">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Left Text Section */}
          <div className="text-white md:w-1/2">
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              Master of Business Information Technology
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
              JIT MBA Course Overview
            </h2>

            <p className="text-base leading-relaxed text-gray-600">
              Welcome to JIT College, your gateway to a transformative MBA
              experience that goes beyond the ordinary. As a premier MBA College
              in Lucknow affiliated with AKTU, we are committed to shaping the
              future of our students by providing a comprehensive MBA program.
              What sets us apart is our unwavering dedication to enhancing your
              employability.
            </p>

            <p className="text-base leading-relaxed text-gray-600">
              In addition to a wide array of regular MBA specializations, we
              take it a step further by offering cutting-edge certifications in
              data analytics and digital marketing, all included in your tuition
              with no extra or hidden cost. Our mission is clear: to equip you
              with the skills and knowledge that employers’ value most in
              today’s competitive job market.
            </p>

            <p className="text-base leading-relaxed text-gray-600">
              Enquire JIT College MBA Program today and embark on a
              transformative educational journey that sets you on the path to
              success.
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Duration: 2 Year Full-Time</li>
              <li>Recognition: Affiliated to AKTU (college code : 545)</li>
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
                className="border border-yellow-400 text-[#0A2342] font-semibold cursor-pointer px-6 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition-all"
              >
                Apply Now
              </button>
            </div>
          </div>

          {/* ✅ Right Image / Carousel */}
          <div className="relative md:w-1/2 flex justify-center items-center">
            <img
              src="/images/college business/MBA-600x600.jpg"
              alt="AI & ML Engineering"
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover transition-all duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* 🎓 B.Tech AI & ML Details Section */}
      <section className="bg-[#0A2342] py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Course Curriculum */}
          <div className="bg-yellow-400 text-gray-900 rounded-lg shadow-lg p-8 transition-all hover:scale-[1.02]">
            <h3 className="text-2xl font-bold mb-4">Course Curriculum</h3>
            <p className="text-sm leading-relaxed">
              Elevate your career with our flagship MBA in Lucknow Program,
              designed to propel your journey towards rapid career advancement.
              This program is meticulously structured to equip you with
              invaluable marketing, leadership, and strategic management skills.
              It offers a real-time understanding of the ever-evolving modern
              business landscape, ensuring you stay ahead of the curve.
            </p>
            {/* <ul className="list-disc list-inside space-y-3 text-sm leading-relaxed">
              <li>
                <strong>B.Tech First Year:</strong> Candidates who have passed
                Intermediate (10+2) with Physics & Mathematics along with
                Chemistry / Computer Science / Biology are eligible for
                admission to the first year of the 4-year B.Tech in CSE (AI &
                ML), affiliated to Dr. A.P.J. Abdul Kalam Technical University
                (AKTU), Lucknow.
              </li>
              <li>
                <strong>B.Tech Second Year (Lateral Entry):</strong> Candidates
                must have passed B.Sc. or a Three-Year Diploma (10+3) with 45%
                marks (40% for SC/ST) from a recognized board.
              </li>
            </ul> */}
          </div>

          {/* Course Curriculum */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8 transition-all hover:scale-[1.02]">
            <h3 className="text-2xl font-bold mb-4">Eligibility</h3>
            <p className="text-sm leading-relaxed">
              Eligibility for a Master of Business Administration (MBA)
              typically requires a bachelor’s degree in any field from an
              accredited institution.
            </p>
          </div>

          {/* Admission Process */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8 transition-all hover:scale-[1.02]">
            <h3 className="text-2xl font-bold mb-4">Admission Process</h3>
            <p className="text-sm leading-relaxed mb-4">
              Complete the Enquiry Form. Our Counsellors will guide you through
              admission and counselling process.
            </p>
            <p className="text-sm leading-relaxed mb-4">
              <strong>Course Fee: </strong>
              Rs. 62,500/ year (including all certifications – No Hidden Fee)
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#0A2342] text-white font-semibold cursor-pointer px-6 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition-all"
            >
              Enquire Now
            </button>
          </div>

          <div className="bg-yellow-400 text-gray-900 rounded-lg shadow-lg p-10 text-center">
            <h3 className="text-3xl font-bold mb-10">Download Syllabus</h3>

            <div className="flex justify-center gap-24">
              {/* 1st Year */}
              <a
                href="/syllabus/BPharm_1st_Year.pdf"
                download
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
                <span className="text-lg font-bold">1st Year</span>
              </a>

              {/* 2nd Year */}
              <a
                href="/syllabus/BPharm_2nd_Year.pdf"
                download
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

      {/* 🔸 Info Section - Improved Version */}
      <section className="bg-linear-to-r from-white to-gray-50 py-20 px-6 md:px-12 flex justify-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Left Text */}
          <div className="md:w-1/2 text-gray-700 space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-[#0A2342] border-l-4 border-[#0A2342] pl-3 leading-snug">
              STUDENT JOURNEY
            </h2>

            <p className="text-base leading-relaxed text-gray-600">
              Our fundamental CSE (AI & ML) program offers a comprehensive grasp
              of core computer science principles and intricacies in the context
              of Artificial Intelligence and Machine Learning. The educational
              prospects stemming from this program are limitless. You have the
              potential to sculpt your career trajectory in AI and ML-driven
              domains, including data analysis, machine learning engineering,
              natural language processing, computer vision, and more.
            </p>

            <p className="text-base leading-relaxed text-gray-600">
              With a huge explosion in data and its applications, a career in
              the field of AI&ML can be very promising as Big Data Engineer,
              Business Intelligence Developer, Data Scientist, Machine Learning
              Engineer, Research Scientist, AI Data Analyst, AI Engineer,
              Robotics Scientist, etc.
            </p>

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
                className="border border-yellow-400 text-[#0A2342] font-semibold cursor-pointer px-6 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition-all"
              >
                Apply Now
              </button>
            </div>
          </div>

          {/* Modal */}
          <EnquiryModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />

          {/* ✅ Right Image */}
          <div className="relative w-full md:w-1/2 flex justify-center items-center">
            <img
              src={JItStudentjourney}
              alt="AI & ML Engineering"
              className="rounded-2xl shadow-xl object-contain w-[80%] max-h-[350px] transition-all duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <div className="pt-28 px-6 md:px-12 text-gray-800 mb-4">
        {/* ===== Hero Heading ===== */}
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-10">
          B.Tech Computer Science Engineering
        </h1>

        {/* ===== Core Courses Section ===== */}
        <section id="core-courses" className="mb-16">
          <h2 className="text-2xl font-bold text-[#0A2342] mb-6">
            CORE COURSES
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <ul className="space-y-2">
              <li>KCS301: Data Structure</li>
              <li>KCS302: Computer Organization and Architecture</li>
              <li>KCS303: Discrete Structures & Theory of Logic</li>
              <li>KNC301: Computer System Security</li>
              <li>KNC302: Python Programming</li>
              <li>KCS401: Operating Systems</li>
            </ul>
            <ul className="space-y-2">
              <li>KCS402: Theory of Automata and Formal Languages</li>
              <li>KCS403: Microprocessor</li>
              <li>KCS501D: Database Management System</li>
              <li>KAI501: Artificial Intelligence</li>
              <li>KCS503: Design and Analysis of Algorithm</li>
              <li>KAI601: Machine Learning Techniques</li>
            </ul>
            <ul className="space-y-2">
              <li>KCS602: Web Technology</li>
              <li>KCS603: Computer Networks</li>
            </ul>
          </div>
        </section>

        {/* ===== Elective Courses Section ===== */}
        <section id="elective-courses" className="mb-16">
          <h2 className="text-2xl font-bold text-[#0A2342] mb-6">
            ELECTIVE COURSES
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Departmental Elective I
              </h3>
              <ul className="space-y-2">
                <li>KAI051: Mathematical Foundation AI, ML and Data Science</li>
                <li>KCS052: Web Designing</li>
                <li>KDS051: Business Intelligence and Analytics</li>
                <li>KCS054: Object Oriented System Design</li>
                <li>KDS052: Distributed System</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Departmental Elective II
              </h3>
              <ul className="space-y-2">
                <li>KML051: Cloud Computing</li>
                <li>KAI052: Natural Language Processing</li>
                <li>KCS056: Application of Soft Computing</li>
                <li>KAI053: Intelligent Database System</li>
                <li>KCS502: Compiler Design</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Departmental Elective III
              </h3>
              <ul className="space-y-2">
                <li>KAI061: Cyber Forensic Analytics</li>
                <li>KDS061: Image Analytics</li>
                <li>KML061: Advanced Machine Learning</li>
                <li>KML062: Stream Processing and Analytics</li>
                <li>KDS063: Software Engineering</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== Workshops & Live Training Section ===== */}
        <section
          id="workshops"
          className="bg-yellow-400 p-8 rounded-xl text-[#0A2342]"
        >
          <h2 className="text-2xl font-bold mb-4">
            WORKSHOPS & LIVE TRAINING:
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Reasoning and aptitude training</li>
            <li>Verbal Ability</li>
            <li>Logical Ability</li>
            <li>
              Students Exchange program from Manado State University in JIT
              providing online workshops and training program in data mining and
              Python programming.
            </li>
          </ol>
        </section>
      </div>

      <section
        id="program-objectives"
        className="relative overflow-hidden bg-gradient-to-r from-white to-gray-50 py-20 px-4 md:px-8 flex flex-col items-center"
      >
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-start justify-between gap-12">
          {/* ✅ Left: Text Content */}
          <div className="md:w-1/2 text-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] mb-6 leading-snug">
              JIT B.Tech CSE (AI & ML) <br />
              <span className="text-yellow-500">
                Program Educational Objectives
              </span>
            </h2>

            <p className="text-base leading-relaxed mb-6 text-gray-600">
              Upon completing our Computer Science Engineering program with a
              specialization in Artificial Intelligence (AI) and Machine
              Learning (ML), students will be equipped to:
            </p>

            <ul className="space-y-4 text-gray-700 text-sm md:text-base list-disc pl-6">
              <li>
                Attain leadership roles within organizations, leveraging
                technical expertise in AI and ML to manage complex projects and
                teams effectively.
              </li>
              <li>
                Innovate and develop sustainable AI and ML solutions to address
                technological challenges and contribute to advancing these
                cutting-edge fields.
              </li>
              <li>
                Demonstrate emotional intelligence and teamwork when
                collaborating across diverse, cross-cultural AI & ML projects.
              </li>
              <li>
                Commit to lifelong learning, adapting to the evolving world of
                AI, ML, and emerging technologies.
              </li>
              <li>
                Foster an entrepreneurial mindset to identify and capitalize on
                opportunities in AI and ML industries.
              </li>
              <li>
                Apply AI and ML technology creatively to address real-world
                problems and drive innovation across industries.
              </li>
            </ul>
          </div>

          {/* ✅ Right: Illustration */}
          <div className="md:w-1/2 flex justify-center relative">
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-yellow-200 opacity-40 rounded-full blur-3xl"></div>
            <img
              src={ProgramObjectivesImg}
              alt="Program Objectives Illustration"
              className="relative z-10 rounded-xl shadow-2xl w-full max-w-md object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* ✅ Reasons to Join Section */}
        <div className="mt-20 text-center relative w-full">
          <h3 className="text-2xl md:text-3xl font-bold text-[#0A2342] mb-8">
            Why Join JIT AI & ML?
          </h3>
          <img
            src={ReasonsToJoinImg}
            alt="Reasons to Join JIT"
            className="mx-auto w-[90%] md:w-[55%] max-w-4xl object-contain rounded-xl shadow-lg"
          />
        </div>
      </section>

      <section
        id="placement-highlights"
        className="bg-yellow-400 py-10 px-6 md:px-12 flex flex-col items-center"
      >
        <div className="max-w-7xl w-full text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2342] mb-10">
            Placement Highlights
          </h2>

          {/* ✅ Placement Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-gray-300 rounded-md shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src={SohibAnsariImg}
                alt="Mohd. Sohib Ansari"
                className="w-full h-64 object-contain bg-white p-2"
              />
              <div className="p-3 text-left">
                <h3 className="font-semibold text-gray-800 text-sm">
                  Mohd. Sohib Ansari
                </h3>
                <p className="text-xs text-gray-600">
                  MS in Youngstown University, Ohio, USA
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-300 rounded-md shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src={RuokuImg}
                alt="Ms Ruokuokhrienuo Soupfunuo"
                className="w-full h-64 object-contain bg-white p-2"
              />
              <div className="p-3 text-left">
                <h3 className="font-semibold text-gray-800 text-sm">
                  Ms Ruokuokhrienuo Soupfunuo
                </h3>
                <p className="text-xs text-gray-600">Pie Infocom (4.5 lpa)</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-300 rounded-md shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src={DaniyalImg}
                alt="Daniyal Khan"
                className="w-full h-64 object-contain bg-white p-2"
              />
              <div className="p-3 text-left">
                <h3 className="font-semibold text-gray-800 text-sm">
                  Daniyal Khan
                </h3>
                <p className="text-xs text-gray-600">
                  MS in Youngstown University, Ohio, USA
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-gray-300 rounded-md shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src={AdilImg}
                alt="Adil Hussain"
                className="w-full h-64 object-contain bg-white p-2"
              />
              <div className="p-3 text-left">
                <h3 className="font-semibold text-gray-800 text-sm">
                  Adil Hussain
                </h3>
                <p className="text-xs text-gray-600">
                  MS in TAIPEI University of Technology, Taiwan
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
