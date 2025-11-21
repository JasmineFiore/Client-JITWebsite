import FeedbackForm from "../FeedbackForm";
import WhyChose from "../WhyChose";

const StaffFeedback = () => {
  const fields = [
    {
      label: "Name of the Teacher ",
      placeholder: "Enter teacher name",
      required: true,
      validate: (v) =>
        v.trim().length >= 3 || "Name must be at least 3 characters",
    },
    {
      label: "Contact Number",
      placeholder: "Enter contact number",
      required: true,
      onlyNumbers: true, //  allow only digits
      inputMode: "numeric", //  mobile-friendly numeric keypad
      pattern: "[0-9]*", //  restrict non-numeric entries
      maxLength: 10, //  exact 10 digits
      validate: (v) =>
        /^[0-9]{10}$/.test(v) || "Enter valid 10-digit phone number",
    },
    {
      label: "Designation ",
      placeholder: "Enter designation",
      required: true,
      validate: (v) => v.trim() !== "" || "Designation is required",
    },
    {
      label: "Email",
      type: "email",
      placeholder: "Enter email address",
      required: true,
      validate: (v) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Enter a valid email address",
    },
  ];

  const staffOptions = [
    "Agree",
    "Disagree",
    "Strongly Disagree",
    "Neither Agree Nor Disagree",
  ];

  const questions = [
    {
      text: "1. The courses / syllabi taught by me have a good balance between theory and application",
      required: false,
      options: staffOptions,
    },
    {
      text: "2. Contents of curriculum are as per the industry requirement",
      required: false,
      options: staffOptions,
    },
    {
      text: "3. The objectives of the syllabi are well defined",
      required: false,
      options: staffOptions,
    },
    {
      text: "4. Infrastructural facilities are available in the college",
      required: false,
      options: staffOptions,
    },
    {
      text: "5. The college provides adequate opportunities and support to faculty members for upgrading their skills and qualifications",
      required: false,
      options: staffOptions,
    },
    {
      text: "6. The environment in the College is conducive to teaching and research",
      required: false,
      options: staffOptions,
    },
    {
      text: "7. The books/journals etc. prescribed / listed as reference materials are relevant, updated and cover the entire syllabi",
      required: false,
      options: staffOptions,
    },
    {
      text: "8. I have the freedom to adopt new techniques / strategies of testing and assessment of students",
      required: false,
      options: staffOptions,
    },
    {
      text: "9. The prescribed books are available in the Library in sufficient numbers",
      required: false,
      options: staffOptions,
    },
    {
      text: "10. Any special Remark on curriculum",
      required: false,
      options: staffOptions,
    },
  ];

  return (
    <>
      <FeedbackForm
        title="Staff Feedback Form"
        description="Use the form below to send us your comments. We read all feedback carefully."
        fields={fields}
        questions={questions}
      />
      <WhyChose />
    </>
  );
};

export default StaffFeedback;
