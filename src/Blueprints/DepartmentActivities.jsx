const DepartmentActivities = ({
  title = "Departmental Activities",
  images = [],
}) => {
  return (
    <section className="bg-gradient-to-b from-[#0A2342] via-[#0E2E5C] to-[#0A2342] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-white mb-10">{title.toUpperCase()}</h2>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg hover:scale-[1.03] transition-transform duration-300"
            >
              <img
                src={src}
                alt={`activity-${index}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentActivities;
