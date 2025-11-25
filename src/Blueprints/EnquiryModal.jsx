import { useEffect, useRef, useState } from "react";
import countryCodes from "../data/countryCodes";
import { validateField, validateForm } from "../data/validation";
import axios from "axios";

export default function EnquiryModal({ isOpen, onClose }) {
  const modalRef = useRef(null);

  const initialForm = {
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    state: "",
    program: "",
  };

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData(initialForm);
      setErrors({});
    }
  }, [isOpen]);

  // Close on outside click + disable scroll
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // OnBlur field validation
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const errorMessage = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMessage }));
  };

  // Full form validation on submit
  const validate = () => {
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!validate()) return;

    // try {
    //   await axios.post("http://localhost:5000/api/send-feedback", formData);
    //   alert("✅ Your request has been submitted! We will contact you soon.");

    //   // Reset form
    //   setFormData({});
    //   setErrors({});
    // } catch (err) {
    //   console.error(err);
    //   alert("❌ Failed to submit form. Try again later.");
    // }
    alert("✅ Your request has been submitted! We will contact you soon.");
    // Reset form
      setFormData({});
      setErrors({});
    setLoading(false);
    console.log("FORM SUBMITTED:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/50 backdrop-blur-sm overflow-y-auto">
      <div
        ref={modalRef}
        className="bg-[#f4c542] rounded-lg shadow-2xl w-[90%] md:w-[600px] my-4 p-4 relative animate-fadeIn"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-black text-2xl font-bold hover:text-red-600 cursor-pointer"
        >
          ✕
        </button>

        <h2 className="text-2xl md:text-3xl font-bold text-[#0A2342] text-center mb-6">
          SCHEDULE A CALL
        </h2>

        <form className="space-y-2" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-[#0A2342] mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full p-2 bg-white border rounded-md ${
                errors.name ? "border-red-500" : "border-gray-400"
              }`}
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-[#0A2342] mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full p-2 bg-white border rounded-md ${
                errors.email ? "border-red-500" : "border-gray-400"
              }`}
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-[#0A2342] mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>

            <div className="flex gap-2">
              {/* Country Code */}
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="w-28 p-3 rounded-md bg-white border text-gray-900"
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
                type="tel"
                maxLength="12"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={(e) => {
                  const numericValue = e.target.value.replace(/[^0-9]/g, ""); // only digits
                  setFormData({ ...formData, phone: numericValue });
                  setErrors({ ...errors, phone: "" });
                }}
                onBlur={handleBlur}
                className={`w-10 flex-1 p-3 rounded-md bg-white border ${
                  errors.phone ? "border-red-500" : "border-gray-400"
                }`}
              />
            </div>

            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-semibold text-[#0A2342] mb-1">
              Select Your State <span className="text-red-500">*</span>
            </label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full p-3 bg-white border rounded-md ${
                errors.state ? "border-red-500" : "border-gray-400"
              }`}
            >
              <option value="">Select State</option>
              {/* State list */}
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
              <option>Delhi</option>
              <option>Jammu & Kashmir</option>
              <option>Ladakh</option>
              <option>Lakshadweep</option>
              <option>Puducherry</option>
            </select>

            {errors.state && (
              <p className="text-red-600 text-sm mt-1">{errors.state}</p>
            )}
          </div>

          {/* Program */}
          <div>
            <label className="block text-sm font-semibold text-[#0A2342] mb-1">
              Program Applying For <span className="text-red-500">*</span>
            </label>

            <select
              name="program"
              value={formData.program}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full p-3 bg-white border rounded-md ${
                errors.program ? "border-red-500" : "border-gray-400"
              }`}
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

            {errors.program && (
              <p className="text-red-600 text-sm mt-1">{errors.program}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            // className="bg-[#0A2342] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#12315b] transition-all w-full cursor-pointer"
            className={`w-full font-semibold py-3 rounded transition
  ${
    loading
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-[#0A2342] text-white hover:bg-indigo-900 cursor-pointer"
  }`}
          >
            {loading ? "Submitting..." : "Schedule a Call"}
          </button>
        </form>
      </div>
    </div>
  );
}
