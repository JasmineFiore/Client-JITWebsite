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
    <footer className=" bg-gradient-to-tr from-[#0A2342] via-[#0A2342] to-[#0f130e]/50 text-[#0f130e]">
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
              {
                icon: <FaFacebookF />,
                link: "https://www.facebook.com/jit.edu",
                title: "Facebook",
              },
              {
                icon: <FaTwitter />,
                link: "https://twitter.com/JetgiJit",
                title: "Twitter",
              },
              {
                icon: <FaYoutube />,
                link: "https://www.youtube.com/channel/UCVjZOg-Nw3oV5M6caupAbJw",
                title: "YouTube",
              },
              {
                icon: <FaLinkedinIn />,
                link: "https://www.linkedin.com/school/jit.edu/",
                title: "LinkedIn",
              },
              {
                icon: <FaInstagram />,
                link: "https://www.instagram.com/jetg_jit/",
                title: "Instagram",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                title={item.title} // ⭐ Tooltip text on hover
                className="bg-yellow-500 text-[#0A2342] p-2 rounded-full hover:scale-110 transition transform duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-yellow-500">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm text-gray-300">
            {[
              { label: "Courses", link: "/courses" },
              {
                label: "Admissions",
                link: "/pdfs/NOTIFICATION_UPTAC_2025.pdf",
              },
              { label: "Placements", link: "/placements" },
              {
                label: "Research & Publications",
                link: "/research",
                disabled: true,
              },
              {
                label: "Certifications",
                link: "/certifications",
                disabled: true,
              },
              { label: "Contact Us", link: "/contact" },
            ].map((item, i) => (
              <li key={i}>
                {item.disabled ? (
                  <span className="pointer-events-none opacity-50">
                    {item.label}
                  </span>
                ) : (
                  <a
                    href={item.link}
                    className="hover:text-yellow-500 transition"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-yellow-500">About</h3>

          <ul className="space-y-2 text-sm text-gray-300">
            {[
              { label: "History", link: "/history" },
              { label: "Vision & Mission", link: "/vision-mission" },
              { label: "Our Faculty", link: "/faculty" },
              { label: "Privacy Policy", link: "/privacy-policy" },
              { label: "JIT Radio", link: "/jit-radio", disabled: true }, // Example disabled
            ].map((item, i) => (
              <li key={i}>
                {item.disabled ? (
                  <span className="cursor-not-allowed opacity-50">
                    {item.label}
                  </span>
                ) : (
                  <a
                    href={item.link}
                    className="hover:text-yellow-500 transition"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Feedback Forms */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-yellow-500">
            Feedback Forms
          </h3>

          <ul className="space-y-2 text-sm text-gray-300">
            {[
              { label: "Student Feedback", link: "/student-feedback" },
              { label: "Staff Feedback", link: "/staff-feedback" },
              { label: "Alumni Feedback", link: "/alumni-feedback" },
              { label: "Parents Feedback", link: "/feedback/parents" },
              { label: "Employer’s Feedback", link: "/feedback/employer" },
            ].map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  className="hover:text-yellow-500 transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Student Corner */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-yellow-500">
            Student Corner
          </h3>

          <ul className="space-y-2 text-sm text-gray-300">
            {[
              { label: "Syllabus", link: "/syllabus" },
              { label: "T&P Cell", link: "/tp-cell" },
              { label: "Anti Ragging", link: "/anti-ragging" },
              { label: "Pass Out Student", link: "/pass-out-students" },
            ].map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  className="hover:text-yellow-500 transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
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
