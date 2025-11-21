import { useState } from "react";

export default function FeedbackForm({
  title,
  description,
  fields,
  questions,
}) {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  // handle input change
  const handleChange = (label, value) => {
    setFormData((prev) => ({ ...prev, [label]: value }));
  };

  // onBlur validation for each field
  const handleBlur = (field) => {
    const value = formData[field.label] || "";
    let error = "";

    if (field.required && !value.trim()) {
      error = `${field.label} is required`;
    } else if (field.validate) {
      const result = field.validate(value);
      if (result !== true) error = result; // validator returns error string
    }

    setErrors((prev) => ({ ...prev, [field.label]: error }));
  };

  // onBlur validation for questions
  const handleQuestionBlur = (q) => {
    const value = formData[q.text] || "";
    let error = "";

    if (q.required && !value.trim()) {
      error = "Please select an answer";
    }

    setErrors((prev) => ({ ...prev, [q.text]: error }));
  };

  // final submit validation
  const validateForm = () => {
    let newErrors = {};

    fields.forEach((field) => {
      const value = formData[field.label] || "";

      if (field.required && !value.trim()) {
        newErrors[field.label] = `${field.label} is required`;
      } else if (field.validate) {
        const result = field.validate(value);
        if (result !== true) newErrors[field.label] = result;
      }
    });

    questions.forEach((q) => {
      const value = formData[q.text] || "";
      if (q.required && !value.trim()) {
        newErrors[q.text] = "Please select an answer";
      }
    });

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert("Form submitted successfully!");
  };

  return (
    <section className="bg-linear-to-b from-[#07172A] to-[#0A2342] py-6 px-6 md:px-16">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-5xl font-extrabold text-[#14202d] bg-[#f4c03b] 
          pl-10 py-8 rounded-b-2xl shadow-lg tracking-wide"
        >
          {title}
        </h2>

        <p className="text-center text-gray-300 mb-8 text-lg">{description}</p>
      </div>

      {/* Form */}
      <div
        className="max-w-6xl mx-auto bg-[#1E3044] text-white 
        px-10 md:px-14 py-6 rounded-xl shadow-2xl border border-white/10"
      >
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* TEXT FIELDS */}
          {fields.map((field, idx) => (
            <div key={idx}>
              <label className="block mb-2">
                {field.label}{" "}
                {field.required && <span className="text-red-500">*</span>}
              </label>

              {/* <input
                type={field.type || "text"}
                placeholder={field.placeholder}
                value={formData[field.label] || ""}
                onChange={(e) => handleChange(field.label, e.target.value)}
                onBlur={() => handleBlur(field)}
                className="w-full p-3 rounded bg-white text-black"
              /> */}

              <input
                type={field.type || "text"}
                placeholder={field.placeholder}
                value={formData[field.label] || ""}
                onChange={(e) => handleChange(field.label, e.target.value)}
                onBlur={() => handleBlur(field)}
                inputMode={field.inputMode || undefined}
                pattern={field.pattern || undefined}
                maxLength={field.maxLength || undefined}
                onInput={(e) => {
                  if (field.onlyNumbers) {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  }
                }}
                className="w-full p-3 rounded bg-white text-black"
              />

              {errors[field.label] && (
                <p className="text-red-400 text-sm mt-1">
                  {errors[field.label]}
                </p>
              )}
            </div>
          ))}

          {/* QUESTIONS */}
          {questions.map((q, idx) => (
            <div key={idx}>
              <label className="block mb-2">
                {q.text}
                {q.required && <span className="text-red-500"> *</span>}
              </label>

              <select
                className="w-full p-3 rounded bg-white text-black"
                value={formData[q.text] || ""}
                onChange={(e) => handleChange(q.text, e.target.value)}
                onBlur={() => handleQuestionBlur(q)}
              >
                <option value="" disabled>
                  Select
                </option>
                {(
                  q.options || [
                    "Excellent",
                    "Very Good",
                    "Good",
                    "Satisfactory",
                    "Poor",
                  ]
                ).map((opt, i) => (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>

              {errors[q.text] && (
                <p className="text-red-400 text-sm mt-1">{errors[q.text]}</p>
              )}
            </div>
          ))}

          {/* Suggestion */}
          <div>
            <label className="block mb-2">Opinion / Suggestion</label>
            <textarea
              rows="4"
              className="w-full p-3 rounded bg-white text-black"
              value={formData["Suggestion"] || ""}
              onChange={(e) => handleChange("Suggestion", e.target.value)}
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded 
            hover:bg-yellow-300 transition"
          >
            Submit Form
          </button>
        </form>
      </div>
    </section>
  );
}
