import { useEffect, useState } from "react";
import PlacementCard from "./PlacementCard";
import { useNavigate, useLocation } from "react-router-dom";
import FAQ from "../../../Blueprints/FAQ";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import countryCodes from "../../../data/countryCodes";
import {
  validateField,
  validateForm as validateAll,
} from "../../../data/validation";

const PlacementPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeSection, setActiveSection] = useState("Placement");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    program: "",
    subject: "",
    message: "",
  });

  // Route → Section
  const pathToSection = {
    "/placements": "Placement",
    "/tp-cell": "T&P Cell",
    "/recruiters": "Our Recruiters",
  };

  // Section → Route
  const sectionToPath = {
    Placement: "/placements",
    "T&P Cell": "/tp-cell",
    "Our Recruiters": "/recruiters",
  };

  useEffect(() => {
    const section = pathToSection[location.pathname];
    if (section) setActiveSection(section);
  }, [location.pathname]);

  const handleSectionClick = (section) => {
    setActiveSection(section);
    navigate(sectionToPath[section]);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Clear specific field error on change
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const message = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // 1️⃣ Perform validation
    const newErrors = validateAll(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      // Scroll to the first invalid field
      const firstErrorField = Object.keys(newErrors)[0];
      const el = document.querySelector(`[name="${firstErrorField}"]`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.focus();
      }

      setLoading(false); // Stop loading if errors
      return;
    }

    // 2️⃣ Send data to backend
    // try {
    //   await axios.post("http://localhost:5000/api/send-feedback", formData);
    //   alert("✅ Form submitted successfully!");

    //   // Reset form
    //   setFormData({
    //     name: "",
    //     email: "",
    //     countryCode: "+91",
    //     phone: "",
    //     state: "",
    //     program: "",
    //     // add other fields if needed
    //   });
    //   setErrors({});
    // } catch (err) {
    //   console.error(err);
    //   alert("❌ Failed to submit form. Try again later.");
    // }

    alert("✅ Form submitted successfully!");

    // Reset form
    setFormData({
      name: "",
      email: "",
      countryCode: "+91",
      phone: "",
      program: "",
      // add other fields if needed
    });
    setErrors({});
    setLoading(false);
    console.log("formData is ", formData);
  };

  // ---- TPO Members ----
  const tpoMembers = [
    { name: "Mr. Niyaz Ahamad Ansari", dept: "TPO" },
    { name: "Mr. Kashif Nazeer", dept: "Engineering" },
    { name: "Mr. Iqbal Hussain", dept: "Pharmacy" },
    { name: "Mr. Ajeet Kumar Sharma", dept: "ITI" },
    { name: "Mr. Asalam Sher", dept: "BA" },
  ];

  // ---- Placement Data ----
  const placementData = [
    {
      image: "/images/adil.jpg",
      name: "Aadil Salim",
      position: "Kolin Insaat, Kuwait",
    },
    {
      image: "/images/placements/2.jpg",
      name: "Afsarul Haque",
      position: "KDT Kuwait",
    },
    {
      image: "/images/placements/3.jpg",
      name: "Basit Shamsher",
      position: "Asst. Loco Pilot Indian Railways",
    },
    {
      image: "/images/placements/4.jpg",
      name: "Mohammad Gazali",
      position: "Project Lead OYO Rooms",
    },
    {
      image: "/images/placements/5.jpg",
      name: "Madeeha Khanum",
      position: "Infosys(4.5lpa)",
    },
    {
      image: "/images/placements/6.jpg",
      name: "Tanzeel Mahmood",
      position: "Wipro limited",
    },
    {
      image: "/images/placements/7.jpg",
      name: "Mohd Arham Khan",
      position: "TCS",
    },
    {
      image: "/images/placements/8.jpg",
      name: "Mohd Vais",
      position: "Infosys(4.5)",
    },
    {
      image: "/images/placements/9.jpg",
      name: "Mohd. Sohib Ansar",
      position: "MS in Youngstown University,Ohio,USA",
    },
    {
      image: "/images/placements/10.jpg",
      name: "Ms Ruokuokhrienuo Soupfunuo",
      position: "Pie Infocom(4.5lpa)",
    },
    {
      image: "/images/placements/11.jpg",
      name: "Daniyal Khan",
      position: "MS in Youngstown University,Ohio,USA",
    },
    {
      image: "/images/placements/12.jpg",
      name: "Adil Hussain",
      position: "MS in TAIPEI university of Technology, Taiwan",
    },
    {
      image: "/images/placements/13.jpg",
      name: "Harsh Kumar",
      position: "MS from IIT Madras (Research-Tropology Optimisation)",
    },
    {
      image: "/images/placements/male.jpg",
      name: "Mohammad Fahad",
      position: "GUVI Geek Network Pvt Ltd (4.6)",
    },
    {
      image: "/images/placements/male.jpg",
      name: "MANOJ KUMAR",
      position: "GARVIN GENETIC LTD.",
    },
    {
      image: "/images/placements/male.jpg",
      name: "DANIYA ASHRAF",
      position: "HERBOCHEM PVT. LTD.",
    },
  ];

  const placementFAQ = [
    {
      question: "Placement Cell​",
      answers: [
        "The Training and Placement Cell of Jahangirabad Institute of Technology & Management is served by eminent personalities from ex-corporates as well as academicians from top notch institutes. The Placement Cell functions with the coordination of faculty members and Student coordinators from all stream.",

        "We conduct On-Campus and Off-Campus Interviews every year and place graduate and post graduate students from all disciplines. JIT provides facilities for GD rooms, Aptitude tests, PD classes, and Demo interviews.",

        "The Office interacts with many industries across India and abroad. Nearly 50+ companies visit our campus for recruitment covering Engineering, IT, Consulting, Finance, Pharma, and more.",
      ],
    },
    {
      question: "Placement Facilities​​",
      answers: [
        "In today’s scenario students are required to exhibit their talents in spoken English, communication skills, business writing, business etiquette, presentation skills, leadership skills, team working, group dynamics and interview skills etc. Our in-house programs in Personality Development are supplemented by covering all students enrolled to undergo personality development special sessions, running through all the semesters. This task is performed in association with leading corporate training organizations. We have associated with many famous skill Development Company to groom our students, shape them and make them ready to face challenges from the Industry.",
      ],
    },

    {
      question: "Personality Development​",
      answers: [
        <table className="table-auto border border-gray-300 w-full text-left mt-4">
          <tbody>
            <tr>
              <td className="border px-4 py-2">Seminar Hall</td>
              <td className="border px-4 py-2">
                With Sitting Capacity of 100 students
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Written Test Rooms</td>
              <td className="border px-4 py-2">
                55 Rooms which offers total accommodation capacity of 1400
                students
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">G D Room</td>
              <td className="border px-4 py-2">
                3 Rooms are specifically assigned for conducting Group
                Discussions
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Interview Cabin</td>
              <td className="border px-4 py-2">
                5 Well designed cabins for conducting Interviews
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Computers for Online Test</td>
              <td className="border px-4 py-2">
                200 Computer Systems for Conducting Online Tests
              </td>
            </tr>
          </tbody>
        </table>,
      ],
    },

    {
      question: "Placement Process",
      answers: [
        <ol className="list-decimal pl-5 space-y-4 text-gray-900">
          <li>
            <strong>Pre-Placement Talk:</strong> Companies will come down to
            campus to conduct pre-placement talks. These talks will give
            students an idea about the recruiting organizations and
            opportunities available within these. It also gives students the
            chance to interact with employees of the company and learn more
            about the work culture. Based on these talks, students will decide
            to apply for these organizations.
          </li>
          <li>
            <strong>Submission Of Resumes:</strong> The willing students submit
            their resume to the TPO, after the presentation or to the Placement
            committee in case the companies wish to have them early prior to
            their arrival on campus.
          </li>
          <li>
            <strong>Short Listing Of Candidates:</strong> Based on the resume,
            their academic records etc., the companies prepare the list of
            eligible students and inform them in advance to the TPO.
          </li>
          <li>
            <strong>Campus Recruitment:</strong> The companies inform the TPO
            about the recruitment procedure followed by them, like Group
            Discussions, Case Studies, Personal Interviews, Written Test, etc.
            After the selection process, the companies announce the list of
            selected candidates on the campus itself followed by appointment
            letters.
          </li>
          <li>
            <strong>Rules:</strong>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>
                Discipline and decorum should be maintained during the Campus
                Placement Drive.
              </li>
              <li>
                Full College Uniform is compulsory for all Placement related
                activities.
              </li>
              <li>
                You have to give consent (Interested/Not Interested) to every
                company for which you are eligible, failing which your placement
                ID will be blocked and you will not be able to apply in further
                companies.
              </li>
              <li>
                The attendance, in regular classes and in the events/activities
                organized by Training & Placement Office, may be a criterion for
                short-listing during recruitment process if demanded by the
                company.
              </li>
              <li>
                You are solely responsible for the authenticity of your
                data/credentials. In case of any discrepancy, strict action will
                be taken, which may also result in cancellation of your
                candidature at any stage of Placement process.
              </li>
              <li>
                You are also required to check the authenticity of the Company
                coming for Campus recruitment process.
              </li>
            </ul>
          </li>
        </ol>,
      ],
    },
    {
      question: "Contact TPO",
      answers: [
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {/* LEFT SIDE */}
          <div className="space-y-4 text-gray-800">
            <h3 className="text-2xl font-bold text-gray-900">
              Mr. Niyaz Ahamad Ansari (TPO)
            </h3>

            <p className="font-medium">Assistant Professor (Pharmacy)</p>
            <p className="font-medium">Training & Placement Officer</p>

            <div className="flex items-center space-x-3 mt-4">
              <span className="text[#243344] bg-[#f4c03b] text-xl p-2">
                <FaPhone />
              </span>
              <p>+91 73101 05118</p>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text[#243344] bg-[#f4c03b] text-xl p-2">
                <FaEnvelope />
              </span>
              <p>tpo@jit.edu.in</p>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text[#243344] bg-[#f4c03b] text-xl p-2">
                <FaMapMarkerAlt />
              </span>
              <p>
                Address: Jahangirabad Fort, Jahangirabad
                <br />
                Barabanki Uttar Pradesh – 225203 India
              </p>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          {/* <div className="bg-[#1A2A40] p-6 rounded-xl shadow-lg text-white space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                className="p-3 rounded bg-[#24364f] w-full"
                placeholder="Your Name"
              />
              <input
                className="p-3 rounded bg-[#24364f] w-full"
                placeholder="Your Email"
              />
            </div>

            <input
              className="p-3 rounded bg-[#24364f] w-full"
              placeholder="Your Contact"
            />

            <input
              className="p-3 rounded bg-[#24364f] w-full"
              placeholder="Subject"
            />

            <textarea
              rows="4"
              className="p-3 rounded bg-[#24364f] w-full"
              placeholder="Your Message"
            ></textarea>

            <button className="w-full py-3 rounded bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition">
              Submit
            </button>
          </div> */}
          <div className="bg-[#0A2342] p-10 rounded-2xl shadow-2xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {[
                {
                  label: "Name",
                  name: "name",
                  placeholder: "Enter your full name",
                  type: "text",
                },
                {
                  label: "Email",
                  name: "email",
                  placeholder: "Enter your email",
                  type: "email",
                },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-semibold text-gray-300 mb-1">
                    {field.label} <span className="text-red-400">*</span>
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full p-3 rounded-md bg-white"
                  />
                  {errors[field.name] && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}

              {/* Phone Number with Country Code */}
              <div>
                <label className="block text-sm  text-gray-300 font-semibold mb-1">
                  Phone No. <span className="text-red-400">*</span>
                </label>

                <div className="flex gap-3">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="w-28 p-3 rounded-md bg-white"
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
                    maxLength="12"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={(e) => {
                      const numericValue = e.target.value.replace(
                        /[^0-9]/g,
                        ""
                      ); // only digits
                      setFormData({ ...formData, phone: numericValue });
                      setErrors({ ...errors, phone: "" });
                    }}
                    onBlur={handleBlur}
                    className="flex-1 p-3 w-10 rounded-md bg-white"
                  />
                </div>

                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Program */}
              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Select Program Applying For{" "}
                  <span className="text-red-400">*</span>
                </label>

                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full p-3 rounded-md bg-white"
                >
                  <option value="" disabled>
                    Select Program
                  </option>
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
                  <p className="text-red-400 text-sm mt-1">{errors.program}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full p-3 rounded-md bg-white"
                  placeholder="Subject"
                />
                {/* {errors && (
                  <p className="text-red-400 text-sm mt-1">{errors}</p>
                )} */}
              </div>

              <div>
                <textarea
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows="4"
                  className="w-full p-3 rounded-md bg-white"
                  placeholder="Your Message"
                ></textarea>
                {/* {errors && (
                  <p className="text-red-400 text-sm mt-1">{errors}</p>
                )} */}
              </div>

              <button
                type="submit"
                className="bg-yellow-400 text-black px-8 py-3 cursor-pointer rounded font-semibold hover:bg-yellow-500 transition mt-4 w-full md:w-auto"
              >
                Apply Now
              </button>
            </form>
          </div>
        </div>,
      ],
    },
  ];

  const sectionTitles = {
    Placement: "Our Shining Stars",
    "T&P Cell": "Training & Placement Cell",
    "Our Recruiters": "Our Recruiters",
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* HEADER */}
      <div className="bg-[#09224F] text-white py-16 px-6 relative">
        <h1 className="text-7xl text-white opacity-10 font-extrabold absolute top-6 left-6">
          Placements
        </h1>

        <h2 className="text-4xl text-yellow-400 font-bold relative z-10">
          {sectionTitles[activeSection]}
        </h2>
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-7xl mx-auto flex gap-10 mt-10 px-6">
        {/* LEFT SIDEBAR */}
        <div className="flex flex-col space-y-3 md:col-span-1">
          {["Placement", "T&P Cell", "Our Recruiters"].map((section) => (
            <button
              key={section}
              onClick={() => handleSectionClick(section)}
              className={`text-left py-3 px-8 pl-3 rounded-md font-semibold transition-all ${
                activeSection === section
                  ? "bg-[#0A2342] text-white shadow-md"
                  : "bg-gray-100 text-[#0A2342] hover:bg-[#0A2342] hover:text-[#F4C542]"
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1">
          {/* --- SHOW PLACEMENTS --- */}
          {activeSection === "Placement" && (
            <>
              <h2 className="text-center text-4xl font-bold text-gray-800 mb-6">
                Placement 2023
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {placementData.map((student, index) => (
                  <PlacementCard
                    key={index}
                    image={student.image}
                    name={student.name}
                    position={student.position}
                  />
                ))}
              </div>
            </>
          )}

          {/* --- SHOW T&P CELL PAGE --- */}
          {activeSection === "T&P Cell" && (
            <div className="py-4">
              <h2 className="text-3xl font-bold text-[#0A2342] mb-4">
                Message From T&P Cell Head
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Believe in yourself! Have faith in your abilities! A humble but
                reasonable confidence in your own powers can make you a
                successful person. Dear Recruiter, It gives me great pleasure to
                invite you to visit the Jahangirabad Educational Trust Group
                Institution Brababnki, U.P. Campus for the 2023-24 placement
                sessions. As an Institute of National importance JETGI,
                Barabanki always focuses on its solid visionary objectives. Our
                Institution inculcates the very idea of preparing students to
                face various technical and non-technical issues.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Training and placement cell looks forward to more robust
                collaboration with Industries so that deserving students can get
                the best platform to nurture their talents and improve their
                credibility for better placement prospects.
              </p>

              <h3 className="text-xl font-bold text-[#0A2342] mb-4">
                TPO Members
              </h3>

              <div className="w-full border border-gray-300 rounded-md overflow-hidden">
                <table className="w-full text-left">
                  <tbody>
                    {tpoMembers.map((member, idx) => (
                      <tr
                        key={idx}
                        className="border-b last:border-none hover:bg-gray-50"
                      >
                        <td className="py-3 px-4 text-gray-800">
                          {member.name}
                        </td>
                        <td className="py-3 px-4 text-gray-600">
                          {member.dept}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-3">
                <FAQ faqData={placementFAQ} title=" Placement – FAQs" />
              </div>
            </div>
          )}
          {/* --- SHOW OUR RECRUITERS PAGE --- */}
          {activeSection === "Our Recruiters" && (
            <div className="py-6">
              <h2 className="text-4xl font-bold text-[#0A2342] mb-8">
                Our Recruiters
              </h2>

              {/* GRID */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
                {[
                  "/images/companies-icon/HP-150x150 (1).png",
                  "/images/company-yellow-logo/Hero-1-150x150.png",
                  "/images/companies-icon/pepsi-150x150.png",
                  "/images/company-yellow-logo/nivea-1-150x150.png",
                  "/images/companies-icon/airtel-150x150.png",
                  "/images/company-yellow-logo/dabur-1-150x150.png",
                  "/images/companies-icon/ford-150x150.png",
                  "/images/company-yellow-logo/levies-1-150x150.png",
                  "/images/companies-icon/hyundai-150x150.png",
                  "/images/company-yellow-logo/IBM-1-150x150.png",
                  "/images/companies-icon/infosys.png",
                  "/images/company-yellow-logo/mahindra-150x150.png",
                  "/images/companies-icon/NTPC-150x150.png",
                  "/images/company-yellow-logo/HCL-1-150x150.png",
                  "/images/companies-icon/yamaha-text-150x150.png",
                  "/images/company-yellow-logo/nestle-1-150x150.png",
                ].map((logo, index) => (
                  <div
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-[#F4C542]" : "bg-[#082648]"
                    } flex items-center justify-center p-6 rounded-lg shadow-md hover:shadow-xl transition`}
                  >
                    <img
                      src={logo}
                      className="w-28 h-28 object-contain"
                      alt="logo"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlacementPage;
