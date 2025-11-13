import CourseTemplate from "../../../Blueprints/CourseTemplate";

export default function English() {
  return (
    <CourseTemplate
      title="Bachelor of Arts (English)"
      overviewHeading="Course – Overview"
      overviewParagraphs={[
        "A Bachelor of Arts (BA) in English is an undergraduate degree program that focuses on the study of the English language, literature, and culture. The program typically covers topics such as English grammar and composition, literary analysis, creative writing, and critical theory. Students will also learn to read, write, and communicate effectively in English. The degree program is usually completed in three to four years and can lead to a variety of career opportunities in fields such as education, journalism, publishing, advertising, public relations, and communications. Additionally, graduates may choose to pursue further education in English or related fields such as creative writing, linguistics, or cultural studies.",
      ]}
      image="/images/collegeArts/english.jpg"
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
            "Here are some potential career prospects for graduates with a Bachelor of Arts in English:",
          ],
        },
        "Content writer, copywriter, or editor for various media outlets",
        "Journalist or media correspondent",
        "Communications specialist for various organizations",
        "Public relations specialist",
        "Technical writer or editor",
        "Copy editor or proofreader",
        "English language teacher",
        "Librarian or archivist",
        "Advertising executive",
        "Graduate studies in English literature, linguistics, or related fields",
        {
          paragraphs: [
            "Overall, a degree in English can lead to a variety of career opportunities in fields that require strong communication, critical thinking, and writing skills.",
          ],
        },
      ]}
      eligibility="Eligibility for a Bachelor of Arts in English typically requires a high school diploma or equivalent. Some programs may require specific coursework in English or related fields."
      duration="The duration of a Bachelor of Arts (BA) in English is typically three years for full-time students."
      courseDetails={[
        "Regular: 3 years",
        "Course: Bachelor of Arts (English)",
        "Type of Course: Undergraduate Course",
        "College/Faculty: College of Arts",
      ]}
      hasAdmissionProcess={true}
      admission="ApApplicants will have to go through the following process On the basis of performance in the online Multiple Choice Question (MCQ) test of 2 hours duration and personal interview."
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
