import { motion } from "framer-motion";
import { FaBed, FaWifi, FaShower, FaShieldAlt, FaUtensils, FaBolt, FaBook, FaRegClock } from "react-icons/fa";
import { useState, useEffect } from "react";

const images = [
    "/images/hostel/h3.png",
    "/images/hostel/h4.webp",
    "/images/hostel/h2.jpg",
    "/images/hostel/hostel.avif",
];

export default function HostelFacilities() {
  const [current, setCurrent] = useState(0);

  // Auto-slide gallery
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const amenities = [
    { icon: <FaBed />, label: "Well-furnished Rooms" },
    { icon: <FaWifi />, label: "High-Speed WiFi" },
    { icon: <FaShower />, label: "Clean Washrooms" },
    { icon: <FaShieldAlt />, label: "24×7 Security" },
    { icon: <FaUtensils />, label: "Healthy Mess Food" },
    { icon: <FaBolt />, label: "24×7 Electricity" },
    { icon: <FaBook />, label: "Study & Reading Room" },
    { icon: <FaRegClock />, label: "Warden Support" },
  ];

  return (
    <section className="bg-[#07172A] text-white">
      {/* HERO SECTION */}
      <div className="relative h-[45vh] md:h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hostel/h2.jpg')" }}>
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 flex items-center justify-center text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg">
            JIT Hostel Facilities
          </h1>
        </motion.div>
      </div>

      {/* ABOUT SECTION */}
      <div className="max-w-6xl mx-auto py-14 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-yellow-400 mb-4"
        >
          Comfortable | Safe | Student-Centric
        </motion.h2>

        <p className="text-gray-300 leading-relaxed text-lg">
          The JIT Hostel provides a safe and homely environment for students, 
          supported by modern amenities and round-the-clock supervision. 
          Separate hostels for boys and girls ensure comfort, discipline, 
          and a perfect ecosystem for learning and growth.
        </p>
      </div>

      {/* IMAGE GALLERY CAROUSEL */}
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-xl">

          {/* Images */}
          {images.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt="Hostel"
              animate={{ opacity: current === index ? 1 : 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ))}

          {/* Dots */}
          <div className="absolute bottom-4 w-full flex justify-center gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  current === i ? "bg-yellow-400" : "bg-white/50"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* AMENITIES GRID */}
      <div className="bg-[#0A2342] py-14">
        <h2 className="text-center text-3xl font-bold text-yellow-400 mb-10">
          Hostel Amenities
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
          {amenities.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center p-6 bg-[#1E3044] rounded-xl shadow-xl hover:scale-[1.05] transition cursor-pointer"
            >
              <div className="text-4xl text-yellow-400 mb-3">{a.icon}</div>
              <p className="text-gray-200 text-center">{a.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CONTACT / CTA */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">
          Want to Know More?
        </h2>
        <p className="text-gray-300 mb-6">
          For hostel admission details, availability, and fee structure, 
          contact the hostel office.
        </p>

        <a
          href="/contact"
          className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition"
        >
          Contact Hostel Office
        </a>
      </div>
    </section>
  );
}
