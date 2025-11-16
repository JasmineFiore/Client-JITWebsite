import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function StatCard({ end, label, duration = 2, suffix = "+" }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className="bg-white border border-gray-300 py-8 rounded-xl shadow-sm flex flex-col items-center"
    >
      {inView ? (
        <CountUp
          start={0}
          end={end}
          duration={duration}
          separator=","
          suffix={suffix}
          className="text-5xl font-bold text-[#14202d] mb-2"
        />
      ) : (
        <span className="text-5xl font-bold text-[#14202d] mb-2">
          0{suffix}
        </span>
      )}

      <p className="bg-[#f4c03b] text-[#14202d] px-4 py-2 rounded-md text-sm font-semibold">
        {label}
      </p>
    </div>
  );
}
