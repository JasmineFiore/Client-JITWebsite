import { useRef, useEffect } from "react";

const NoticeMarquee = ({ notices }) => {
  const marqueeRef = useRef(null);
  const containerRef = useRef(null);

  // useEffect(() => {
  //   const el = marqueeRef.current;

  //   let animation;

  //   const start = () => {
  //     animation = el.animate(
  //       [{ transform: "translateX(100%)" }, { transform: "translateX(-100%)" }],

  //       {
  //         duration: 30000, // scrolling speed

  //         iterations: Infinity,

  //         easing: "linear",
  //       }
  //     );
  //   };

  //   start();

  //   // Pause on hover

  //   el.addEventListener("mouseenter", () => animation.pause());

  //   el.addEventListener("mouseleave", () => animation.play());

  //   return () => animation?.cancel();
  // }, []);

  useEffect(() => {
    const el = marqueeRef.current;
    const container = containerRef.current;
    if (!el || !container) return;

    let animation;

    const start = () => {
      const contentWidth = el.scrollWidth;
      const containerWidth = container.clientWidth;

      // Auto speed adjustment
      const speedFactor = 10; // lower = faster, higher = slower
      const duration = (contentWidth + containerWidth) * speedFactor;

      animation = el.animate(
        [{ transform: "translateX(100%)" }, { transform: "translateX(-100%)" }],
        {
          duration,
          iterations: Infinity,
          easing: "linear",
        }
      );
    };

    start();

    const pause = () => animation.pause();
    const play = () => animation.play();

    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", play);

    return () => {
      animation?.cancel();
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", play);
    };
  }, []);

  return (
    <div className="w-full bg-white text-white border-y-2 border-yellow-600 ">
      <div className="flex">
        <span className="bg-[#0A2342]/95 px-4 py-1 font-bold border-r border-white">
          Notices
        </span>

        <div ref={containerRef} className="overflow-hidden w-full bg-white">
          <div
            ref={marqueeRef}
            className="whitespace-nowrap flex items-center gap-6 py-1 px-4"
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

                {item.isNew && (
                  <img
                    src="/images/new_red.gif"
                    alt="new"
                    className="w-8 h-4"
                  />
                )}

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
