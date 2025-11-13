import CourseTemplate from "../../../Blueprints/CourseTemplate";

export default function Electrician() {
  return (
    <CourseTemplate
      title="Electrician"
      overviewHeading="Course – Overview"
      overviewParagraphs={[
        "The Electrician course is a vocational training program that provides comprehensive knowledge and practical skills in the field of electrical systems and installations. The course typically covers topics such as electrical circuitry, wiring, maintenance, troubleshooting, and safety protocols. Students learn to work with electrical tools, equipment, and components. Upon completion, graduates are equipped to pursue careers as Electricians, Electrical Technicians, Maintenance Technicians, or Electrical Contractors. The Electrician course prepares students for employment in various industries such as construction, manufacturing, power distribution, and maintenance services.",
      ]}
      image="/images/CollegeOfITI/c3.webp"
      departmentTitle="Department Activities"
      departmentImages={[
        "/images/deparmental-activites/cse3.jpg",
        "/images/deparmental-activites/cse2.jpg",
        "/images/deparmental-activites/cse1.jpg",
        "/images/deparmental-activites/dep1.jpg",
        "/images/deparmental-activites/dep2.jpg",
        "/images/deparmental-activites/cse4.jpg",
      ]}
      achieversTitle="Our Law Achievers"
      achievers={[
        {
          name: "Harsh Kumar",
          // company: "Pursuing MS in Youngstown University",
          img: "/images/PLACED.jpg",
        },
        {
          name: "Mohd. Sohib Ansari",
          // company: "Pursuing MS in Youngstown University",
          img: "/images/SohibAnsariImg.jpg",
        },
        {
          name: "Tanzeel Mahmood",
          // company: "Placed in Infosys",
          img: "/images/our-achiever/8.jpg",
        },
      ]}
      careerProspects={[
        {
          //   title: "Corporate Legal Officer",
          paragraphs: [
            "The Electrician course in ITI offers promising career prospects. Upon completion, graduates can find employment as Electricians in various industries, including construction, manufacturing, maintenance, and service sectors. They can work on electrical installations, troubleshoot electrical systems, perform wiring, and handle electrical equipment. With experience and further skill development, Electricians can progress to supervisory roles or start their own electrical contracting businesses. The demand for skilled Electricians is high, and career opportunities exist in both residential and commercial sectors, ensuring a stable and rewarding career path.",
          ],
        },
      ]}
      eligibility="Eligibility criteria for the ITI Electrician course typically require candidates to have completed at least 10th standard (secondary school) education from a recognized board. However, eligibility requirements may vary among different ITIs, so it is advisable to check with the specific ITI offering the course for their admission guidelines and any additional criteria they may have."
      hasScholarship={true}
      scholarship={[
        { percentage: "85% and Above", rebate: "100%" },
        { percentage: "80% – 84%", rebate: "40%" },
        { percentage: "75% – 79%", rebate: "30%" },
      ]}
      hasAdmissionProcess={true}
      admission="Applicants will have to go through the following process On the basis of performance in the online Multiple Choice Question (MCQ) test of 2 hours duration and personal interview"
      courseDetails={[
        "Course Duration: 3 years",
        "Department: History",
        "Type of Course: Undergraduate Course",
        "College/Faculty: College of Arts",
      ]}
    />
  );
}
