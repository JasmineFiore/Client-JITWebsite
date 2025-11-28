import CourseTemplate from "../../../Blueprints/CourseTemplate";

export default function BaJournalism() {
  return (
    <CourseTemplate
      title="Bachelor of Arts in Journalism"
      overviewHeading="Course – Overview"
      overviewParagraphs={[
        "A Bachelor of Arts (BA) in Journalism is an undergraduate degree program that focuses on developing skills in news reporting, writing, and media communication. The program typically covers topics such as news writing, digital journalism, broadcast journalism, media ethics, communication theories, and investigative reporting. Students also learn about editing, multimedia storytelling, and the use of modern journalistic tools and technologies. The course helps students understand how the media operates, how to gather accurate information, and how to present it effectively across print, digital, and broadcast platforms.",
        "The degree program is usually completed in three years and can lead to a variety of career opportunities in fields such as news reporting, digital media, content creation, public relations, broadcasting, and media management. Additionally, graduates may choose to pursue further studies in journalism or related fields such as mass communication, media studies, advertising, or film and television production.",
      ]}
      image="/images/CollegeOfMedia/ba-journalism-hero.jpg"
      // hodLink="/hod/arts"
      careerProspects={[
        // {
        //   //   title: "Corporate Legal Officer",
        //   paragraphs: [
        //     "A Bachelor of Arts (BA) in Sociology is an undergraduate degree program that focuses on the study of human society and social behaviour. Graduates with a degree in Sociology can pursue a wide range of career opportunities in fields such as social services, education, research, business, and government. Here are some potential career prospects for graduates with a BA in Sociology:",
        //   ],
        // },
        "A Bachelor of Arts in Journalism can lead to careers in media, communication, and digital storytelling.",
        "Graduates may work as journalists, news reporters, content writers, copy editors, photojournalists, broadcast presenters, or digital media specialists.",
        "They may also pursue careers in public relations, advertising, corporate communication, social media management, or media production.",
        "Further education and training can lead to advanced careers in media research, mass communication, film and television production, or teaching and academic roles.",
        "A degree in Journalism provides valuable transferable skills such as critical thinking, research, writing, communication, media literacy, and storytelling, which can be applied across a wide range of industries.",
      ]}
      eligibility="Eligibility for a Bachelor of Arts in Journalism typically requires a high school diploma or equivalent."
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
    />
  );
}
