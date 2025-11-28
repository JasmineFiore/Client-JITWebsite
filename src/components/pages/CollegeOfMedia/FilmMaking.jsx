import CourseTemplate from "../../../Blueprints/CourseTemplate";

export default function FilmMaking() {
  return (
    <CourseTemplate
      title="Certificate in Film Making"
      overviewHeading="Course – Overview"
      overviewParagraphs={[
        "A Certificate in Film Making is a specialized program that focuses on developing foundational skills in film production, direction, and storytelling. The program typically covers areas such as cinematography, video editing, screenwriting, sound recording, lighting techniques, and camera operation. Students also learn about film theory, production planning, storyboarding, and the fundamentals of digital film Making. The course helps learners understand how to create visual narratives, manage production workflows, and bring stories to life through effective use of camera, sound, and editing. Participants gain hands-on experience in shooting, directing, and producing short films, preparing them for work in the film and media industry.",

        "The certificate program is usually completed in a short duration—ranging from a few months to one year—and can lead to various opportunities in fields such as film production, direction, cinematography, video editing, screenwriting, sound design, and digital media creation. Additionally, learners may choose to pursue further studies in film Making or related fields such as film direction, cinematography, animation, VFX, media production, or mass communication.",
      ]}
      image="/images/CollegeOfMedia/filmMaking-hero.jpg"
      // hodLink="/hod/arts"
      careerProspects={[
        // {
        //   //   title: "Corporate Legal Officer",
        //   paragraphs: [
        //     "A Bachelor of Arts (BA) in Sociology is an undergraduate degree program that focuses on the study of human society and social behaviour. Graduates with a degree in Sociology can pursue a wide range of career opportunities in fields such as social services, education, research, business, and government. Here are some potential career prospects for graduates with a BA in Sociology:",
        //   ],
        // },
        "A Film Making Certificate provides foundational and advanced skills in film production, direction, cinematography, screenwriting, editing, and digital film Making.",
        "Graduates may work as filmmakers, assistant directors, cinematographers, video editors, screenwriters, sound designers, production assistants, or content creators.",
        "They may also pursue opportunities in direction, scriptwriting, cinematography, VFX, animation, production management, and digital media creation within the film and entertainment industry.",
        "Further training in film Making and media arts can lead to advanced careers in film direction, cinematography, editing, production design, sound engineering, documentary film Making, or teaching in film and media institutes.",
        "A Film Making Certificate provides valuable transferable skills such as visual storytelling, camera handling, lighting techniques, editing proficiency, script development, teamwork, creativity, and project management, which can be applied across various media and creative industries.",
      ]}
      eligibility="Eligibility for a Film Making Certificate typically requires a high school diploma or equivalent."
      hasScholarship={true}
      scholarship={[
        { percentage: "85% and Above", rebate: "100%" },
        { percentage: "80% – 84%", rebate: "40%" },
        { percentage: "75% – 79%", rebate: "30%" },
      ]}
      hasAdmissionProcess={true}
      admission="Applicants will have to go through the following process On the basis of performance in the online Multiple Choice Question (MCQ) test of 2 hours duration and personal interview."
      duration="This program focuses on the study and practice of film Making, emphasizing visual storytelling, film direction, camera operation, cinematography, and the principles of film production. Students gain hands-on experience in scriptwriting, storyboarding, lighting, sound recording, and video editing to build a strong foundation in the craft of film Making."
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
