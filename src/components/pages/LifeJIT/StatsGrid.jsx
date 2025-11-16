import StatCard from "./StatCard";

export default function StatsGrid({ stats = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 mb-4 px-4">
      {stats.map((item, index) => (
        <StatCard
          key={index}
          end={item.end}
          label={item.label}
          suffix={item.suffix || "+"}
          duration={item.duration || 2}
        />
      ))}
    </div>
  );
}
