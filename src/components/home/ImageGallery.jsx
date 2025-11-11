import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ImageCollage() {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const slides = [
    { src: "/images/gallery1.jpg", title: "Modern Library" },
    { src: "/images/gallery2.jpg", title: "Sports Activities" },
    { src: "/images/gallery3.jpg", title: "Stage Show" },
    { src: "/images/gallery4.jpg", title: "Yoga Session" },
    { src: "/images/gallery5.jpg", title: "Annual Function" },
    { src: "/images/gallery6.jpg", title: "Cultural Event" },
    { src: "/images/community.jpg", title: "Community Gathering" },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-yellow-50 via-white to-yellow-50 overflow-hidden">
      {/* Decorative Floating Elements */}
      <motion.div
        className="absolute top-10 left-10 w-24 h-24 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Section Heading */}
      <motion.div
        className="relative text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
          Campus Life <span className="text-yellow-600">@JIT</span>
        </h2>
        <p className="mt-3 text-gray-600 text-lg max-w-xl mx-auto">
          Experience the vibrant energy, creativity, and spirit of our students.
        </p>
        <div className="mt-4 w-24 h-1 bg-yellow-500 mx-auto rounded-full shadow" />
      </motion.div>

      {/* Masonry Gallery */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-5 px-6 max-w-7xl mx-auto space-y-5">
        {slides.map((slide, i) => (
          <motion.div
            key={i}
            layout
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group break-inside-avoid"
            onClick={() => {
              setPhotoIndex(i);
              setOpen(true);
            }}
          >
            {/* Image */}
            <img
              src={slide.src}
              alt={slide.title}
              loading="lazy"
              className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
              <motion.div
                className="p-4"
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-white font-semibold text-lg drop-shadow">
                  {slide.title}
                </p>
              </motion.div>
            </div>

            {/* Subtle Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-yellow-400/10 blur-2xl" />
          </motion.div>
        ))}
      </div>

      {/* Lightbox with Captions */}
      <Lightbox
        open={open}
        index={photoIndex}
        close={() => setOpen(false)}
        slides={slides.map((s) => ({
          src: s.src,
          description: s.title,
        }))}
        render={{
          description: ({ slide }) => (
            <div className="text-center text-lg font-semibold text-white mt-4">
              {slide.description}
            </div>
          ),
        }}
      />
    </section>
  );
}
