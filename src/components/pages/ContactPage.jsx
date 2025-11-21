import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import countryCodes from "../../data/countryCodes";

export default function ContactPage() {
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let temp = {};
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      temp.name = "Name is required";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      temp.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      temp.email = "Enter a valid email address";
      isValid = false;
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim()) {
      temp.phone = "Phone number is required";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      temp.phone = "Phone must be 10 digits only";
      isValid = false;
    }

    // State validation
    if (!formData.state) {
      temp.state = "Please select your state";
      isValid = false;
    }

    // Program validation
    if (!formData.program) {
      temp.program = "Please select a program";
      isValid = false;
    }

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
      label: "admissions@jit.edu.in",
      action: "mailto:admissions@jit.edu.in",
    },
    {
      icon: <FaEnvelope />,
      label: "info@jit.edu.in",
      action: "mailto:info@jit.edu.in",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: `Jahangirabad Educational Trust Group Of Institutions,
Jahangirabad, Barabanki District,
Uttar Pradesh 225203, India`,
      action: "https://maps.app.goo.gl/6ALHKXG8LZ2iYC3X7", // <-- Your map link
      isAddress: true,
    },
  ];

  return (
    <div className="w-full bg-gray-50">
      {/* ================= TOP SECTION ================= */}
      <div className="max-w-7xl mx-auto py-10 px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* ---------- LEFT: CONTACT INFO ---------- */}
        <div className="max-w-72">
          <h2 className="text-4xl font-extrabold text-[#0A2342] mb-8">
            Contact Us
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
          <form className="space-y-6" onSubmit={handleSubmit}>
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
                  className="w-full p-3 rounded-md  text-gray-900 bg-white border placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                  required
                />
                {errors[field.name] && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors[field.name]}
                  </p>
                )}
              </div>
            ))}

            {/* Phone Number with Country Code */}
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
                  className="w-28 p-3 rounded-md bg-white border border-white/30 text-gray-900 focus:text-black focus:bg-white"
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
                  className="flex-1 p-3 rounded-md text-gray-900 bg-white border border-white/30 placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-300 font-semibold mb-1">
                Select your State <span className="text-red-400">*</span>
              </label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white border border-white text-gray-900 focus:text-gray-900 focus:bg-white"
              >
                <option value="">Select State</option>

                {/* States */}
                <option>Andhra Pradesh</option>
                <option>Arunachal Pradesh</option>
                <option>Assam</option>
                <option>Bihar</option>
                <option>Chhattisgarh</option>
                <option>Goa</option>
                <option>Gujarat</option>
                <option>Haryana</option>
                <option>Himachal Pradesh</option>
                <option>Jharkhand</option>
                <option>Karnataka</option>
                <option>Kerala</option>
                <option>Madhya Pradesh</option>
                <option>Maharashtra</option>
                <option>Manipur</option>
                <option>Meghalaya</option>
                <option>Mizoram</option>
                <option>Nagaland</option>
                <option>Odisha</option>
                <option>Punjab</option>
                <option>Rajasthan</option>
                <option>Sikkim</option>
                <option>Tamil Nadu</option>
                <option>Telangana</option>
                <option>Tripura</option>
                <option>Uttar Pradesh</option>
                <option>Uttarakhand</option>
                <option>West Bengal</option>

                {/* <!-- Union Territories --> */}
                <option>Andaman and Nicobar Islands</option>
                <option>Chandigarh</option>
                <option>Dadra and Nagar Haveli and Daman and Diu</option>
                <option>Delhi</option>
                <option>Ladakh</option>
                <option>Lakshadweep</option>
                <option>Puducherry</option>
                <option>Jammu and Kashmir</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-300 font-semibold mb-1">
                Select Program Applying For{" "}
                <span className="text-red-400">*</span>
              </label>
              <select
                name="program"
                value={formData.program}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white border border-white text-gray-900 focus:text-gray-900 focus:bg-white"
              >
                <option value="">Select Program</option>
                <option>MBA</option>
                <option>Engineering</option>
                <option>Engineering Diploma</option>
                <option>B. Pharm</option>
                <option>D. Pharm</option>
                <option>Bachelor of Arts</option>
                <option>PG Diploma</option>
                <option>Journalism</option>
                <option>ITI</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-yellow-400 text-black px-8 py-3 rounded font-semibold 
              hover:bg-yellow-500 transition mt-4 w-full md:w-auto"
            >
              Apply Now
            </button>
          </form>
        </div>
      </div>

      {/* ================= GOOGLE MAP ================= */}
      <div className="w-full">
        <iframe
          title="JIT College Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.236242021459!2d81.2365822!3d26.9910757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999614ce0b2c8f7%3A0x928a633385db01c7!2sJahangirabad%20Educational%20Trust%20Group%20Of%20Institutions!5e0!3m2!1sen!2sin!4v1763095002272!5m2!1sen!2sin"
          width="100%"
          height="500"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0 shadow-inner"
        ></iframe>
      </div>
    </div>
  );
}
