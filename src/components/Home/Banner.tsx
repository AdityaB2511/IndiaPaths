export default function Banner() {
  return (
    <section
      id="hero"
      className="relative hero-pattern"
      style={{ minHeight: "100%", display: "flex", alignItems: "center" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 text-center">
        <p
          className="anim-fade-up text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-4"
          style={{ color: "#d4a855" }}
        >
          Est. 2024 · Uttarakhand, India
        </p>
        <h1
          id="hero-title"
          className="anim-fade-up-d1 font-display text-5xl sm:text-7xl lg:text-8xl text-white leading-tight mb-6"
        >
          Discover the Soul
          <br />
          of the <span style={{ color: "#d4a855" }}>Himalayas</span>
        </h1>
        <p
          id="hero-desc"
          className="anim-fade-up-d2 text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Curated treks through ancient trails, remote work retreats nestled in
          the mountains, and authentic homestays that bring you closer to local
          life.
        </p>
        <div className="anim-fade-up-d3 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#treks"
            className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ background: "#d4a855", color: "#0f2027" }}
          >
            Explore Treks
          </a>
          <a
            href="#wfh"
            className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide border-2 border-white/30 text-white hover:border-white/60 transition-all duration-300"
          >
            View All Services
          </a>
        </div>
      </div>
      <div className="mountain-silhouette">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,120 L0,80 Q180,35 360,55 Q540,75 720,45 Q900,25 1080,50 Q1260,75 1440,40 L1440,120 Z"
            fill="#f7f5f0"
          />
        </svg>
      </div>
    </section>
  );
}