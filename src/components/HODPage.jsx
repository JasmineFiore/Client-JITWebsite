import HODProfiles from "../components/HODProfiles";
import hodCSE from "/images/hod/hodCSE.jpg";
import hodECE from "/images/hod/hodECE.jpg";
import hodCivil from "/images/hod/hodCivil.jpg";
import hodEe from "/images/hod/hodEe.jpg";
import hodMech from "/images/hod/hodMech.jpg";
import hodAs from "/images/hod/hodAs.jpg";
import hodPharmacy from "/images/hod/hodPharmacy.jpg";
import hodArts from "/images/hod/hodArts.jpg";

export default function HODPage() {
  const hods = [
    {
      name: "Mr. Rahul Kumar",
      department: "CSE",
      headerdepartment: "Computer Science & Engineering",
      tagline: "HOD Department of Computer Science Engineering",
      designation: "Associate Professor",
      qualification: "M.Tech, Gate, Net Qualified",
      experience: "1 Years",
      specialization: "Internet of Things, Networking",
      email: "rahulkumar@jit.edu.in",
      image: hodCSE,
    },
    {
      name: "Mohd. Ummaruddin",
      headerdepartment: "Electronics & Communication Engg",
      department: "ECE",
      tagline: "HOD Department of ECE",
      designation: "Assistant Professor",
      qualification: "",
      experience: "15+ Years",
      specialization: "VLSI Design & Embedded Systems",
      email: "hod.ece@jit.edu.in",
      image: hodECE,
    },
    {
      name: "Abdul Ahad",
      headerdepartment: "Civil Engineering",
      department: "Civil Engineering",
      tagline: "HOD Department of Civil Engg",
      designation: "Assistant Professor",
      qualification: "M.Tech",
      experience: "4 Years",
      specialization: "Construction Management",
      email: "hod.civil@jit.edu.in",
      image: hodCivil,
    },
    {
      name: "Mohammad Aslam Alam​",
      headerdepartment: "Electrical Engineering",
      department: "Electrical Engineering",
      tagline: "HOD Department of Electrical Engineering",
      designation: "Assistant Professor",
      qualification: "M.Tech",
      experience: "4 Years",
      specialization: "Renewable Energy, Hybrid System and Power Converters",
      email: "mohammad.alam@jit.edu.in",
      image: hodEe,
    },
    {
      name: "MD GULFARAZ ALAM​",
      headerdepartment: "Mechanical Engineering",
      department: "Mechanical Engineering",
      tagline: "HOD Department of Mechanical Engg",
      designation: "Assistant Professor",
      qualification: "M.Tech",
      experience: "8 Years",
      specialization: "Environmental engineering",
      email: "hod.mech@jit.edu.in",
      image: hodMech,
    },
    {
      name: "Dr Mohammad Suleman Quraishi",
      headerdepartment: "Applied Science",
      department: "Applied Science",
      tagline: "HOD Department of Applied Science",
      designation: "Assistant Professor",
      qualification: "Ph.D.",
      experience: "13 Years",
      specialization: "Mathematics ( Fluid Dynamics)",
      email: "mohammad.suleman@jit.edu.in",
      image: hodAs,
    },
    {
      name: "Md Hedaytullah​",
      headerdepartment: "Pharmacy",
      department: "Pharmacy",
      tagline: "HOD Department of Pharmacy",
      designation: "Assistant Professor",
      qualification: "M.Tech",
      experience: "15+ Years",
      specialization: "Pharmacy Practice",
      email: "mhedaytullah@gmail.com",
      image: hodPharmacy,
    },
    {
      name: "Tufail Ahmad Ansari​",
      headerdepartment: "Arts & Commerce",
      department: "Arts & Commerce",
      tagline: "HOD Department of Arts & Commerce",
      designation: "Assistant Professor",
      qualification: "M.A",
      experience: "5+ Years",
      specialization: "Political Science",
      email: "tufailahmadansari786@gmail.com",
      image: hodArts,
    },
  ];

  return <HODProfiles hods={hods} />;
}
