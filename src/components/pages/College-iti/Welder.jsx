import CourseTemplate from "../../../Blueprints/CourseTemplate";
import adilImage from "/images/our-achiever/Aadil-Salim.jpg";

export default function Welder() {
  return (
    <CourseTemplate
      title="ITI Welder "
      overviewHeading="Course – Overview"
      overviewParagraphs={[
        "The Welder course offered by ITIs is a comprehensive program designed to train individuals in the field of welding. This course focuses on teaching various welding techniques, safety precautions, and the operation of welding equipment. Students gain hands-on experience in welding processes such as arc welding, gas welding, and TIG/MIG welding. The curriculum covers theoretical knowledge as well as practical skills, including metal preparation, joint types, and quality control. After completing the Welder course, graduates have excellent career prospects in industries such as construction, manufacturing, automotive, and shipbuilding. They can work as Welders, Fabricators, Welding Technicians, or pursue further specialization in specific welding techniques. This course equips students with the necessary skills to succeed in the dynamic and in-demand field of welding.",
      ]}
      image="/images/CollegeOfITI/c4.jpg"
      departmentTitle="Department Activities"
      departmentImages={[
        "/images/deparmental-activites/cse3.jpg",
        "/images/deparmental-activites/cse2.jpg",
        "/images/deparmental-activites/cse1.jpg",
        "/images/deparmental-activites/dep1.jpg",
        "/images/deparmental-activites/dep2.jpg",
        "/images/deparmental-activites/cse4.jpg",
      ]}
      achieversTitle="Our Achievers"
      achievers={[
        {
          name: "Aadil Salim",
          // company: "Pursuing MS in Youngstown University",
          img: "/images/adil.jpg",
        },
        {
          name: "Mohd. Sohib Ansari",
          // company: "Pursuing MS in Youngstown University",
          img: "/images/SohibAnsariImg.jpg",
        },
        {
          name: "Tanzeel Mahmood",
          // company: "Placed in Infosys",
          img: "/images/1.jpg",
        },
      ]}
      careerProspects={[
        {
          //   title: "Corporate Legal Officer",
          paragraphs: [
            "Completing an ITI course in welding can lead to promising career prospects. Here are some potential career opportunities for individuals who have completed a welding course from an ITI:",
          ],
        },
        "Welder",
        "Welding Technician",
        "Fabricator",
        "Welding Inspector",
        "Entrepreneurship",
        {
          //   title: "Corporate Legal Officer",
          paragraphs: [
            "These career opportunities for ITI-trained welders provide avenues for growth, skill development, and potential for advancement.",
          ],
        },
      ]}
      eligibility="To be eligible for the Welder course in ITI, candidates generally need to have completed at least 10th standard (elementary school) education from a recognized board. However, eligibility criteria may vary among different ITIs, so it is recommended to check with the specific ITI for their admission requirements and guidelines."
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
