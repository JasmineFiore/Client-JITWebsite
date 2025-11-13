import CourseTemplate from "../../../Blueprints/CourseTemplate";

export default function AncientHistory() {
  return (
    <CourseTemplate
      title="Bachelor of Arts (Ancient History)"
      overviewHeading="Course – Overview"
      overviewParagraphs={[
        "A Bachelor of Arts (BA) in Ancient History is an undergraduate degree program that focuses on the study of the history, culture, and society of ancient civilizations. The program typically covers topics such as ancient Greek and Roman history, ancient Mediterranean civilizations, ancient Egypt and the Near East, and the rise and fall of empires. Students will also learn about archaeological methods and techniques, as well as the interpretation and analysis of historical sources.",
        "The degree program is usually completed in three years and can lead to a variety of career opportunities in fields such as education, heritage conservation, museum curation, and cultural tourism. Additionally, graduates may choose to pursue further education in ancient history or related fields such as archaeology, anthropology, or classical studies.",
      ]}
      image="/images/collegeArts/ancienthistory.jpg"
      hodLink="/hod/arts"
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
          name: "Mohd Vais",
          company: "Placed in Infosys",
          img: "/images/our-achiever/5.jpg",
        },
        {
          name: "Ms Ruokuokhrienuo Soupfunuo",
          company: "Placed in Pie Infocom",
          img: "/images/RuokuImg.jpg",
        },
        {
          name: "Mohd. Sohib Ansari",
          company: "Pursuing MS in Youngstown University",
          img: "/images/SohibAnsariImg.jpg",
        },
      ]}
      careerProspects={[
        // {
        //   //   title: "Corporate Legal Officer",
        //   paragraphs: [
        //     "A Bachelor of Arts (BA) in Sociology is an undergraduate degree program that focuses on the study of human society and social behaviour. Graduates with a degree in Sociology can pursue a wide range of career opportunities in fields such as social services, education, research, business, and government. Here are some potential career prospects for graduates with a BA in Sociology:",
        //   ],
        // },
        "A Bachelor of Arts in Ancient History can lead to careers in research, education, and cultural heritage management.",
        "Graduates may work as historians, archaeologists, museum curators, or cultural heritage consultants.",
        "They may also pursue careers in government or international organizations, such as in foreign affairs or diplomatic service.",
        "Further education and training can lead to advanced careers in academia, such as becoming a professor or researcher.",
        "A degree in Ancient History can also provide valuable transferable skills, such as critical thinking, research and analysis, communication, and cultural competency, which can be applied to a variety of fields.",
      ]}
      eligibility="Eligibility for a Bachelor of Arts in Ancient History typically requires a high school diploma or equivalent."
      hasScholarship={true}
      scholarship={[
        { percentage: "85% and Above", rebate: "100%" },
        { percentage: "80% – 84%", rebate: "40%" },
        { percentage: "75% – 79%", rebate: "30%" },
      ]}
      hasAdmissionProcess={true}
      admission="Applicants will have to go through the following process On the basis of performance in the online Multiple Choice Question (MCQ) test of 2 hours duration and personal interview."
      duration="The program focuses on the study of ancient civilizations and cultures, including their history, art, architecture, and religion."
      courseDetails={[
        "Course Duration: 3 years",
        "Department: History",
        "Type of Course: Undergraduate Course",
        "College/Faculty: College of Arts",
      ]}
    />
  );
}
