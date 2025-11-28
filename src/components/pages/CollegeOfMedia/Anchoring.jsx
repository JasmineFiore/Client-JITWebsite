import CourseTemplate from "../../../Blueprints/CourseTemplate";

export default function Anchoring() {
  return (
    <CourseTemplate
      title="Certificate in Anchoring "
      overviewHeading="Course – Overview"
      overviewParagraphs={[
        "A Certificate in Anchoring is a specialized program that focuses on developing foundational skills in news reading, presentation, public speaking, on-camera communication, and live event hosting. The program typically covers areas such as voice modulation, speech clarity, body language, teleprompter reading, interview techniques, script reading, and on-screen confidence. Students also learn about studio operations, on-camera presence, reporting basics, and the fundamentals of television, radio, and digital media anchoring. The course helps learners understand how to present information clearly, engage audiences effectively, and handle both scripted and spontaneous communication.",

        "The certificate program is usually completed in a short duration—ranging from a few months to one year—and can lead to various opportunities in fields such as news anchoring, television hosting, radio presenting, event anchoring, digital content creation, reporting, podcasting, and media communication. Additionally, learners may choose to pursue further studies in anchoring or related fields such as journalism, mass communication, media production, public speaking, or broadcasting.",
      ]}
      image="/images/CollegeOfMedia/anchoring-hero.webp"
      // hodLink="/hod/arts"
      careerProspects={[
        // {
        //   //   title: "Corporate Legal Officer",
        //   paragraphs: [
        //     "A Bachelor of Arts (BA) in Sociology is an undergraduate degree program that focuses on the study of human society and social behaviour. Graduates with a degree in Sociology can pursue a wide range of career opportunities in fields such as social services, education, research, business, and government. Here are some potential career prospects for graduates with a BA in Sociology:",
        //   ],
        // },
        "A Certificate in Anchoring provides foundational and advanced skills in news presenting, public speaking, on-camera communication, teleprompter reading, and live event hosting.",

        "Graduates may work as news anchors, TV hosts, radio presenters, event anchors, digital media presenters, interview hosts, or media correspondents.",

        "They may also pursue opportunities in reporting, scriptwriting, production, voice-over work, podcast hosting, content creation, media coordination, and communication roles within the broadcasting and entertainment industry.",

        "Further training in anchoring and media studies can lead to advanced careers in news anchoring, broadcast journalism, media presentation, radio hosting, reporting, communication coaching, or teaching in media and communication institutes.",

        "A Certificate in Anchoring provides valuable transferable skills such as voice modulation, articulation, confidence, on-camera presence, clear communication, audience engagement, interview skills, and professional presentation techniques, which can be applied across various media and creative industries.",
      ]}
      eligibility="Eligibility for a Certificate in Anchoring typically requires a high school diploma or equivalent."
      hasScholarship={true}
      scholarship={[
        { percentage: "85% and Above", rebate: "100%" },
        { percentage: "80% – 84%", rebate: "40%" },
        { percentage: "75% – 79%", rebate: "30%" },
      ]}
      hasAdmissionProcess={true}
      admission="Applicants will have to go through the following process On the basis of performance in the online Multiple Choice Question (MCQ) test of 2 hours duration and personal interview."
      duration="This program focuses on the study and practice of anchoring, emphasizing news presentation, public speaking, on-camera communication, and live event hosting. Students gain hands-on experience in voice modulation, articulation, teleprompter reading, interview techniques, and script analysis to build a strong foundation in the craft of professional anchoring."
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
