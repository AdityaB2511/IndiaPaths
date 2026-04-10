import type { Trek } from "./constants";

export default function TrekTile(props: Trek) {
  return props ? (
    <div
      className="trek-card group rounded-2xl overflow-hidden relative cursor-pointer shadow-lg"
      style={{ height: 420 }}
    >
      <div
        className="trek-img absolute inset-0 transition-transform duration-500"
        style={{
          background:
            "linear-gradient(135deg, #1a3a4a 0%, #2c5364 40%, #3a7a6a 100%)",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div
        className="trek-overlay absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300"
        style={{ background: "rgba(15, 32, 39, 0.6)" }}
      >
        <span
          className="px-6 py-2.5 rounded-full text-sm font-semibold"
          style={{ background: "#d4a855", color: "#0f2027" }}
        >
          View Details
        </span>
      </div>
      <svg
        className="absolute bottom-16 left-0 right-0 opacity-20"
        viewBox="0 0 400 100"
        preserveAspectRatio="none"
        style={{ height: 80 }}
      >
        <path
          d="M0,100 L80,30 L130,60 L200,10 L270,50 L320,20 L400,70 L400,100Z"
          fill="white"
        />
      </svg>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-center gap-2 mb-2">
          <span
            className="px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{ background: "#d4a855", color: "#0f2027" }}
          >
            {props.popularity}
          </span>
          <span className="text-white/60 text-xs">{props.duration}</span>
        </div>
        <h3 className="font-display text-2xl text-white mb-1">{props.name}</h3>
        <p className="text-white/60 text-sm mb-3">{props.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-white/70 text-xs">
            <i data-lucide="map-pin" style={{ width: 14, height: 14 }} />
            {props.state}
          </div>
          <p className="font-semibold" style={{ color: "#d4a855" }}>
            ₹{props.price}
          </p>
        </div>
      </div>
    </div>
  ) : null;
}
