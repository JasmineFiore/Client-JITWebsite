import FeedbackForm from "../FeedbackForm";

const StaffFeedback = () => {
  const fields = [
    {
      label: "Name of the Teacher ",
      placeholder: "Enter teacher name",
      required: true,
    },
    {
      label: "Contact No. ",
      type: "text",
      placeholder: "Enter contact number",
      required: true,
    },
    { label: "Designation ", placeholder: "Enter designation", required: true },
    {
      label: "Email Id ",
      type: "email",
      placeholder: "Enter email address",
      required: true,
    },
  ];

  const questions = [
  { text: "1. The courses / syllabi taught by me have a good balance between theory and application", required: false },
  { text: "2. Contents of curriculum are as per the industry requirement", required: false },
  { text: "3. The objectives of the syllabi are well defined", required: false },
  { text: "4. Infrastructural facilities are available in the college", required: false },
  { text: "5. The college provides adequate opportunities and support to faculty members for upgrading their skills and qualifications", required: false },
  { text: "6. The environment in the College is conducive to teaching and research", required: false },
  { text: "7. The books/journals etc. prescribed / listed as reference materials are relevant, updated and cover the entire syllabi", required: false },
  { text: "8. I have the freedom to adopt new techniques / strategies of testing and assessment of students", required: false },
  { text: "9. The prescribed books are available in the Library in sufficient numbers", required: false },
  { text: "10. Any special Remark on curriculum", required: false },
];


  return (
    <FeedbackForm
      title="Staff Feedback Form"
      description="Use the form below to send us your comments. We read all feedback carefully."
      fields={fields}
      questions={questions}
    />
  );
};

export default StaffFeedback;
