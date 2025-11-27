import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DepartmentActivities from "../../../Blueprints/DepartmentActivities";
import EnquiryModal from "../../../Blueprints/EnquiryModal";
import PlacementHighlights from "../../../Blueprints/PlacementHighlights";

export default function Education() {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const eduImages = [
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
              Bachelor of Arts (Education)
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
              A Bachelor of Arts (BA) in Education is an undergraduate degree
              program that focuses on preparing students to become teachers or
              education professionals. The program typically covers a broad
              range of subjects such as educational psychology, curriculum
              development, teaching methodologies, educational technology, and
              classroom management. Students will learn to design and implement
              lesson plans, evaluate student progress, and effectively
              communicate with students, parents, and other educators.
            </p>
            <p className="text-base leading-relaxed text-gray-600">
              The program may also include a practical or student teaching
              experience in a real classroom setting. Graduates of a BA in
              Education program may find employment in primary or secondary
              schools, as well as in educational administration or policymaking
              roles. Additionally, they may choose to pursue further education
              or certification in a specialized area of teaching, such as
              special education or English as a second language (ESL)
              instruction.
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

          {/* ✅ Right Image / Carousel */}
          <div className="relative md:w-1/2 flex justify-center items-center">
            <img
              src="/images/collegeArts/eduction.jpg"
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
            <p className="text-sm leading-relaxed text-gray-100">
              Here are some potential career prospects for graduates with a
              Bachelor of Arts in Education:
            </p>

            <ul className="list-disc list-inside text-sm leading-relaxed text-gray-100 space-y-2 mt-2">
              <li>Primary or secondary school teacher</li>
              <li>Curriculum developer or instructional designer</li>
              <li>Educational researcher or consultant</li>
              <li>Education policy analyst or advocate</li>
              <li> Educational program coordinator or administrator </li>
              <li>
                Learning and development specialist for organizations or
                corporations
              </li>
              <li>
                Educational writer or editor for textbooks, educational
                materials, or online resources
              </li>
              <li> Youth development specialist or counsellor</li>
              <li>Social service worker or community educator </li>
              <li>
                Graduate studies in education, including programs leading to
                teaching certification or a master’s degree in education or
                related fields.
              </li>
              <p className="text-sm leading-relaxed text-gray-100">
                Overall, a degree in education can lead to a variety of
                fulfilling and impactful careers in the education and social
                service sectors, as well as provide a solid foundation for
                further education and specialization in the field. Graduates
                with a Bachelor of Arts in Education can work with learners of
                all ages and backgrounds, helping to shape and improve
                educational systems and practices.
              </p>
            </ul>
          </div>

          {/* Eligibility */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 hover:scale-[1.03] transition-transform duration-300">
            <h3 className="text-3xl font-bold mb-4 text-[#0A2342]">
              Eligibility Criteria
            </h3>
            <p className="text-sm leading-relaxed text-gray-700">
              The eligibility criteria for a Bachelor of Arts (BA) in Education
              varies depending on the institution, but typically requires a high
              school diploma or equivalent.
            </p>

            <h3 className="text-3xl font-bold mb-4 text-[#0A2342]">Duration</h3>
            <p className="text-sm leading-relaxed text-gray-700">
              The duration of a Bachelor of Arts (BA) in Education is typically
              three years, although this may vary depending on the institution
              and country where the degree is being pursued.
            </p>
            <ul className="list-decimal list-inside text-sm leading-relaxed text-gray-700 space-y-1">
              <li>
                <span className="font-semibold">Regular:</span> 3 years
              </li>
              <li>
                <span className="font-semibold">Course:</span> Bachelor of Arts
                (Education)
              </li>
              <li>
                <span className="font-semibold">Type of Course:</span> Under
                Graduate Courses
              </li>
              <li>
                <span className="font-semibold">College/Faculty:</span>College
                of Arts
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
          title="Departmental Activities"
          images={eduImages}
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
