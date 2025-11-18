import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import jitBuilding2 from "/images/why join us 2.jpg";
import jitBuilding1 from "/images/why us.jpg";

export default function WhyJoinJITSection() {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto image change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    { id: 1, text: "Excellent Faculty" },
    { id: 2, text: "Modern Technologies" },
    { id: 3, text: "World Class Labs" },
    { id: 4, text: "Research Oriented Teaching" },
  ];

  return (
    <section className="bg-linear-to-r from-yellow-50 via-yellow-100 to-yellow-200 py-16 px-6 md:px-20">
       <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-7xl mx-auto">

        {/* Image Section - automatically changing */}
        <div className="relative w-full md:w-1/2">
          <div className="absolute -top-6 -left-6 bg-yellow-400 w-56 h-56 rounded-lg -z-10 shadow-lg"></div>

          {/* First Image */}
          <img
            src={jitBuilding1}
            alt="JIT Building"
            className={`rounded-lg shadow-xl w-full object-cover transition-opacity duration-700 
              ${currentImage === 0 ? "opacity-100" : "opacity-0"}`}
          />

          {/* Second Image */}
          <img
            src={jitBuilding2}
            alt="JIT Campus"
            className={`absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-xl transition-opacity duration-700 
              ${currentImage === 1 ? "opacity-100" : "opacity-0"}`}
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-gray-700">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2342] mb-4">
            Why Join <span className="text-yellow-500">JIT?</span>
          </h2>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
            At JIT College, we believe that dreams are meant to be turned into
            reality. Our programs are designed to equip students with the skills
            and knowledge needed to achieve their career goals and build the
            future they’ve always dreamed of. JIT offers a range of degree and
            diploma programs in various fields, including{" "}
            <span className="font-semibold text-[#0A2342]">
              pharmacy, engineering, business, ITI, arts, and media
            </span>
            . Our experienced faculty members are experts in their respective
            fields, and they are committed to providing students with a
            supportive and challenging learning environment.
          </p>

          {/* Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <div className="bg-yellow-400 p-2 rounded-md shadow-md">
                  <FaCheck className="text-[#0A2342] text-sm" />
                </div>
                <p className="font-semibold text-[#0A2342] text-lg">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
