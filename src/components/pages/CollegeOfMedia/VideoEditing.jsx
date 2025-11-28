import CourseTemplate from "../../../Blueprints/CourseTemplate";

export default function VideoEditing() {
  return (
    <CourseTemplate
      title="Certificate in Video Editing "
      overviewHeading="Course – Overview"
      overviewParagraphs={[
        "A Certificate in Video Editing is a specialized program that focuses on developing foundational skills in video post-production, editing techniques, storytelling, and visual content creation. The program typically covers areas such as timeline editing, transitions, color correction, sound editing, motion graphics, special effects, and video rendering. Students also learn about software tools, digital media formats, project organization, and the fundamentals of film, television, and online video production. The course helps learners understand how to craft engaging videos, maintain narrative flow, and produce professional-quality content.",

        "The certificate program is usually completed in a short duration—ranging from a few months to one year—and can lead to various opportunities in fields such as film and television editing, digital content creation, social media video production, advertising, motion graphics, short films, and multimedia projects. Additionally, learners may choose to pursue further studies in video production, film editing, cinematography, motion graphics, or digital media production.",
      ]}
      image="public/images/CollegeOfMedia/VideoEditing-hero.jpg"
      // hodLink="/hod/arts"
      careerProspects={[
        // {
        //   //   title: "Corporate Legal Officer",
        //   paragraphs: [
        //     "A Bachelor of Arts (BA) in Sociology is an undergraduate degree program that focuses on the study of human society and social behaviour. Graduates with a degree in Sociology can pursue a wide range of career opportunities in fields such as social services, education, research, business, and government. Here are some potential career prospects for graduates with a BA in Sociology:",
        //   ],
        // },
        "A Certificate in Video Editing provides foundational and advanced skills in video post-production, editing techniques, storytelling, motion graphics, and digital content creation.",

        "Graduates may work as video editors, motion graphics artists, post-production assistants, content creators, multimedia editors, or digital media producers.",

        "They may also pursue opportunities in film editing, advertising videos, social media content, short films, promotional videos, VFX editing, and media production roles within the entertainment and digital media industry.",

        "Further training in video editing and post-production can lead to advanced careers in film and television editing, motion graphics design, visual effects, digital media production, content direction, or teaching in media and post-production institutes.",

        "A Certificate in Video Editing provides valuable transferable skills such as storytelling through visuals, timeline editing, color correction, sound integration, creative problem-solving, attention to detail, and project management, which can be applied across various media and creative industries.",
      ]}
      eligibility="Eligibility for a Certificate in Video Editing typically requires a high school diploma or equivalent."
      hasScholarship={true}
      scholarship={[
        { percentage: "85% and Above", rebate: "100%" },
        { percentage: "80% – 84%", rebate: "40%" },
        { percentage: "75% – 79%", rebate: "30%" },
      ]}
      hasAdmissionProcess={true}
      admission="Applicants will have to go through the following process On the basis of performance in the online Multiple Choice Question (MCQ) test of 2 hours duration and personal interview."
      duration="This program focuses on the study and practice of video editing, emphasizing post-production techniques, storytelling, visual composition, and digital content creation. Students gain hands-on experience in timeline editing, color correction, sound design, motion graphics, and special effects to build a strong foundation in the craft of professional video editing."
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
