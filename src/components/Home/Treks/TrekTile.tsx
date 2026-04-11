import type { Trek } from "../../../utils/constants";

export default function TrekTile(props: Trek) {
  return props ? (
    <div
      className="trek-card group rounded-2xl overflow-hidden relative cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
    >
      <div
        className="trek-img absolute inset-0 transition-transform duration-500 group-hover:scale-110"
        style={{
          background:
            "linear-gradient(135deg, #1a3a4a 0%, #2c5364 40%, #3a7a6a 100%)",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
      <div
        className="trek-overlay absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "rgba(15, 32, 39, 0.7)" }}
      >
        <span
          className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:scale-105 transition-transform"
          style={{ background: "#d4a855", color: "#0f2027" }}
        >
          View Details
        </span>
      </div>
      <span
        className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold tracking-wide z-10"
        style={{ background: "#d4a855", color: "#0f2027" }}
      >
        {props.popularity}
      </span>
      <svg
        className="trek-svg-decoration absolute bottom-16 sm:bottom-20 left-0 right-0 opacity-15"
        viewBox="0 0 400 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 L80,30 L130,60 L200,10 L270,50 L320,20 L400,70 L400,100Z"
          fill="white"
        />
      </svg>
      <div className="trek-content absolute bottom-0 left-0 right-0">
        <h3 className="trek-title font-display text-white mb-1 sm:mb-1.5 leading-tight font-bold">{props.name}</h3>
        <p className="trek-description text-white/60 mb-2 sm:mb-3 leading-relaxed line-clamp-2">{props.description}</p>
        <div className="flex items-center justify-between pt-2 sm:pt-2.5 border-t border-white/10">
          <div className="flex items-center gap-1 sm:gap-1.5 text-white/70 text-xs sm:text-sm">
            <i data-lucide="map-pin" style={{ width: 13, height: 13 }} />
            <span className="font-medium truncate">{props.state}</span>
          </div>
          <p className="font-bold text-sm sm:text-base" style={{ color: "#d4a855" }}>
            ₹{props.price}/{props.duration}
          </p>
        </div>
      </div>
    </div>
  ) : null;
}