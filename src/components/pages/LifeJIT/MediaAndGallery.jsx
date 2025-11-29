import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MediaGallery() {
  const allImages = [
    { src: "/images/events/SPORTSDAY/s1.jpg", category: "Sports", title: "Sports Day" },
    { src: "/images/events/YOGADAY/y1.jpg", category: "Cultural", title: "Yoga Day" },
    { src: "/images/events/J-TechFUSION/j1.webp", category: "Fest", title: "J-Tech Fusion" },
    { src: "/images/events/HeritageVisit/h1.jpg", category: "Cultural", title: "Heritage Visit" },
    { src: "/images/events/WOMEN'S DAY/w1.jpg", category: "Cultural", title: "Women's Day" },
    { src: "/images/events/WALKATHON/wa1.webp", category: "Sports", title: "Walkathon" },
  ];

  const categories = ["All", "Sports", "Fest", "Cultural"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const imagesToShow =
    activeCategory === "All"
      ? allImages
      : allImages.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#071947] p-6 md:p-12">
      {/* PAGE HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#FFD700] drop-shadow-lg tracking-wide">
          Media & Gallery
        </h1>
        <p className="text-[#FFD700]/80 mt-3 text-lg max-w-2xl mx-auto">
          Explore the most memorable highlights from various events at our college.
        </p>
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex justify-center gap-4 flex-wrap mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full border-2 transition-all font-semibold
              ${
                activeCategory === cat
                  ? "bg-[#FFD700] text-[#071947] border-[#FFD700]"
                  : "text-[#FFD700] border-[#FFD700] hover:bg-[#FFD700]/20"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* IMAGE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <AnimatePresence>
          {imagesToShow.map((item, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(item)}
              className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-xl border border-[#FFD700]/30 hover:shadow-yellow-500/50"
            >
              {/* IMAGE */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071947]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* TITLE */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[#FFD700] text-lg font-semibold drop-shadow-md">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* LIGHTBOX POPUP */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selectedImage.src}
              alt="Preview"
              className="max-w-3xl w-full rounded-2xl shadow-2xl border-4 border-[#FFD700]"
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
