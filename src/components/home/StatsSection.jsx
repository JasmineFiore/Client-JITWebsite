import React from "react";
import CountUp from "react-countup";

const StatsSection = () => {
  const stats = [
    { id: 1, value: 90, suffix: "%", label: "Placements" },
    { id: 2, value: 60, suffix: "+", label: "Faculty" },
    { id: 3, value: 2000, suffix: "+", label: "Students" },
    { id: 4, value: 22, suffix: "+", label: "Years of Experience" },
  ];

  return (
    <section className="bg-white py-12 sm:py-16">
      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold  text-yellow-400">
          A Legacy of Our Educational Excellence
        </h2>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto px-4 sm:px-6">
        {stats.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-4 sm:p-6 text-center flex flex-col justify-center"
          >
            <h3 className="text-3xl sm:text-4xl font-extrabold text-black mb-1">
              <CountUp
                start={0}
                end={item.value}
                duration={2.5}
                enableScrollSpy
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
              {item.suffix}
            </h3>
            <p className="text-sm sm:text-lg text-gray-700 leading-tight">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
