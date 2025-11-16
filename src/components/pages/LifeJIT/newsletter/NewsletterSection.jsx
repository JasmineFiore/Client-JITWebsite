export default function NewsletterSection({ year, newsletters }) {
  return (
    <div className="my-10">
      <h2 className="text-3xl font-bold text-center mb-6">Year- {year}</h2>

      {/* Container to match Elementor width */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap gap-8 justify-start">
          {newsletters.map((item, index) => (
            <div
              key={index}
              onClick={() => window.open(item.pdfUrl, "_blank")}
              className="cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105 p-3 w-72"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-contain rounded"
              />

              <p className="text-center font-semibold mt-2">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
