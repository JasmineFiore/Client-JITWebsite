import axios from "axios";
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { validateField } from "../../../../data/validation";
import WhyChose from "../WhyChose";

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
  const fields = [
    {
      label: "Name of Student",
      placeholder: "Enter student name",
      required: true,
      mapToValidation: "name",
    },
    {
      label: "Email ID",
      type: "email",
      placeholder: "Enter email address",
      required: true,
      mapToValidation: "email",
    },
    {
      label: "Registration Number",
      placeholder: "Enter registration number",
      required: true,
      onlyNumbers: true,
    },
    {
      label: "Subject",
      placeholder: "Enter subject name",
      required: true,
    },
    {
      label: "Course & Semester",
      placeholder: "Enter course & semester",
      required: true,
    },
    {
      label: "Name of the Teacher (Subject Taught)",
      placeholder: "Enter teacher name",
      required: true,
      mapToValidation: "name",
    },
    {
      label: "Contact Number",
      placeholder: "Enter contact number",
      required: true,
      onlyNumbers: true,
      maxLength: 10,
      inputMode: "numeric",
      mapToValidation: "phone",
    },
    {
      label: "Date of feedback",
      placeholder: "Select Date of feedback",
      required: true,
      type: "date",
      required: true,
      placeholder: "Select DateOfFeedback",
    },
  ];

  const questions = [
    {
      text: "1.  Has the Teacher covered entire Syllabus as prescribed by University/ College/ Board?",
      required: true,
    },
    {
      text: "2. Has the Teacher covered relevant topics beyond syllabus?",
      required: true,
    },
    {
      text: "3. Effectiveness of Teacher in terms of:\n(a) Technical content / course content",
      required: true,
    },
    { text: "(b). Communication skills", required: true },
    { text: "(c). Use of teaching aids", required: true },
    { text: "4. Pace on which contents were covered", required: true },
    {
      text: "5. Motivation and inspiration for students to learn",
      required: true,
    },
    {
      text: "6. Support for the development of Students’ skill \n (i) Practical demonstration",
      required: true,
    },
    { text: "(ii). Hands on training", required: true },
    { text: "7. Clarity of expectations of students", required: true },
    { text: "8. Feedback provided on Students’ progress", required: true },
    {
      text: "9. Willingness to offer help and advice to students",
      required: true,
    },
  ];

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

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const errorCount = Object.keys(errors).length;

  const handleChange = (label, value) => {
    setFormData((prev) => ({ ...prev, [label]: value }));
  };

  // FIELD onBlur validation using validation.js
  const handleBlur = (field) => {
    const value = formData[field.label] || "";
    let error = "";

    if (field.mapToValidation) {
      error = validateField(field.mapToValidation, value);
    } else if (field.required && !value.trim()) {
      error = `${field.label} is required`;
    }

    setErrors((prev) => {
      const updated = { ...prev };
      if (error) updated[field.label] = error;
      else delete updated[field.label];
      return updated;
    });
  };

  // QUESTION onBlur
  const handleQuestionBlur = (q) => {
    const value = formData[q.text] || "";
    const error = q.required && !value.trim() ? "Please select an answer" : "";

    setErrors((prev) => {
      const updated = { ...prev };
      if (error) updated[q.text] = error;
      else delete updated[q.text];
      return updated;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let finalErrors = {};

    // VALIDATE TEXT FIELDS
    fields.forEach((field) => {
      const value = formData[field.label] || "";

      if (field.required && !value.trim()) {
        finalErrors[field.label] = `${field.label} is required`;
        return;
      }

      if (field.mapToValidation) {
        const err = validateField(field.mapToValidation, value);
        if (err) finalErrors[field.label] = err;
      }
    });

    // VALIDATE QUESTIONS
    questions.forEach((q) => {
      if (q.required && !formData[q.text]) {
        finalErrors[q.text] = "Please select an answer";
      }
    });

    // STOP IF ERRORS
    if (Object.keys(finalErrors).length > 0) {
      setErrors(finalErrors);

      const firstErrorField = Object.keys(finalErrors)[0];
      const el = document.querySelector(`[name="${firstErrorField}"]`);

      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.focus();
      }

      setLoading(false);
      return;
    }

    // try {
    //   await axios.post("http://localhost:5000/api/send-feedback", formData);
    //   alert("✅ Form submitted successfully!");

    //   // Reset form
    //   setFormData({});
    //   setErrors({});
    // } catch (err) {
    //   console.error(err);
    //   alert("❌ Failed to submit form. Try again later.");
    // }
    alert("✅ Form submitted successfully!");

    // Reset form
    setFormData({});
    setErrors({});

    setLoading(false);
    console.log("formData is ", formData);

    // 🔥 Smooth scroll to top
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

        <div className="max-w-6xl mx-auto bg-[#1E3044] text-white px-10 md:px-14 py-6 rounded-xl shadow-2xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* TEXT FIELDS */}
            {fields.map((field, idx) => (
              <div key={idx}>
                <label className="block mb-2">
                  {field.label}{" "}
                  {field.required && <span className="text-red-500">*</span>}
                </label>

                <input
                  type={field.type || "text"}
                  placeholder={field.placeholder}
                  value={formData[field.label] || ""}
                  onChange={(e) => handleChange(field.label, e.target.value)}
                  onBlur={() => handleBlur(field)}
                  inputMode={field.inputMode}
                  maxLength={field.maxLength}
                  onInput={(e) => {
                    if (field.onlyNumbers) {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }
                  }}
                  className="w-full p-3 rounded bg-white text-black"
                />

                {errors[field.label] && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors[field.label]}
                  </p>
                )}
              </div>
            ))}

            {/* QUESTIONS */}
            {questions.map((q, idx) => (
              <div key={idx}>
                <label className="block mb-2 whitespace-pre-line">
                  {q.text}
                  {q.required && <span className="text-red-500">*</span>}
                </label>

                <select
                  className="w-full p-3 rounded bg-white text-black"
                  value={formData[q.text] || ""}
                  onChange={(e) => handleChange(q.text, e.target.value)}
                  onBlur={() => handleQuestionBlur(q)}
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {(
                    q.options || [
                      "Excellent",
                      "Very Good",
                      "Good",
                      "Satisfactory",
                      "Poor",
                    ]
                  ).map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>

                {errors[q.text] && (
                  <p className="text-red-400 text-sm mt-1">{errors[q.text]}</p>
                )}
              </div>
            ))}

            {/* Suggestion */}
            <div>
              <label className="block mb-2">
                Opinion/Suggestion about institution in a broad or for any
                specific reason:
              </label>
              <textarea
                rows="4"
                className="w-full p-3 rounded bg-white text-black"
                placeholder="Enter Suggestion"
                value={formData["Suggestion"] || ""}
                onChange={(e) => handleChange("Suggestion", e.target.value)}
              ></textarea>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full font-semibold py-3 rounded transition
  ${
    loading
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-yellow-400 text-black hover:bg-yellow-300 cursor-pointer"
  }`}
            >
              {loading ? "Submitting..." : "Submit Form"}
            </button>

            {/* ERROR COUNT DISPLAY */}
            {Object.keys(errors).length > 0 && (
              <p className="text-red-400 text-center mt-3">
                ⚠️ {Object.keys(errors).length} field(s) need attention before
                submitting.
              </p>
            )}
          </form>
        </div>
      </div>
      <WhyChose />
    </div>
  );
}
