import { useState } from "react";
import { Link } from "react-router-dom";
import DepartmentActivities from "../../../Blueprints/DepartmentActivities";
import EnquiryModal from "../../../Blueprints/EnquiryModal";
import studentsImage2 from "/images/JIT.jpeg";
import studentsImage1 from "/images/JIT3.jpeg";
import studentsImage4 from "/images/JIT9.jpeg";
import aiImage from "/images/ai-ml.jpg";
import civilImage from "/images/civil.jpg";
import stemImage from "/images/college-of-engineering-fron.png";
import cseImage from "/images/cse.jpg";
import eceImage from "/images/ece.jpg";
import eeImage from "/images/ee.jpg";
import mechImage from "/images/mechanical.jpg";
import studentsImage3 from "/images/university06.png";
import Carousel from "../../../Blueprints/carousel";

export default function BtechCollege() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const slides = [
    studentsImage1,
    studentsImage2,
    studentsImage3,
    studentsImage4,
  ];

  const cseImages = [
    "/images/deparmental-activites/cse4.jpg",
    "/images/deparmental-activites/infra1.jpg",
    "/images/deparmental-activites/cse3.jpg",
    "/images/deparmental-activites/cse2.jpg",
    "/images/deparmental-activites/cse1.jpg",
    "/images/deparmental-activites/dep1.jpg",
    "/images/deparmental-activites/infra2.jpg",
    "/images/deparmental-activites/infra3.jpg",
    "/images/deparmental-activites/infra4.jpg",
    "/images/deparmental-activites/infra5.jpg",
    "/images/deparmental-activites/infra6.jpg",
    "/images/deparmental-activites/dep2.jpg",
  ];
  return (
    <div>
      {/* 🔹 Hero Section */}
      <section className="bg-[#0A2342] flex items-center justify-center px-10 py-20">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Text Section */}
          <div className="text-white md:w-1/2">
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              College of Engineering
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              The College of Engineering offers B.Tech and Diploma programs in
              Engineering fields such as Computer, AI & Machine Learning, Civil,
              Mechanical, Electrical, and Electronic & Communication
              Engineering. JIT provides students with the knowledge and skills
              necessary to design, develop & innovate real-world solutions and
              prepare them for successful careers in engineering.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() =>
                  window.open(
                    "https://jit-cet.uc-school.com/site/mobile-registration",
                    "_blank"
                  )
                }
                className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-md shadow-lg hover:bg-yellow-500 transition-all"
              >
                Apply
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="border border-yellow-400 text-white font-semibold px-6 py-2 rounded-md hover:bg-yellow-400 hover:text-black cursor-pointer transition-all"
              >
                Admission Counseling
              </button>
              <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-md shadow-lg hover:bg-yellow-500 transition-all">
                Principal
              </button>
              <button className="border border-yellow-400 text-white font-semibold px-6 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition-all">
                Faculties
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={stemImage}
              alt="STEM Illustration"
              className="w-[500px] md:w-[600px] drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* 🔸 Info Section */}
      <section className="bg-white py-20 px-10 flex justify-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Left Text */}
          <div className="md:w-1/2 text-gray-700">
            <h2 className="text-3xl font-bold text-[#0A2342] mb-4 border-l-4 border-[#0A2342] pl-3">
              College of Engineering
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              B.Tech is regarded as the most preferred course choice among
              science stream students. JIT’s engineering department serves in
              the field of technical education as one of the best B.Tech
              colleges in Meerut region. Engineering is an ultimate field for
              research and innovation and is certainly popular among students.
            </p>
            <p className="text-base leading-relaxed text-gray-600 mt-4">
              The college aims at making engineering students industry-ready
              professionals so that they can be absorbed by top organizations in
              their respective domains. With qualified faculties and
              well-equipped labs, JIT provides forward-looking education and
              personality development opportunities.
            </p>
            <p className="text-base leading-relaxed text-gray-600 mt-4">
              JIT, in general, has five departments in B.Tech such as
              Mechanical, Electrical, Electronics and Communication, Computer
              Science and Civil which are considered as the backbone of
              engineering. JIT also provides extra curriculum activities so that
              overall development for the students can take place.
            </p>
          </div>

          {/* ✅ Right Carousel Section */}
          <div className="relative md:w-1/2 flex justify-center items-center">
            <Carousel slides={slides} />
          </div>
        </div>
      </section>
      {/* 🎓 Degree in Engineering Section */}
      <section className="bg-[#0A2342] py-20 px-10 text-center">
        <h2 className="text-4xl font-bold text-white mb-12">
          Degree in Engineering — JIT Offers
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Card 1 */}
          <Link
            to="/btech-aiml"
            className="group block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-all"
          >
            <img
              src={aiImage}
              alt="AI & ML"
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-lg">
                Artificial Intelligence & Machine Learning
              </h3>
              <p className="text-sm text-gray-600 mt-1">(B.Tech AI & ML)</p>
            </div>
          </Link>

          {/* Card 2 */}
          <Link
            to="/btech-mechanical"
            className="group block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-all"
          >
            <img
              src={mechImage}
              alt="Mechanical Engineering"
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-lg">
                Mechanical Engineering
              </h3>
              <p className="text-sm text-gray-600 mt-1">(B.Tech M.E)</p>
            </div>
          </Link>

          {/* Card 3 */}
          <Link
            to="/btech-ece"
            className="group block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-all"
          >
            <img
              src={eceImage}
              alt="Electronics and Communication"
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-lg">
                Electronics & Communication Engineering
              </h3>
              <p className="text-sm text-gray-600 mt-1">(B.Tech ECE)</p>
            </div>
          </Link>

          {/* Card 4 */}
          <Link
            to="/btech-ee"
            className="group block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-all"
          >
            <img
              src={eeImage}
              alt="Electrical Engineering"
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-lg">
                Electrical Engineering
              </h3>
              <p className="text-sm text-gray-600 mt-1">(B.Tech E.E)</p>
            </div>
          </Link>

          {/* Card 5 */}
          <Link
            to="/btech-cse"
            className="group block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-all"
          >
            <img
              src={cseImage}
              alt="Computer Science Engineering"
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-lg">
                Computer Science & Engineering
              </h3>
              <p className="text-sm text-gray-600 mt-1">(B.Tech C.S.E)</p>
            </div>
          </Link>
          {/* Card 5 */}
          <Link
            to="/btech-civil"
            className="group block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-all"
          >
            <img
              src={civilImage}
              alt="Computer Science Engineering"
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-lg">
                Civil Engineering
              </h3>
              <p className="text-sm text-gray-600 mt-1">(B.Tech C.E)</p>
            </div>
          </Link>
        </div>
      </section>
      <section className="bg-[#0A2342] py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Admission Process */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-8 transition-all hover:scale-[1.02]">
            <h3 className="text-2xl font-bold mb-4">Admission Process</h3>
            <p className="text-sm leading-relaxed mb-4">
              JIT intake students by:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-sm mb-3 leading-relaxed">
              <li>
                Counselling through <strong>AKTU</strong>
              </li>
              <li>Direct admission through campus (as per AKTU norms)</li>
            </ol>
            <p className="text-md leading-relaxed mb-4">
              <strong>Course Fee:</strong>
            </p>
            <ol className="list-decimal list-inside space-y-3 text-sm mb-3 leading-relaxed">
              <li>B.Tech. 1st year Tuition fee – Rs. 55,000.</li>
              <li>B.Tech. 2nd year (Lateral entry) Tuition fee – Rs 55,000.</li>
              <li> Diploma Engineering Tuition fee – Rs. 30,150.</li>
            </ol>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#0A2342] text-white font-semibold cursor-pointer px-6 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition-all"
            >
              Enquire Now
            </button>
          </div>

          {/* Eligibility */}
          <div className="bg-yellow-400 text-gray-900 rounded-lg shadow-lg p-8 transition-all hover:scale-[1.02]">
            <h3 className="text-2xl font-bold mb-4">Eligibility</h3>
            <ul className="list-disc list-inside space-y-3 text-sm leading-relaxed">
              <li>
                <strong>B.Tech First Year:</strong> Candidates who have passed
                Intermediate of U.P. Board or (10+2) standard from other board
                with Physics and Math along with any one of
                Chemistry/Bio-Technology/Computer Science/Biology are eligible
                to first year of 4 year B.Tech.
              </li>
              <li>
                <strong>B.Tech Second Year (Lateral Entry):</strong> Candidates
                must have passed B.Sc. or Three Year Diploma (10+3) with 45%
                (40% for SC/ST) from a recognized board.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* 🎓 Degree in Engineering Section */}
      <section className="bg-[#aaae7f] py-20 px-10 text-center">
        <h2 className="text-4xl font-bold text-[#143109] mb-12">
          Diploma in Engg. JIT offers
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Card 1 */}
          <Link
            to="/diploma-civil"
            className="group block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-all"
          >
            <img
              src="/images/diploma/civildiploma.jpg"
              alt="Computer Science Engineering"
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-lg">
                Diploma in Civil Engineering
              </h3>
            </div>
          </Link>

          {/* Card 2 */}
          <Link
            to="/diploma-cse"
            className="group block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-all"
          >
            <img
              src="/images/diploma/csediploma.jpg"
              alt="Computer Science Engineering"
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-lg">
                Diploma in Computer Science & Engineering
              </h3>
            </div>
          </Link>

          {/* Card 3 */}
          <Link
            to="/diploma-ee"
            className="group block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-all"
          >
            <img
              src={eceImage}
              alt="Electrical Engineering"
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-lg">
                Diploma in Electrical Engineering
              </h3>
            </div>
          </Link>

          {/* Card 4 */}
          <Link
            // to="/btech-ece"
            className="group block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-all"
          >
            <img
              src={eeImage}
              alt="Electronics and Communication"
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-lg">
                Diploma in Electronics & Communication Engineering
              </h3>
            </div>
          </Link>

          {/* Card 5 */}
          <Link
            to="/diploma-mechanical"
            className="group block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-all"
          >
            <img
              src="/images/Mechanical-engineering.jpg"
              alt="Mechanical Engineering"
              className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-lg">
                Diploma in Mechanical Engineering
              </h3>
            </div>
          </Link>
        </div>
      </section>

      <section className="bg-[#aaae7f] py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Admission Process */}
          <div className="bg-white text-[#143109] rounded-lg shadow-lg p-8 transition-all hover:scale-[1.02]">
            <h3 className="text-2xl font-bold mb-4">Admission Process</h3>
            <p className="text-sm leading-relaxed mb-4">
              Applicants will have to go on online Multiple Choice Question
              (MCQ) test of 2 hours duration and personal interview.
            </p>

            <p className="text-md leading-relaxed mb-4">
              <strong>Course Fee:</strong>
            </p>
            <p className="text-sm leading-relaxed mb-4">
              For Diploma 1st year tuition fees is Rs. 31,500*(Thirty one
              thousand five hundred)
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#143109] text-white font-semibold cursor-pointer px-6 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition-all"
            >
              Enquire Now
            </button>
          </div>

          {/* Eligibility */}
          <div className="bg-yellow-400 text-gray-900 rounded-lg shadow-lg p-8 transition-all hover:scale-[1.02]">
            <h3 className="text-2xl font-bold mb-4">Eligibility</h3>
            <ul className="list-disc list-inside space-y-3 text-sm leading-relaxed">
              <li>
                Eligibility for a diploma in civil engineering typically
                requires a high school diploma or equivalent. Some programs may
                require specific coursework in maths or science.
              </li>
              <li>
                Additionally, students may need to meet minimum GPA requirements
                and/or take placement exams to demonstrate their readiness for
                college-level coursework.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div>
        <DepartmentActivities title="INFRASTRUCTURE" images={cseImages} />
      </div>
    </div>
  );
}
