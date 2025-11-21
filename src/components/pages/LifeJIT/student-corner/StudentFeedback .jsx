import FeedbackForm from "../FeedbackForm";
import WhyChose from "../WhyChose";

const StudentFeedback = () => {
  const fields = [
    {
      label: "Name of Student",
      placeholder: "Enter student name",
      required: true,
      validate: (v) =>
        v.trim().length >= 3 || "Name must be at least 3 characters",
    },
    {
      label: "Email",
      type: "email",
      placeholder: "Enter email address",
      required: true,
      validate: (v) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Enter a valid email address",
    },
    {
      label: "Registration Number",
      placeholder: "Enter registration number",
      required: true,
      onlyNumbers: true, //  allow only digits
      inputMode: "numeric",
      validate: (v) => v.trim() !== "" || "Registration number is required",
    },
    {
      label: "Subject",
      placeholder: "Enter subject name",
      required: true,
      validate: (v) => v.trim() !== "" || "Subject is required",
    },
    {
      label: "Course & Semester",
      placeholder: "Enter course & semester",
      required: true,
      validate: (v) => v.trim() !== "" || "Course & semester is required",
    },
    {
      label: "Name of the Teacher (Subject taught)",
      placeholder: "Enter teacher name",
      required: true,
      validate: (v) =>
        v.trim().length >= 3 || "Teacher name must be at least 3 characters",
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
  ];

  const questions = [
    { text: "1. Has the Teacher covered entire Syllabus?", required: true },
    {
      text: "2. Has the Teacher covered relevant topics beyond syllabus?",
      required: true,
    },
    { text: "3(a). Technical content / course content", required: true },
    { text: "3(b). Communication skills", required: true },
    { text: "3(c). Use of teaching aids", required: true },
    { text: "4. Pace on which contents were covered", required: true },
    {
      text: "5. Motivation and inspiration for students to learn",
      required: true,
    },
    { text: "6(i). Practical demonstration", required: true },
    { text: "6(ii). Hands on training", required: true },
    { text: "7. Clarity of expectations of students", required: true },
    { text: "8. Feedback provided on Students’ progress", required: true },
    {
      text: "9. Willingness to offer help and advice to students",
      required: true,
    },
  ];

  return (
    <>
      <FeedbackForm
        title="Student Feedback"
        description="Use the form below to send us your comments. We read all feedback carefully."
        fields={fields}
        questions={questions}
      />
      <WhyChose />
    </>
  );
};

export default StudentFeedback;
