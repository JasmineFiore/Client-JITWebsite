import { useEffect, useState } from "react";
import {
  FaBars,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaMapMarkerAlt,
  FaPhoneSquare,
  FaSearch,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import SearchModal from "./SearchModal";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const location = useLocation();
  let timeoutId = null;

  // ✅ Close mobile menu & dropdown whenever route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMenu(null);
  }, [location.pathname]);

  const handleMouseEnter = (menu) => {
    if (window.innerWidth < 1024) return; // Disable hover on mobile
    clearTimeout(timeoutId);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth < 1024) return;
    timeoutId = setTimeout(() => setActiveMenu(null), 150);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    setActiveMenu(null);
  };

  const handleLinkClick = () => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
  };

  // ✅ Detect scroll position
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";
  const navbarBg = isHome && !isScrolled ? "bg-white/30" : "bg-white shadow-md";
  const textColor = isHome && !isScrolled ? "text-green-100" : "text-black";
  const hoverColor =
    isHome && !isScrolled ? "hover:text-yellow-300" : "hover:text-blue-700";

  const contactItems = [
    {
      icon: <FaPhoneSquare />,
      label: "+91 73111 94686",
      action: "tel:+917311194686",
    },
    {
      icon: <FaPhoneSquare />,
      label: "+91 73808 32222",
      action: "tel:+917380832222",
    },
    {
      icon: <FaMailBulk />,
      label: "admissions@jit.edu.in",
      action: "mailto:admissions@jit.edu.in",
    },
    {
      icon: <FaMailBulk />,
      label: "info@jit.edu.in",
      action: "mailto:info@jit.edu.in",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-[background-color] duration-300 ${navbarBg} ${textColor}`}
    >
      {/* 🔸 Top Bar */}
      <div className="flex justify-between items-center px-4 sm:px-8 py-3 bg-black/20 backdrop-blur-sm">
        {/* Left: Logo + Name */}
        <div className="flex items-center gap-3">
          <img
            src="/images/jitlogocrop.jpg"
            alt="JIT Logo"
            className="h-12 sm:h-14"
          />
          <div>
            <h1 className="text-lg sm:text-2xl font-bold leading-tight">
              Jahangirabad Institute of Technology
            </h1>
            <div className="hidden md:flex items-center gap-2 text-sm">
              <FaMapMarkerAlt className="text-yellow-400" />
              <span> Lucknow, Uttar Pradesh, India</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 text-sm">
          {/* Contact Items */}
          <div className="hidden lg:flex flex-col  text-right">
            {contactItems.slice(0, 2).map((item, index) => (
              <a
                key={index}
                href={item.action}
                className="flex items-center -gap-1 hover:text-blue-400 transition"
              >
                {/* <span className="text-black">{item.icon}</span> */}
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          <div className="hidden lg:flex flex-col leading-tight text-right">
            {contactItems.slice(2, 4).map((item, index) => (
              <a
                key={index}
                href={item.action}
                className="flex items-center gap-1 hover:text-blue-400 transition"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {/* Student Login Button */}
          {/* <Link
            to="/student-login"
            className="hidden md:block bg-[#082648] text-white px-1 py-1 rounded-md hover:bg-blue-700 transition"
          >
            Student Login
          </Link> */}

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-2 text-xl">
            <button
              onClick={() =>
                window.open("https://www.facebook.com/jit.edu", "_blank")
              }
              title="Facebook"
              className="hover:opacity-80 transition cursor-pointer"
            >
              <FaFacebookF className={hoverColor} />
            </button>

            <button
              onClick={() =>
                window.open("https://twitter.com/JetgiJit", "_blank")
              }
              title="Twitter"
              className="hover:opacity-80 transition cursor-pointer"
            >
              <FaTwitter className={hoverColor} />
            </button>

            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/school/jit.edu/",
                  "_blank"
                )
              }
              title="LinkedIn"
              className="hover:opacity-80 transition cursor-pointer"
            >
              <FaLinkedin className={hoverColor} />
            </button>

            <button
              onClick={() =>
                window.open("https://www.instagram.com/jetg_jit/", "_blank")
              }
              title="Instagram"
              className="hover:opacity-80 transition cursor-pointer"
            >
              <FaInstagram className={hoverColor} />
            </button>
          </div>

          {/* Search Icon */}
          <FaSearch
            title="Search"
            onClick={() => setIsSearchOpen(true)}
            className={`text-3xl cursor-pointer hidden md:block ${hoverColor}`}
          />

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="text-2xl md:hidden focus:outline-none"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* 🔹 Navigation Menu */}
      <nav
        className={`relative ${
          mobileMenuOpen
            ? "max-h-screen opacity-100 pointer-events-auto"
            : "max-h-0 opacity-0 pointer-events-none md:max-h-none md:opacity-100 md:pointer-events-auto"
        } bg-white ${textColor} md:bg-transparent `}
      >
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center md:gap-6 p-4 md:p-0 font-semibold uppercase text-sm tracking-wide">
          {[
            { label: "Home", path: "/" },
            {
              label: "ABOUT US",
              dropdown: [
                { label: "Chairman’s Message", path: "/chairman" },
                { label: "Director", path: "/director" },
                { label: "History", path: "/history" },
                { label: "Vision & Mission", path: "/vision-mission" },
                { label: "Affiliation & Recognition", path: "/affiliation" },
              ],
            },
            {
              label: "ADMISSION & FACULTY",
              dropdown: [
                {
                  label: "College of Engineering",
                  path: "/CollegeOfEngineering",
                },
                { label: "College of Pharmacy", path: "/CollegeOfPharmacy" },
                {
                  label: "College of Business & Commerce",
                  path: "/CollegeOfBusiness",
                },
                { label: "College of Arts", path: "/CollegeOfArts" },
                {
                  label: "College of Media & Journalism",
                  path: "/CollegeOfMedia",
                },
                {
                  label: "College of ITI",
                  path: "/CollegeOfITI",
                },
              ],
            },

            { label: "COURSES", dropdown: ["COURSES"] },
            {
              label: "LIFE @ JIT",
              dropdown: [
                {
                  label: "Students Corner",
                  children: [
                    { label: "Student Feedback", path: "/student-feedback" },
                    { label: "Pass out Students", path: "/pass-out-students" },
                    // {
                    //   label: "Achievements & Awards",
                    //   path: "/achievements-awards",
                    // },
                    {
                      label: "Hostel Facilities",
                      path: "/hostel-facilities",
                    },
                  ],
                },
                {
                  label: "Teachers Corner",
                  children: [
                    { label: "Staff Feedback", path: "/staff-feedback" },
                    // {
                    //   label: "Achievements & Awards",
                    //   path: "/achievements-awards",
                    // },
                  ],
                },
                {
                  label: "E-Newsletter",
                  path: "/e-Newsletter",
                },

                {
                  label: "JIT in News",
                  path: "/JIT-in-news",
                },
                {
                  label: "JIT Events & Awards",
                  path: "/JIT-events",
                },
                {
                  label: "Media & Gallery",
                  path: "/media-gallery",
                },
              ],
            },
            {
              label: "PLACEMENTS",
              dropdown: [
                {
                  label: "PLACEMENTS",
                  path: "/placements",
                },
                { label: "T&P Cell", path: "/tp-cell" },
                {
                  label: "Our Recruiters",
                  path: "/recruiters",
                },
              ],
            },

            { label: "Mandatory", path: "/mandatory" },
            { label: "Career", path: "/career" },
            { label: "Contact", path: "/contact" },
            {
              label: "STUDENT LOGIN",
              onClick: () => {
                window.open(
                  "https://jit-cet.uc-school.com/site/mobile-registration",
                  "_blank"
                );
                setMobileMenuOpen(false); // close mobile menu
              },
            },
          ].map((item) => (
            <div
              key={item.label}
              className="relative w-full md:w-auto"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              {item.dropdown ? (
                // 🔸 Dropdown Button
                <button
                  className={`block w-full text-left px-3 py-2 transition-colors duration-300 cursor-pointer ${hoverColor}`}
                  onClick={() =>
                    setActiveMenu(activeMenu === item.label ? null : item.label)
                  }
                >
                  {item.label}
                </button>
              ) : item.onClick ? (
                <button
                  className={`block px-3 py-2 text-left w-full cursor-pointer ${hoverColor} transition duration-300`}
                  onClick={item.onClick}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  to={item.path}
                  className={`block px-3 py-2 ${hoverColor} transition duration-300`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}

              {/* 🔽 About Us Dropdown */}
              {["ABOUT US", "ADMISSION & FACULTY"].includes(item.label) &&
                activeMenu === item.label && (
                  <div className="md:absolute left-1/2 md:-translate-x-1/2 top-full w-full md:w-[15vw] bg-white text-black shadow-lg p-4 rounded-lg mt-2 z-50">
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.path}
                          className="hover:text-blue-700 cursor-pointer block"
                          onClick={handleLinkClick}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

              {/* 🔽 Life @ JIT Dropdown */}
              {item.label === "LIFE @ JIT" && activeMenu === "LIFE @ JIT" && (
                <div
                  className="md:absolute left-1/2 md:-translate-x-1/2 top-full w-full md:w-[52vw] bg-white text-black shadow-lg p-6 rounded-lg mt-2 z-50 
  max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
                  style={{
                    WebkitOverflowScrolling: "touch",
                    scrollBehavior: "smooth",
                    overscrollBehavior: "contain", // prevents body scroll interference
                    paddingBottom: "10rem", // ensures bottom items are not cut off
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
                    {item.dropdown.map((sub) => (
                      <div key={sub.label}>
                        {/* Title (Students Corner / Teachers Corner / etc) */}
                        <h3 className="font-bold text-lg text-gray-800 border-b pb-1 mb-2">
                          {sub.label}
                        </h3>

                        {/* Case 1: Items WITH children */}
                        {sub.children ? (
                          <ul className="space-y-1 mb-3 text-xs ">
                            {sub.children.map((child) => (
                              <li key={child.label}>
                                <Link
                                  to={child.path}
                                  className="block hover:text-blue-700 px-2 py-1"
                                  onClick={handleLinkClick}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          /* Case 2: Items WITHOUT children */
                          <Link
                            to={sub.path}
                            onClick={handleLinkClick}
                            className="block hover:text-blue-700 px-2 py-1 space-y-1 mb-3 text-xs "
                          >
                            {sub.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 🔽 Placements Dropdown */}
              {item.label === "PLACEMENTS" && activeMenu === "PLACEMENTS" && (
                <div className="md:absolute left-1/2 md:-translate-x-1/2 top-full w-full md:w-[15vw] bg-white text-black shadow-lg p-4 rounded-lg mt-2 z-50">
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.path}
                        className="hover:text-blue-700 cursor-pointer block"
                        onClick={handleLinkClick}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* 🔽 Courses Dropdown */}
              {item.label === "COURSES" && activeMenu === "COURSES" && (
                <div
                  className="md:absolute left-1/2 md:-translate-x-1/2 top-full w-full md:w-[82vw] bg-white text-black shadow-lg p-6 rounded-lg mt-2 z-50 
  max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
                  style={{
                    WebkitOverflowScrolling: "touch",
                    scrollBehavior: "smooth",
                    overscrollBehavior: "contain", // prevents body scroll interference
                    paddingBottom: "14rem", // ensures bottom items are not cut off
                  }}
                >
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-xs">
                    {/* College of Engineering */}
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 border-b pb-1 mb-2">
                        <Link
                          to="/CollegeOfEngineering"
                          className="inline-block hover:text-blue-700 transition"
                        >
                          College of Engineering
                        </Link>
                      </h3>
                      <p className="font-semibold text-base">B.Tech Degree:</p>
                      <ul className="space-y-1 mb-3 text-xs border-b-2 border-gray-300 ">
                        {[
                          ["btech-cse", "Computer Science (CSE)"],
                          ["btech-aiml", "Artificial Intelligence (AIML)"],
                          ["btech-ee", "Electrical (EE)"],
                          ["btech-civil", "Civil (CE)"],
                          ["btech-mechanical", "Mechanical (ME)"],
                        ].map(([path, name]) => (
                          <li key={path}>
                            <Link
                              to={`/${path}`}
                              className="block hover:text-blue-700 px-2 py-1"
                              onClick={handleLinkClick}
                            >
                              {name}
                            </Link>
                          </li>
                        ))}
                      </ul>

                      <p className="font-semibold text-base">Diploma:</p>
                      <ul className="space-y-1 text-xs">
                        {[
                          ["diploma-cse", "Computer Science"],
                          ["diploma-ee", "Electrical"],
                          ["diploma-civil", "Civil"],
                          ["diploma-mechanical", "Mechanical"],
                          ["diploma-library", "Library & Info Science"],
                        ].map(([path, name]) => (
                          <li key={path}>
                            <Link
                              to={`/${path}`}
                              className="block hover:text-blue-700 px-2 py-1"
                              onClick={handleLinkClick}
                            >
                              {name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* College of Pharmacy */}
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 border-b pb-1 mb-2">
                        <Link
                          to="/CollegeOfPharmacy"
                          className="inline-block hover:text-blue-700 transition"
                        >
                          College of Pharmacy
                        </Link>
                      </h3>
                      <p className="font-semibold text-base">Degree:</p>
                      <ul className="space-y-1 mb-3 text-xs">
                        {[
                          // Pharm.D (Dr. of Pharmacy) these are left
                          // M.Pharm (Pharm. Chemistry)
                          // M.Pharm (Pharmaceutics)
                          // M.Pharm (Pharmacology)
                          ["b-pharma", "B.Pharm (Bachelor of Pharmacy)"],
                          [
                            "b-pharmalater",
                            "B.Pharm (Lateral Entry from D.Pharm)",
                          ],
                        ].map(([path, name]) => (
                          <li key={path}>
                            <Link
                              to={`/${path}`}
                              onClick={handleLinkClick}
                              className="block hover:text-blue-700 px-2 py-1"
                            >
                              {name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <p className="font-semibold text-base">Diploma:</p>
                      <ul className="space-y-1 text-xs">
                        {[
                          ["diploma-pharmacy", "D.Pharm (Diploma in Pharmacy)"],
                        ].map(([path, name]) => (
                          <li key={path}>
                            <Link
                              to={`/${path}`}
                              className="block hover:text-blue-700 px-2 py-1"
                              onClick={handleLinkClick}
                            >
                              {name}
                            </Link>
                          </li>
                        ))}

                        {/* <li>
                          <Link
                            to="/d-pharm"
                            className="block hover:text-blue-700 px-2 py-1"
                          >
                            D.Pharm
                          </Link>
                        </li> */}
                      </ul>
                    </div>

                    {/* College of Business */}
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 border-b pb-1 mb-2">
                        <Link
                          to="/CollegeOfBusiness"
                          className="inline-block hover:text-blue-700 transition"
                        >
                          College of Business
                        </Link>
                      </h3>
                      <ul className="space-y-1 text-xs">
                        {[
                          ["mba-it", "MBA IT"],
                          ["mba-it", "MBA IB"],
                          ["mba-finance", "MBA Finance"],
                          ["mba-marketing", "MBA Marketing"],
                          ["mba-hr", "MBA HR"],
                          ["bcom", "B.Com"],
                        ].map(([path, name], index) => (
                          <li key={`${path}-${index}`}>
                            <Link
                              to={`/${path}`}
                              onClick={handleLinkClick}
                              className="block hover:text-blue-700 px-2 py-1"
                            >
                              {name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* College of Media */}
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 border-b pb-1 mb-2">
                        <Link
                          to="/CollegeOfMedia"
                          className="inline-block hover:text-blue-700 transition"
                        >
                          College of Media & Journalism
                        </Link>
                      </h3>
                      <ul className="space-y-1 text-xs">
                        {[
                          ["ba-journalism", "BA Journalism"],
                          ["acting-cert", "Acting Certificate"],
                          ["film-making", "Film Making"],
                          ["anchoring", "Anchoring"],
                          ["video-editing", "Video Editing"],
                        ].map(([path, name]) => (
                          <li key={path}>
                            <Link
                              // to={`/${path}`}
                              onClick={handleLinkClick}
                              className="block hover:text-blue-700 px-2 py-1"
                            >
                              {name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* College of Arts */}
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 border-b pb-1 mb-2">
                        <Link
                          to="/CollegeOfArts"
                          className="inline-block hover:text-blue-700 transition"
                        >
                          College of Arts
                        </Link>
                      </h3>
                      <ul className="space-y-1 text-xs">
                        {[
                          ["llb", "LLB"],
                          ["political-science", "Political Science"],
                          ["education", "Education"],
                          ["sociology", "Sociology"],
                          ["ancient-history", "Ancient history"],
                          ["hindi", "Hindi"],
                          ["english", "English"],
                          ["urdu", "Urdu"],
                        ].map(([path, name]) => (
                          <li key={path}>
                            <Link
                              to={`/${path}`}
                              onClick={handleLinkClick}
                              className="block hover:text-blue-700 px-2 py-1"
                            >
                              {name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* College of ITI */}
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 border-b pb-1 mb-2">
                        <Link
                          to="/CollegeOfITI"
                          className="inline-block hover:text-blue-700 transition"
                        >
                          College of ITI
                        </Link>
                      </h3>
                      <ul className="space-y-1 text-xs">
                        {[
                          [
                            "iti-multimedia",
                            "Multimedia Animation & Special Effects",
                          ],
                          ["digital-photography", "Digital Photographer"],
                          ["iti-electrician", "Electrician"],
                          ["iti-welder", "Welder"],
                          ["iti-fitter", "Fitter"],
                          ["iti-draughtsman", "Draughtsman"],
                        ].map(([path, name]) => (
                          <li key={path}>
                            <Link
                              to={`/${path}`}
                              onClick={handleLinkClick}
                              className="block hover:text-blue-700 px-2 py-1"
                            >
                              {name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
      <SearchModal open={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
};

export default Navbar;
