import axios from "axios";
import { useState } from "react";
import { validateField } from "../../../data/validation";

export default function FeedbackForm({
  title,
  description,
  fields,
  questions,
}) {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (label, value) => {
    setFormData((prev) => ({ ...prev, [label]: value }));
  };

  // FIELD onBlur validation using validation.js
  const handleBlur = (field) => {
    const value = formData[field.label] || "";
    let error = "";

    if (field.mapToValidation) {
      error = validateField(field.mapToValidation, value);
    } else if (field.required && !value.trim()) {
      error = `${field.label} is required`;
    }

    setErrors((prev) => {
      const updated = { ...prev };
      if (error) updated[field.label] = error;
      else delete updated[field.label];
      return updated;
    });
  };

  // QUESTION onBlur
  const handleQuestionBlur = (q) => {
    const value = formData[q.text] || "";
    const error = q.required && !value.trim() ? "Please select an answer" : "";

    setErrors((prev) => {
      const updated = { ...prev };
      if (error) updated[q.text] = error;
      else delete updated[q.text];
      return updated;
    });
  };

  // FORM SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let finalErrors = {};

    // VALIDATE TEXT FIELDS
    fields.forEach((field) => {
      const value = formData[field.label] || "";

      if (field.required && !value.trim()) {
        finalErrors[field.label] = `${field.label} is required`;
        return;
      }

      if (field.mapToValidation) {
        const err = validateField(field.mapToValidation, value);
        if (err) finalErrors[field.label] = err;
      }
    });

    // VALIDATE QUESTIONS
    questions.forEach((q) => {
      if (q.required && !formData[q.text]) {
        finalErrors[q.text] = "Please select an answer";
      }
    });

    // STOP IF ERRORS
    if (Object.keys(finalErrors).length > 0) {
      setErrors(finalErrors);

      const firstErrorField = Object.keys(finalErrors)[0];
      const el = document.querySelector(`[name="${firstErrorField}"]`);

      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.focus();
      }

      setLoading(false);
      return;
    }

    // try {
    //   await axios.post("http://localhost:5000/api/send-feedback", formData);
    //   alert("✅ Form submitted successfully!");

    //   // Reset form
    //   setFormData({});
    //   setErrors({});
    // } catch (err) {
    //   console.error(err);
    //   alert("❌ Failed to submit form. Try again later.");
    // }

    alert("✅ Form submitted successfully!");

    // Reset form
    setFormData({});
    setErrors({});

    setLoading(false);
    console.log("formData is ", formData);
    // 🔥 Smooth scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="bg-linear-to-b from-[#07172A] to-[#0A2342] py-6 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {title && (
          <h2 className="text-5xl font-extrabold bg-[#f4c03b] text-[#14202d] pl-10 py-3 md:py-8 rounded-b-2xl shadow-lg">
            {title}
          </h2>
        )}
        {title && (
          <p className="text-center text-gray-300 mb-8 mt-2 text-lg">
            {description}
          </p>
        )}
      </div>

      <div className="max-w-6xl mx-auto bg-[#1E3044] text-white px-10 md:px-14 py-6 rounded-xl shadow-2xl">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* TEXT FIELDS */}
          {fields.map((field, idx) => (
            <div key={idx}>
              <label className="block mb-2">
                {field.label}{" "}
                {field.required && <span className="text-red-500">*</span>}
              </label>

              <input
                type={field.type || "text"}
                placeholder={field.placeholder}
                value={formData[field.label] || ""}
                onChange={(e) => handleChange(field.label, e.target.value)}
                onBlur={() => handleBlur(field)}
                inputMode={field.inputMode}
                maxLength={field.maxLength}
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
                {q.required && <span className="text-red-500">*</span>}
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

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full font-semibold py-3 rounded transition
  ${
    loading
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-yellow-400 text-black hover:bg-yellow-300 cursor-pointer"
  }`}
          >
            {loading ? "Submitting..." : "Submit Form"}
          </button>

          {/* ERROR COUNT DISPLAY */}
          {Object.keys(errors).length > 0 && (
            <p className="text-red-400 text-center mt-3">
              ⚠️ {Object.keys(errors).length} field(s) need attention before
              submitting.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
