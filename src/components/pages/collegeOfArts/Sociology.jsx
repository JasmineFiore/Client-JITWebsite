import CourseTemplate from "../../../Blueprints/CourseTemplate";

export default function Sociology() {
  return (
    <CourseTemplate
      title="Bachelor of Arts (Sociology)"
      overviewHeading="Course – Overview"
      overviewParagraphs={[
        "A Bachelor of Arts (BA) in Sociology is an undergraduate degree program that focuses on the study of human society, social behaviour, and social structures. The program typically covers topics such as social theory, research methods, cultural diversity, social stratification, gender studies, race and ethnicity, and globalization. Students will learn to think critically and analytically about social issues and to conduct research using various social science methods.",
        "The program provides a solid foundation for careers in fields such as social services, research, advocacy, public policy, and education. Graduates may work in non-profit organizations, government agencies, social justice organizations, educational institutions, or research institutions. Additionally, a BA in Sociology can prepare students for further studies in fields such as law, social work, or public health. The degree program usually takes three to four years to complete.",
      ]}
      image="/images/collegeArts/Sociology.png"
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
        {
          //   title: "Corporate Legal Officer",
          paragraphs: [
            "A Bachelor of Arts (BA) in Sociology is an undergraduate degree program that focuses on the study of human society and social behaviour. Graduates with a degree in Sociology can pursue a wide range of career opportunities in fields such as social services, education, research, business, and government. Here are some potential career prospects for graduates with a BA in Sociology:",
          ],
        },
        "Social worker or case manager",
        "Counsellor or therapist",
        "Community outreach coordinator or organizer",
        "Market researcher or analyst",
        "Human resources specialist or recruiter",
        "Policy analyst or researcher for government or non-profit organizations",
        "Higher education administrator or admissions officer",
        "Public relations or communications specialist",
      ]}
      eligibility="Eligibility criteria for a Bachelor of Arts in Sociology typically requires a high school diploma or equivalent."
      hasAdmissionProcess={true}
      admission="Applicants will have to go through the following process On the basis of performance in the online Multiple Choice Question (MCQ) test of 2 hours duration and personal interview."
      duration="The duration of a Bachelor of Arts (BA) in Sociology program is typically three years."
      courseDetails={[
        "Regular: 3 years",
        "Type of Course: Undergraduate Course",
        "College/Faculty: College of Arts",
      ]}
      hasSyllabus={true}
      syllabusLinks={[
        {
          label: "1st Year",
          // url: "/syllabus/LLB-1st-Year.pdf"
        },
        {
          label: "2nd Year",
          //  url: "/syllabus/LLB-2nd-Year.pdf"
        },
        {
          label: "3rd Year",
          //  url: "/syllabus/LLB-3rd-Year.pdf"
        },
      ]}
    />
  );
}
