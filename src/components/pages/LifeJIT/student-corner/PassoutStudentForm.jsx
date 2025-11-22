import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import WhyChose from "../WhyChose";
import { useState } from "react";
import countryCodes from "../../../../data/countryCodes";

const validators = {
  name: (v) => (v.trim() ? true : "Name is required"),

  email: (v) =>
    v.trim()
      ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
        ? true
        : "Enter a valid email address"
      : "Email is required",

  phone: (v) =>
    v.trim()
      ? /^[0-9]{10}$/.test(v)
        ? true
        : "Phone must be exactly 10 digits"
      : "Phone number is required",

  state: (v) => (v ? true : "Please select your state"),

  program: (v) => (v ? true : "Please select a program"),
};

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
      action: "https://maps.app.goo.gl/6ALHKXG8LZ2iYC3X7", // <-- Your map link
      isAddress: true,
    },
  ];

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    state: "",
    program: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    let val = value;

    // Only numbers for phone
    if (name === "phone") {
      val = val.replace(/[^0-9]/g, "");
    }

    setFormData({ ...formData, [name]: val });

    if (validators[name]) {
      const result = validators[name](val);
      setErrors({
        ...errors,
        [name]: result === true ? "" : result,
      });
    }
  };

  const validateForm = () => {
    let temp = {};
    let isValid = true;

    Object.keys(validators).forEach((field) => {
      const result = validators[field](formData[field]);
      if (result !== true) {
        temp[field] = result;
        isValid = false;
      }
    });

    setErrors(temp);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    alert("✅ Thank you! We’ll contact you soon.");

    setFormData({
      name: "",
      email: "",
      countryCode: "+91",
      phone: "",
      state: "",
      program: "",
    });

    setErrors({});
  };

  return (
    <div className="w-full bg-gray-50">
      {/* ================= TOP SECTION ================= */}
      <h2 className="text-5xl font-bold px-14 py-8 bg-[#0A2342] text-yellow-400 mb-8">
        Pass out Students
      </h2>
      <div className="max-w-7xl mx-auto py-2 px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* ---------- LEFT: CONTACT INFO ---------- */}
        <div>
          <h2 className="text-4xl font-extrabold text-[#0A2342] mb-8">
            Alumni Form
          </h2>

          <ul className="space-y-6">
            {contactInfo.map((item, index) => (
              <li key={index}>
                <a
                  href={item.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <span
                    className="bg-yellow-400 text-[#0A2342] p-3 rounded-lg text-xl 
                    transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                  >
                    {item.icon}
                  </span>

                  <p className="text-gray-800 whitespace-pre-line group-hover:text-[#0A2342] transition">
                    {item.label}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- RIGHT: FORM BOX ---------- */}
        <div className="bg-[#0A2342] p-10 rounded-2xl shadow-2xl">
          <form className="space-y-6">
            {[
              {
                label: "Name",
                name: "name",
                placeholder: "Enter your full name",
                type: "text",
              },
              {
                label: "Email",
                name: "email",
                placeholder: "Enter your email",
                type: "email",
              },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-semibold text-gray-300 mb-1">
                  {field.label} <span className="text-red-400">*</span>
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md  text-gray-300 bg-white/20 border border-white/30 placeholder-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                  required
                />
                {errors[field.name] && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors[field.name]}
                  </p>
                )}
              </div>
            ))}

            {/* Registration Number */}
            <div>
              <label className="text-sm text-gray-300">
                Registration Number *
              </label>
              <input
                type="text"
                className="w-full bg-white/10 border border-gray-500 rounded p-3 mt-1 
      focus:outline-none focus:border-yellow-400 text-white"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="text-sm text-gray-300">Subject *</label>
              <input
                type="text"
                className="w-full bg-white/10 border border-gray-500 rounded p-3 mt-1 
      focus:outline-none focus:border-yellow-400 text-white"
              />
            </div>

            {/* Course & Semester */}
            <div>
              <label className="text-sm text-gray-300">
                Course & Semester *
              </label>
              <input
                type="text"
                className="w-full bg-white/10 border border-gray-500 rounded p-3 mt-1 
      focus:outline-none focus:border-yellow-400 text-white"
              />
            </div>

            {/* Teacher Name */}
            <div>
              <label className="text-sm text-gray-300">
                Name of the Teacher (Subject Taught) *
              </label>
              <input
                type="text"
                className="w-full bg-white/10 border border-gray-500 rounded p-3 mt-1 
      focus:outline-none focus:border-yellow-400 text-white"
              />
            </div>

            {/* Contact No */}
            <div>
              <label className="block text-sm  text-gray-300 font-semibold mb-1">
                Phone No. <span className="text-red-400">*</span>
              </label>

              <div className="flex gap-3">
                {/* Country Code */}
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="w-28 p-3 rounded-md bg-white/20 border border-white/30 text-white focus:text-black focus:bg-white"
                >
                  {countryCodes.map((c, i) => (
                    <option key={i} value={c.code}>
                      {c.flag} {c.code}
                    </option>
                  ))}
                </select>

                {/* Phone Input */}
                <input
                  type="tel"
                  name="phone"
                  maxLength="12"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={(e) => {
                    const numericValue = e.target.value.replace(/[^0-9]/g, ""); // only digits
                    setFormData({ ...formData, phone: numericValue });
                    setErrors({ ...errors, phone: "" });
                  }}
                  className="w-10 flex-1 p-3 rounded-md bg-white/20 border border-white/30 placeholder-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Date */}
            <div>
              <label className="text-sm text-gray-300">
                Date of Feedback *
              </label>
              <input
                type="date"
                className="w-full bg-white/10 border border-gray-500 rounded p-3 mt-1 text-white
      focus:outline-none focus:border-yellow-400"
              />
            </div>

            {/* Dropdown Template Component */}
            {[
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
            ].map((question, index) => (
              <div key={index}>
                <label className="text-sm text-gray-300">{question}</label>
                <select
                  className="w-full bg-white/10 border border-gray-500 rounded p-3 mt-1 text-white 
        focus:outline-none focus:border-yellow-400"
                >
                  <option className="text-black">
                    —Please choose an option—
                  </option>
                  <option className="text-black">Excellent</option>
                  <option className="text-black">Good</option>
                  <option className="text-black">Average</option>
                  <option className="text-black">Poor</option>
                </select>
              </div>
            ))}

            {/* Suggestions */}
            <div>
              <label className="text-sm text-gray-300">
                Opinion / Suggestion about the institution
              </label>
              <textarea
                rows="4"
                className="w-full bg-white/10 border border-gray-500 rounded p-3 mt-1 
      focus:outline-none focus:border-yellow-400 text-white"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-yellow-400 text-black px-8 py-3 rounded font-semibold 
    hover:bg-yellow-500 transition mt-4 w-full md:w-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <WhyChose />
    </div>
  );
}
