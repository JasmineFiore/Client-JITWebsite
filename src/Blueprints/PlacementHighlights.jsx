const PlacementHighlights = ({ title = "Our Achievers", achievers = [] }) => {
  return (
    <section
      id="placement-highlights"
      className="bg-yellow-400 py-10 px-6 md:px-12 flex flex-col items-center"
    >
      <div className="max-w-7xl w-full text-center">
        {/* Dynamic Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#0A2342] mb-10">
          {title}
        </h2>

        {/* ✅ Placement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {achievers.map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-md shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 w-72"
            >
              <img
                src={person.img}
                alt={person.name}
                className="w-full h-80 object-contain p-2"
                loading="lazy"
              />
              <div className="pl-4 py-2 text-left">
                <p className="text-lg text-gray-700 font-bold">{person.name}</p>
                <p className="text-sm text-gray-600 font-semibold">
                  {person.jobprofile}
                </p>
                <p className="text-sm text-gray-600 font-semibold">
                  {person.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacementHighlights;
