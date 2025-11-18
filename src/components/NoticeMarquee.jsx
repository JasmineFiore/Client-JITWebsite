import { useRef, useEffect } from "react";

const NoticeMarquee = ({ notices }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const el = marqueeRef.current;
    let animation;

    const start = () => {
      animation = el.animate(
        [{ transform: "translateX(100%)" }, { transform: "translateX(-100%)" }],
        {
          duration: 50000, // scrolling speed
          iterations: Infinity,
          easing: "linear",
        }
      );
    };

    start();

    // Pause on hover
    el.addEventListener("mouseenter", () => animation.pause());
    el.addEventListener("mouseleave", () => animation.play());

    return () => animation?.cancel();
  }, []);

  return (
    <div className="w-full bg-white text-white border-y-2 border-yellow-600 ">
      <div className="flex">
        {/* Left label */}
        <span className="bg-[#800000] px-4 py-2 font-bold border-r border-white">
          Notices
        </span>

        {/* Scrolling area */}
        <div className="overflow-hidden w-full bg-white">
          <div
            ref={marqueeRef}
            className="whitespace-nowrap flex items-center gap-6 py-2 px-4"
          >
            {notices.map((item, i) => (
              <span key={i} className="flex items-center gap-2 text-blue-700">
                <a
                  href={item.link}
                  target="_blank"
                  className="hover:underline hover:text-red-600 text-sm sm:text-base font-medium"
                >
                  {item.text}
                </a>

                {/* NEW icon */}
                {item.isNew && (
                  <img
                    src="/images/new_red.gif"
                    alt="new"
                    className="w-8 h-4"
                  />
                )}

                {/* separators */}
                <span className="text-gray-500">||</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeMarquee;
