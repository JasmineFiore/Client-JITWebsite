import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const BusinessPage = () => {
  const navigate = useNavigate();

  const programs = [
    {
      title: "Bachelor of Business Administration (BBA)",
      description:
        "A 3-year undergraduate program designed to build strong foundations in management, finance, and entrepreneurship. Ideal for students aspiring to become future business leaders or start their own ventures.",
    },
    {
      title: "Master of Business Administration (MBA)",
      description:
        "A 2-year postgraduate program focused on advanced business strategies, leadership development, and global business trends. Tailored for professionals aiming to enhance their managerial expertise.",
    },
    {
      title: "Diploma in Business Management (DBM)",
      description:
        "A short-term diploma focusing on practical aspects of management, marketing, and business operations. Perfect for students seeking early exposure to the corporate world.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-[url('/images/business-bg.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            College of Business & Management
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Empowering tomorrow’s entrepreneurs, managers, and innovators through
            world-class education and hands-on experience.
          </motion.p>
        </div>
      </div>

      {/* Programs Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Business Programs
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-600"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-700">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <button
                onClick={() => navigate("/contact")}
                className="text-blue-600 font-medium hover:underline"
              >
                Know More →
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 text-white text-center py-14 px-6">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Join the Next Generation of Business Leaders
        </motion.h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Enroll in our programs and unlock endless opportunities in corporate,
          financial, and entrepreneurial sectors.
        </p>
        <button
          onClick={() => navigate("/apply")}
          className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition"
        >
          Apply Now
        </button>
      </section>
    </div>
  );
};

export default BusinessPage;
