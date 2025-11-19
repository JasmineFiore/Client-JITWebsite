import React from "react";

export default function NCCSection() {
  return (
    <div className="w-full flex flex-col gap-20 p-6 md:p-16 bg-gray-50 text-gray-800">

      {/* HERO SECTION */}
      <section className="relative w-full h-[60vh] rounded-2xl overflow-hidden shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1524563429531-399f963fbd30?auto=format&fit=crop&w=1400&q=80"
          className="w-full h-full object-cover"
          alt="NCC Cadets"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">National Cadet Corps</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Discipline • Leadership • Unity — Building Responsible Citizens for the Nation.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">About NCC</h2>
          <p className="leading-relaxed text-lg">
            The National Cadet Corps (NCC) is a premier youth organization that instills discipline,
            leadership qualities, and a sense of dedicated service among young students. Our college
            NCC unit actively participates in parades, national camps, community service, and
            adventure activities.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1606046604972-77cc76aee944?auto=format&fit=crop&w=900&q=80"
          className="rounded-xl shadow-lg object-cover w-full h-80"
          alt="About NCC"
        />
      </section>

      {/* ACTIVITIES GALLERY */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Activities & Events</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-md hover:scale-105 transition duration-300"
            >
              <img
                src={`https://picsum.photos/seed/ncc${i}/600/400`}
                className="w-full h-48 object-cover"
                alt={`NCC Activity ${i}`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Achievements</h2>
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
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition border"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM SECTION */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Our NCC Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "Captain Rohit Sharma", role: "ANO (Associate NCC Officer)" },
            { name: "Cadet Priya Verma", role: "Senior Cadet" },
            { name: "Cadet Arjun Singh", role: "Drill Commander" },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-2xl p-6 text-center hover:scale-[1.03] transition border"
            >
              <img
                src={`https://i.pravatar.cc/150?img=${i + 10}`}
                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
                alt={member.name}
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}