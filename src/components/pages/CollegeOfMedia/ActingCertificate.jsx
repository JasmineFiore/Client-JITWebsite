import CourseTemplate from "../../../Blueprints/CourseTemplate";

export default function ActingCertificate() {
  return (
    <CourseTemplate
      title="Certificate in Acting "
      overviewHeading="Course – Overview"
      overviewParagraphs={[
        "A Certificate in Acting is a specialized program that focuses on developing foundational skills in performance, character building, and stage or screen presence. The program typically covers areas such as acting techniques, voice and speech training, body movement, improvisation, script analysis, and emotional expression. Students also learn about stagecraft, camera acting, audition preparation, and the fundamentals of theatre and film performance. The course helps learners understand how to interpret roles, convey emotions authentically, and perform effectively in front of live audiences as well as on camera.",

        "The certificate program is usually completed in a short duration—ranging from a few months to one year—and can lead to various opportunities in fields such as theatre, film, television, modeling, advertising, voice-over work, and performing arts. Additionally, learners may choose to pursue further studies in acting or related fields such as theatre arts, filmmaking, direction, choreography, or media and entertainment.",
      ]}
      image="/images/CollegeOfMedia/acting-hero.webp"
      // hodLink="/hod/arts"
      careerProspects={[
        // {
        //   //   title: "Corporate Legal Officer",
        //   paragraphs: [
        //     "A Bachelor of Arts (BA) in Sociology is an undergraduate degree program that focuses on the study of human society and social behaviour. Graduates with a degree in Sociology can pursue a wide range of career opportunities in fields such as social services, education, research, business, and government. Here are some potential career prospects for graduates with a BA in Sociology:",
        //   ],
        // },
        "An Acting Certificate provides foundational and advanced skills in acting, character development, stage performance, and screen acting.",
        "Graduates may work as actors, theatre performers, film and television artists, voice-over actors, drama instructors, or casting assistants.",
        "They may also pursue opportunities in direction, scriptwriting, choreography, production, modeling, and digital content creation within the entertainment industry.",
        "Further training in acting and performing arts can lead to advanced careers in theatre direction, film and television acting, choreography, casting, performance research, or teaching in drama and acting institutes.",
        "An Acting Certificate provides valuable transferable skills such as emotional expression, character analysis, stage presence, improvisation, voice modulation, confidence, and creative storytelling, which can be applied across various entertainment and creative industries.",
      ]}
      eligibility="Eligibility for a Acting Certificate typically requires a high school diploma or equivalent."
      hasScholarship={true}
      scholarship={[
        { percentage: "85% and Above", rebate: "100%" },
        { percentage: "80% – 84%", rebate: "40%" },
        { percentage: "75% – 79%", rebate: "30%" },
      ]}
      hasAdmissionProcess={true}
      admission="Applicants will have to go through the following process On the basis of performance in the online Multiple Choice Question (MCQ) test of 2 hours duration and personal interview."
      duration="This program focuses on the study and practice of acting, emphasizing character development, performance techniques, stage presence, and the interpretation of dramatic works. Students gain hands-on experience in voice, movement, improvisation, and script analysis to build a strong foundation in the craft of acting."
      courseDetails={[
        "Course Duration: 2 years",
        "Department: Media and Journalism",
        "Type of Course: Undergraduate Course",
        "College/Faculty: College of Media and Journalism",
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
