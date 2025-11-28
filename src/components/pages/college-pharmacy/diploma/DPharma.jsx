import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EnquiryModal from "../../../../Blueprints/EnquiryModal";

export default function DPharma() {
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
      name: "Khushnuma Bano",
      jobprofile: "Sales Promoter in Himalaya Wellness company",
      // company: "Dhoot Transmissions Private limited)",
      img: "/images/our-achiever/ach21.jpg",
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
              D.Pharma
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
              D.Pharma (Diploma in Pharmacy)
            </h2>

            <p className="text-base leading-relaxed text-gray-600">
              Diploma in Pharmacy is 2 years course to produce pharmacists who
              are to play a basic role in healthcare system of India especially
              in community pharmacy, hospitals pharmacy and nursing home
              pharmacy. The program covers primary pharmaceutical education
              including Pharmaceutics, Biochemistry, Pharmacology and
              Toxicology, Pharmacognosy along with their application in the
              healthcare Industry including hospital training. The value-added
              training and courses offered at JIT enhance students abilities to
              take-up professional responsibilities in pharmaceuticals related
              health sectors.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-yellow-300 text-black font-semibold cursor-pointer px-6 py-2 rounded-md shadow-lg hover:bg-yellow-400 transition-all"
              >
                Enquire Now
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
          <div className="bg-[#f4b942] text-black rounded-xl shadow-md hover:scale-[1.03] transition-transform duration-300 p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Career Prospective
            </h2>
            <p className="font-medium text-center mb-6">
              Various job opportunities may get available for Diploma holder in
              Pharmacy.
            </p>

            <ol className="list-decimal list-inside space-y-2 font-medium">
              <li>
                Pharmacists in drug stores, Government & private hospitals,
                clinics, community health centers.
              </li>
              <li>
                Retail Pharmacist in various government departments like
                Defense, Railways etc
              </li>
              <li>Start a retail drug store. &amp; Manufacturing</li>
              <li>
                Pharmaceutical companies for manufacturing, process control,
                quality control, quality assurance &amp; marketing.
              </li>
              <li>Medical representative.</li>
              <li>Higher studies (B.Pharm)</li>
            </ol>
          </div>

          {/* Eligibility */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-8 hover:scale-[1.03] transition-transform duration-300">
            <h3 className="text-3xl font-bold mb-4 text-[#0A2342]">
              Eligibility
            </h3>
            <div className="max-w-3xl mx-auto text-left space-y-3 text-lg">
              <p>
                Diploma in Pharmacy typically requires a high school diploma in
                science subjects such as Physics, Chemistry, and Biology.
                Students may also require to pass an entrance exam.
              </p>
              <p>
                <strong>Course:</strong> Diploma in Pharmacy (D.Pharm )
              </p>
              <p>
                <strong>Course Duration:</strong> 2 years
              </p>
              <p>
                <strong>Type of Course:</strong> Diploma
              </p>

              <p>
                <strong>College/Faculty:</strong> College of Pharmacy
              </p>
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

          {/* Admission Process */}
          <div className="bg-yellow-400 text-gray-900 rounded-2xl shadow-lg p-8 hover:scale-[1.03] transition-transform duration-300">
            <h3 className="text-3xl font-bold mb-6 text-center">
              D.Pharm Admission 2025
            </h3>

            <p className="text-lg text-center text-gray-900 mb-6">
              Applicants will have to go on online Multiple Choice Question
              (MCQ) test of 2 hours duration and personal interview
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

      {/* Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* ✅ Our Achievers */}

      <section
        id="placement-highlights"
        className="bg-yellow-500 py-10 px-6 md:px-12 flex flex-col items-center"
      >
        <div className="max-w-7xl w-full text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A2342] mb-10">
            Our Achievers
          </h2>

          <div
            className={`grid gap-8 justify-items-center ${
              achievers.length === 1
                ? "grid-cols-1 place-items-center"
                : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            }`}
          >
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
    </div>
  );
}
