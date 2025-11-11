import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const alumniData = [
  {
    id: 1,
    name: "Ritesh Saini",
    image: "/images/alumini/RITESH-KUMAR-SAINI.jpg",
    message:
      "I appreciated the emphasis on service and social responsibility at JIT. I was able to make a positive impact on my community through volunteer work and service learning opportunities.",
  },
  {
    id: 2,
    name: "Waquar Khan",
    image:
      "/images/alumini/WhatsApp-Image-2023-04-20-at-13.21.42-965x1024.jpeg",
    message:
      "I am grateful for the education and opportunities I received at JIT. The professors were knowledgeable and passionate, and they challenged me to think critically and pursue my goals.",
  },
  // add more alumni as needed
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
  };

  return (
    <section
      className="py-16 "
      id="alumni"
    >
      <h2 className="text-3xl font-bold text-center text-[#143109] mb-10">
        Our Alumni
      </h2>

      <div className="max-w-5xl mx-auto px-6">
        <Slider {...settings}>
          {alumniData.map((alumni) => (
            <div key={alumni.id}>
              <div className="relative flex flex-col md:flex-row items-center gap-6 bg-gry-100 shadow-lg p-8 rounded-2xl">
                {/* Image Section */}
                <div className="relative group flex justify-center items-center">
                  {/* Glowing Gradient Ring */}
                  <div className="absolute inset-0 w-36 h-36 bg-black/20 rounded-xl blur-md opacity-60 group-hover:opacity-90 transition-all duration-700 -z-10"></div>

                  {/* Image Container */}
                  <div className="w-36 h-36 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={alumni.image}
                      alt={alumni.name}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                </div>

                {/* Text Section */}
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
