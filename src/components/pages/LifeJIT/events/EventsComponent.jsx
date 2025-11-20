import { useEffect, useRef, useState } from "react";
import { GrClose } from "react-icons/gr";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Modal from "react-modal";
import YouTube from "react-youtube";

const eventPhotos = {
  "Independence Day": Array.from(
    { length: 22 },
    (_, i) => `/images/events/INDEPENDENCEDAY/i${i + 1}.webp`
  ),
  "Sports Day": [
    "/images/events/SPORTSDAY/s1.jpg",
    "/images/events/SPORTSDAY/s2.jpg",
  ],
  "Yoga Day": Array.from(
    { length: 10 },
    (_, i) => `/images/events/YOGADAY/y${i + 1}.jpg`
  ),
  "J-Tech FUSION": Array.from(
    { length: 12 },
    (_, i) => `/images/events/J-TechFUSION/j${i + 1}.webp`
  ),
  "Heritage Visit": [
    "/images/events/HeritageVisit/h1.jpg",
    "/images/events/HeritageVisit/h2.jpg",
  ],
  "JIT IN NEWS": Array.from(
    { length: 6 },
    (_, i) => `/images/events/news/n${i + 1}.jpg`
  ),
  ACHIEVERS: ["/images/events/ACHIEVERS/ACHIEVERS.jpg"],
  "WOMEN'S DAY": Array.from(
    { length: 12 },
    (_, i) => `/images/events/WOMEN'S DAY/w${i + 1}.jpg`
  ),
  WALKATHON: Array.from(
    { length: 12 },
    (_, i) => `/images/events/WALKATHON/wa${i + 1}.webp`
  ),
};

Modal.setAppElement("#root");

export default function EventsComponent() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playVideo, setPlayVideo] = useState(false);

  const videoRef = useRef(null);

  /** AUTO PLAY VIDEO WHEN IN VIEW **/
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setPlayVideo(true);
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) observer.observe(videoRef.current);
  }, []);

  const openGallery = (images, index) => {
    setSelectedImages(images);
    setCurrentIndex(index);
    setModalOpen(true);

    // Hide navbar/footer
    document.body.style.overflow = "hidden";
    document.querySelector("nav")?.classList.add("hidden");
    document.querySelector("footer")?.classList.add("hidden");
  };

  const closeGallery = () => {
    setModalOpen(false);

    // Restore page style
    document.body.style.overflow = "auto";
    document.querySelector("nav")?.classList.remove("hidden");
    document.querySelector("footer")?.classList.remove("hidden");
  };

  const nextImage = () =>
    setCurrentIndex((i) => (i + 1) % selectedImages.length);

  const prevImage = () =>
    setCurrentIndex((i) => (i === 0 ? selectedImages.length - 1 : i - 1));

  /** Slider settings **/
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      {/* Header Section */}
      <section className="bg-[#0A2342] text-left py-6 px-6 text-white">
        <div className="max-w-7xl w-full">
          <h1 className="text-4xl md:text-6xl font-extrabold">Events</h1>
        </div>
      </section>

      <div className="bg-gray-100 p-6 pt-1">
        {/* VIDEO SECTION */}
        <div ref={videoRef} className="mb-5">
          <h2 className="text-center text-2xl font-bold mb-2">
            Independence Day 2025
          </h2>

          <YouTube
            videoId="ahoKPKZ0Tsc"
            opts={{
              width: "100%",
              height: "480px",
              playerVars: { autoplay: playVideo ? 1 : 0 },
            }}
          />
        </div>

        {/* PHOTO ALBUMS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(eventPhotos).map(([event, images]) => (
            <div
              key={event}
              className="group cursor-pointer rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition duration-300"
              onClick={() => openGallery(images, 0)}
            >
              {/* Album Thumbnail */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={images[0]}
                  alt={event}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Photos Count */}
                <span className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
                  {images.length} Photos
                </span>

                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition"></div>

                {/* View Album Text */}
                <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition">
                  View Album →
                </p>
              </div>

              {/* Album Title */}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{event}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* FULL SCREEN MODAL */}
        <Modal
          isOpen={modalOpen}
          onRequestClose={closeGallery}
          className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-md bg-opacity-55 z-50"
          overlayClassName="fixed inset-0 bg-opacity-50"
          shouldCloseOnOverlayClick={true}
        >
          <div className="relative w-full max-w-5xl px-4 flex flex-col items-center">
            <img
              src={selectedImages[currentIndex]}
              className="max-h-[420px] w-auto object-contain"
            />

            {/* Prev */}
            <button
              onClick={prevImage}
              className="absolute left-5 top-1/2 -translate-y-1/2 bg-white text-black text-5xl rounded-full cursor-pointer"
            >
              <MdKeyboardArrowLeft size={48} />
            </button>

            {/* Next */}
            <button
              onClick={nextImage}
              className="absolute right-5 top-1/2 -translate-y-1/2 bg-white  text-black text-5xl rounded-full cursor-pointer"
            >
              <MdKeyboardArrowRight size={48} />
            </button>

            {/* Close */}
            <button
              onClick={closeGallery}
              className="absolute -top-20 right-6 md:-top-4 md:-right-24 text-black cursor-pointer bg-white bg-opacity-40 px-3 py-2 rounded-full"
            >
              <GrClose className="w-6 h-8 md:w-6 md:h-8 rounded-full" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 text-white bg-black bg-opacity-50 px-3 py-1 rounded">
              {currentIndex + 1} / {selectedImages.length}
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}
