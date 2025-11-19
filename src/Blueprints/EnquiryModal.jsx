import { useEffect, useRef } from "react";

export default function EnquiryModal({ isOpen, onClose }) {
  const modalRef = useRef(null);

  // Close when clicking outside the modal
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      // Lock scroll when modal is open
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // Unlock scroll when modal closes
      document.body.style.overflow = "auto";
    }

    return () => {
      // Clean up listener and unlock scroll
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center bg-black/50 backdrop-blur-sm overflow-y-auto"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
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

        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-[#0A2342] mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A2342]"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-[#0A2342] mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A2342]"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-[#0A2342] mb-1">
              Phone No. <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A2342]"
              required
            />
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-semibold text-[#0A2342] mb-1">
              Select your State <span className="text-red-500">*</span>
            </label>
            <select className="w-full p-2 border border-gray-400 rounded-md text-white focus:text-black focus:bg-white">
              <option value="">Select State</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Delhi">Delhi</option>
              <option value="Haryana">Haryana</option>
            </select>
          </div>

          {/* Program */}
          <div>
            <label className="block text-sm font-semibold text-[#0A2342] mb-1">
              Select Program Applying For{" "}
              <span className="text-red-500">*</span>
            </label>
            <select className="w-full p-2 border border-gray-400 rounded-md text-white focus:text-black focus:bg-white">
              <option value="">Select Program</option>
              <option>B.Tech CSE (AI & ML)</option>
              <option>B.Tech Civil</option>
              <option>B.Tech ECE</option>
            </select>
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
