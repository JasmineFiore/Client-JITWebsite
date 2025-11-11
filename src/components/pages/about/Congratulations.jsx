const Congratulations = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20 text-[#0A2342]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Congratulations!
        </h2>

        {/* Description */}
        <p className="text-center text-gray-700 max-w-3xl mx-auto leading-relaxed text-lg">
          The Training and Placement Cell of Jahangirabad Institute of
          Technology & Management is served by eminent personalities from
          ex-corporates as well as academicians from top-notch institutes. The
          Placement Cell functions with the coordination of faculty members and
          student coordinators from all streams.
        </p>

        {/* Image + Caption */}
        <div className="mt-12 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Text / Caption on Left */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h3 className="text-2xl font-semibold text-[#F4C542]">
              25 of our diploma students have secured placement
              <br /> in three renowned companies!
            </h3>

            <p className="text-gray-700 leading-relaxed">
              We are immensely proud of our students who have shown exceptional
              skills and determination, earning their place in reputed
              companies. The Training & Placement Cell continues to guide and
              prepare students for successful careers in engineering and
              management.
            </p>
          </div>

          {/* Placement Image on Right */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/about/congratulation.jpg"
              alt="Placement Achievements"
              className="rounded-2xl shadow-lg w-full max-w-[650px] border-4 border-[#F4C542]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Congratulations;
