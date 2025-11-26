import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import CircleModal from "./CircleModal";

const slides = [
  {
    image: "/images/homec2.jpg",
    title: "Welcome to JIT",
    subtitle:
      "Delivering world-class education that’s accessible and affordable for every learner.", //"A hub of innovation, research, and excellence."
    cta: "Explore JETGI",
  },
  {
    image: "/images/homec5.webp",
    title: "A Campus Where Dreams Take Flight",
    subtitle:
      "At JIT, we cultivate excellence, spark creativity, and build values that guide learners toward meaningful success.",
    cta: "Discover JIT",
    ctaLink: "/vision-mission",
  },
  {
    image: "/images/homec3.jpg",
    title: "Experience World-Class Learning", //"Discover Top Programs",
    subtitle: "Where technology meets creativity and purpose.", //"Take advantage of JIT’s cutting-edge technology.",
    cta: "Explore Programs",
    ctaLink: "/courses",
  },
  {
    image: "/images/homec.jpg",
    title: "Your Journey Begins at JIT", //"EMPOWERING STUDENTS\nFOR SUCCESS",
    subtitle: "Transform your passion into a career that makes an impact.", //"Don’t get framed by the competition, trust our solid reputation.",
    cta: "Book a Counselling",
    ctaLink: "/community",
  },
];

export default function HeroCarousel() {
  const [showCircleModal, setShowCircleModal] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Background image transition */}
      <AnimatePresence>
        <motion.img
          key={slides[index].image}
          src={slides[index].image}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      {/* Text Section */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 md:px-12">
        <motion.h1
          key={slides[index].title} //clamp() for text sizes, works smoothly between min and max sizes based on screen width.
          className="whitespace-pre-line font-extrabold tracking-wide drop-shadow-lg
          text-[clamp(1.8rem,5vw,5rem)] leading-[1.1]" //clamp(min, preferred, max)
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8 }}
        >
          {slides[index].title}
        </motion.h1>

        <motion.p
          key={slides[index].subtitle}
          className="mt-4 text-gray-200 italic tracking-wide max-w-2xl
          text-[clamp(0.9rem,2vw,1.5rem)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {slides[index].subtitle}
        </motion.p>

        <motion.div
          key={slides[index].cta}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-8 sm:mt-10"
        >
          {slides[index].cta === "Apply Now" ? (
            <motion.button
              onClick={() => setShowCircleModal(true)}
              className="bg-[#FFB81C] text-[#002147] font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full shadow-lg 
      hover:bg-[#e0a914] hover:scale-105 transition-all duration-300 
      text-[clamp(0.9rem,1.5vw,1.2rem)]"
            >
              {slides[index].cta}
            </motion.button>
          ) : slides[index].ctaLink.startsWith("http") ? (
            <motion.button
              onClick={() => window.open(slides[index].ctaLink, "_blank")}
              className="bg-[#FFB81C] text-[#002147] font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full shadow-lg 
      hover:bg-[#e0a914] hover:scale-105 transition-all duration-300 
      text-[clamp(0.9rem,1.5vw,1.2rem)]"
            >
              {slides[index].cta}
            </motion.button>
          ) : (
            <Link
              to={slides[index].ctaLink}
              className="bg-[#FFB81C] text-[#002147] font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full shadow-lg 
      hover:bg-[#e0a914] hover:scale-105 transition-all duration-300
      text-[clamp(0.9rem,1.5vw,1.2rem)]"
            >
              {slides[index].cta}
            </Link>
          )}
        </motion.div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index
                ? "bg-white scale-110"
                : "bg-gray-400 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
      <CircleModal
        isOpen={showCircleModal}
        onClose={() => setShowCircleModal(false)}
      />
    </div>
  );
}
