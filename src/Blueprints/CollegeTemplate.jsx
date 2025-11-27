import { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "./carousel";
import DepartmentActivities from "./DepartmentActivities";
import EnquiryModal from "./EnquiryModal";
import PrincipalModal from "../components/pages/college-pharmacy/PrincipalModal";

export default function CollegeTemplate({
  title,
  heroImage,
  heroDescription,
  applyNowLink,
  slides = [],
  aboutHeading,
  aboutParagraphs = [],
  courses = [],
  infraImages = [],
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPrincipalModlOpen, setIsPrincipalModlOpen] = useState(false);

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
              {title}
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {heroDescription}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              {/* <button
                onClick={() => window.open(applyNowLink, "_blank")}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 cursor-pointer font-semibold px-6 py-2 rounded shadow-lg transition"
              >
                Apply Now
              </button> */}
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
              src={heroImage}
              alt={title}
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
              {aboutHeading}
            </h2>
            {aboutParagraphs.map((para, i) => (
              <p
                key={i}
                className={`text-base leading-relaxed text-gray-600 ${
                  i > 0 ? "mt-4" : ""
                }`}
              >
                {para}
              </p>
            ))}
          </div>

          {/* ✅ Right Carousel Section */}
          <div className="relative w-full md:w-1/2 flex justify-center items-center px-4 py-16 md:px-0">
            <Carousel slides={slides} />
          </div>
        </div>
      </section>

      {/* 🎓 Courses Section */}
      <section className="bg-[#0A2342] py-16 px-10 text-center">
        <h2 className="text-4xl font-bold text-white mb-12">
          COURSES WE OFFER
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 place-items-center">
          {courses.map((course, index) => (
            <Link
              key={index}
              to={course.path}
              className="group block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-all h-full"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-72 h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-lg">
                  {course.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 🧑‍🏫 Modals */}
      <PrincipalModal
        isPrincipalModlOpen={isPrincipalModlOpen}
        setIsPrincipalModlOpen={setIsPrincipalModlOpen}
      />
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* 🏫 Infrastructure */}
      {infraImages.length > 0 && (
        <DepartmentActivities title="INFRASTRUCTURE" images={infraImages} />
      )}
    </div>
  );
}
