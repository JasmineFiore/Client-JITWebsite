import CollegeTemplate from "../../../Blueprints/CollegeTemplate";

export default function CollegeOfMedia() {
  return (
    <CollegeTemplate
      title="College of Media & Journalism"
      heroImage="/images/CollegeOfMedia/JMI-Media.png"
      heroDescription="Jahangirabad Media Institute has been set up with the target to prepare national and universal understudies to be the significant main thrust in the media business as the leaders. The grounds spread over a region of 50 considerations is bound with every one of the enhancements important to give a healthy air to the understudies in learning and improvement"
      applyNowLink="https://jit-cet.uc-school.com/site/mobile-registration"
      slides={[
        "/images/CollegeOfMedia/slide1.jpg",
        "/images/CollegeOfMedia/slide2.jpg",
        "/images/CollegeOfMedia/slide3.jpg",
      ]}
      aboutHeading="College of Media & Journalism​"
      aboutParagraphs={[
        "Jahangirabad Media Institute has been set up with the target to prepare national and universal understudies to be the significant main thrust in the media business as the leaders. The grounds spread over a region of 50 considerations is bound with every one of the enhancements important to give a healthy air to the understudies in learning and improvement JMI is an approved Study Centre of Mahatma Gandhi Antarrashtriya Hindi Vishwavidyalaya (MGAHV), Wardha and Indira Gandhi National Open University (IGNOU), New Delhi. The JMI has various modern facilities & infrastructure including well equipped theaters & JIT Radio for imparting world class training in media courses. Highly qualified & experienced faculty & administration from reputed Indian universities and visiting faculties from USA and Europe provide global exposure to the students.",
      ]}
      courses={[
        {
          title: "BA Journalism & Mass Communication",
          image: "/images/CollegeOfMedia/slide1.jpg",
          path: "/ba-journalism",
        },
        {
          title: "Certification in Acting",
          image: "/images/CollegeOfMedia/media2.jpg",
            path: "/acting-cert",
        },
        {
          title: "Certification in Film Making",
          image: "/images/CollegeOfMedia/slide2.jpg",
          //   path: "/political-science",
        },
        {
          title: "Certification in Anchoring & Journalism",
          image: "/images/CollegeOfMedia/slide2.jpg",
          //   path: "/political-science",
        },
        {
          title: "Certification in Video Editing",
          image: "/images/CollegeOfMedia/slide2.jpg",
          //   path: "/political-science",
        },
      ]}
      infraImages={[
        "/images/CollegeOfMedia/infra1.jpg",
        "/images/CollegeOfMedia/infra2.jpg",
        "/images/CollegeOfMedia/infra3.jpg",
        "/images/CollegeOfMedia/infra4.jpg",
        "/images/CollegeOfMedia/infra5.jpg",
        "/images/CollegeOfMedia/infra6.jpg",
        "/images/CollegeOfMedia/infra7.jpg",
        "/images/CollegeOfMedia/infra8.jpg",
        "/images/CollegeOfMedia/infra9.jpg",
      ]}
    />
  );
}
