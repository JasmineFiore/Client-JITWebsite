import CourseTemplate from "../../../Blueprints/CourseTemplate";

export default function Hindi() {
  return (
    <CourseTemplate
      title="Bachelor of Arts (Hindi)"
      overviewHeading="Course – Overview"
      overviewParagraphs={[
        "A Bachelor of Arts (BA) in Hindi is an undergraduate degree program that focuses on the study of the Hindi language, literature, and culture. The program typically covers topics such as Hindi grammar and composition, Hindi literature, Hindi linguistics, and Indian culture and history. Students will also learn to read, write, and speak Hindi fluently. The program may also provide opportunities for students to explore related subjects such as Sanskrit, Urdu, or South Asian Studies. The degree program is usually completed in three years and can lead to a variety of career opportunities in fields such as education, translation and interpretation, journalism, and government. Additionally, graduates may choose to pursue further education in Hindi or related fields.",
      ]}
      image="/images/collegeArts/hindi.jpg"
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
            "Here are some potential career prospects for graduates with a Bachelor of Arts in Hindi:",
          ],
        },
        "Hindi teacher or tutor",
        "Translator or interpreter",
        "Journalist or editor for Hindi media outlets",
        "Content writer or editor for websites, blogs, or social media platforms in Hindi",
        "Government jobs such as civil services, diplomacy, or foreign affairs",
        "Cultural organizations or museums that focus on Indian culture and history",
        "Non-profit organizations that work with Hindi-speaking communities",
        {
          paragraphs: [
            "Graduate studies in Hindi, linguistics, or related fields",
            "Overall, a degree in Hindi can lead to a wide range of career opportunities both in India and abroad, particularly in fields that require proficiency in Hindi language and culture.",
          ],
        },
      ]}
      eligibility="Eligibility for a Bachelor of Arts (BA) in Hindi typically requires a high school diploma or equivalent."
      duration="The program focuses on the study of ancient civilizations and cultures, including their history, art, architecture, and religion."
      courseDetails={[
        "Course Duration: 3 years",
        "Department: History",
        "Type of Course: Undergraduate Course",
        "College/Faculty: College of Arts",
      ]}
      hasAdmissionProcess={true}
      admission="Applicants will have to go through the following process On the basis of performance in the online Multiple Choice Question (MCQ) test of 2 hours duration and personal interview."
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
