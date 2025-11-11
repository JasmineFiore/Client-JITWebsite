import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

const links = [
  { text: "Director", to: "/director" },
  { text: "Courses", to: "/courses" },
  { text: "Campus Life", to: "/collegeLife" },
  { text: "Join our Community", to: "/community" },
  { text: "Admission Guidelines 2025-26", to: "/admission" },
  { text: "NAAC Accredited Institutes", to: "/naac" },
  { text: "NIRF Ranking", to: "/nirf" },
];

export default function MovingLinksBar() {
  const controls = useAnimation();
  const doubledLinks = [...links];

  // Start the scroll animation
  const startScroll = async () => {
    while (true) {
      await controls.start({
        x: ["100%", "-50%"],
        transition: {
          duration: 30,
          ease: "linear",
        },
      });
      controls.set({ x: "0%" }); // reset position instantly for smooth looping
    }
  };

  React.useEffect(() => {
    startScroll();
  }, []); // run once on mount

  const handleMouseEnter = () => {
    controls.stop(); // pause when hovering
  };

  const handleMouseLeave = () => {
    startScroll(); // resume when hover ends
  };

  return (
    <div
      className="w-full bg-white border-y-2 border-yellow-600 overflow-hidden shadow-sm"
      role="region"
      aria-label="Important Notices"
    >
      <div className="flex items-center">
        {/* Static Section */}
        <div className="bg-blue-800 text-white font-semibold px-6 py-3 text-sm sm:text-base uppercase tracking-wide">
          Notices
        </div>

        {/* Scrolling Section */}
        <div className="flex-1 overflow-hidden relative">
          <motion.div
            className="flex whitespace-nowrap text-blue-700 text-sm sm:text-base font-medium py-3"
            animate={controls}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {doubledLinks.map((link, index) => (
              <React.Fragment key={index}>
                <Link
                  to={link.to}
                  className="mx-6 hover:underline hover:text-red-600 transition-colors duration-200 focus:outline-none focus:text-red-700"
                >
                  {link.text}
                </Link>
                <span className="text-gray-400">|</span>
              </React.Fragment>
            ))}
          </motion.div>

          {/* Gradient edges for smoother look */}
          <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
