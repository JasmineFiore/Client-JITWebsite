import { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../../../Blueprints/carousel";
import DepartmentActivities from "../../../Blueprints/DepartmentActivities";
import EnquiryModal from "../../../Blueprints/EnquiryModal";
import PrincipalModal from "../college-pharmacy/PrincipalModal";

export default function CollegeOfArts() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPrincipalModlOpen, setIsPrincipalModlOpen] = useState(false);

  const slides = [
    "/images/collegeArts/art1.jpeg",
    "/images/collegeArts/art2.jpeg",
    "/images/collegeArts/art3.jpg",
  ];

  const artsImages = [
    "/images/collegeArts/infra/infra1.jpg",
    "/images/collegeArts/infra/infra2.jpeg",
    "/images/collegeArts/infra/infra3.jpeg",
    "/images/collegeArts/infra/infra4.jpeg",
    "/images/collegeArts/infra/infra5.jpg",
    "/images/collegeArts/infra/infra6.jpg",
    "/images/collegeArts/infra/infra7.jpg",
    "/images/collegeArts/infra/infra8.jpg",
    "/images/collegeArts/infra/infra9.jpg",
    
  ];
  return (
    <div>
      {/* 🔹 Hero Section */}
      <section className="bg-[#0A2342] flex items-center justify-center px-10 py-16">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Text Section */}
          <div className="text-white md:w-1/2 space-y-6">
            <p className="uppercase tracking-widest text-sm font-semibold opacity-70">
              EXPLORE THE FEATURES
            </p>
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              College of Arts
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              This course offers a range of studies across the humanities,
              social science and language disciplines. There are various
              language subjects but in our institute there are 3 core language
              subjects (URDU, ENGLISH and HINDI) in which a candidate needs to
              choose only one and other subjects are HISTORY, POLITICAL SCIENCE,
              EDUCATION, SOCIOLOGY etc.
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
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 cursor-pointer font-semibold px-6 py-2 rounded shadow-lg transition"
              >
                Apply Now
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-semibold cursor-pointer px-6 py-2 rounded shadow-lg transition"
              >
                Admission Counseling
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/collegeArts/art-commerce.png"
              alt="College of business"
              className="h-[300px] md:h-[380px] w-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* 🔸 Info Section */}
      <section className="bg-white py-20 px-10 flex justify-center">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Left Text */}
          <div className="md:w-1/2 text-gray-700">
            <h2 className="text-4xl font-bold text-[#0A2342] mb-4 border-l-4 border-[#0A2342] pl-3">
              College of Arts
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              Jahangirabad Institute of Technology Group of Institutions has
              started Bachelor of Arts course since 2018 and we have a qualified
              Faculties in every discipline. It is affiliated to Dr. Ram Manohar
              Lohia Avadh University, Faizabad (Uttar Pradesh). Duration of the
              course is 3 years. Eligibility criteria are 10+2 in Arts, Science
              or Commerce.
            </p>
            <p className="text-base leading-relaxed text-gray-600 mt-4">
              This course offers a range of studies across the humanities,
              social science and language disciplines. There are various
              language subjects but in our institute there are 3 core language
              subjects (URDU, ENGLISH and HINDI) in which a candidate needs to
              choose only one and other subjects are HISTORY, POLITICAL SCIENCE,
              EDUCATION, SOCIOLOGY etc. The Bachelor of Commerce program
              prepares students for a career in accounting, banking, financial
              management, information systems and management. The B.Com
              programme is a three-year degree programme. Compulsory courses in
              the degree build a solid foundation of business skills that
              students will apply to many decisions and issues in the
              contemporary business environment.
            </p>
          </div>

          {/* ✅ Right Carousel Section */}
          <div className="relative w-full md:w-1/2 flex justify-center items-center px-4 py-16 md:px-0">
            <Carousel slides={slides} />
          </div>
        </div>
      </section>

      {/*  COURSES WE OFFER */}
      <section className="bg-[#0A2342] py-16 px-10 text-center">
        <h2 className="text-4xl font-bold text-white mb-12">
          COURSES WE OFFER
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Link
            to="/mba-it"
            className="group block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-all h-full"
          >
            <img
              src="/images/collegeArts/carts1.jpg"
              alt="MBA IT"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-lg">LLB</h3>
            </div>
          </Link>

          {/* Card 2 */}
          <Link
            to="/mba-it"
            className="group block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-all h-full"
          >
            <img
              src="/images/collegeArts/carts2.jpg"
              alt="MBA IB"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-lg">
                Political Science
              </h3>
            </div>
          </Link>

          {/* Card 3 */}
          <Link
            to="/mba-finance"
            className="group block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-all h-full"
          >
            <img
              src="/images/collegeArts/carts3.jpg"
              alt="MBA Finance"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-lg">Education</h3>
            </div>
          </Link>

          {/* Card 4 */}
          <Link
            to="/mba-marketing"
            className="group block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-all h-full"
          >
            <img
              src="/images/collegeArts/carts4.png"
              alt="MBA Marketing"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-lg">Sociology</h3>
            </div>
          </Link>

          {/* Card 5 */}
          <Link
            to="/mba-hr"
            className="group block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-all h-full"
          >
            <img
              src="/images/collegeArts/carts2.jpg"
              alt="MBA HR"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-lg">
                Ancient History
              </h3>
            </div>
          </Link>

          {/* Card 6 */}
          <Link
            to="/bcom"
            className="group block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-all h-full"
          >
            <img
              src="/images/collegeArts/carts1.jpg"
              alt="B.Com"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-lg">Hindi</h3>
            </div>
          </Link>

          {/* Card 7 */}
          <Link
            to="/bcom"
            className="group block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-all h-full"
          >
            <img
              src="/images/collegeArts/carts5.jpg"
              alt="B.Com"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-lg">English</h3>
            </div>
          </Link>

          {/* Card 6 */}
          <Link
            to="/bcom"
            className="group block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-all h-full"
          >
            <img
              src="/images/collegeArts/carts6.jpg"
              alt="B.Com"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-lg">Urdu</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* Modal */}
      <PrincipalModal
        isPrincipalModlOpen={isPrincipalModlOpen}
        setIsPrincipalModlOpen={setIsPrincipalModlOpen}
      />

      {/* Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <div>
        <DepartmentActivities title="INFRASTRUCTURE" images={artsImages} />
      </div>
    </div>
  );
}
