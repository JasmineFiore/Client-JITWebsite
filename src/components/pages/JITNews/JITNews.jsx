import { motion } from "framer-motion";

export default function JITNews() {
  const news = [
    {
      title: "JIT Ranked #1 in Technical Education",
      description:
        "JIT achieved a remarkable milestone in academic excellence across the state.",
      date: "November 2025",
      category: "Achievement",
      featured: true,
      image: "/images/news/news1.png",
      link: "https://example.com",
    },
    {
      title: "Workshop on AI & ML",
      description:
        "Students attended a practical hands-on workshop conducted by industry experts.",
      date: "October 2025",
      category: "Workshop",
      image: "/images/news/news2.png",
    },
    {
      title: "Sports Meet 2025",
      description: "An exciting sports event featuring multiple competitions.",
      date: "September 2025",
      category: "Sports",
      image: "/images/news/news3.png",
    },
    {
      title: "National Innovation Fest",
      description:
        "JIT students showcased 50+ innovative projects in tech and robotics.",
      date: "August 2025",
      category: "Event",
      image: "/images/news/news4.png",
    },
  ];

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-14 bg-[#00173a]">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 tracking-wide">
          JIT News & Updates
        </h2>
        <p className="text-gray-300 mt-2 text-sm md:text-base">
          Stay updated with the latest happenings & achievements at JIT
        </p>
        <div className="w-24 h-1 bg-yellow-500 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* News Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {news.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="bg-[#03214c] shadow-lg hover:shadow-yellow-400/40 rounded-xl overflow-hidden border border-yellow-500/20 relative"
          >
            {/* Featured Ribbon */}
            {item.featured && (
              <div className="absolute top-0 right-0 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                FEATURED
              </div>
            )}

            {/* Image */}
            {item.image && (
              <div className="h-96 w-full overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover brightness-95 hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#03214c] via-transparent to-transparent"></div>

                {/* Category Tag */}
                <span className="absolute bottom-3 left-3 text-xs bg-yellow-500 text-black px-3 py-1 rounded-full shadow-md font-semibold">
                  {item.category}
                </span>
              </div>
            )}

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              <div className="flex justify-between items-center mt-3">
                <span className="text-xs text-yellow-400 font-medium">
                  {item.date}
                </span>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    className="text-yellow-400 text-sm font-semibold hover:underline"
                  >
                    Read More →
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
