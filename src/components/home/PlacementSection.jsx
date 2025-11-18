import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

export default function PlacementSection() {
  const students = [
    {
      name: "Md. Haseeb Ansari",
      company: "PIE Infocomm Pvt. Ltd.",
      package: "4.5 LPA",
      image: "/images/haseeb.png",
    },
    {
      name: "Usama Ilyas",
      company: "TCS",
      package: "4.2 LPA",
      image: "/images/Usama.png",
    },
    {
      name: "Abdur Rehman",
      company: "PIE Infocomm Pvt. Ltd.",
      package: "4.5 LPA",
      image: "/images/ABDUR.png",
    },
    {
      name: "Gulab Singh",
      company: "PRERNA GROUP",
      package: "1.44 LPA",
      image: "/images/GULAB-SINGH-100x100.png",
    },
    {
      name: "Mohd-TAUHID",
      company: "PRERNA GROUP",
      package: "1.44 LPA",
      image: "/images/Mohd-TAUHID-100x100.png",
    },
    {
      name: "MOHD.-SHABAN",
      company: "PRERNA GROUP",
      package: "1.44 LPA",
      image: "/images/4.-MOHD.-SHABAN-100x100.jpeg",
    },
  ];

  const companies = [
    { src: "/images/company-yellow-logo/dabur-1-150x150.png", alt: "Dabur" },
    { src: "/images/company-yellow-logo/airtel-1-150x150.png", alt: "Airtel" },
    { src: "/images/company-yellow-logo/ford-1-150x150.png", alt: "ford" },
    { src: "/images/company-yellow-logo/HCL-1-150x150.png", alt: "hcl" },
    { src: "/images/company-yellow-logo/Hero-1-150x150.png", alt: "hero" },
    { src: "/images/company-yellow-logo/HP-1-150x150.png", alt: "HP" },
    { src: "/images/company-yellow-logo/htc-1-150x150.png", alt: "HTC" },
    {
      src: "/images/company-yellow-logo/hyundai-1-150x150.png",
      alt: "Hyundai",
    },
    { src: "/images/company-yellow-logo/IBM-1-150x150.png", alt: "ibm" },
    {
      src: "/images/company-yellow-logo/infosys-1-150x150.png",
      alt: "infosys",
    },
    { src: "/images/company-yellow-logo/levies-1-150x150.png", alt: "levies" },
    {
      src: "/images/company-yellow-logo/mahindra-150x150.png",
      alt: "mahindra1",
    },
    { src: "/images/company-yellow-logo/nestle-1-150x150.png", alt: "nestle" },
    { src: "/images/company-yellow-logo/nivea-1-150x150.png", alt: "nivea" },
    { src: "/images/company-yellow-logo/NTPC-1-150x150.png", alt: "NTPC" },
    { src: "/images/company-yellow-logo/Pepsi-1-150x150.png", alt: "pepsi" },
    { src: "/images/company-yellow-logo/tata-1-150x150.png", alt: "tata" },
    {
      src: "/images/company-yellow-logo/yamaha-150x150.png",
      alt: "yamaha",
    },
  ];

  return (
    <section className="relative bg-[#0A2342]/90 text-white py-3 px-1 overflow-hidden">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center text-yellow-500 mb-7 tracking-wide"
      >
        Our Stellar Placements 2023
      </motion.h2>

      {/* Stats Section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center max-w-6xl mx-auto mb-5">
        {[
          { value: "90%", label: "Placements" },
          { value: "2000+", label: "Recruiters" },
          { value: "200+", label: "2023 Batch Offers" },
          { value: "4.5 LPA", label: "Highest Package" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-[#0A2342]/50 backdrop-blur-sm rounded-xl p-3 shadow-lg hover:shadow-yellow-400/30 transition-all duration-300"
          >
            <p className="text-3xl font-extrabold text-yellow-500 mb-2">
              {stat.value}
            </p>
            <p className="text-sm opacity-90">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Student Carousel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={40}
        slidesPerView={1}
        className="max-w-2xl mx-auto mb-7"
      >
        {students.map((student, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#0A2342]/50 backdrop-blur-md rounded-2xl p-10 flex flex-col items-center shadow-xl hover:shadow-yellow-400/30 transition-all duration-500"
            >
              <img
                src={student.image}
                alt={student.name}
                className="w-28 h-28 object-cover rounded-full border-2 border-[#aaae7f] bg-white mb-5 shadow-md"
              />
              <h3 className="text-xl text-yellow-500 font-semibold">
                {student.name}
              </h3>
              <p className="text-[#dfe971] font-medium">{student.company}</p>
              <p className="text-sm text-gray-100 mt-1">{student.package}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Company Logos Carousel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 1800, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={40}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 4 },
          768: { slidesPerView: 6 },
          1024: { slidesPerView: 7 },
        }}
        className="max-w-6xl mx-auto"
      >
        {companies.map((company, i) => (
          <SwiperSlide key={i} className="flex justify-center items-center">
            <div className="rounded-full p-3 mb-6 transition-all duration-300">
              <img
                src={company.src}
                alt={company.alt}
                className="w-28 h-28 object-contain opacity-90 hover:opacity-100 transition duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
