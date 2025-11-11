import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi"; // install with: npm install react-icons

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question:
        "What are the career prospects after completing a B Pharma course in Uttar Pradesh from JIT affiliated with AKTU?",
      answer:
        "After completing a B Pharma course from AKTU, graduates have various career opportunities in pharmaceutical companies, research organizations, hospitals, regulatory bodies, and academia. They can work as pharmacists, drug inspectors, medical writers, clinical research associates, and quality control analysts, among other roles. JIT Placement Cell will provide 100% placement assistance.",
    },
    {
      question:
        "Are there any scholarships available for B Pharma students in JIT?",
      answer:
        "JIT makes quality education accessible to all students through scholarships and financial aid to deserving students based on academic merit, financial need, and other criteria. Students must score required marks for scholarships in CUET exams Our aim is to support talented and motivated students in pursuing their educational goals. call us at the given number for more information.",
    },
    {
      question: "What is the fee structure for B Pharma courses in JIT?",
      answer:
        "The Tuition Fee at JIT College for B Pharma is Rs. 62,500 per year. Please call us to know more about the fee details and scholarship eligibility.",
    },
    {
      question:
        "How is the infrastructure and lab facilities for B Pharma students in JIT?",
      answer:
        "The infrastructure and lab facilities for B Pharma students in JIT college affiliated with AKTU are generally well-equipped with modern laboratory equipment, library resources, and pharmaceutical technology facilities to support hands-on learning and research activities.",
    },
    {
      question:
        "What are the different specializations available within the B Pharma course?",
      answer:
        "Specializations within the B Pharma course at AKTU-affiliated colleges include Pharmaceutical Chemistry, Pharmacology, Pharmacognosy, Pharmaceutical Analysis, Pharmaceutical Biotechnology, Industrial Pharmacy, and Clinical Pharmacy.",
    },
    {
      question:
        "What is the placement scenario for B Pharma graduates from JIT college?",
      answer:
        "B Pharma graduates from colleges affiliated with AKTU have favorable placement prospects, with opportunities available in pharmaceutical companies, research organizations, hospitals, government agencies, and academia. The placement scenario varies depending on factors such as academic performance, skills, and industry demand.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Here are some common queries about our B. Pharma program at JIT.
          </p>
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

              {/* Animated expand/collapse */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? "max-h-60 mt-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
