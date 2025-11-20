import React from "react";

export default function NCCSection() {
  const images = [
    "/images/ncc/event1.jpg",
    "/images/ncc/event2.jpg",
    "/images/ncc/event3.jpg",
    "/images/ncc/event4.jpeg",
    "/images/ncc/event5.jpg",
    "/images/ncc/event6.jpg",
  ];

  return (
    <div className="w-full flex flex-col gap-20 p-6 md:p-16 bg-[#0A2342] text-white">
      {/* HERO SECTION */}
      <section className="relative w-full h-[60vh] rounded-2xl overflow-hidden shadow-xl">
        <img
          src="/images/ncc/ncc1.jpg"
          className="w-full h-full object-cover"
          alt="NCC Cadets"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-400">
            National Cadet Corps
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Discipline • Leadership • Unity — Building Responsible Citizens for
            the Nation.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-yellow-400">About NCC</h2>
          <p className="leading-relaxed text-lg text-gray-200">
            The National Cadet Corps (NCC) is a premier youth organization that
            instills discipline, leadership qualities, and a sense of dedicated
            service among young students. Our college NCC unit actively
            participates in parades, national camps, community service, and
            adventure activities.
          </p>
        </div>

        <img
          src="/images/ncc/ncc2.jpg"
          className="rounded-xl shadow-lg object-cover w-full h-80 border-4 border-yellow-400"
          alt="About NCC"
        />
      </section>

      {/* ACTIVITIES GALLERY */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-yellow-400">
          Activities & Events
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-md hover:scale-105 transition duration-300 border-2 border-yellow-400"
            >
              <img
                src={img}
                className="w-full h-48 object-cover"
                alt={`NCC Activity ${i + 1}`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-yellow-400">
          Achievements
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Best Drill Performance",
              desc: "Our cadets secured the top position at the state-level drill competition.",
            },
            {
              title: "Republic Day Camp Selection",
              desc: "Cadets represented our college at the prestigious RD Camp.",
            },
            {
              title: "Social Service Recognition",
              desc: "Awarded for outstanding community service and awareness drives.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white text-blue-900 rounded-2xl shadow-md hover:shadow-xl transition border-2 border-yellow-400"
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-blue-800">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM SECTION */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-yellow-400">
          Our NCC Team
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              name: "Captain Rohit Sharma",
              role: "ANO (Associate NCC Officer)",
              img: "/images/ncc/people.png",
            },
            {
              name: "Cadet Priya Verma",
              role: "Senior Cadet",
              img: "/images/ncc/people2.jpg",
            },
            {
              name: "Cadet Arjun Singh",
              role: "Drill Commander",
              img: "/images/ncc/people1.png",
            },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-white text-blue-900 shadow-lg rounded-2xl p-6 text-center hover:scale-[1.03] transition border-2 border-yellow-400"
            >
              <img
                src={member.img}
                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-blue-900"
                alt={member.name}
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-blue-700">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
