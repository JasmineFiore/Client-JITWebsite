import FeedbackForm from "../FeedbackForm";
import StatsGrid from "../StatsGrid";

const StudentFeedback = () => {
  const fields = [
    {
      label: "Name of Student",
      placeholder: "Enter student name",
      required: true,
    },
    {
      label: "Email",
      type: "email",
      placeholder: "Enter email address",
      required: true,
    },
    {
      label: "Registration Number",
      placeholder: "Enter registration number",
      required: true,
    },
    { label: "Subject", placeholder: "Enter subject name", required: true },
    {
      label: "Course & Semester",
      placeholder: "Enter course & semester",
      required: true,
    },
    {
      label: "Name of the Teacher (Subject taught)",
      placeholder: "Enter teacher name",
      required: true,
    },
    {
      label: "Contact Number",
      placeholder: "Enter contact number",
      required: true,
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

  const stats = [
    { end: 23, label: "Years of Experience", suffix: "+" },
    { end: 80, label: "Qualified Staff", suffix: "+" },
    { end: 350, label: "Awards", suffix: "+" },
    { end: 5000, label: "Graduates", suffix: "+" },
  ];

  return (
    <>
      <FeedbackForm
        title="Student Feedback"
        description="Use the form below to send us your comments. We read all feedback carefully."
        fields={fields}
        questions={questions}
      />

      {/* Why Choose Us Section */}
      <section
        className="relative bg-cover bg-center py-24"
        style={{
          backgroundImage:
            "url('/images/studentcorner/JIT-Campus-Overview-02_compressed-1-055-scaled.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl mx-auto text-center text-white px-6">
          <p className="text-yellow-400 font-semibold tracking-widest mb-3">
            WE ARE PROFESSIONAL
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-10">
            Why choose us?
          </h2>

          <StatsGrid stats={stats} />
        </div>
      </section>
    </>
  );
};

export default StudentFeedback;
