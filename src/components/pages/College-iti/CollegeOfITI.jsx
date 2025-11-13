import CollegeTemplate from "../../../Blueprints/CollegeTemplate";

export default function CollegeOfITI() {
  return (
    <CollegeTemplate
      title="College of ITI"
      heroImage="/images/CollegeOfITI/iti.png"
      heroDescription="ITIs offer training programs in a diverse range of fields, including mechanical engineering, electrical engineering, electronics, computer hardware, automobile technology, welding, plumbing, carpentry, and more. . These programs are designed to impart specialized knowledge and skills related to specific trades and industries."
      applyNowLink="https://jit-cet.uc-school.com/site/mobile-registration"
      slides={[
        "/images/CollegeOfITI/iti1.jpg",
        "/images/CollegeOfITI/iti2.jpg",
        "/images/CollegeOfITI/iti3.jpg",
      ]}
      aboutHeading="College of ITI (NCVT)​"
      aboutParagraphs={[
        "ITI stands for Industrial Training Institute. ITIs are institutions that provide vocational training in various technical trades and crafts. They are primarily focused on imparting practical skills to students, enabling them to enter the workforce directly after completing their training.",
        "ITIs offer a wide range of courses and programs in fields such as mechanical engineering, electrical engineering, electronics, computer hardware, automobile technology, welding, plumbing, carpentry, and many others. These programs are designed to equip students with the specific skills and knowledge required for various trades and industries. The training at ITIs combines classroom instruction with practical hands-on experience. Students learn through a combination of theoretical learning and practical training in workshops and labs. The curriculum is designed to align with industry standards and requirements, ensuring that students develop the necessary skills to meet the demands of the job market.",
      ]}
      courses={[
        {
          title: "Multimedia Animation & Special Effect",
          image: "/images/CollegeOfITI/c1.jpg",
          //   path: "/llb",
        },
        {
          title: "Digital Photography",
          image: "/images/CollegeOfITI/c2.jpg",
          path: "/digital-photography",
        },
        {
          title: "Electrician",
          image: "/images/CollegeOfITI/c3.webp",
          //   path: "/political-science",
        },
        {
          title: "Welder",
          image: "/images/CollegeOfITI/c4.jpg",
          //   path: "/political-science",
        },
        {
          title: "Fitter",
          image: "/images/CollegeOfITI/c5.jpg",
          //   path: "/political-science",
        },
        {
          title: "Draughtman",
          image: "/images/CollegeOfITI/c6.jpg",
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
