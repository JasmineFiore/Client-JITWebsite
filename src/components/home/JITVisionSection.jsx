import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import College360View from "./College360View";

export default function JITVisionSection() {
  const slides = [
    {
      title: "JIT: Vision for the Future",
      subtitle: "Our Vision",
      description: `“JIT envisions becoming a premier institution recognized globally
      for excellence in education, innovation, and research. Our goal is
      to nurture students into competent professionals and responsible
      citizens capable of leading the future with integrity, creativity,
      and purpose.”`,
    },
    {
      title: "JIT Mission",
      subtitle: "Our Mission",
      description: `“JIT mission is to provide educational experiences that empower our students
      to become lifelong learners, leaders, and contributors to the society. JIT is
      committed to fostering a diverse and inclusive community that values academic
      excellence, innovation, and service to others. JIT colleges are dedicated in
      preparing students to thrive in a rapidly changing world by providing them the
      knowledge, skills, and opportunities they need to succeed.”`,
    },
    {
      title: "JIT: Core Values",
      subtitle: "Our Core Values",
      description: `To fulfill our mission and vision, we uphold these core values:`,
      list: [
        {
          heading: "Academic Excellence:",
          text: "We strive to provide a rigorous, challenging, and engaging educational experience that prepares our students for success in their chosen fields.",
        },
        {
          heading: "Innovation:",
          text: "We foster a culture of innovation, creativity, and experimentation that encourages new ideas, approaches, and solutions.",
        },
      ],
      button: {
        label: "Read More",
        link: "/mission",
      },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // 🕒 Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]); // re-run when slide changes

  const currentSlide = slides[currentIndex];

  return (
    <section className="bg-[#0A2342] text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-center gap-10 transition-all duration-500">
      {/* Left Side: 360° View */}
      <div className="relative md:w-3/4 flex items-center justify-center">
        <div className="absolute -top-6 -left-6 bg-yellow-400 w-48 h-48 rounded-lg -z-10"></div>
        <div className="w-full rounded-lg shadow-2xl overflow-hidden">
          <College360View imageUrl="/images/360 deg img/img-2.jpeg" />
        </div>
      </div>

      {/* Right Content (Dynamic) */}
      <div className="md:w-1/2 space-y-5">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-snug">
          {currentSlide.title.includes("JIT:") ? (
            <>
              {currentSlide.title.split("JIT:")[0]}
              JIT:
              <span className="text-yellow-400">
                {currentSlide.title.split("JIT:")[1]}
              </span>
            </>
          ) : (
            <span className="text-yellow-400">{currentSlide.title}</span>
          )}
        </h2>

        <h3 className="text-yellow-400 font-bold text-lg underline decoration-2">
          {currentSlide.subtitle}
        </h3>

        <p className="text-gray-300 leading-relaxed text-justify">
          {currentSlide.description}
        </p>

        {/* Core Values List */}
        {currentSlide.list && (
          <ul className="list-disc list-inside text-gray-300 space-y-2 mt-3">
            {currentSlide.list.map((item, index) => (
              <li key={index}>
                <span className="text-yellow-400 font-semibold">
                  {item.heading}{" "}
                </span>
                {item.text}

                {/* 🟡 Add Read More after Innovation only */}
                {item.heading.includes("Innovation") && currentSlide.button && (
                  <div className="pt-2">
                    <Link
                      to={currentSlide.button.link}
                      className="inline-block bg-yellow-400 text-[#0A2342] font-semibold px-3 py-1 text-sm rounded-md shadow-md hover:bg-yellow-500 transition"
                    >
                      {currentSlide.button.label}
                    </Link>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 flex items-center justify-center bg-white text-[#0A2342] rounded-full shadow-md hover:bg-yellow-400 hover:text-white transition-all"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 flex items-center justify-center bg-white text-[#0A2342] rounded-full shadow-md hover:bg-yellow-400 hover:text-white transition-all"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex gap-2 pt-4">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === currentIndex ? "bg-yellow-400" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
