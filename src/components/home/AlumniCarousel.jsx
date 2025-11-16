import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-[#143109] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-[#1a4011] transition z-10"
  >
    →
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-[#143109] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-[#1a4011] transition z-10"
  >
    ←
  </button>
);

const alumniData = [
  {
    id: 1,
    name: "Ritesh Saini",
    image: "/images/alumini/RITESH-KUMAR-SAINI.jpg",
    message:
      "I appreciated the emphasis on service and social responsibility at JIT...",
  },
  {
    id: 2,
    name: "Waquar Khan",
    image:
      "/images/alumini/WhatsApp-Image-2023-04-20-at-13.21.42-965x1024.jpeg",
    message:
      "I am grateful for the education and opportunities I received at JIT...",
  },
];

const AlumniCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="py-16" id="alumni">
      <h2 className="text-3xl font-bold text-center text-[#143109] mb-10">
        Our Alumni
      </h2>

      <div className="max-w-5xl mx-auto px-6 relative">
        <Slider {...settings}>
          {alumniData.map((alumni) => (
            <div key={alumni.id}>
              <div className="relative flex flex-col md:flex-row items-center gap-6 bg-gray-100 shadow-lg p-8 rounded-2xl">
                <div className="relative group flex justify-center items-center">
                  <div className="absolute inset-0 w-36 h-36 bg-black/20 rounded-xl blur-md opacity-60 group-hover:opacity-90 transition-all duration-700 -z-10"></div>

                  <div className="w-36 h-36 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={alumni.image}
                      alt={alumni.name}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <p className="text-[#143109] italic leading-relaxed">
                    "{alumni.message}"
                  </p>
                  <p className="mt-3 text-sm font-medium text-[#143109]">
                    — {alumni.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default AlumniCarousel;
