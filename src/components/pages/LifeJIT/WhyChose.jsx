import StatsGrid from "./StatsGrid";

export default function WhyChose() {
  const stats = [
    { end: 23, label: "Years of Experience", suffix: "+" },
    { end: 80, label: "Qualified Staff", suffix: "+" },
    { end: 350, label: "Awards", suffix: "+" },
    { end: 5000, label: "Graduates", suffix: "+" },
  ];
  return (
    <>
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
}
