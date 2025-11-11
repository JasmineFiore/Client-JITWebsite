import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EnquiryModal from "../../EnquiryModal";
import BpharmaPlacement from "./BpharmaPlacement";
import BphramCampusLife from "./BphramCampusLife";
import FacilitiesResearchSection from "./FacilitiesResearchSection";
import FAQSection from "./FAQSection";

export default function BPharma() {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* 🔹 Hero Section */}
      <section className="bg-[#0A2342] flex items-center justify-center px-10 py-7">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Left Text Section */}
          <div className="text-white md:w-1/2">
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              B.Pharm (Bachelor in Pharmacy)
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
              B.Pharm Program – Overview
            </h2>

            <p className="text-base leading-relaxed text-gray-600">
              JIT College of Pharmacy is established in the year 2019.
              Pharmaceutical Science is a rapidly growing field with new
              technology emerging day by day globally. There is an increasing
              demand for highly qualified and highly trained Pharmacists in
              Pharmaceutical Industry, Hospitals, Community Pharmacy and in
              various Health sectors.
            </p>
            <p className="text-base leading-relaxed text-gray-600">
              The College of Pharmacy offers Degree in Pharm.D (Dr. in
              Pharmacy), M.Pharm (in Pharmaceutical Chemistry, Pharmaceutics, &
              Pharmacology), B.Pharm (Bachelor in Pharmacy) and D.Pharm (Diploma
              in Pharmacy). JIT advanced labs, and forward-looking curriculum
              helps students to excel in their field of Pharmacy College of
              Pharmacy
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-yellow-300 text-black font-semibold cursor-pointer px-6 py-2 rounded-md shadow-lg hover:bg-yellow-400 transition-all"
              >
                Enquire Now
              </button>
              <a
                href="tel:7311194686"
                className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-md shadow-lg hover:bg-yellow-500 transition-all"
              >
                📞 Call US -7311194686
              </a>
              <button
                onClick={() => navigate("/faculties")}
                className="border border-yellow-400 text-white font-semibold cursor-pointer px-6 py-2 rounded-md bg-[#0A2342] transition-all"
              >
                Faculties
              </button>
            </div>
          </div>

          {/* ✅ Right Image / Carousel */}
          <div className="relative md:w-1/2 flex justify-center items-center">
            <img
              src="/images/pharmacy/courses/ph1.jpg"
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
              Curriculum Highlights
            </h3>
            <p className="text-sm leading-relaxed mb-4 text-gray-100">
              The B.Pharm curriculum at JIT is meticulously crafted to cover all
              pharmaceutical subjects, practical training, and medicinal
              research components. JIT’s B.Pharm course equips you with the
              knowledge and skills necessary to excel in all pharmaceutical
              related healthcare fields. At JIT, students learn to be experts of
              medicinal chemistry, pharmacology, pharmaceutics, pharma analysis,
              pharmacy practice, gaining hands-on experience through laboratory
              sessions, research and industry-oriented project. This B.Pharm
              program not only opens up various career opportunities but also
              enables you to contribute in well-being of society through the
              development and dispensation of safe and effective medications to
              the patients.
            </p>
            <h3 className="text-3xl font-bold mb-4 text-yellow-400">
              Course Structure
            </h3>
            <p className="text-sm leading-relaxed text-gray-100">
              The B.Pharm at JIT (Affiliated to AKTU) follows a structured
              curriculum that combines theoretical classes, laboratory hands-on
              training & research work. The course is divided into 8 semesters,
              spanning over 4 years. During these years, students are
              familiarized with pharmaceutical chemistry, pharmaceutics,
              pharmacology, pharmacognosy, and pharmacy practice and more.
            </p>
          </div>

          {/* Eligibility */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 hover:scale-[1.03] transition-transform duration-300">
            <h3 className="text-3xl font-bold mb-4 text-[#0A2342]">
              Eligibility for B.Pharm
            </h3>
            <div className="max-w-3xl mx-auto text-left space-y-3 text-lg">
              <p>
                <strong>Qualification:</strong> Students must have passed 10+2
                with Physics, Chemistry, and Biology or Mathematics.
              </p>
              <p>
                <strong>Minimum Marks:</strong> 45% for open category students
                and 40% for reserved category students.
              </p>
              <p>
                <strong>Course:</strong> B.Pharm (Bachelor of Pharmacy)
              </p>
              <p>
                <strong>Course Duration:</strong> 4 years
              </p>
              <p>
                <strong>Type of Course:</strong> Undergraduate Degree
              </p>
              <p>
                <strong>Intake:</strong> 100
              </p>
              <p>
                <strong>College:</strong> College of Pharmacy
              </p>
            </div>
          </div>

          {/* Admission Process */}
          <div className="bg-yellow-400 text-gray-900 rounded-2xl shadow-lg p-8 hover:scale-[1.03] transition-transform duration-300">
            <h3 className="text-3xl font-bold mb-6 text-center">
              B.Pharm Admission 2025
            </h3>

            <p className="text-lg text-center text-gray-900 mb-6">
              Admission to B.Pharm Degree is open at JIT. Admission is conducted
              through a transparent and merit-based selection process.
              Interested candidates must meet the eligibility as specified by
              AKTU and undergo to required entrance examinations.
            </p>
            <p className="text-lg text-center text-gray-900 mb-6">
              Call us for more details: +91 73111 94686, 73808 32222
            </p>
            <p className="text-lg text-center text-gray-900 mb-6">
              Apply now and secure your place in a leading B.Pharm colleges in
              Uttar Pradesh!
            </p>

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

          {/* Scholarship */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 hover:scale-[1.03] transition-transform duration-300 border border-gray-200">
            <h3 className="text-3xl font-bold mb-2 text-center text-[#0A2342]">
              B.Pharm Scholarship
            </h3>
            <p className="text-md text-center text-gray-600 mb-6">
              Fee Concession for Meritorious Students
            </p>
            <p className="text-md text-center text-gray-600 mb-6">
              JIT makes quality education accessible through scholarships and
              financial aid to deserving students based on academic merit,
              financial need, and other criteria. Students must have scored the
              required marks for scholarships. JIT aim is to support talented
              and motivated students in pursuing their educational dream.
            </p>
            <p className="text-md text-center text-gray-600 mb-6">
              Qualifying Percentage and Rebate in Tuition Fees Only
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
        </div>
      </section>

      {/* Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <BpharmaPlacement />
      <FacilitiesResearchSection />
      <BphramCampusLife />

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
              Don't miss out on this opportunity. Elevate your career with Us.
            </p>
            <p className="text-sm text-gray-200">
              For more information about the B.Pharm program at JIT, affiliated
              with AKTU, please contact our admissions office:
            </p>
            <p className="text-sm text-gray-200">
              Phone Number: +9173111 94686 , 73808 32222
            </p>
            <p className="text-sm text-gray-200">
              E-mail: admissions@jit.edu.in
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

      <FAQSection />
    </div>
  );
}
