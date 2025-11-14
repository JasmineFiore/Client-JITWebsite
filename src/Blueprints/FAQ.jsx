import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const FAQ = ({
  faqData = [],
  title = "Frequently Asked Questions",
  subtitle = "",
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-3">{title}</h2>
          {subtitle && <p className="text-gray-600 text-lg">{subtitle}</p>}
        </div>

        <div className="space-y-5">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`transition-all duration-300 ease-in-out bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-lg p-5 sm:p-6 ${
                activeIndex === index ? "ring-2 ring-blue-400" : ""
              }`}
            >
              <button
                onClick={() => toggleAnswer(index)}
                className="flex justify-between items-center w-full cursor-pointer text-left"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <span
                  className={`flex items-center justify-center 
                  w-9 h-9 sm:w-10 sm:h-10 
                  rounded-full border-2 
                  transition-all duration-300 ease-in-out transform
                  ${
                    activeIndex === index
                      ? "bg-blue-600 text-white border-blue-600 scale-110"
                      : "bg-blue-100 text-blue-600 border-blue-200 hover:bg-blue-200"
                  }`}
                >
                  {activeIndex === index ? (
                    <FiMinus size={18} />
                  ) : (
                    <FiPlus size={18} />
                  )}
                </span>
              </button>

              {/* EXPANDING ANSWER */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? "max-h-[1200px] mt-4" : "max-h-0"
                }`}
              >
                {(faq.answers || [faq.answer]).map((item, i) => (
                  <div key={i} className="mb-3">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
