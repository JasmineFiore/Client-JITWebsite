import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import JITLogo from "/images/jitlogo.jpg";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-[#0A2342]/90 to-[#0A2342] text-white">
      {/* 🔹 Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-center md:text-left border-b border-gray-700">
        {/* Logo + Description */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={JITLogo}
            alt="JIT Logo"
            className="w-36 sm:w-40 mb-4 mx-auto md:mx-0"
          />
          <p className="text-sm text-gray-300 mb-5 max-w-xs">
            JIT believes in quality and affordable education by leveraging all
            tools of modern education.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4">
            {[
              { icon: <FaFacebookF />, link: "#" },
              { icon: <FaTwitter />, link: "#" },
              { icon: <FaYoutube />, link: "#" },
              { icon: <FaLinkedinIn />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="bg-[#aaae7f] text-[#0A2342] p-2 rounded-full hover:scale-110 transition transform duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-[#aaae7f]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              "Courses",
              "Admissions",
              "Placements",
              "Research & Publications",
              "Certifications",
              "Contact Us",
            ].map((item, i) => (
              <li key={i}>
                <a href="#" className="hover:text-[#aaae7f] transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-[#aaae7f]">About</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              "History",
              "Mission & Vision",
              "Our Faculty",
              "Privacy Policy",
              "JIT Radio",
            ].map((item, i) => (
              <li key={i}>
                <a href="#" className="hover:text-[#aaae7f] transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Feedback Forms */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-[#aaae7f]">
            Feedback Forms
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              "Student Feedback",
              "Staff Feedback",
              "Alumni Feedback",
              "Parents Feedback",
              "Employer’s Feedback",
            ].map((item, i) => (
              <li key={i}>
                <a href="#" className="hover:text-[#aaae7f] transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Student Corner */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-[#aaae7f]">
            Student Corner
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {["Syllabus", "T&P Cell", "Anti Ragging", "Pass Out Student"].map(
              (item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-[#aaae7f] transition">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* 🔹 Bottom Bar */}
      <div className="py-5 px-6 flex flex-col md:flex-row items-center justify-center md:justify-between text-gray-300 text-sm space-y-3 md:space-y-0">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} JIT. All rights reserved.
        </p>

        <p className="flex items-center justify-center space-x-1 text-center">
          <span>Made</span>
          <span className="text-[#aaae7f] text-lg animate-pulse">❀˖°</span>
          <span>by Jasmine Fiore</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
