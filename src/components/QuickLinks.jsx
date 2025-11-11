import { FaFlask, FaRocket, FaNewspaper, FaUniversity } from "react-icons/fa";

export function QuickLinks() {
  const items = [
    { icon: <FaFlask size={32} />, label: "Research" },
    { icon: <FaRocket size={32} />, label: "Startups" },
    { icon: <FaNewspaper size={32} />, label: "News" },
    { icon: <FaUniversity size={32} />, label: "IITD Abu Dhabi" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 text-center">
      {items.map((item, i) => (
        <div
          key={i}
          className={`p-6 ${
            i % 2 === 0 ? "bg-gray-100" : "bg-red-700 text-white"
          } hover:scale-105 transition-transform cursor-pointer`}
        >
          <div className="flex flex-col items-center gap-2">
            {item.icon}
            <h2 className="font-semibold text-lg">{item.label}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
