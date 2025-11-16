import { useState, useEffect } from "react";
import {
  FaBrain,
  FaCloud,
  FaNetworkWired,
  FaVrCardboard,
  FaGraduationCap,
} from "react-icons/fa";
import { TbBlocks } from "react-icons/tb";

const technologies = [
  {
    id: 1,
    title: "Virtual and Augmented Reality",
    icon: <FaVrCardboard size={50} />,
    description:
      "Virtual and Augmented Reality are becoming increasingly popular in higher education. They offer immersive experiences that enhance learning, especially in STEM fields.",
  },
  {
    id: 2,
    title: "Learning Management Systems",
    icon: <FaGraduationCap size={50} />,
    description:
      "Learning Management Systems (LMS) help institutions manage, track, and deliver educational content efficiently, improving student engagement and assessment.",
  },
  {
    id: 3,
    title: "Blockchain Technology",
    icon: <TbBlocks size={50} />,
    description:
      "Blockchain ensures data transparency and security in academic records, making it ideal for certifications, credentials, and digital identity verification.",
  },
  {
    id: 4,
    title: "Internet of Things (IoT)",
    icon: <FaNetworkWired size={50} />,
    description:
      "IoT enables smart campus solutions—automating lighting, attendance, and lab monitoring systems for efficient operations and better resource use.",
  },
  {
    id: 5,
    title: "Cloud Computing",
    icon: <FaCloud size={50} />,
    description:
      "Cloud Computing allows scalable access to educational resources, data storage, and virtual labs, supporting hybrid and remote learning environments.",
  },
  {
    id: 6,
    title: "Artificial Intelligence",
    icon: <FaBrain size={50} />,
    description:
      "AI powers intelligent tutoring systems, personalized learning, and predictive analytics to improve academic outcomes and decision-making.",
  },
];

export default function JITTechnologiesSection() {
  const [activeCard, setActiveCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile view (screen width < 768px)
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // run initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCardClick = (id) => {
    if (isMobile) {
      setActiveCard((prev) => (prev === id ? null : id)); // toggle
    }
  };

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#0A2342] mb-12">
        JIT & Latest <span className="text-yellow-500">Technologies</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {technologies.map((tech) => (
          <div
            key={tech.id}
            onClick={() => handleCardClick(tech.id)}
            className={`relative bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all duration-500 cursor-pointer ${
              !isMobile ? "group hover:bg-[#0A2342]" : ""
            } ${activeCard === tech.id ? "bg-[#0A2342]" : ""}`}
          >
            {/* Default View */}
            <div
              className={`flex flex-col items-center justify-center p-10 text-[#0A2342] transition-opacity duration-500 ${
                (!isMobile && "group-hover:opacity-0") ||
                (isMobile && activeCard === tech.id
                  ? "opacity-0"
                  : "opacity-100")
              }`}
            >
              {tech.icon}
              <h3 className="mt-4 text-lg font-semibold text-center">
                {tech.title}
              </h3>
            </div>

            {/* Description View */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white bg-[#0A2342]/90 transition-opacity duration-500 ${
                (!isMobile && "opacity-0 group-hover:opacity-100") ||
                (isMobile && activeCard === tech.id
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none")
              }`}
            >
              <h3 className="text-lg font-bold underline-offset-1 underline mb-3">{tech.title}</h3>
              <p className="text-sm leading-relaxed">{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
