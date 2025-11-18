import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SearchModal({ open, onClose }) {
  const flattenMenu = (menu) => {
    let flatList = [];

    menu.forEach((item) => {
      // If the main menu item has a direct path → push it
      if (item.path) {
        flatList.push({ title: item.label, path: item.path });
      }

      // If it has dropdown (array)
      if (item.dropdown && Array.isArray(item.dropdown)) {
        item.dropdown.forEach((sub) => {
          // Direct path inside dropdown
          if (sub.path) {
            flatList.push({ title: sub.label, path: sub.path });
          }

          // Nested children inside dropdown
          if (sub.children && Array.isArray(sub.children)) {
            sub.children.forEach((child) => {
              flatList.push({ title: child.label, path: child.path });
            });
          }
        });
      }
    });

    return flatList;
  };

  // Pages to search from
  const menu = [
    { title: "Home", path: "/" },
    { title: "Courses", path: "/courses" },

    // ABOUT US
    { title: "Chairman’s Message", path: "/chairman" },
    { title: "Director", path: "/director" },
    { title: "History", path: "/history" },
    { title: "Vision & Mission", path: "/vision-mission" },
    { title: "Affiliation & Recognition", path: "/affiliation" },

    // ADMISSION & FACULTY
    { title: "College of Engineering", path: "/CollegeOfEngineering" },
    { title: "College of Pharmacy", path: "/CollegeOfPharmacy" },
    { title: "College of Business & Commerce", path: "/CollegeOfBusiness" },
    { title: "College of Arts", path: "/CollegeOfArts" },
    { title: "College of Media & Journalism", path: "/CollegeOfMedia" },
    { title: "College of ITI", path: "/CollegeOfITI" },

    // COURSES → Engineering (B.Tech)
    { title: "B.Tech Computer Science (CSE)", path: "/btech-cse" },
    { title: "B.Tech Artificial Intelligence (AIML)", path: "/btech-aiml" },
    { title: "B.Tech Electrical (EE)", path: "/btech-ee" },
    { title: "B.Tech Civil (CE)", path: "/btech-civil" },
    { title: "B.Tech Mechanical (ME)", path: "/btech-mechanical" },

    // COURSES → Engineering (Diploma)
    { title: "Diploma - Computer Science", path: "/diploma-cse" },
    { title: "Diploma - Electrical", path: "/diploma-ee" },
    { title: "Diploma - Civil", path: "/diploma-civil" },
    { title: "Diploma - Mechanical", path: "/diploma-mechanical" },
    { title: "Diploma - Library & Info Science", path: "/diploma-library" },

    // Pharmacy
    { title: "B.Pharm (Bachelor of Pharmacy)", path: "/b-pharma" },
    { title: "B.Pharm (Lateral Entry)", path: "/b-pharmalater" },
    { title: "D.Pharm (Diploma in Pharmacy)", path: "/diploma-pharmacy" },

    // Business & Commerce
    { title: "MBA IT", path: "/mba-it" },
    { title: "MBA IB", path: "/mba-it" }, // Same path in your original code
    { title: "MBA Finance", path: "/mba-finance" },
    { title: "MBA Marketing", path: "/mba-marketing" },
    { title: "MBA HR", path: "/mba-hr" },
    { title: "B.Com", path: "/bcom" },

    // Media & Journalism
    { title: "BA Journalism", path: "/ba-journalism" },
    { title: "Acting Certificate", path: "/acting-cert" },
    { title: "Film Making", path: "/film-making" },
    { title: "Anchoring", path: "/anchoring" },
    { title: "Video Editing", path: "/video-editing" },

    // Arts
    { title: "LLB", path: "/llb" },
    { title: "Political Science", path: "/political-science" },
    { title: "Education", path: "/education" },
    { title: "Sociology", path: "/sociology" },
    { title: "Ancient History", path: "/ancient-history" },
    { title: "Hindi", path: "/hindi" },
    { title: "English", path: "/english" },
    { title: "Urdu", path: "/urdu" },

    // ITI
    { title: "ITI Multimedia Animation & VFX", path: "/iti-multimedia" },
    { title: "Digital Photographer", path: "/digital-photography" },
    { title: "ITI Electrician", path: "/iti-electrician" },
    { title: "ITI Welder", path: "/iti-welder" },
    { title: "ITI Fitter", path: "/iti-fitter" },
    { title: "ITI Draughtsman", path: "/iti-draughtsman" },

    // LIFE @ JIT
    { title: "Student Feedback", path: "/student-feedback" },
    { title: "Pass Out Students", path: "/pass-out" },
    { title: "Achievements & Awards", path: "/achievements-awards" },
    { title: "Staff Feedback", path: "/staff-feedback" },
    { title: "E-Newsletter", path: "/e-Newsletter" },
    { title: "JIT in News", path: "/JIT-in-news" },
    { title: "JIT Events & Awards", path: "/JIT-events" },
    { title: "Media & Gallery", path: "/media-gallery" },

    // PLACEMENTS
    { title: "Placements", path: "/placements" },
    { title: "T&P Cell", path: "/tp-cell" },
    { title: "Our Recruiters", path: "/recruiters" },

    // OTHER
    { title: "Career", path: "/career" },
    { title: "Contact", path: "/contact" },
  ];

  const sitePages = menu;

  const [query, setQuery] = useState("");

  const filteredResults = sitePages.filter((page) =>
    page.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-start justify-center pt-32 z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-3xl mx-4 rounded-2xl p-6 shadow-2xl relative"
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-xl text-gray-600 hover:text-black"
              onClick={onClose}
            >
              <FaTimes />
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Search</h2>

            {/* Search input */}
            <input
              autoFocus
              type="text"
              placeholder="Search the website..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full p-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            {/* Results */}
            <div className="mt-4 max-h-72 overflow-y-auto">
              {query === "" ? (
                <p className="text-gray-500">Type something to search...</p>
              ) : filteredResults.length === 0 ? (
                <p className="text-gray-500">No results found.</p>
              ) : (
                <ul className="space-y-2">
                  {filteredResults.map((page, index) => (
                    <li key={index}>
                      <Link
                        to={page.path}
                        onClick={onClose}
                        className="block p-3 text-black bg-gray-100 hover:bg-gray-200 rounded-lg"
                      >
                        {page.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
