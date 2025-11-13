import CourseTemplate from "../../../Blueprints/CourseTemplate";

export default function Urdu() {
  return (
    <CourseTemplate
      title="Bachelor of Arts (Urdu)"
      overviewHeading="Course – Overview"
      overviewParagraphs={[
        "A Bachelor of Arts (BA) in Urdu is an undergraduate degree program that focuses on the study of the Urdu language, literature, and culture. The program typically covers topics such as Urdu grammar and composition, Urdu poetry and prose, Urdu linguistics, and South Asian culture and history. Students will also learn to read, write, and speak Urdu fluently. The program may also provide opportunities for students to explore related subjects such as Hindi, Persian, or South Asian Studies.",
        "The degree program is usually completed in three years and can lead to a variety of career opportunities in fields such as education, translation and interpretation, journalism, and government. Additionally, graduates may choose to pursue further education in Urdu or related fields. A Bachelor of Arts in Urdu is particularly useful for those interested in careers that require knowledge of the Urdu language and culture, both in India and abroad.",
      ]}
      image="/images/collegeArts/urdu.jpg"
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
          name: "Tanzeel Mahmood",
          // company: "Placed in Infosys",
          img: "/images/our-achiever/8.jpg",
        },
        {
          name: "Mohd Vais",
          // company: "Placed in Infosys",
          img: "/images/our-achiever/5.jpg",
        },

        {
          name: "Adil Hussain",
          // company: "Pursuing MS in Youngstown University",
          img: "/images/AdilImg.jpg",
        },
      ]}
      careerProspects={[
        {
          //   title: "Corporate Legal Officer",
          paragraphs: [
            "A Bachelor of Arts in Urdu can provide graduates with a solid foundation in the Urdu language, literature, and culture. Here are some potential career prospects for graduates with a Bachelor of Arts in Urdu:",
          ],
        },
        "Urdu teacher or tutor",
        "Translator or interpreter",
        "Journalist or editor for Urdu media outlets",
        "Content writer or editor for websites, blogs, or social media platforms in Urdu",
        "Government jobs such as civil services, diplomacy, or foreign affairs",
        "Cultural organizations or museums that focus on Urdu-speaking communities",
        "Non-profit organizations that work with Urdu-speaking communities",
        "Graduate studies in Urdu, linguistics, or related fields",
        "Freelance work as a writer or editor for Urdu publications or as a translator for clients in various industries",
      ]}
      eligibility="The eligibility criteria for a Bachelor of Arts (BA) in Urdu typically requires a high school diploma or equivalent with a background in Urdu or related subjects."
      duration="The duration of a Bachelor of Arts (BA) in English is typically three years for full-time students."
      courseDetails={[
        "Regular: 3 years",
        "Course: Bachelor of Arts (Urdu)",
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
