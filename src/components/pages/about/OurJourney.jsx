import { motion } from "framer-motion";
import { FaUniversity, FaStar, FaUserGraduate, FaAward } from "react-icons/fa";

export default function OurJourney() {
  const journey = [
    {
      year: "2001",
      title: "Foundation of JIT",
      description:
        "Jahangirabad Institute of Technology was established with a vision to deliver world-class technical education.",
      icon: <FaUniversity />,
    },
    {
      year: "2010",
      title: "Major Campus Expansion",
      description:
        "Added new academic blocks, research labs, and modern infrastructure to support growing departments.",
      icon: <FaStar />,
    },
    {
      year: "2016",
      title: "Academic Excellence",
      description:
        "JIT achieved multiple recognitions for excellence in engineering and research-based learning.",
      icon: <FaAward />,
    },
    {
      year: "2024",
      title: "Industry-Driven Education",
      description:
        "Introduced modern labs, skill development centers, and AI, ML, IoT-based training courses.",
      icon: <FaUserGraduate />,
    },
    {
      year: "2025",
      title: "New Leadership & Vision",
      description:
        "Major General (Retd.) Vikas Saini took charge as Director, bringing strong leadership and technological vision.",
      icon: <FaUniversity />,
    },
  ];

  return (
    <div className="bg-[#050A23] text-white py-16 px-6 md:px-12 lg:px-24">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-12"
      >
        Our Journey
      </motion.h2>

      {/* Timeline */}
      <div className="relative border-l-4 border-yellow-500 ml-4 md:ml-12">
        {journey.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-10 ml-6"
          >
            <div className="absolute -left-7 flex items-center justify-center w-12 h-12 bg-yellow-500 text-[#050A23] rounded-full shadow-lg">
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold text-yellow-400">{item.year}</h3>
            <h4 className="text-xl font-semibold mt-1">{item.title}</h4>
            <p className="text-gray-300 mt-2 leading-relaxed">
              {item.description}
            </p>

            <div className="h-[1px] bg-gray-700 mt-4 w-full"></div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Highlight */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mt-16 bg-yellow-500 text-[#050A23] rounded-2xl p-8 shadow-xl text-center"
      >
        <h3 className="text-3xl font-bold mb-2">Continuing the Legacy</h3>
        <p className="text-lg font-medium">
          JIT continues its mission to empower students with knowledge, skills,
          leadership, and innovation for the future.
        </p>
      </motion.div>
    </div>
  );
}
