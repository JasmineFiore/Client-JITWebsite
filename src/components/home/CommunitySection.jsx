import { motion } from "framer-motion";
import communityImg from "/images/community.jpg";

import { useState } from "react";
import EnquiryModal from "../../Blueprints/EnquiryModal";

export default function CommunitySection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    {
      id: "01",
      title: "Explore Programs",
      description:
        "Discover diverse academic programs designed to help you build a strong foundation for your future.",
    },
    {
      id: "02",
      title: "Schedule a Counselling Session",
      description:
        "Connect with our mentors to find the academic and career path that suits your aspirations.",
    },
    {
      id: "03",
      title: "Apply for Admission",
      description:
        "Join one of India’s most reputed learning communities and start your academic journey today.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#F9FAFB] to-[#E8EEF6] py-20 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center relative z-10">
        {/* Left Side – Intro */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#002147] leading-tight mb-5">
            Join a Community of{" "}
            <span className="text-[#FFB81C]">Scholars & Achievers</span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-[15px]">
            At JIT, we believe in empowering every learner with knowledge,
            innovation, and values. Join a vibrant environment that nurtures
            ambition and transforms potential into success.
          </p>

          <div className="relative group">
            <div className="absolute -bottom-6 -left-6 bg-[#FFB81C] w-[90%] h-[90%] rounded-md -z-10 transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <img
              src={communityImg}
              alt="Community"
              className="rounded-xl shadow-2xl w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </motion.div>

        {/* Right Side – Zig-Zag Steps */}
        <div className="flex-1 relative bg-[#002147] text-white p-10 rounded-2xl shadow-2xl overflow-hidden">
          {/* Vertical line */}
          <div className="absolute left-[28px] top-10 bottom-10 w-[3px] bg-[#FFB81C] shadow-[0_0_20px_#FFB81C] hidden md:block"></div>

          <div className="flex flex-col gap-16 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: false }}
                whileHover="hovered" // shared hover animation
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Animated container for number + card */}
                <motion.div
                  variants={{
                    hovered: {
                      scale: 1.04,
                      transition: { type: "spring", stiffness: 300 },
                    },
                  }}
                  className={`flex flex-col md:flex-row items-center w-full md:w-[80%] cursor-pointer`}
                >
                  {/* Step Number */}
                  <motion.div
                    variants={{
                      hovered: {
                        scale: 1.15,
                        boxShadow: "0 0 25px #FFB81C",
                      },
                    }}
                    className="bg-[#FFB81C] text-[#002147] font-bold text-lg w-12 h-12 flex items-center justify-center rounded-full shadow-[0_0_15px_#FFB81C] z-10 transition-all duration-500"
                  >
                    {step.id}
                  </motion.div>

                  {/* Step Card */}
                  <motion.div
                    variants={{
                      hovered: {
                        scale: 1.03,
                        backgroundColor: "#123B7A",
                      },
                    }}
                    className={`bg-[#0A2A55] p-6 rounded-xl shadow-lg mt-4 md:mt-0 w-full transform transition-all duration-300 ${
                      index % 2 === 0 ? "md:ml-6 text-left" : "md:mr-3"
                    }`}
                  >
                    <h3 className="text-lg font-semibold text-[#FFB81C]">
                      {step.title}
                    </h3>
                    <p className="text-gray-200 text-sm mt-2 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-14 flex justify-center"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#FFB81C] text-[#002147] font-semibold py-3 px-8 rounded-md shadow-md hover:bg-[#e0a914] transition-transform duration-300 hover:scale-105"
            >
              Book a Counselling
            </button>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFB81C]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#002147]/10 rounded-full blur-3xl"></div>
    </section>
  );
}
