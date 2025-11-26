import { useState } from "react";
import { motion } from "framer-motion";
import countryCodes from "../../data/countryCodes";
import {
  validateField,
  validateForm as validateAll,
} from "../../data/validation";

export default function CounsellingSection() {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
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

    // Clear specific field error on change
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const message = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // 1️⃣ Perform validation
    const newErrors = validateAll(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      // Scroll to the first invalid field
      const firstErrorField = Object.keys(newErrors)[0];
      const el = document.querySelector(`[name="${firstErrorField}"]`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.focus();
      }

      setLoading(false); // Stop loading if errors
      return;
    }

    // 2️⃣ Send data to backend
    // try {
    //   await axios.post("http://localhost:5000/api/send-feedback", formData);
    //   alert("✅ Form submitted successfully!");

    //   // Reset form
    //   setFormData({
    //     name: "",
    //     email: "",
    //     countryCode: "+91",
    //     phone: "",
    //     state: "",
    //     program: "",
    //     // add other fields if needed
    //   });
    //   setErrors({});
    // } catch (err) {
    //   console.error(err);
    //   alert("❌ Failed to submit form. Try again later.");
    // }

    alert("✅ Form submitted successfully!");

    // Reset form
    setFormData({
      name: "",
      email: "",
      countryCode: "+91",
      phone: "",
      state: "",
      program: "",
      // add other fields if needed
    });
    setErrors({});
    setLoading(false);
    console.log("formData is ", formData);
  };

  return (
    <section className="relative flex flex-col md:flex-row w-full min-h-[80vh] bg-linear-to-br from-[#0A2342] via-[#0A2342] to-[#5b7553]/50 overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-[#a6b97f]/20 rounded-full blur-3xl"></div>
      {/* Left Section */}
      <div className="flex-1 text-white flex flex-col justify-center px-8 md:px-20  space-y-6">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-yellow-500 text-lg pt-6 font-semibold tracking-wide"
        >
          Unleash Your Potential with Our Cutting-Edge Curriculum!
        </motion.h3>

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          Request a <span className="text-yellow-500">Free Counselling</span>{" "}
          Today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-200 leading-relaxed max-w-md"
        >
          Apply now to join JIT and transform your career with our
          industry-leading programs. Our expert counselors will guide you in
          choosing the right path to success — the process takes just a few
          minutes!
        </motion.p>
      </div>

      {/* Right Section - Form */}
      <div className="flex-1 flex items-center justify-center px-8 py-8">
        <motion.form
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl text-white border border-white/20 space-y-4"
        >
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
              <label className="block text-sm font-semibold mb-1">
                {field.label} <span className="text-red-400">*</span>
              </label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full p-3 rounded-md bg-white/20 border border-white/30 placeholder-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
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
            <label className="block text-sm font-semibold mb-1">
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
                name="phone"
                maxLength="12"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={(e) => {
                  const numericValue = e.target.value.replace(/[^0-9]/g, ""); // only digits
                  setFormData({ ...formData, phone: numericValue });
                  setErrors({ ...errors, phone: "" });
                }}
                onBlur={handleBlur}
                className="w-10 flex-1 p-3 rounded-md bg-white/20 border border-white/30 placeholder-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              />
            </div>

            {errors.phone && (
              <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Select your State <span className="text-red-400">*</span>
            </label>

            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full p-3 rounded-md bg-white/20 border border-white/30 text-white focus:text-black focus:bg-white"
            >
              <option value="" disabled>
                Select State
              </option>
              {/* All states */}
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
            {errors.state && (
              <p className="text-red-400 text-sm mt-1">{errors.state}</p>
            )}
          </div>

          {/* Program */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Select Program Applying For{" "}
              <span className="text-red-400">*</span>
            </label>

            <select
              name="program"
              value={formData.program}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full p-3 rounded-md bg-white/20 border border-white/30 text-white focus:text-black focus:bg-white"
            >
              <option value="" disabled>
                Select Program
              </option>
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

            {errors.program && (
              <p className="text-red-400 text-sm mt-1">{errors.program}</p>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className={`bg-linear-to-r from-[#0A2342]/50 to-[#0A2342]/30 text-yellow-500 cursor-pointer font-semibold px-6 py-3 rounded-lg w-full shadow-md hover:shadow-xl transition-all
        
            $
            {loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#0A2342] text-white hover:bg-indigo-900 cursor-pointer"}
            `}
          >
            {loading ? "Submitting..." : "Apply Now"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
