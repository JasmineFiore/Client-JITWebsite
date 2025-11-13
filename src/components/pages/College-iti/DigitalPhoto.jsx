import CourseTemplate from "../../../Blueprints/CourseTemplate";

export default function DigitalPhoto() {
  return (
    <CourseTemplate
      title="Digital Photography"
      overviewHeading="Course – Overview"
      overviewParagraphs={[
        "A digital photography course provides comprehensive training in the art and techniques of capturing and processing digital images. It equips students with the knowledge and skills required to create visually compelling photographs using digital cameras and editing software. The course typically covers topics such as camera settings, exposure control, composition, lighting techniques, post-processing, and image manipulation. Students learn to use different types of lenses, understand the principles of colour and contrast, explore various genres of photography, and develop their creative vision. Practical assignments and hands-on practice sessions are often included to reinforce learning.",
      ]}
      image="/images/CollegeOfITI/c2.jpg"
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
          name: "Mohd. Sohib Ansari",
          // company: "Pursuing MS in Youngstown University",
          img: "/images/SohibAnsariImg.jpg",
        },
        {
          name: "Ms Ruokuokhrienuo Soupfunuo",
          // company: "Placed in Pie Infocom",
          img: "/images/RuokuImg.jpg",
        },
        {
          name: "Basit Shamsher",
          // company: "Placed in Infosys",
          img: "/images/our-achiever/Basit-Shamsher.jpg",
        },
      ]}
      careerProspects={[
        {
          //   title: "Corporate Legal Officer",
          paragraphs: [
            "A career in digital photography offers various opportunities and prospects in today’s visual-centric world. Here are some potential career prospects in digital photography:",
          ],
        },
        "Professional Photographer.",
        "Photojournalist.",
        "Commercial Photographer.",
        "Fashion Photographer.",
        "Fine Art Photographer.",
        "Documentary Photographer.",
        "Photo Editor/Retoucher.",
        "Photography Educator.",
        {
          //   title: "Corporate Legal Officer",
          paragraphs: [
            "It’s important for photographers to continually refine their technical skills, stay updated with industry trends, and build a strong portfolio to stand out in the competitive field of digital photography.",
          ],
        },
      ]}
      eligibility="Eligibility for a diploma in civil engineering typically requires a high school diploma or equivalent. Some programs may require specific coursework in maths or science. Additionally, students may need to meet minimum GPA requirements and/or take placement exams to demonstrate their readiness for college-level coursework."
      hasScholarship={true}
      scholarship={[
        { percentage: "85% and Above", rebate: "100%" },
        { percentage: "80% – 84%", rebate: "40%" },
        { percentage: "75% – 79%", rebate: "30%" },
      ]}
      hasAdmissionProcess={true}
      admission="Applicants will have to go through the following process On the basis of performance in the online Multiple Choice Question (MCQ) test of 2 hours duration and personal interview"
      courseDetails={[
        "Course Duration: 3 years",
        "Department: History",
        "Type of Course: Undergraduate Course",
        "College/Faculty: College of Arts",
      ]}
    />
  );
}
