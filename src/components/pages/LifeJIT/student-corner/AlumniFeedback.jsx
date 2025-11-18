import FeedbackForm from "../FeedbackForm";
import StatsGrid from "../StatsGrid";
import WhyChose from "../WhyChose";

const AlumniFeedback = () => {
  const fields = [
    {
      label: "Name of Alumnus ",
      placeholder: "Enter student name",
      required: true,
    },
    {
      label: "Contact Number",
      placeholder: "Enter contact number",
      required: true,
    },
    {
      label: "Email",
      type: "email",
      placeholder: "Enter email address",
      required: true,
    },
    {
      label: "Present Status (Working as with name of the organization)",
      placeholder: "Present Status",
      required: true,
    },
    { label: "Address ", placeholder: "Enter Address ", required: true },
    {
      label: "Name of the course completed",
      placeholder: "Enter course completed",
      required: true,
    },
    {
      label: "Year of completion of course ",
      placeholder: "Enter Year of completion of course ",
      required: true,
    },
  ];

  const questions = [
    {
      text: "1. Relevance of content of curriculum with job / Occupation ",
      required: true,
      options: ["Highly Satisfied", "Satisfied", "Unsatisfied", "Neutral"],
    },
    {
      text: "2. Infrastructure, laboratory, library & other facilities available in the college ",
      required: true,
      options: ["Highly Satisfied", "Satisfied", "Unsatisfied", "Neutral"],
    },
    {
      text: "3. Outreach activity of the college ",
      required: true,
      options: ["Highly Satisfied", "Satisfied", "Unsatisfied", "Neutral"],
    },
    {
      text: "4. Teacher -student interaction ",
      required: true,
      options: ["Highly Satisfied", "Satisfied", "Unsatisfied", "Neutral"],
    },
    {
      text: "5. Cooperation from teachers, library and office staff ",
      required: true,
      options: ["Highly Satisfied", "Satisfied", "Unsatisfied", "Neutral"],
    },
    {
      text: "6. Involvement of teachers in college activities for teaching",
      required: true,
      options: ["Highly Satisfied", "Satisfied", "Unsatisfied", "Neutral"],
    },

    {
      text: "7. Satisfaction with the overall facilities available as per curriculum",
      required: true,
      options: ["Highly Satisfied", "Satisfied", "Unsatisfied", "Neutral"],
    },
  ];

  return (
    <>
      <FeedbackForm
        title="Alumni Feedback"
        description="Use the form below to send us your comments. We read all feedback carefully."
        fields={fields}
        questions={questions}
      />
      <WhyChose />
    </>
  );
};

export default AlumniFeedback;
