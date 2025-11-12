import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./FlipCard.css";

const CollegeCard = ({ college }) => {
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);

  // Detect click for mobile (toggle flip)
  const handleCardClick = () => {
    // only toggle flip on small screens
    if (window.innerWidth < 768) {
      setIsFlipped((prev) => !prev);
    }
  };

  return (
    <div
      className="flip-card w-[300px] h-[420px] mx-auto group"
      style={{ perspective: "1000px" }}
      onClick={handleCardClick}
    >
      <div
        className={`flip-card-inner relative w-full h-full text-center transition-transform duration-700 transform-style-preserve-3d shadow-xl rounded-2xl ${
          isFlipped ? "rotate-y-180" : "" // 👈 added this line for desktop hover
        } group-hover:rotate-y-180`}
      >
        {/* FRONT SIDE */}
        <div className="flip-card-front absolute w-full h-full backface-hidden rounded-2xl overflow-hidden">
          <img
            src={college.img}
            alt={college.name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-[#0A2342]/80 py-3">
            <h3 className="text-lg font-semibold text-white tracking-wide">
              {college.name}
            </h3>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="flip-card-back absolute w-full h-full bg-[#0A2342] text-white rounded-2xl rotate-y-180 backface-hidden flex flex-col items-center justify-center p-5 text-center">
          <div className="flex flex-col items-center justify-center space-y-3">
            <h3 className="text-lg font-bold text-yellow-400">
              {college.name}:
            </h3>
            <ul className="text-sm text-gray-200 pl-4 list-disc text-left">
              {college.details?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {college.name2 && college.details2 && (
              <>
                <h3 className="text-lg font-bold text-yellow-400">
                  {college.name2}:
                </h3>
                <ul className="text-sm text-gray-200 pl-4 list-disc text-left">
                  {college.details2.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <button
            onClick={() => navigate(college.path)}
            className="mt-5 bg-yellow-400 text-[#0A2342] font-semibold py-2 px-5 rounded-md hover:bg-yellow-500 transition-all duration-300 cursor-pointer"
          >
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

const CollegesSection = () => {
  const colleges = [
    {
      id: 1,
      name: "Degree Engineering",
      name2: "Diploma Engineering",
      img: "/images/ai-ml.jpg",
      path: "/CollegeOfEngineering",
      details: [
        "Computer Science (CSE)",
        "Artificial Intelligence & Machine Learning (AI ML)",
        "Electrical (EE)",
        "Civil (CE)",
        "Mechanical (ME)",
      ],
      details2: [
        "Computer Science (CSE)",
        "Electrical (EE)",
        "Mechanical (ME)",
        "Civil (CE)",
        "Library & Information Science",
      ],
    },
    {
      id: 2,
      name: "College of Pharmacy",
      name2: "Diploma Pharmacy",
      img: "/images/Pharmacy.jpg",
      path: "/CollegeOfPharmacy",
      details: [
        "Pharm.D (Doctor of Pharmacy)",
        "M.Pharm (Pharm. Chemistry)",
        "M.Pharm (Pharmaceutics)",
        "M.Pharm (Pharmacology)",
        "B.Pharm (Bachelor of Pharmacy)",
        "B.Pharm (Lateral Entry from D.Pharm)",
      ],
      details2: ["D.Pharm (Diploma in Pharmacy)"],
    },
    {
      id: 3,
      name: "College of Business",
      img: "/images/Business.jpg",
      path: "/business",
      details: [
        "MBA IT",
        "MBA IB",
        "MBA Finance",
        "MBA Marketing",
        "MBA HR",
        "B.Com",
      ],
    },
    {
      id: 4,
      name: "College of ITI",
      img: "/images/Mechanical-engineering.jpg",
      path: "/iti",
      details: [
        "Multimedia Animation & Special Effects",
        "Digital Photographer",
        "Electrician",
        "Welder",
        "Fitter",
        "Draughtsman",
      ],
    },
    {
      id: 5,
      name: "College of Arts",
      img: "/images/arts.jpg",
      path: "/arts",
      details: [
        "LLB",
        "Political Science",
        "Education",
        "Sociology",
        "Ancient History",
        "Hindi",
        "English",
        "Urdu",
      ],
    },
    {
      id: 6,
      name: "College of Media & Journalism",
      img: "/images/media.jpg",
      path: "/media",
      details: [
        "BA (Journalism & Mass)",
        "MA (Communication)",
        "Certification in Acting",
        "Certification in Film Making",
        "Certification in Anchoring & Journalism",
        "Certification in Video Editing",
      ],
    },
  ];

  return (
    <section className="relative z-10 bg-[#0A2342] text-white py-16 px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug">
          Get Ahead with{" "}
          <span className="text-yellow-400">JIT Comprehensive Programs</span>
        </h2>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {colleges.map((college) => (
          <CollegeCard key={college.id} college={college} />
        ))}
      </div>
    </section>
  );
};

export default CollegesSection;
