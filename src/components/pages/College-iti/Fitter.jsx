import CourseTemplate from "../../../Blueprints/CourseTemplate";
import adilImage from "/images/our-achiever/Aadil-Salim.jpg";

export default function Fitter() {
  return (
    <CourseTemplate
      title="ITI Fitter "
      overviewHeading="Course – Overview"
      overviewParagraphs={[
        "  Fitter course is a two-year program offered by ITIs, focusing on fitting and assembling machinery parts. It provides comprehensive training in the maintenance and repair of equipment, interpretation of engineering drawings, and precision fitting techniques. Students gain hands-on experience with tools, machines, and measurement instruments used in the trade. After completing the course, graduates have excellent career opportunities in manufacturing, engineering, construction, and maintenance sectors. They can work as Fitters, Mechanical Technicians, Assembly Technicians, and more. With further skill development and experience, they can advance to supervisory or managerial positions. The Fitter course equips students with practical skills, knowledge, and industry-relevant expertise, making them valuable assets in various industries.",
      ]}
      image="/images/CollegeOfITI/c5.jpg"
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
          name: "Daniyal Khan",
          // company: "Pursuing MS in Youngstown University",
          img: "/images/DaniyalImg.jpg",
        },
        {
          name: "Ms Ruokuokhrienuo",
          // company: "Pursuing MS in Youngstown University",
          img: "/images/RuokuImg.jpg",
        },
        {
          name: "Madeeha Khanum",
          // company: "Placed in Infosys",
          img: "/images/9.jpg",
        },
      ]}
      careerProspects={[
        {
          //   title: "Corporate Legal Officer",
          paragraphs: [
            "The Fitter course offers promising career prospects in various industries. Here are some potential career paths and opportunities for individuals who complete the course:",
          ],
        },
        "Fitter",
        "Mechanical Technician",
        "Maintenance Technician",
        "Machine Operator",
        "Assembly Technician",
        "Field Service Technician",
        "Supervisor/Managerial Roles.",
      ]}
      eligibility="Eligibility for the Fitter course generally requires a minimum of 10th standard (secondary school) education from a recognized board. Additional requirements, such as age limits, may vary depending on the specific ITI offering the course. It is advisable to check with the respective ITI for their specific admission guidelines."
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
