import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EnquiryModal from "../../../Blueprints/EnquiryModal";

// --- START: DROP-IN REACT COMPONENT ---

export default function JITNewsPage() {
  const ALL_NEWS = [
    {
      id: 1,
      title: "Retired Major General Assumes Charge",
      description:
        "Barabanki (Spasht Awaaz): Major General (Retd.) Vikas Saini has officially taken charge as the Director of Jahangirabad Institute of Technology, Barabanki. His appointment is expected to bring a new direction to the institute in the areas of discipline, strategic vision, and leadership.",
      date: "November 2025",
      featured: true,
      category: "Announcements",
      image: "/images/news/n1.jpg",
      content:
        "Barabanki (Spasht Awaaz): Major General (Retd.) Vikas Saini has officially taken charge as the Director of Jahangirabad Institute of Technology, Barabanki. His appointment is expected to bring a new direction to the institute in the areas of discipline, strategic vision, and leadership.",
      content2:
        "Major General Saini is among the senior officers of the Indian Army and has played a significant role in serving the nation for several decades. During the welcome ceremony organized on the occasion of his joining, the institute’s management, teachers, staff members, and students extended a warm welcome to him.",
      content3:
        "In his address, Major General Saini said, “It is an honour for me to lead an inspiring institution like Jahangirabad Institute. I will strive to further strengthen the academic, social, and leadership values of this institution.” The institute’s trustee, Shafi Mohammad, congratulated the new director and said that under the leadership of Major General Vikas Saini, the institute will reach new heights.",
    },
    {
      id: 2,
      title:
        "Job Placement Certificate Distribution Program Organized at Jahangirabad Institute of Technology",
      description:
        "A special ceremony was held where Hon’ble MLA Gaurav Rawat distributed placement certificates to selected students, celebrating JIT’s strong industry connections and record placements.",
      date: "February 13, 2025",
      category: "Placements",
      image: "/images/news/n2.jpg",
      content:
        "Barabanki, February 13 (Tarunmitra). A special ceremony was organized on Thursday at Jahangirabad Institute of Technology, Jahangirabad Fort, Barabanki, where the Hon’ble MLA Gaurav Rawat distributed Job Placement Certificates to the selected students.",
      content2:
        "The program began with a welcome address by the Registrar of the institute, Dr. Masarrat Ali Khan, who highlighted the achievements of the institute and the placement process. He stated that it is a proud moment for the institute that its students are securing positions in reputed companies across the country. Chief Guest MLA Gaurav Rawat expressed that it is a matter of pride for the region that the youth, through their talent and hard work, are getting jobs in esteemed companies. He appreciated the institute’s efforts in connecting education with employment opportunities.",
      content3:
        "Academic Head Dr. A. K. Mishra shared that due to the efforts of the Training and Placement Officer, Mr. Niyaz Ahmad Ansari, a record number of students have been placed in reputed companies this year. During the ceremony, certificates were awarded to the students selected by various companies. The students expressed their happiness, stating that this achievement would become a milestone in their careers. The event concluded with best wishes for the students’ future success and a vote of thanks to the distinguished guests, including Mohd. Sharif, the Pradhan of Sarathra, and all attendees present.",
    },
    {
      id: 3,
      title:
        "Friendly Cricket Match Between Pharmacy & Engineering Departments",
      description:
        "JIT organized a friendly cricket match promoting teamwork and sportsmanship. The Engineering team won by 22 runs, with Balram Yadav and Abdul Naweed receiving top honours.",
      date: "September 2025",
      category: "Sports",
      image: "/images/news/n3.jpg",
      content:
        "A friendly cricket match was organized at Jahangirabad Institute of Technology, Barabanki, between the Pharmacy Department and the Engineering Department. The objective of the event was to promote coordination, teamwork, and sportsmanship among the departments.",
      content2:
        "The match began at 10 AM, witnessing great excitement from both students and faculty members. Both teams delivered an excellent performance and thoroughly enjoyed the game. The Engineering team, after winning the toss, chose to bat first and scored 125 runs for 2 wickets. In response, the Pharmacy team could only score 98 runs, resulting in the Engineering team winning the match by 22 runs.",
      content3:
        "Balram Yadav was awarded Best Bowler, while Abdul Naweed received the title of Best Player of the Match. The Director of the institute, Major General Vikas Saini (Retd.), encouraged both teams and stated that such activities are essential for physical and mental development. He also expressed gratitude to Sports Head Aslam Sher and Sports Teacher Mobeen Ahmad for successfully organizing the match.",
    },
    {
      id: 4,
      title:
        "JIT Barabanki Gets a New Director — Major General (Retd.) Vikas Saini",
      description:
        "A grand welcome ceremony was held as Major General Saini assumed office. Faculty and students expressed confidence in his leadership for achieving new milestones.",
      date: "September 2025",
      category: "Announcements",
      image: "/images/news/n4.jpg",
      content:
        "Major General (Retd.) Vikas Saini has assumed charge as the new Director of Jahangirabad Institute of Technology, Barabanki. His appointment is expected to bring a renewed emphasis on discipline, strategic vision, and effective leadership within the institution.",
      content2:
        "Major General (Retd.) Vikas Saini Assumes Office Major General Saini is among the senior officers of the Indian Army and has made significant contributions to the nation during his decades of service.",
      content3:
        "In his address, Major General Saini said, It is an honor for me to lead an inspiring institution like Jahangirabad Institute. I will work toward further strengthening its academic, social, and leadership values. The institute’s trustee, Mr. Shafi Mohammad, extended his best wishes and expressed confidence that under Major General Saini’s leadership, the institution will achieve new heights.",
    },
    {
      id: 5,
      title: "JIT Organizes Clothes Donation Drive for the Needy",
      description:
        "The Social & Environmental Club conducted a donation drive distributing warm clothes and essentials to needy families in Jahangirabad and Dewa areas.",
      date: "September 2025",
      category: "Community",
      image: "/images/news/n5.jpg",
      content:
        "The Social and Environmental Club of Jahangirabad Institute of Technology, Barabanki organized a donation drive to distribute new and old clothes to underprivileged and homeless individuals. On this occasion, Academic Head Dr. A. K. Mishra said that this initiative is not limited to donating clothes—it also reflects the spirit of humanity, service, and cooperation. Such activities not only create a sense of social responsibility but also serve as a powerful medium to bring positive change in the lives of those in need.",
      content2:
        "Registrar Dr. Masarrat Ali Khan expressed gratitude to Vinod Bihari Mishra, District Manager and District Ramp Coordinator, and Abdul Naweed, Administrative Officer of the institute, for their support. He also thanked Ms. Alfishah Khan, Head of the Social and Environmental Club, along with all the teachers, staff, and students for their dedication and hard work.",
      content3:
        "With the enthusiastic participation of faculty and students, warm clothes such as shirts, sweaters, caps, mufflers, and blankets were collected and distributed among needy families in the Jahangirabad and Dewa areas.",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState(null); // selected news for modal
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  // Prevent background scroll when modal is open
  React.useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden"; // Lock scroll
    } else {
      document.body.style.overflow = ""; // Restore scroll
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  // 1. Get all unique categories
  const categories = useMemo(() => {
    const cats = new Set(ALL_NEWS.map((n) => n.category));
    return ["All", ...Array.from(cats)];
  }, [ALL_NEWS]);

  // 2. Perform all filtering steps
  const filteredNews = useMemo(() => {
    return ALL_NEWS
      .filter((n) => (showFeaturedOnly ? n.featured : true))
      .filter((n) =>
        activeCategory === "All" ? true : n.category === activeCategory
      )
      .filter((n) => {
        const q = query.trim().toLowerCase();
        if (!q) return true;
        return (
          n.title.toLowerCase().includes(q) ||
          n.description.toLowerCase().includes(q) ||
          n.content.toLowerCase().includes(q) // Added search in content for completeness
        );
      });
  }, [ALL_NEWS, query, activeCategory, showFeaturedOnly]);

  // 3. Layout helpers: find the featured item in the filtered set
  const featuredItem = filteredNews.find((n) => n.featured);

  // All other non-featured or non-duplicate news in the filtered set
  const others = filteredNews.filter(
    (n) => n.id !== (featuredItem && featuredItem.id)
  );

  return (
    <div className="min-h-screen bg-linear-to-b from-[#00173a] to-[#001036] text-white py-5 px-4 md:px-10 lg:px-20">
      {/* Header / Hero */}
      <header className="max-w-7xl mx-auto mb-3">
        <div className="flex flex-col lg:flex-row gap-5 items-start">
          {/* Main Controls & Title */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-extrabold text-yellow-400 tracking-tight">
              JIT News & Magazine
            </h1>
            <p className="text-gray-300 mt-3 max-w-2xl">
              Latest happenings, achievements, events, and community stories
              from Jahangirabad Institute of Technology.
            </p>

            {/* Search, Featured Toggle, and Category Filters (Unified for all screens) */}
            <div className=" flex flex-col gap-4">
              {/* Search and Featured Toggle */}
              <div className="flex flex-wrap gap-4 items-center pt-3">
                <div className="relative flex-1 min-w-[200px] max-w-lg ">
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search news, keywords, or persons..."
                    className="w-full bg-[#071a36] text-sm placeholder-gray-400 text-white px-4 pr-12 py-2 rounded-md border border-yellow-500/10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  {query && (
                    <button
                      onClick={() => setQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-300 hover:text-white transition"
                    >
                      ×
                    </button>
                  )}
                </div>

                <button
                  onClick={() => setShowFeaturedOnly((s) => !s)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    showFeaturedOnly
                      ? "bg-yellow-400 text-black"
                      : "bg-yellow-500/10 text-yellow-200 hover:bg-yellow-500/20"
                  }`}
                >
                  {showFeaturedOnly ? "Showing Featured" : "Show Featured Only"}
                </button>
              </div>

              {/* Category Filters (Always visible and responsive) */}
              <div className="flex flex-wrap gap-2 items-center text-sm text-gray-300 border-t border-yellow-500/10 pt-4">
                <span className="text-yellow-300 font-medium">
                  Filter by Category:
                </span>
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setActiveCategory(c)}
                    className={`px-3 py-1 rounded-full text-xs transition whitespace-nowrap ${
                      activeCategory === c
                        ? "bg-yellow-400 text-black font-semibold"
                        : "bg-yellow-500/10 text-yellow-200 hover:bg-yellow-500/20"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links / Sidebar - Trending News */}
          <aside className="w-full lg:w-80 bg-[#031429] rounded-xl p-3 border border-yellow-500/10 shadow-sm flex-shrink-0">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm text-yellow-300 font-semibold">
                  🚀 Trending Stories
                </h3>
                <p className="text-xs text-gray-300 mt-1">
                  Top stories this month (Click to read)
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {ALL_NEWS.slice(0, 3).map((n) => (
                <button
                  key={n.id}
                  onClick={() => setSelected(n)}
                  className="w-full text-left flex gap-3 items-center rounded-md p-2 hover:bg-yellow-500/5 transition"
                >
                  <img
                    src={n.image}
                    alt="thumb"
                    className="w-12 h-12 object-cover rounded-md flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-white leading-tight truncate">
                      {n.title}
                    </div>
                    <div className="text-xs text-gray-400">{n.date}</div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-6 border-t border-yellow-500/10 pt-4 text-xs text-gray-300">
              <div className="font-semibold text-yellow-300">📧 Subscribe</div>
              <p className="mt-2">Get monthly newsletter and event invites.</p>
              <div className="mt-3 flex gap-2">
                <input
                  placeholder="Your email"
                  className="flex-1 bg-[#04162e] px-3 py-2 rounded-md text-sm placeholder-gray-400 text-white focus:outline-none focus:ring-1 ring-yellow-400/50"
                />
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-3 py-2 rounded-md bg-yellow-400 text-black text-sm font-semibold hover:bg-yellow-500 transition"
                >
                  Join
                </button>
              </div>
            </div>
          </aside>
        </div>
      </header>

      {/* Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Main content area */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Featured + grid */}
        <section className="lg:col-span-2 space-y-6">
          {/* Featured Hero */}
          {featuredItem && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#04264a] to-[#02102a] border border-yellow-500/10 shadow-2xl"
            >
              <div className="relative lg:flex lg:items-stretch">
                <div className="lg:w-1/2">
                  <img
                    src={featuredItem.image}
                    alt={featuredItem.title}
                    className="w-full h-80 lg:h-full object-cover"
                  />
                </div>

                <div className="p-6 lg:p-10 lg:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="inline-block bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
                      {featuredItem.category}
                    </div>

                    <h2 className="mt-4 text-2xl md:text-3xl font-bold text-white">
                      {featuredItem.title}
                    </h2>

                    <p className="mt-3 text-gray-300 leading-relaxed line-clamp-4">
                      {featuredItem.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-sm text-yellow-300">
                      {featuredItem.date}
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setSelected(featuredItem)}
                        className="px-4 py-2 rounded-md bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition"
                      >
                        Read Full
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Grid of news */}
          <div className="grid sm:grid-cols-2 gap-6">
            {others.length === 0 && !featuredItem && (
              <div className="col-span-full text-center text-gray-300 py-8 text-lg font-medium">
                No news found matching your current filters. Try a broader
                search!
              </div>
            )}

            {others.map((item) => (
              <motion.article
                key={item.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="rounded-xl overflow-hidden bg-[#03142a] border border-yellow-500/10 shadow-md cursor-pointer"
                onClick={() => setSelected(item)} // Make the whole card clickable
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-54 object-cover"
                  />

                  <div className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                    {item.category}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mt-2 text-sm line-clamp-3">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-xs text-yellow-300">{item.date}</div>
                    <div className="flex gap-2">
                      <span className="text-yellow-300 text-sm font-semibold hover:text-yellow-400 transition">
                        Read →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Right: compact list + general info (Removed redundant filter section) */}
        <aside className="space-y-6 hidden lg:block">
          {" "}
          {/* Hide on small screens as filters are now in the header */}
          <div className="bg-[#041832] p-4 rounded-xl border border-yellow-500/10">
            <h4 className="text-sm text-yellow-300 font-semibold">
              📚 All Latest Stories
            </h4>
            <div className="mt-3 space-y-3">
              {ALL_NEWS.slice(0, 5).map((n) => (
                <button
                  key={n.id}
                  onClick={() => setSelected(n)}
                  className="w-full text-left flex gap-3 items-center rounded-md p-2 hover:bg-yellow-500/5 transition"
                >
                  <img
                    src={n.image}
                    alt="thumb"
                    className="w-14 h-12 object-cover rounded-md flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-white truncate">
                      {n.title}
                    </div>
                    <div className="text-xs text-gray-400">{n.date}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="bg-[#041832] p-4 rounded-xl border border-yellow-500/10 text-sm text-gray-300">
            <h4 className="text-yellow-300 font-semibold">ℹ️ About JIT News</h4>
            <p className="mt-2">
              A curated feed of institute events, achievements, and community
              stories. Updated regularly by campus correspondents to keep you
              informed.
            </p>
          </div>
        </aside>
      </main>

      {/* Modal for reading full news */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm" // Added backdrop blur
          >
            {/* Modal Content */}
            <motion.div className="max-w-3xl w-full max-h-[90vh] bg-[#021426] rounded-2xl overflow-auto shadow-2xl border border-yellow-500/10 relative">
              {/* Sticky Header (Image + close) */}
              <div className="sticky top-0 z-10 bg-white">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-96 object-contain"
                />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 bg-black/60 text-white text-sm px-3 py-1 rounded-lg hover:bg-black/80 transition"
                >
                  Close
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-6">
                <div className="text-xs text-yellow-300">
                  {selected.category} • {selected.date}
                </div>
                <h3 className="text-2xl font-bold mt-2 text-white">
                  {selected.title}
                </h3>
                <p className="mt-4 text-gray-300 leading-relaxed whitespace-pre-line">
                  {selected.content}
                </p>
                <p className="mt-4 text-gray-300 leading-relaxed whitespace-pre-line">
                  {selected.content2}
                </p>
                <p className="mt-4 text-gray-300 leading-relaxed whitespace-pre-line">
                  {selected.content3}
                </p>
              </div>
            </motion.div>

            {/* Backdrop */}
            <motion.div
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-black/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
