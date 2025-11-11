import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


export default function Carousel({
  slides = [],
  autoSlide = true,
  interval = 4000,
}) {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // ✅ Auto Slide Effect
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, interval);
    return () => clearInterval(slideInterval);
  }, [current, autoSlide, interval]);

  return (
    <div className="relative overflow-hidden w-full max-w-5xl mx-auto rounded-2xl shadow-lg group">
      {/* Slides */}
      <div
        className="flex transition-transform ease-in-out duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((s, index) => (
          <img
            key={index}
            src={s}
            alt={`Slide ${index + 1}`}
            className="w-full object-cover h-[30vh] sm:h-[50vh]"
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        aria-label="Previous Slide"
        onClick={previousSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-4xl bg-black/40 hover:bg-black/60 p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        <IoIosArrowBack />
      </button>

      <button
        aria-label="Next Slide"
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-4xl bg-black/40 hover:bg-black/60 p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        <IoIosArrowForward />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 flex justify-center w-full gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-white scale-125 shadow-md" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
