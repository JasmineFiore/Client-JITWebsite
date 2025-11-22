import { useEffect, useRef, useState } from "react";
import countryCodes from "../data/countryCodes";

export default function EnquiryModal({ isOpen, onClose }) {
  const modalRef = useRef(null);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    state: "",
    program: "",
  });

  useEffect(() => {
    if (isOpen) {
      // Reset form every time modal opens
      setFormData({
        name: "",
        email: "",
        countryCode: "+91",
        phone: "",
        state: "",
        program: "",
      });

      setErrors({});
    }
  }, [isOpen]);

  // Error state
  const [errors, setErrors] = useState({});

  // Close when clicking outside modal + lock scroll
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

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Validation
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[0-9]{7,12}$/.test(formData.phone))
      newErrors.phone = "Enter a valid phone number";

    if (!formData.state) newErrors.state = "Select your state";
    if (!formData.program) newErrors.program = "Select a program";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("FORM SUBMITTED:", formData);

    alert("Your request has been submitted! We will contact you soon.");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/50 backdrop-blur-sm overflow-y-auto">
      <div
        ref={modalRef}
        className="bg-[#f4c542] rounded-lg shadow-2xl w-[90%] md:w-[600px] my-10 p-8 relative animate-fadeIn"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-black text-2xl font-bold hover:text-red-600"
        >
          ✕
        </button>

        <h2 className="text-2xl md:text-3xl font-bold text-[#0A2342] text-center mb-6">
          SCHEDULE A CALL
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
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
              className={`w-full p-2 text-gray-900 bg-white  placeholder-gray-400 border rounded-md focus:ring-2 focus:ring-[#0A2342] ${
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
              className={`w-full p-2 text-gray-900 bg-white  placeholder-gray-400 border rounded-md focus:ring-2 focus:ring-[#0A2342] ${
                errors.email ? "border-red-500" : "border-gray-400"
              }`}
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone + Country Code */}
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
                className={`w-10 flex-1 p-3 rounded-md text-gray-900 bg-white border border-white/30 placeholder-gray-400 focus:ring-2 focus:ring-gray-500 focus:outline-none ${
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
              className={`w-full p-3 rounded-md bg-white border border-white text-gray-900 focus:text-gray-900 focus:bg-white ${
                errors.state ? "border-red-500" : "border-gray-400"
              }`}
            >
              <option value="">Select State</option>

              {/* Indian States */}
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>

              {/* Union Territories */}
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Dadra and Nagar Haveli and Daman & Diu">
                Dadra & Nagar Haveli and Daman & Diu
              </option>
              <option value="Delhi">Delhi</option>
              <option value="Jammu & Kashmir">Jammu & Kashmir</option>
              <option value="Ladakh">Ladakh</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Puducherry">Puducherry</option>
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
              className={`w-full p-3 rounded-md bg-white border border-white text-gray-900 focus:text-gray-900 focus:bg-white ${
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
            className="bg-[#0A2342] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#12315b] transition-all w-full"
          >
            Schedule a Call
          </button>
        </form>
      </div>
    </div>
  );
}
