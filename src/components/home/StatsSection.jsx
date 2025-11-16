import StatsGrid from "../pages/LifeJIT/StatsGrid";

const StatsSection = () => {
  const homeStats = [
    { end: 90, label: "Placements", suffix: "%" },
    { end: 60, label: "Faculty", suffix: "+" },
    { end: 2000, label: "Students", suffix: "+" },
    { end: 22, label: "Years of Experience", suffix: "+" },
  ];

  return (
    <section className="bg-white py-12 sm:py-16">
      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold  text-[#fcb900]">
          A Legacy of Our Educational Excellence
        </h2>
      </div>

      <StatsGrid stats={homeStats} />
    </section>
  );
};

export default StatsSection;
