import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
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
      <div className="max-w-7xl mx-auto py-20 px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* ---------- LEFT: CONTACT INFO ---------- */}
        <div>
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
          <form className="space-y-6">
            <div>
              <label className="text-sm text-gray-300">Name *</label>
              <input
                type="text"
                className="w-full bg-white/10 border border-gray-500 rounded p-3 mt-1 
                focus:outline-none focus:border-yellow-400 text-white"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Email *</label>
              <input
                type="email"
                className="w-full bg-white/10 border border-gray-500 rounded p-3 mt-1 
                focus:outline-none focus:border-yellow-400 text-white"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Phone *</label>
              <input
                type="text"
                className="w-full bg-white/10 border border-gray-500 rounded p-3 mt-1 
                focus:outline-none focus:border-yellow-400 text-white"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">
                Select Your State *
              </label>
              <select className="w-full bg-white/10 border border-gray-500 rounded p-3 mt-1 text-white">
                <option className="text-black">-- Please Select --</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-300">
                Program Category *
              </label>
              <select className="w-full bg-white/10 border border-gray-500 rounded p-3 mt-1 text-white">
                <option className="text-black">-- Please Select --</option>
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
