import React from "react";

export default function FacilitiesResearchSection() {
  const facilitiestImages = [
    "/images/pharmacy/placement/f5.webp",
    "/images/pharmacy/placement/f6.webp",
    "/images/pharmacy/placement/f7.webp",
    
  ];
  return (
    <section className="bg-gradient-to-b from-[#F9FAFB] to-[#EDEFF3] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        {/* ---------- State-of-the-Art Facilities ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-500">
            <img
              src="/images/pharmacy/placement/f1.webp"
              alt="State-of-the-Art Facilities"
              className="w-full h-80 object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] mb-4">
              State-of-the-Art Facilities
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We pride ourselves on our state-of-the-art facilities, including
              well-equipped laboratories, research centers, modern classrooms,
              and a dedicated library with an extensive collection of
              pharmaceutical literature. Students are mentored through the
              latest technology and equipment, enhancing their capabilities
              through research-based integrated learning.
            </p>
          </div>
        </div>

        {/* ---------- Research Opportunities ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Text (on left for large screens) */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] mb-4">
              Research Opportunities
            </h2>
            <p className="text-gray-700 leading-relaxed">
              JIT encourages research and innovation among its students and
              faculty members. JIT B.Pharm students get engaged in research
              projects, publication of papers in reputed journals, presentations
              in national & international conferences, and participate in
              competitions through faculties’ collaboration on cutting-edge
              research initiatives and contributions to advancements in
              pharmaceutical sciences.
            </p>
          </div>

          {/* Image (on right for large screens) */}
          <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-500">
            <img
              src="/images/pharmacy/placement/f1.webp"
              alt="Research Opportunities"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* ---------- Student Support Services---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-500">
            <img
              src="/images/pharmacy/placement/f3.webp"
              alt="State-of-the-Art Facilities"
              className="w-full h-80 object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] mb-4">
              Student Support Services
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At JIT, we are committed to supporting the holistic development of
              our students. JIT offers a range of student services, including
              academic counseling, mentorship, and career guidance sessions, to
              help students excel academically and professionally.
            </p>
          </div>
        </div>

        {/* Image Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilitiestImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-500"
            >
              <img
                src={img}
                alt={`Placement ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
