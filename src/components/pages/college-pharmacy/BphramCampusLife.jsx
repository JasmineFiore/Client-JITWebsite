export default function BphramCampusLife() {
  const images = [
    "/images/pharmacy/campus-life/c1.webp",
    "/images/pharmacy/campus-life/c2.jpg",
    "/images/pharmacy/campus-life/c3.webp",
    "/images/pharmacy/campus-life/c4.webp",
    "/images/pharmacy/campus-life/c5.jpg",
    "/images/pharmacy/campus-life/c6.jpg",
  ];

  return (
    <section className="bg-[#f4c542] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] mb-6">
          CAMPUS LIFE
        </h2>

        <p className="text-gray-900 text-base md:text-lg max-w-4xl mx-auto leading-relaxed mb-10">
          JIT provides a vibrant and inclusive campus environment where students
          get engaged in a variety of extracurricular activities, cultural
          events, and community service initiatives. Through student clubs,
          sports teams, cultural festivals and social gatherings, students get
          ample opportunities to enrich their development, college experience,
          and foster lifelong friendships.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-md shadow-md hover:scale-105 transition-transform duration-500"
            >
              <img
                src={src}
                alt={`Campus Life ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
