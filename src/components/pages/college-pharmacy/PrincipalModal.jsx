export default function PrincipalModal({
  isPrincipalModlOpen,
  setIsPrincipalModlOpen,
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Modal Overlay */}
      {isPrincipalModlOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center bg-black/50 backdrop-blur-sm overflow-y-auto"
          style={{ WebkitOverflowScrolling: "touch" }}
          onClick={() => setIsPrincipalModlOpen(false)} // close when clicking background
        >
          {/* Modal Box */}
          <div
            className="bg-[#0A2342] text-white p-8 rounded-2xl shadow-2xl max-w-md w-[90%] relative border border-yellow-400"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking inside modal
          >
            {/* Close button */}
            <button
              onClick={() => setIsPrincipalModlOpen(false)}
              className="absolute top-3 right-4 text-gray-300 hover:text-yellow-400 text-2xl"
            >
              &times;
            </button>

            {/* Profile Section */}
            <div className="flex flex-col items-center text-center">
              {/* ✅ Profile Image */}
              <img
                src="/images/blank-profile-picture.webp" 
                alt="Prof. Javed M. Ahsan"
                className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400 shadow-lg mb-4"
              />

              <h2 className="text-lg font-semibold text-yellow-400">
                Acting Principal
              </h2>
              <h3 className="text-xl font-bold mt-2">Prof. Javed M. Ahsan</h3>
              <p className="text-sm text-gray-300">
                Head, Pharmaceutical Chemistry Department
              </p>

              {/* Contact Icons */}
              <div className="flex space-x-6 mt-4 text-gray-300 text-xl">
                <a
                  href="mailto:PrincipalPharmacy@jit.edu.in"
                  className="hover:text-yellow-400 transition-all"
                >
                  ✉️
                </a>
                <a
                  href="tel:+919462571980"
                  className="hover:text-yellow-400 transition-all"
                >
                  📞
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition-all"
                >
                  🔗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
