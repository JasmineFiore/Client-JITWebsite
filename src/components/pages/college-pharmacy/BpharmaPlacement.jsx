const placementImages = [
  "/images/pharmacy/placement/p1.webp",
  "/images/pharmacy/placement/p2.webp",
  "/images/pharmacy/placement/p3.webp",
  "/images/pharmacy/placement/p4.webp",
  "/images/pharmacy/placement/p5.webp",
  "/images/pharmacy/placement/p6.webp",
  "/images/pharmacy/placement/p7.webp",
];

export default function BpharmaPlacement() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      {/* Heading & Description */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] mb-4">
          Internship & Placement Opportunities
        </h2>
        <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
          JIT maintains strong ties with leading pharmaceutical companies,
          hospitals, and research institutions, providing students with ample
          internship and placement opportunities. Our industry partnerships and
          career guidance initiatives ensure that our graduates are
          well-prepared to embark on successful careers in the pharmaceutical
          healthcare sector.
        </p>
      </div>

      {/* Image Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {placementImages.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-500"
          >
            <img
              src={img}
              alt={`Placement ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
