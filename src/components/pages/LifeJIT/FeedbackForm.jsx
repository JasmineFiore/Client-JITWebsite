// FeedbackForm.jsx
export default function FeedbackForm({
  title,
  description,
  fields,
  questions,
}) {
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
        <form className="space-y-6">
          {/* TEXT FIELDS */}
          {fields.map((field, idx) => (
            <div key={idx}>
              <label className="block mb-2">
                {field.label}{" "}
                {field.required && <span className="text-red-500"> *</span>}
              </label>
              <input
                type={field.type || "text"}
                placeholder={field.placeholder || field.label}
                className="w-full p-3 rounded bg-white text-black"
              />
            </div>
          ))}

          {/* QUESTIONS */}
          {questions.map((q, idx) => (
            <div key={idx}>
              <label className="block mb-2">
                {q.text}
                {q.required && <span className="text-red-500"> *</span>}
              </label>

              <select className="w-full p-3 rounded bg-white text-black">
                {/* Disabled default option */}
                <option value="" disabled selected>
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
            </div>
          ))}

          {/* Suggestion */}
          <div>
            <label className="block mb-2">Opinion / Suggestion </label>
            <textarea
              rows="4"
              className="w-full p-3 rounded bg-white text-black"
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
