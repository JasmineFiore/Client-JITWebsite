import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import WhyChose from "../WhyChose";
import { useState } from "react";
import countryCodes from "../../../../data/countryCodes";
import { validateField } from "../../../../data/validation";

const fieldSettings = {
  name: {
    mapToValidation: "name",
    required: true,
    placeholder: "Enter student name",
  },
  email: {
    mapToValidation: "email",
    required: true,
    placeholder: "Enter student email",
  },
  phone: {
    mapToValidation: "phone",
    required: true,
    placeholder: "Enter phone number",
  },
  registrationNumber: {
    required: true,
    placeholder: "Enter registration number",
  },
  subject: {
    required: true,
    placeholder: "Enter subject name",
  },
  courseSemester: {
    required: true,
    placeholder: "Enter course and semester (e.g. B.Tech 4th Sem)",
  },
  teacherName: {
    required: true,
    placeholder: "Enter teacher name",
  },
  DateOfFeedback: {
    required: true,
    placeholder: "Select DateOfFeedback",
  },
  suggestion: {
    required: false,
    placeholder: "Write your suggestion (optional)",
  },
};

const dropdownQuestions = [
  "1. Has the Teacher covered entire Syllabus as prescribed?",
  "2. Has the Teacher covered relevant topics beyond?",
  "3(a). Technical content / course content",
  "3(b). Communication skills",
  "3(c). Use of teaching aids",
  "4. Pace on which contents were covered",
  "5. Motivation and inspiration for students to learn",
  "6(i). Practical demonstration",
  "6(ii). Hands on training",
  "7. Clarity of expectations of students",
  "8. Feedback provided on Students’ progress",
  "9. Willingness to offer help and advice to students",
];

export default function PassoutStudentForm() {
  const contactInfo = [
    {
      icon: <FaPhone />,
      label: "+91 73111 94686",
      action: "tel:+917311194686",
    },
    {
      icon: <FaPhone />,
      label: "+91 73808 32222",
      action: "tel:+917380832222",
    },
    {
      icon: <FaEnvelope />,
      label: "info@jit.edu.in",
      action: "mailto:info@jit.edu.in",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: `JIT, Jahangirabad Fort, Jahangirabad, Barabanki District,
Uttar Pradesh 225203, India`,
      action: "https://maps.app.goo.gl/6ALHKXG8LZ2iYC3X7",
      isAddress: true,
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    registrationNumber: "",
    subject: "",
    courseSemester: "",
    teacherName: "",
    feedbackDate: "",
    suggestion: "",
    ...dropdownQuestions.reduce((acc, q) => ({ ...acc, [q]: "" }), {}),
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const val = name === "phone" ? value.replace(/[^0-9]/g, "") : value;

    setFormData((prev) => ({ ...prev, [name]: val }));

    if (fieldSettings[name]?.mapToValidation) {
      const error = validateField(fieldSettings[name].mapToValidation, val);
      setErrors((prev) => ({ ...prev, [name]: error || "" }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    let error = "";
    const settings = fieldSettings[name];

    if (settings?.mapToValidation)
      error = validateField(settings.mapToValidation, value);
    else if (settings?.required && !value.trim()) error = `${name} is required`;

    setErrors((prev) => ({
      ...prev,
      ...(error ? { [name]: error } : {}),
    }));
  };

  const handleDropdownBlur = (q) => {
    const error = !formData[q] ? "Please select an answer" : "";
    setErrors((prev) => ({ ...prev, ...(error ? { [q]: error } : {}) }));
  };

  const validateForm = () => {
    let tempErrors = {};

    Object.keys(fieldSettings).forEach((field) => {
      const value = formData[field] || "";
      const rules = fieldSettings[field];

      if (rules.required && !value.trim())
        tempErrors[field] = `${field} is required`;
      else if (rules.mapToValidation) {
        const msg = validateField(rules.mapToValidation, value);
        if (msg) tempErrors[field] = msg;
      }
    });

    dropdownQuestions.forEach((q) => {
      if (!formData[q]) tempErrors[q] = "Please select an answer";
    });

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    alert("✅ Form submitted successfully!");

    setFormData({
      name: "",
      email: "",
      countryCode: "+91",
      phone: "",
      registrationNumber: "",
      subject: "",
      courseSemester: "",
      teacherName: "",
      feedbackDate: "",
      suggestion: "",
      ...dropdownQuestions.reduce((acc, q) => ({ ...acc, [q]: "" }), {}),
    });

    setErrors({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-gray-50">
      <h2 className="text-5xl font-bold px-14 py-3 md:py-8 bg-[#0A2342] text-yellow-400 mb-8">
        Pass out Students
      </h2>

      <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-8">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-extrabold text-[#0A2342] mb-8">
            Alumni Form
          </h2>
          <ul className="space-y-6">
            {contactInfo.map((item, i) => (
              <li key={i}>
                <a
                  href={item.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <span className="bg-yellow-400 text-[#0A2342] p-3 rounded-lg text-xl group-hover:scale-110 group-hover:rotate-12 transition">
                    {item.icon}
                  </span>
                  <p className="text-gray-800 group-hover:text-[#0A2342] whitespace-pre-line transition">
                    {item.label}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-[#0A2342] p-10 rounded-2xl shadow-2xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* All text fields */}
            {[
              "name",
              "email",
              "registrationNumber",
              "subject",
              "courseSemester",
              "teacherName",
              "feedbackDate",
            ].map((field) => (
              <div key={field}>
                <label className="block text-sm text-gray-300 mb-1">
                  {field.replace(/([A-Z])/g, " $1")}{" "}
                  <span className="text-red-400">*</span>
                </label>

                <input
                  type={field === "feedbackDate" ? "date" : "text"}
                  name={field}
                  placeholder={
                    fieldSettings[field]?.placeholder || `Enter ${field}`
                  }
                  value={formData[field]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full p-3 rounded-md bg-white/20 border border-white/30 text-gray-300 placeholder-gray-400"
                />

                {errors[field] && (
                  <p className="text-red-400 text-sm mt-1">{errors[field]}</p>
                )}
              </div>
            ))}

            {/* Dropdown questions */}
            {dropdownQuestions.map((q, idx) => (
              <div key={idx}>
                <label className="text-sm text-gray-300">{q}</label>
                <select
                  name={q}
                  value={formData[q]}
                  onChange={handleChange}
                  onBlur={() => handleDropdownBlur(q)}
                  className="w-full p-3 rounded bg-white text-black"
                >
                  <option value="">—Please choose an option—</option>
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Average">Average</option>
                  <option value="Poor">Poor</option>
                </select>
                {errors[q] && (
                  <p className="text-red-400 text-sm mt-1">{errors[q]}</p>
                )}
              </div>
            ))}

            {/* SUGGESTION */}
            <div>
              <label className="text-sm text-gray-300">Suggestion</label>
              <textarea
                name="suggestion"
                placeholder={fieldSettings.suggestion.placeholder}
                rows="4"
                value={formData.suggestion}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full bg-white/10 border border-gray-500 rounded p-3 mt-1 text-white placeholder-gray-400"
              ></textarea>
            </div>

            <button className="bg-yellow-400 text-black px-8 py-3 rounded font-semibold hover:bg-yellow-500 transition">
              Submit
            </button>
          </form>
        </div>
      </div>

      <WhyChose />
    </div>
  );
}
