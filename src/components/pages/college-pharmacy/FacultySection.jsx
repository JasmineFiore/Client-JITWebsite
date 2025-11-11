import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const facultyData = [
  {
    name: "Prof. Javed M. Ahsan",
    designation: "Professor, Pharmaceutical Chemistry",
    phone: "+91-9694087786",
    email: "jawedpharma@gmail.com",
    image: "/images/faculties/f1.jpg",
    resume: "/resumes/f1.pdf", 
  },
  {
    name: "Prof. Dabeer Ahamad",
    designation: "Professor, Pharmaceutics Department",
    phone: "+91-9801331119",
    email: "Dabeerpharma@gmail.com",
    image: "/images/faculties/f2.jpg",
    resume: "/resumes/f2.pdf",
  },
  {
    name: "Prof. Mohd Abid",
    designation: "Professor, Pharmacology Department",
    phone: "+91-92190101624",
    email: "fromabid@yahoo.com",
    image: "/images/faculties/f3.jpg",
    resume: "/resumes/f3.pdf",
  },
  {
    name: "Prof. Hedaytullah Mohd",
    designation: "Associate Professor, Pharmacy Practice",
    phone: "+91-990882290",
    email: "Hedaytullah@jit.edu.in",
    image: "/images/faculties/f4.jpg",
    resume: "/resumes/f4.pdf",
  },
  {
    name: "Prof. Ahmad Nayeem",
    designation: "Associate Professor, Pharmacology Department",
    phone: "+91-9889651935",
    email: "Anayeem@jit.edu.in",
    image: "/images/faculties/f5.jpg",
    resume: "/resumes/f5.pdf",
  },
  {
    name: "Prof. Shaheen Ansari",
    designation: "Associate Professor, Pharmaceutics Department",
    phone: "+91-9670448242",
    email: "Shaheenansai386@gmail.com",
    image: "/images/faculties/f6.jpg",
    resume: "/resumes/f6.pdf",
  },
  {
    name: "Prof. Chandra Kant Bajpai",
    designation: "Associate Professor, Pharmaceutical Chemistry",
    phone: "+91-8804927886",
    email: " bajpai@jit.edu.in",
    image: "/images/faculties/f7.jpg",
    resume: "/resumes/f7.pdf",
  },
  {
    name: "Prof. Dr. MD Furquan Khan",
    designation: "Asst. Professor,",
    phone: "+91-9889651935",
    email: "mdfurquankhan1097@gmail.com",
    image: "/images/faculties/f8.jpg",
    resume: "/resumes/f8.pdf",
  },
  {
    name: "Prof. Sanjana Gupta",
    designation: "Assistant Professor, Pharmaceutics Department",
    phone: "+91-9264902083",
    email: "Sanjanabph50@gmail.com",
    image: "/images/faculties/f9.jpg",
    resume: "/resumes/f9.pdf",
  },
  {
    name: "Prof. Abdullah Ansari",
    designation: "Associate Professor, Pharmacology Department",
    phone: "+91-8181075684",
    email: "abdullahansari180@gmail.com",
    image: "/images/faculties/f10.jpg",
    resume: "/resumes/f10.pdf",
  },
  {
    name: "Prof. Alfisha Khan",
    designation: "Lecturer,",
    phone: "+91-9696850763",
    email: "khanalfi8080@gmail.com",
    image: "/images/faculties/f11.jpg",
    resume: "/resumes/f11.pdf",
  },
  {
    name: "Prof. Iqbal Husain",
    designation: "Associate Professor, Pharmaceutics Department",
    phone: "+91-7388953685",
    email: "iqbalhusain86768@gmail.com",
    image: "/images/faculties/f12.jpg",
    resume: "/resumes/f12.pdf",
  },
  {
    name: "Prof. Jishan Ahmad",
    designation: "Associate Professor, Pharmacology Department",
    phone: "+91-7390029040",
    email: "jishana538@gmail.com",
    image: "/images/faculties/f13.jpg",
    resume: "/resumes/f13.pdf",
  },
  {
    name: "Prof. MD Asif",
    designation: "Associate Professor, Pharmaceutics Department",
    phone: "+91-8617795686",
    email: "asifqadri147@gmail.com",
    image: "/images/faculties/f14.jpg",
    resume: "/resumes/f14.pdf",
  },
  {
    name: "Prof. Niyaz Ahamad Ansari",
    designation: "Associate Professor, Pharmaceutics Department",
    phone: "+91-9805983094",
    email: "niyaz.ansari1979@gmail.com",
    image: "/images/faculties/f15.jpg",
    resume: "/resumes/f15.pdf",
  },
  {
    name: "Prof. Muheyuddeen",
    designation: "Associate Professor, Pharmaceutical Department",
    phone: "+91-9838342017",
    image: "/images/faculties/f16.jpg",
    resume: "/resumes/f16.pdf",
  },
  {
    name: "Prof.Saquib Tanweer",
    designation: "Associate Professor, Pharmaceutics Department",
    phone: "+91-8081806436",
    email: "saquibtanweer05@gmail.com",
    image: "/images/faculties/f17.jpg",
    resume: "/resumes/f17.pdf",
  },
  {
    name: "Prof. Shoaib Ahmad",
    designation: "Associate Professor, Pharmacology Department",
    phone: "+91-9651157949",
    email: "Shoaib.Ahmad@jit.edu.in",
    image: "/images/faculties/f18.jpg",
    resume: "/resumes/f18.pdf",
  },
  {
    name: "Prof. Sonali",
    designation: "Associate Professor, Pharmaceutics Department",
    phone: "+91-8299705669",
    email: "Sonalisona410@gmail.com",
    image: "/images/faculties/f19.jpg",
    resume: "/resumes/f19.pdf",
  },
];

export default function FacultySection() {
  return (
    <section className="bg-gradient-to-b from-[#0A2342] via-[#0E2E5C] to-[#0A2342] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-2">Meet Faculties:</h2>
        <p className="text-gray-200 mb-10 max-w-2xl mx-auto">
          Our faculties are exceptionally brilliant, highly qualified &
          dedicated, to ensure betterment of students in every aspect of
          pharmacy education.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {facultyData.map((faculty, index) => (
            <div
              key={index}
              className="bg-white text-[#0A2342] rounded-md shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center mt-6">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-32 h-32 object-cover rounded-full border-4 border-[#0A2342]"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg">{faculty.name}</h3>
                <p className="text-sm mb-3">{faculty.designation}</p>
                <div className="flex flex-col items-center gap-1 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <FaPhoneAlt className="text-[#0A2342]" /> {faculty.phone}
                  </div>
                  {faculty.email && (
                    <div className="flex items-center gap-2">
                      <FaEnvelope className="text-[#0A2342]" /> {faculty.email}
                    </div>
                  )}
                </div>
                {faculty.resume ? (
                  <a
                    href={faculty.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-[#0A2342] font-semibold hover:underline"
                  >
                    Know More
                  </a>
                ) : (
                  <p className="mt-4 text-gray-400 text-sm italic">
                    Resume not available
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
