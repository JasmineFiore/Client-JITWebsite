import { useState } from "react";
import { colleges } from "../../data/collegesData";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function CircleModal({ isOpen, onClose }) {
  const [selectedCollege, setSelectedCollege] = useState(null);

  if (!isOpen) return null;

  const collegeNames = Object.keys(colleges);

  const handleCourseClick = (courseId) => {
    window.location.href = `/${courseId}`;
  };

  return (
    // <div className="fixed inset-0 backdrop-blur-lg flex items-center justify-center z-50">

    //   <button
    //     onClick={onClose}
    //     className="
    //   absolute top-8 right-20 cursor-pointer
    //   text-yellow-300 bg-[#0A2342] hover:bg-blue-900/60
    //   px-4 py-2 rounded-full shadow-lg
    //   backdrop-blur-lg transition-all hover:scale-110
    // "
    //   >
    //     Close ✕
    //   </button>

    //   <div
    //     className="relative w-[600px] h-[600px] rounded-full
    //   bg-gradient-to-br from-[#0A2342] via-[#0A2342]/80 to-[#0A2342]/90
    //   backdrop-blur-3xl border border-yellow-300/20
    //   shadow-[0_0_90px_rgba(255,215,0,0.45)]
    //   flex items-center justify-center animate-scaleIn overflow-hidden"
    //   >

    //     {!selectedCollege && (
    //       <div className="absolute inset-0 rotate-slow opacity-50 pointer-events-none">
    //         <div className="w-full h-full rounded-full p-[3px] bg-gradient-to-r from-yellow-900 via-yellow-500 to-yellow-900">
    //           <div className="w-full h-full rounded-full bg-blue-950/40"></div>
    //         </div>
    //       </div>
    //     )}

    //     {!selectedCollege &&
    //       Array.from({ length: 14 }).map((_, i) => (
    //         <div
    //           key={i}
    //           className="particle absolute w-2 h-2 rounded-full
    //         bg-yellow-300 blur-[2px]"
    //           style={{
    //             left: `${Math.random() * 85 + 7}%`,
    //             top: `${Math.random() * 85 + 7}%`,
    //             animationDelay: `${i * 0.5}s`,
    //           }}
    //         ></div>
    //       ))}

    //     <button
    //       onClick={onClose}
    //       className="absolute top-6 right-6
    //     bg-blue-900/40 hover:bg-blue-900/60 text-yellow-300
    //     p-2 rounded-full backdrop-blur-lg transition-all shadow-xl hover:scale-110"
    //     >
    //       ✕
    //     </button>

    //     {!selectedCollege && (
    //       <div className="relative w-full h-full pointer-events-auto">
    //         {collegeNames.map((col, i) => {
    //           const angle = (i / collegeNames.length) * 2 * Math.PI;
    //           const radius = 200;
    //           const x = radius * Math.cos(angle);
    //           const y = radius * Math.sin(angle);

    //           return (
    //             <button
    //               key={col}
    //               onClick={() => setSelectedCollege(col)}
    //               className="absolute w-28 h-28 cursor-pointer
    //             bg-gradient-to-br from-[#0A2342] to-blue-600
    //             rounded-full text-yellow-300 font-semibold text-xs shadow-xl
    //             border border-yellow-300/20
    //             hover:shadow-[0_0_40px_rgba(255,215,0,0.9)]
    //             hover:scale-130
    //             transition-all duration-300 floating"
    //               style={{
    //                 left: `calc(50% + ${x}px - 56px)`,
    //                 top: `calc(50% + ${y}px - 56px)`,

    //               }}
    //             >
    //               {col}
    //             </button>
    //           );
    //         })}
    //       </div>
    //     )}

    //     {selectedCollege && (
    //       <div className="flex flex-col items-center w-[90%] mx-auto p-4 text-yellow-200">
    //         {/* TITLE */}
    //         <h2
    //           className="
    //         text-3xl font-extrabold text-center mb-2
    //         bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-200
    //         bg-clip-text text-transparent
    //         drop-shadow-[0_0_18px_rgba(255,215,0,0.6)]
    //       "
    //         >
    //           {selectedCollege}
    //         </h2>

    //         <button
    //           onClick={() => setSelectedCollege(null)}
    //           className="
    //         text-sm text-yellow-300 hover:text-yellow-100
    //         mb-4 transition-all hover:tracking-wide
    //         flex items-center gap-1 cursor-pointer
    //       "
    //         >
    //           <span className="text-lg text-yellow-400">
    //             <IoMdArrowRoundBack className="text-2xl md:text-3xl text-yellow-400" />
    //           </span>
    //           Back
    //         </button>

    //         <div
    //           className="
    //         grid sm:grid-cols-2 md:grid-cols-3 gap-4
    //         w-full max-h-[290px] overflow-y-auto
    //         pr-1 custom-scroll p-2
    //       "
    //         >
    //           {[
    //             ...(colleges[selectedCollege].courses || []),
    //             ...(colleges[selectedCollege].diploma || []),
    //           ].map(([id, label]) => (
    //             <button
    //               key={id}
    //               onClick={() => handleCourseClick(id)}
    //               className="
    //             group relative rounded-xl p-3 h-24
    //             flex items-center justify-center text-center

    //             bg-blue-900/50
    //             border border-yellow-300/15
    //             backdrop-blur-xl

    //             shadow-[0_0_15px_rgba(255,255,255,0.05)]
    //             hover:shadow-[0_0_25px_rgba(255,215,0,0.45)]
    //             hover:scale-[1.05]
    //             hover:border-yellow-300/30

    //             transition-all duration-300
    //             text-yellow-300 cursor-pointer
    //           "
    //             >

    //               <div
    //                 className="
    //               absolute inset-0 rounded-xl
    //               opacity-0 group-hover:opacity-20
    //               bg-yellow-300/40
    //               blur-lg transition-all
    //             "
    //               ></div>

    //               <span className="text-sm font-semibold z-10 group-hover:text-yellow-400">
    //                 {label}
    //               </span>
    //             </button>
    //           ))}
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </div>
    <div className="fixed inset-0 backdrop-blur-lg flex items-center justify-center z-50">
      {/* OUTSIDE CLOSE BUTTON */}
      <button
        onClick={onClose}
        className="
    absolute top-8 right-20 
    text-white bg-white/10 hover:bg-white/20
    px-4 py-2 rounded-full shadow-lg 
    backdrop-blur-xl transition-all hover:scale-110
  "
      >
        Close ✕
      </button>

      {/* MAIN CIRCLE */}
      <div
        className="relative w-[600px] h-[600px] rounded-full
        bg-gradient-to-br from-purple-700/20 via-pink-600/20 to-cyan-500/20
        backdrop-blur-3xl border border-white/10
        shadow-[0_0_90px_rgba(160,60,255,0.45)]
        flex items-center justify-center animate-scaleIn overflow-hidden"
      >
        {/* Neon Rotating Gradient Border */}
        {!selectedCollege && (
          <div className="absolute inset-0 rotate-slow opacity-50 pointer-events-none">
            <div className="w-full h-full rounded-full p-[3px] bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300">
              <div className="w-full h-full rounded-full bg-black/30"></div>
            </div>
          </div>
        )}

        {/* PARTICLES */}
        {!selectedCollege &&
          Array.from({ length: 14 }).map((_, i) => (
            <div
              key={i}
              className="particle absolute w-2 h-2 rounded-full 
              bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 blur-[2px]"
              style={{
                left: `${Math.random() * 85 + 7}%`,
                top: `${Math.random() * 85 + 7}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            ></div>
          ))}

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white 
          p-2 rounded-full backdrop-blur-lg transition-all shadow-xl hover:scale-110"
        >
          ✕
        </button>

        {/* ==============================
              FIRST VIEW (COLLEGES)
        =============================== */}
        {!selectedCollege && (
          <div className="relative w-full h-full pointer-events-auto">
            {collegeNames.map((col, i) => {
              const angle = (i / collegeNames.length) * 2 * Math.PI;
              const radius = 200;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);

              return (
                <button
                  key={col}
                  onClick={() => setSelectedCollege(col)}
                  className="absolute w-28 h-28 
                  bg-gradient-to-br from-purple-600 to-pink-600 
                  rounded-full text-white font-semibold text-xs shadow-xl 
                  border border-white/10 
                  hover:shadow-[0_0_40px_rgba(255,60,190,0.9)]
                  hover:scale-130
                  transition-all duration-300 floating"
                  style={{
                    left: `calc(50% + ${x}px - 56px)`,
                    top: `calc(50% + ${y}px - 56px)`,
                  }}
                >
                  {col}
                </button>
              );
            })}
          </div>
        )}

        {/* ==============================
              COURSE VIEW (INSIDE CIRCLE)
        =============================== */}
        {selectedCollege && (
          <div className="flex flex-col items-center w-[90%] mx-auto p-4 text-white">
            {/* TITLE */}
            <h2
              className="
      text-3xl font-extrabold text-center mb-2
      bg-gradient-to-r from-fuchsia-800 via-pink-300 to-cyan-300
      bg-clip-text text-transparent
      drop-shadow-[0_0_18px_rgba(255,120,255,0.5)]
    "
            >
              {selectedCollege}
            </h2>

            {/* BACK BUTTON */}
            <button
              onClick={() => setSelectedCollege(null)}
              className="
        text-sm text-white/70 hover:text-white 
        mb-4 transition-all hover:tracking-wide 
        flex items-center gap-1
      "
            >
              <span className="text-lg">
                <IoMdArrowRoundBack className="text-2xl md:text-3xl" />
              </span>
              Back
            </button>

            {/* COURSES GRID */}
            <div
              className="
        grid 
        sm:grid-cols-2 
        md:grid-cols-3 
        gap-4
        w-full 
        max-h-[290px] 
        overflow-y-auto 
        pr-1 custom-scroll
      "
            >
              {[
                ...(colleges[selectedCollege].courses || []),
                ...(colleges[selectedCollege].diploma || []),
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => handleCourseClick(id)}
                  className="
            group 
            relative 
            rounded-xl 
            p-3 
            h-24 
            flex items-center justify-center text-center

            bg-gradient-to-br from-purple-600 via-pink-600/15 to-cyan-500/15
            border border-white/10 
            backdrop-blur-xl

            shadow-[0_0_15px_rgba(255,255,255,0.06)]
            hover:shadow-[0_0_25px_rgba(255,30,200,0.45)]
            hover:scale-[1.05] 
            hover:border-white/10

            transition-all duration-300
          "
                >
                  {/* SOFT AURA ON HOVER */}
                  <div
                    className="
            absolute inset-0 rounded-xl 
            opacity-0 group-hover:opacity-25
            bg-gradient-to-br from-purple-300 via-pink-300 to-cyan-300 
            blur-lg transition-all
          "
                  ></div>

                  <span className="text-sm font-semibold z-10 group-hover:text-white">
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
