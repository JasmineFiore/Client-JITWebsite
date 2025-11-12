import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DepartmentActivities from "../../../Blueprints/DepartmentActivities";
import EnquiryModal from "../../../Blueprints/EnquiryModal";
import eceImage from "/images/ece.jpg";
import eeImage from "/images/ee.jpg";
import Carousel from "../../../Blueprints/carousel";
import PrincipalModal from "../college-pharmacy/PrincipalModal";

export default function CollegeOBusiness() {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPrincipalModlOpen, setIsPrincipalModlOpen] = useState(false);

  const slides = [
    "/images/university06.png",
    "/images/pharmacy/ph3.jpeg",
    "/images/JIT.jpeg",
    "/images/pharmacy/ph4.jpeg",
  ];

  const cseImages = [
    "/images/deparmental-activites/infra2.jpg",
    "/images/deparmental-activites/cse2.jpg",
    "/images/deparmental-activites/infra5.jpg",
    "/images/deparmental-activites/infra6.jpg",
    "/images/deparmental-activites/dep1.jpg",
    "/images/deparmental-activites/infra3.jpg",
  ];
  return (
    <div>
      {/* 🔹 Hero Section */}
      <section className="bg-[#0A2342] flex items-center justify-center px-10 py-16">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Text Section */}
          <div className="text-white md:w-1/2 space-y-6">
            <p className="uppercase tracking-widest text-sm font-semibold opacity-70">
              Explore the Opportunities
            </p>
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              College of Business & Commerce
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Postgraduate courses are advanced academic programs that students
              can pursue after completing a bachelor’s degree. These courses
              typically focus on a specific area of study, allowing students to
              develop specialized knowledge and skills in their chosen field.
              Examples include master’s degrees, PhDs, and professional degrees
              in fields such as business, law, medicine, and engineering.
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
              src="/images/college business/collegeofbusiness.jpg"
              alt="College of business"
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
            <h2 className="text-4xl font-bold text-[#0A2342] mb-4 border-l-4 border-[#0A2342] pl-3">
              College of Business & Commerce
            </h2>
            <p className="text-sm leading-relaxed text-gray-600">
              Postgraduate courses are advanced academic programs designed for
              students who have completed their undergraduate studies and wish
              to further their education in a particular field. These courses
              typically take one to two years to complete and can lead to a
              Master's degree or a Postgraduate Diploma. There are various
              postgraduate courses available in different fields, including
              business, engineering, science, arts, and humanities. Some
              examples of postgraduate courses include:
            </p>
            <p className="text-sm leading-relaxed text-gray-600 mt-4">
              Postgraduate courses are advanced academic programs designed for
              students who have completed their undergraduate studies and wish
              to further their education in a particular field. These courses
              typically take one to two years to complete and can lead to a
              Master's degree or a Postgraduate Diploma. There are various
              postgraduate courses available in different fields, including
              business, engineering, science, arts, and humanities. Some
              examples of postgraduate courses include: Master of Business
              Administration (MBA): This course focuses on developing skills in
              management and leadership, and prepares graduates for high-level
              positions in business. Postgraduate Diploma: This course is a
              shorter version of a Master's degree, typically taking less time
              to complete and providing more focused knowledge in a particular
              field. Postgraduate courses offer a range of benefits to students,
              including the opportunity to specialize in a specific field,
              enhance their skills and knowledge, and improve their
              employability. Additionally, postgraduate courses often provide
              access to advanced research facilities, and opportunities to
              collaborate with leading experts in the field, paving the way for
              a successful and rewarding career.
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
              src="/images/college business/MBA-600x600.jpg"
              alt="MBA IT"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-lg">MBA IT</h3>
            </div>
          </Link>

          {/* Card 2 */}
          <Link
            to="/mba-it"
            className="group block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-all h-full"
          >
            <img
              src="/images/college business/mbafinan.jpg"
              alt="MBA IB"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-lg">MBA IB</h3>
            </div>
          </Link>

          {/* Card 3 */}
          <Link
            to="/mba-finance"
            className="group block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-all h-full"
          >
            <img
              src="/images/college business/mbamarketing.jpg"
              alt="MBA Finance"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-lg">
                MBA Finance
              </h3>
            </div>
          </Link>

          {/* Card 4 */}
          <Link
            to="/mba-marketing"
            className="group block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-all h-full"
          >
            <img
              src="/images/college business/mbamarketing.jpg"
              alt="MBA Marketing"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-lg">
                MBA Marketing
              </h3>
            </div>
          </Link>

          {/* Card 5 */}
          <Link
            to="/mba-hr"
            className="group block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-all h-full"
          >
            <img
              src="/images/college business/mbahr.jpg"
              alt="MBA HR"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-lg">MBA HR</h3>
            </div>
          </Link>

          {/* Card 6 */}
          <Link
            to="/bcom"
            className="group block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-all h-full"
          >
            <img
              src="/images/college business/bcom2.jpg"
              alt="B.Com"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-lg">B.Com</h3>
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
        <DepartmentActivities title="INFRASTRUCTURE" images={cseImages} />
      </div>
    </div>
  );
}
