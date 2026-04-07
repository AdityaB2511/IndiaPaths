import  "./Navmenu.css";
export default function Navmenu() {
  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: "transparent",
          backdropFilter: "none",
          boxShadow: "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a href="#hero" className="flex items-center gap-2">
              <svg width="36" height="36" fill="none">
                <path d="M18 4L6 28h24L18 4z" fill="#d4a855" opacity="0.8" />
                <path d="M18 10L10 28h16L18 10z" fill="#2c5364" />
                <path d="M14 28l4-8 4 8" fill="#d4a855" opacity="0.6" />
              </svg>
              <span
                id="nav-brand"
                className="font-display text-xl sm:text-2xl text-white"
              >
                India Paths
              </span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#treks"
                className="nav-link text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors"
              >
                Treks
              </a>
              <a
                href="#wfh"
                className="nav-link text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors"
              >
                Work Retreats
              </a>
              <a
                href="#homestays"
                className="nav-link text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors"
              >
                Homestays
              </a>
              <a
                href="#cta"
                id="nav-cta-btn"
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
                style={{ background: "#d4a855", color: "#0f2027" }}
              >
                Book Now
              </a>
            </div>
            <button
              id="mobile-menu-btn"
              className="md:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              <i
                data-lucide="menu"
                style={{ width: "24px", height: "24px" }}
              ></i>
            </button>
          </div>
        </div>
      </nav>
     
    </>
  );
}
