export default function WhyJIT() {
  const whyJitCards = [
    {
      title: "EXCELLENT ACADEMICS INFRASTRUCTURE",
      description:
        "JIT offers world-class infrastructure with balanced theory + practical exposure.",
    },
    {
      title: "INNOVATIVE TEACHING",
      description:
        "Dynamic faculty providing innovative, student-centric teaching.",
    },
    {
      title: "OPENNESS TO TEACHING THAT TRANSFORMS",
      description: "Interactive environment encouraging experimentation.",
    },
    {
      title: "POSITIVE & VIBRANT LEARNING ENVIRONMENT",
      description: "A positive campus culture that enriches student learning.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0A2342] mb-12">
        WHY JIT ?
      </h2>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {whyJitCards.map((item, index) => (
          <div
            key={index}
            className={`p-6 md:p-8 rounded-lg shadow-md transition-all
            ${index % 2 === 0 ? "bg-[#F1C232]" : "bg-gray-200"}`}
          >
            <h3 className="text-xl md:text-2xl font-bold text-[#0A2342] mb-3">
              {item.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
