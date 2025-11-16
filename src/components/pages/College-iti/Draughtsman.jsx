import CourseTemplate from "../../../Blueprints/CourseTemplate";

export default function Draughtsman() {
  return (
    <CourseTemplate
      title="Draughtsman"
      overviewHeading="Course – Overview"
      overviewParagraphs={[
        "The ITI Draughtsman course is a vocational training program offered by Industrial Training Institutes (ITIs) that focuses on developing skills in technical drawing and design. The course typically spans a duration of two years. It equips students with the knowledge and practical skills required to create detailed engineering drawings and blueprints for various purposes, including architecture, civil engineering, mechanical engineering, and electrical engineering. The curriculum covers subjects such as drafting techniques, computer-aided design (CAD), interpreting technical drawings, measurements, and material specifications. Graduates of the ITI Draughtsman course have career opportunities in industries such as construction, engineering consulting firms, architectural firms, manufacturing, and infrastructure development. They can work as Draughtsmen, CAD Operators, Design Assistants, or pursue further studies to enhance their skills and career prospects in the field of technical drawing and design.",
      ]}
      image="/images/CollegeOfITI/c6.jpg"
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
          name: "Mohammad Gazali",
          // company: "Pursuing MS in Youngstown University",
          img: "/images/notable-alumini/Mohammad-Gazali.jpg",
        },
        {
          name: "Basit Shamsher",
          // company: "Pursuing MS in Youngstown University",
          img: "/images/notable-alumini/Basit-Shamsher.jpg",
        },
        {
          name: "Mohd Vais",
          // company: "Placed in Infosys",
          img: "/images/our-achiever/5.jpg",
        },
      ]}
      careerProspects={[
        {
          //   title: "Corporate Legal Officer",
          paragraphs: [
            "A career as a Draughtsman can offer several opportunities and growth prospects. Draughtsmen, also known as drafters or CAD technicians, play a crucial role in various industries, including architecture, engineering, manufacturing, construction, and more. Here are some career perspectives for Draughtsmen:",
          ],
        },
        "Architectural Draughtsman",
        "Civil Engineering Draughtsman",
        "Mechanical Engineering Draughtsman",
        "Electrical/Electronics Draughtsman",
        "Manufacturing and Product Design Draughtsman",
        "CAD Technician/Operator",
      ]}
      eligibility="Eligibility for Draughtsman courses typically requires a minimum educational qualification of 10th standard (high school) or its equivalent. However, specific eligibility criteria may vary depending on the institute or program. It is advisable to check with the respective institute or educational board for detailed eligibility requirements for Draughtsman courses."
      hasScholarship={true}
      scholarship={[
        { percentage: "85% and Above", rebate: "100%" },
        { percentage: "80% – 84%", rebate: "40%" },
        { percentage: "75% – 79%", rebate: "30%" },
      ]}
      hasAdmissionProcess={true}
      admission="Applicants will have to go through the following process On the basis of performance in the online Multiple Choice Question (MCQ) test of 2 hours duration and personal interview"
    />
  );
}
