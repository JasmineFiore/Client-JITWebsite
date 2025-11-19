import Slider from "react-slick";

export default function SportsPage() {
  const galleryImages = [
    "/images/sports/cricket.png",
    "/images/sports/football.jpg",
    "/images/sports/basketball.jpg",
    "/images/sports/volleyball.jfif",
    "/images/sports/athletics.jfif",
    "/images/sports/sports1.png",
  ];

  const sportsList = [
    { name: "Cricket", img: "/images/sports/cricket.png" },
    { name: "Football", img: "/images/sports/football.jpg" },
    { name: "Basketball", img: "/images/sports/basketball.jpg" },
    { name: "Volleyball", img: "/images/sports/volleyball.jfif" },
    { name: "Athletics", img: "/images/sports/athletics.jfif" },
    { name: "Badminton", img: "/images/sports/sports1.png" },
  ];

  const achievements = [
    "Inter-college Cricket Champions – 2024",
    "District Level Athletics Gold Medal – 2023",
    "State Basketball Quarter Finalist – 2022",
    "Annual Sports Meet Championship Winner – 2025",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-white text-gray-800">
      {/* HERO */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src="/images/sports/cricket.png"
          className="absolute inset-0 w-full h-full object-cover brightness-45"
        />

        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow">
              Sports at JIT
            </h1>
            <p className="mt-4 text-yellow-400 text-xl md:text-2xl drop-shadow">
              Excellence • Discipline • Fitness • Team Spirit
            </p>
          </div>
        </div>
      </section>

      {/* SPORTS OFFERED */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">
          Sports & Activities Offered
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {sportsList.map((sport, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer group"
            >
              <img
                src={sport.img}
                className="w-full h-48 object-cover group-hover:scale-110 transition"
              />
              <div className="p-5 bg-white">
                <h3 className="text-lg font-semibold text-gray-900">
                  {sport.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Achievements
          </h2>

          <ul className="list-disc pl-6 text-gray-700 text-lg space-y-3">
            {achievements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* SPORTS FACILITIES */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Sports Facilities
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Outdoor Facilities
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Cricket Ground</li>
              <li>Football Ground</li>
              <li>Athletics Track</li>
              <li>Basketball Court</li>
              <li>Volleyball Court</li>
            </ul>
          </div>

          <div className="bg-blue-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Indoor Facilities
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Badminton Hall</li>
              <li>Table Tennis Room</li>
              <li>Fully Equipped Gym</li>
              <li>Yoga & Aerobics Hall</li>
            </ul>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">
            Sports Day Gallery
          </h2>

          <Slider {...sliderSettings}>
            {galleryImages.map((img, i) => (
              <div key={i} className="px-2">
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition text-black bg-black cursor-pointer group">
                  <img
                    src={img}
                    className="h-56 w-full object-cover group-hover:scale-110 transition"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* COACHES */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-900 mb-10">
          Meet Our Coaches
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              name: "Rahul Sharma",
              role: "Cricket Coach",
              img: "/images/hod/hodCSE.jpg",
            },
            {
              name: "Arun Verma",
              role: "Athletics Trainer",
              img: "/images/hod/hodECE.jpg",
            },
            {
              name: "Sonia Patel",
              role: "Indoor Sports Coach",
              img: "/images/hod/hodEe.jpg",
            },
          ].map((coach, i) => (
            <div
              key={i}
              className="text-center bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
            >
              <img
                src={coach.img}
                className="w-40 h-40 mx-auto rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">{coach.name}</h3>
              <p className="text-gray-600">{coach.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
