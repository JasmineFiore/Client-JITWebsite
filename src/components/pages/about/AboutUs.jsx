import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Congratulations from "./Congratulations";

const ChairmansMessage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract path (e.g., /chairman → "Chairman")
  const pathToSection = {
    "/chairman": "Chairman",
    "/director": "Director",
    "/history": "History",
    "/vision-mission": "Vision & Mission",
    "/alumni": "NotableAlumni",
    "/affiliation": "Affiliation",
    "/our-journey": "Our Journey",
  };

  const sectionToPath = {
    Chairman: "/chairman",
    Director: "/director",
    History: "/history",
    "Vision & Mission": "/vision-mission",
    NotableAlumni: "/alumni",
    Affiliation: "/affiliation",
    "Our Journey": "/our-journey",
  };

  const [activeSection, setActiveSection] = useState("Chairman");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Sync section with URL
  useEffect(() => {
    const section = pathToSection[location.pathname];
    if (section) setActiveSection(section);
  }, [location.pathname]);

  const handleSectionClick = (section) => {
    setActiveSection(section);
    navigate(sectionToPath[section]);
  };

  const content = {
    Chairman: {
      title: "Chairman's Message",
      name: "MR. MANZOOR GHORI",
      name2: "Founder Chairman, Jahangirabad",
      name3: "Educational Trust, IMRC",
      image: "/images/about/chairman.jpg",
      text: `The institute is promoted by a number of professionally successful Indians who are settled abroad and have come together to promote higher education with leadership skills to give back to the community.`,
      text2: `The institute is located in the historic fort of Jahangirabad, in Barabanki District, about 40 km from Lucknow city. Barabanki of eastern UP has been out of the technology race and remains industrially backward. But now the fort has been transformed into an important center for education, learning, and research.`,
      text3: `JIT has been founded to cherish the great values of transmission of knowledge, passionate pursuit of truth, maintenance of the highest standards of teaching, and enhancing the intellectual, cultural, economic, and social well-being of the minority community.`,
    },

    Director: {
      title: "Director's Message",
      name: "Maj. Gen. Vikas Saini, SM, VSM (Veteran)",
      image: "/images/about/director.png",
      text: `Dear Students, Parents, and Members of the JIT Family,

  It is a privilege to share this message as I begin my association with Jahangirabad Institute of Technology. Stepping into this institution has filled me with confidence about what we can achieve together. Our students possess remarkable potential, and our faculty and staff bring dedication and expertise that strengthen the foundation of JIT.

  My years in the Indian Army have taught me that discipline, commitment, and continuous self-improvement are the cornerstones of success. These are not just military values—they are life values. At JIT, we aim to instill the same principles in every learner, helping them grow as professionals and responsible citizens.

  To our students, I encourage you to stay curious, determined, and open to challenges. Let your academic journey be the beginning of excellence and meaningful contribution to society.

  With the support of our dedicated faculty, I am confident that JIT will continue to evolve as a centre of learning that prepares young minds for a dynamic world.

  Jai Hind!`,
    },
    History: {
      title: "History",
      text: `Jahangirabad Institute of Technology (JIT) operates under the Jahangirabad Educational Trust Group of Institutions and is approved by the All India Council for Technical Education (AICTE). It offers multiple disciplines in Engineering and Management through its integrated campus.`,
      text2: `Founded by a group of successful Indians settled abroad, JIT was envisioned as a way to give back to society through education and leadership development.`,
      text3: `Located in the historic Jahangirabad Fort, Barabanki — about 40 km from Lucknow — JIT has turned this heritage site into a vibrant center for learning and research.`,
      text4: `The campus features restored architecture, world-class facilities, and modern laboratories. With guidance from faculty from India, the USA, and Europe, JIT provides global exposure to its students.`,
      text5: `Supported by NRIs and IMRC (Indian Muslim Relief and Charities), JIT focuses on affordable quality education for underprivileged communities, with the goal of evolving into a university of excellence.`,
    },
    Affiliation: {
      title: "Affiliation & Recognition",
      affiliations: [
        {
          name: "UGC",
          logo: "/images/affiliation/UGC.png",
          desc: "We are UGC Recognized College, promoting development in the country in a coordinated and integrated manner.",
        },
        {
          name: "AICTE",
          logo: "/images/affiliation/aicte.avif",
          desc: "We are AICTE Approved College, fostering technical education and innovation in India.",
        },
        {
          name: "AKTU",
          logo: "/images/affiliation/aktu.png",
          desc: "JIT is affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU) for Technical and Management Studies.",
        },
        {
          name: "NCVT",
          logo: "/images/affiliation/ncvet.png",
          desc: "ITI courses are affiliated with the National Council for Vocational Training (NCVT), established by the Government of India in 1956.",
        },
        {
          name: "PCI",
          logo: "/images/affiliation/pci.png",
          desc: "JIT Department of Pharmacy offers D. Pharm and B. Pharm programs approved by the Pharmacy Council of India (PCI).",
        },
        {
          name: "BTEUP",
          logo: "/images/affiliation/bteup.jfif",
          desc: "JIT Polytechnic (JITP) is affiliated with the Board of Technical Education Uttar Pradesh (BTEUP), offering quality polytechnic education.",
        },
      ],
    },

    "Vision & Mission": {
      title: "Vision & Mission",
      text: (
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold text-[#0A2342] mb-2">
              Mission Statement:
            </h4>
            <p className="text-gray-700 leading-relaxed">
              JIT’s mission is to provide educational experiences that empower
              our students to become lifelong learners, leaders, and
              contributors to society. We are committed to fostering a diverse
              and inclusive community that values academic excellence,
              innovation, and service to others.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-[#0A2342] mb-2">
              Vision Statement:
            </h4>
            <p className="text-gray-700 leading-relaxed">
              JIT’s vision is to be a leading institution of higher education,
              recognized for academic excellence, innovation, and commitment to
              social responsibility.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-[#0A2342] mb-2">
              Core Values:
            </h4>
            <ul className="list-decimal list-inside space-y-2 text-gray-700 leading-relaxed">
              <li>
                <strong>Academic Excellence:</strong> Providing a rigorous,
                engaging educational experience that prepares students for
                success.
              </li>
              <li>
                <strong>Innovation:</strong> Fostering creativity,
                experimentation, and research.
              </li>
              <li>
                <strong>Inclusivity:</strong> Embracing diversity in all aspects
                of our community.
              </li>
              <li>
                <strong>Social Responsibility:</strong> Using knowledge to
                positively impact society.
              </li>
              <li>
                <strong>Environmental Sustainability:</strong> Promoting
                responsible stewardship of natural resources.
              </li>
            </ul>
          </div>
        </div>
      ),
    },

    NotableAlumni: {
      title: "Our Alumni",
      alumniList: [
        {
          name: "Aadil Salim",
          position: "Kolin Insaat, Kuwait",
          image: "/images/notable-alumini/Aadil-Salim.jpg",
        },
        {
          name: "Afsarul Haque",
          position: "KDT Kuwait",
          image: "/images/notable-alumini/Afsarul-Haque.jpg",
        },
        {
          name: "Basit Shamsher",
          position: "Asst. Loco Pilot Indian Railways",
          image: "/images/notable-alumini/Basit-Shamsher.jpg",
        },
        {
          name: "Mohammad Gazali",
          position: "Project Lead OYO Rooms",
          image: "/images/notable-alumini/Mohammad-Gazali.jpg",
        },
        {
          name: "Nida Afreen",
          position: "Thakur Publication Pvt. Ltd.",
          image: "/images/notable-alumini/female.jpg",
        },
        {
          name: "Ketu Soze Rote",
          position: "18 Pixel LKO",
          image: "/images/notable-alumini/male.jpg",
        },
        {
          name: "Aadhil PM",
          position: "Entrepreneur EvntNxt Pvt. Ltd.",
          image: "/images/notable-alumini/male.jpg",
        },
        {
          name: "Saad Ahmad",
          position: "Open Insight Solution",
          image: "/images/notable-alumini/male.jpg",
        },
        {
          name: "SALEHA MARIYAM",
          position: "Thakur Publication Pvt. Ltd.",
          image: "/images/notable-alumini/female.jpg",
        },
        {
          name: "AKBAR HUSSAIN",
          position: "GARVIN GENETIC LTD.",
          image: "/images/notable-alumini/male.jpg",
        },
        {
          name: "MANOJ KUMAR",
          position: "GARVIN GENETIC LTD.",
          image: "/images/notable-alumini/male.jpg",
        },
        {
          name: "DANIYA ASHRAF",
          position: "HERBOCHEM PVT. LTD.",
          image: "/images/notable-alumini/female.jpg",
        },
        {
          name: "MUHAMMAD ASHRAF",
          position: "TECH MAHINDRA PVT. LTD.",
          image: "/images/notable-alumini/male.jpg",
        },
        {
          name: "ADEEL AHMAD",
          position: "K P RELIABLE PVT. LTD",
          image: "/images/notable-alumini/male.jpg",
        },
        {
          name: "GYANENDRA",
          position: "K P RELIABLE PVT. LTD",
          image: "/images/notable-alumini/male.jpg",
        },
      ],
    },
    "Our Journey": {
      title: "Our Journey",
      timeline: [
        {
          year: "2005",
          title: "Foundation of JIT",
          desc: "Jahangirabad Institute of Technology was established with a vision to empower youth with quality technical and management education.",
          image: "/images/about/2005.jpeg",
        },
        {
          year: "2010",
          title: "Expansion of Academic Programs",
          desc: "New engineering branches, management programs, and research activities were introduced to meet industry standards.",
          image: "/images/about/2006.jpeg",
        },
        {
          year: "2015",
          title: "Modern Labs & Infrastructure",
          desc: "The campus witnessed major upgrades including advanced labs, digital classrooms, and skill-based learning centres.",
          image: "/images/about/2005.jpeg",
        },
        {
          year: "2020",
          title: "Digital Transformation",
          desc: "JIT adopted smart learning, virtual labs, and online platforms to ensure uninterrupted education during global challenges.",
          image: "/images/about/2005.jpeg",
        },
        {
          year: "2024",
          title: "Excellence & Global Collaboration",
          desc: "JIT expanded partnerships with global universities, strengthening research and career opportunities for students.",
          image: "/images/about/2005.jpeg",
        },
      ],
    },
  };

  return (
    <>
      {/* Hero Section */}
      {/* <section className="relative bg-[#0A2342] text-white overflow-hidden">
        <div className="relative z-10 px-8 md:px-16 py-16 max-w-7xl mx-auto">
          <h1 className="absolute text-[13rem] font-extrabold text-white opacity-10 top-3 left-2 leading-none hidden md:block">
            About
          </h1>
          <p className="text-[#F4C542] text-lg font-medium mb-2">
            Unleash Your Potential with Our Cutting-Edge Curriculum!
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            JIT At Glance
          </h2>
        </div>
        <div className="absolute right-0 top-0 w-full md:w-1/2 h-full flex justify-end">
          <img
            src="/images/about/aboutUs building.png"
            alt="JIT Campus"
            className="h-full w-3xl object-cover opacity-100"
          />
        </div>
      </section> */}

      <section className="relative bg-[#0A2342] text-white overflow-hidden">
        {/* Content */}
        <div className="relative z-10 px-6 sm:px-8 md:px-12 py-4 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center md:items-start">
          {/* Text */}
          <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
            <h1 className="absolute text-[8rem] md:text-[13rem] font-extrabold bottom-8 md:bottom-20 text-white opacity-10 left-2 leading-none ">
              About
            </h1>
            <p className="text-[#F4C542] text-base sm:text-lg font-medium mb-2 pt-4 md:pt-24">
              Unleash Your Potential with Our Cutting-Edge Curriculum!
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              JIT At Glance
            </h2>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/images/about/aboutUs building.png"
              alt="JIT Campus"
              className="w-full sm:w-4/5 md:w-xl max-h-72 sm:max-h-96 md:max-h-72 object-cover rounded-xl shadow-xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative bg-white py-4 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Mobile Toggle Button */}
          <div className="md:hidden mb-2">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="w-full bg-[#0A2342] text-white py-3 px-4 rounded-md font-semibold flex items-center justify-between"
            >
              <span>Menu</span>
              <span>{sidebarOpen ? "▲" : "▼"}</span>
            </button>
          </div>

          {/* Sidebar */}
          <div
            className={`flex flex-col space-y-3 md:col-span-1 md:max-w-40 
    ${sidebarOpen ? "block" : "hidden"} 
    md:block`}
          >
            {[
              "Chairman",
              "Director",
              "Affiliation",
              "Vision & Mission",
              "Our Journey",
              "History",
              "NotableAlumni",
            ].map((section) => (
              <button
                key={section}
                onClick={() => {
                  handleSectionClick(section);
                  setSidebarOpen(false); // auto-close on mobile selection
                }}
                className={`text-left py-3 px-5 rounded-md font-semibold transition-all duration-300 ${
                  activeSection === section
                    ? "bg-[#0A2342] text-white shadow-md"
                    : "bg-gray-100 text-[#0A2342] hover:bg-[#F4C542]"
                }`}
              >
                {section.replace(/([A-Z])/g, " $1")}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="md:col-span-3 text-[#0A2342]">
            <h3 className="text-3xl font-bold mb-3">
              {content[activeSection].title}
            </h3>

            {activeSection === "Our Journey" ? (
              <div className="mt-7 relative">
                <div className="border-l-4 border-[#0A2342] ml-6">
                  {content["Our Journey"].timeline.map((item, index) => (
                    <div key={index} className={`relative mb-16 pl-10 group`}>
                      {/* Dot */}
                      <div className="absolute -left-[18px] top-1 w-8 h-8 rounded-full bg-[#0A2342] border-4 border-white shadow-lg group-hover:bg-[#F4C542] transition-all duration-300"></div>

                      {/* Year */}
                      <span className="absolute -left-28 top-0 bg-[#0A2342] group-hover:bg-[#F4C542] text-white group-hover:text-[#0A2342] px-4 py-1 rounded-full text-md font-bold shadow">
                        {item.year}
                      </span>

                      {/* Content Card */}
                      <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-500">
                        {/* Image */}
                        <div className="w-full h-56 rounded-xl overflow-hidden mb-4">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-[#0A2342] mb-3">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {/* --- Affiliation Section --- */}
            {activeSection === "Affiliation" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {content.Affiliation.affiliations.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-2xl p-6 flex flex-col items-center text-center"
                  >
                    <div className="w-24 h-24 mb-4 flex items-center justify-center bg-gray-50 rounded-full">
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="max-h-16 object-contain"
                      />
                    </div>
                    <h4 className="text-xl font-semibold text-[#0A2342] mb-2">
                      {item.name}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            ) : activeSection === "NotableAlumni" ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
                  {content.NotableAlumni.alumniList.map((alum, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-xl shadow hover:shadow-lg transition-all duration-300 text-center p-6 bg-white"
                    >
                      <div className="w-32 h-44 mx-auto mb-4 rounded-md overflow-hidden bg-gray-100">
                        <img
                          src={alum.image}
                          alt={alum.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-semibold text-[#0A2342]">
                        {alum.name}
                      </h4>
                      <p className="text-sm italic text-gray-600 mt-1">
                        {alum.position}
                      </p>
                    </div>
                  ))}
                </div>
                <Congratulations />
              </>
            ) : (
              /* --- Other Sections --- */
              <>
                {content[activeSection].image ? (
                  <div className="flex flex-col md:flex-row items-start md:items-stretch gap-8 mt-6">
                    {/* Image + name details */}
                    <div className="flex flex-col items-center md:items-start md:w-1/3">
                      <img
                        src={content[activeSection].image}
                        alt={content[activeSection].name || "Profile"}
                        className="w-52 h-60 object-cover rounded-2xl shadow-lg border-4 border-[#F4C542]"
                      />

                      {/* Name Details (Below Image) */}
                      <div className="mt-6 text-center md:text-left leading-snug">
                        {content[activeSection].name && (
                          <p className="text-lg font-semibold text-[#0A2342] uppercase tracking-wide">
                            {content[activeSection].name}
                          </p>
                        )}
                        {content[activeSection].name2 && (
                          <p className="text-sm font-medium text-gray-700 mt-1">
                            {content[activeSection].name2}
                          </p>
                        )}
                        {content[activeSection].name3 && (
                          <p className="text-sm font-medium text-gray-700 mt-1">
                            {content[activeSection].name3}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="md:w-2/3 space-y-5">
                      {Object.keys(content[activeSection])
                        .filter((key) => key.startsWith("text"))
                        .map((key, index) =>
                          typeof content[activeSection][key] === "string" ? (
                            <p
                              key={index}
                              className="text-gray-700 text-lg leading-relaxed"
                            >
                              {content[activeSection][key]}
                            </p>
                          ) : (
                            <div key={index}>{content[activeSection][key]}</div>
                          )
                        )}
                    </div>
                  </div>
                ) : (
                  Object.keys(content[activeSection])
                    .filter((key) => key.startsWith("text"))
                    .map((key, index) =>
                      typeof content[activeSection][key] === "string" ? (
                        <p
                          key={index}
                          className="text-gray-700 text-lg mt-4 leading-relaxed"
                        >
                          {content[activeSection][key]}
                        </p>
                      ) : (
                        <div key={index}>{content[activeSection][key]}</div>
                      )
                    )
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ChairmansMessage;
