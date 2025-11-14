import JobOpenings from "./JobOpenings";
import WhyJIT from "./WhyJIT";

export default function CareersPage() {
  const jobs = [
    {
      title: "ICT",
      jobtitle: "Sr. IT Manager",
      qualification:
        "MCA or M.Tech in Computer Science with minimum 5+ years experience.",
      specialization:
        "Sound knowledge in Network and WiFi Management with Microtik Wireless, computer hardware and printer and proficient in Server Administration.",
      experience: "05+ Years",
    },
    {
      title: "Cook",
      jobtitle: "Cook",
      //   qualification: "Relevant culinary skills",
      specialization:
        "Preferably Ex Serviceman, especially Chef Special or retired defense civilian Cook with adequate experience.",
      //   experience: "2+ Years",
    },
    {
      title: "Principal",
      jobtitle: "Principal",
      qualification: "Ph.D. with considerable experience 10+Years",
      //   specialization: "Leadership & academic planning",
      //   experience: "10+ Years",
      branch: "Degree College of Arts & Commerce, MBA",
    },
    {
      title: "NCC Trainer",
      jobtitle: "NCC Trainer",
      qualification: "Ex Serviceman from Defence forces",
      //   specialization: "Training cadets & drill instructions",
      //   experience: "3+ Years",
    },
  ];

  return (
    <>
      <JobOpenings jobs={jobs} />
      <WhyJIT />
    </>
  );
}
