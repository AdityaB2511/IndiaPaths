import { TREK_DATA } from "../../../utils/constants";
import TrekTile from "./TrekTile";

export default function Treks() {
  return (
    <section
      id="treks"
      className="py-16 sm:py-24"
      style={{ background: "#f7f5f0" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-3"
            style={{ color: "#d4a855" }}
          >
            Our Signature Experiences
          </p>
          <h2
            id="treks-heading"
            className="font-display text-3xl sm:text-5xl"
            style={{ color: "#2c5364" }}
          >
            Iconic Himalayan Treks
          </h2>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {TREK_DATA.map((trek) => (
          <TrekTile key={trek.id} {...trek} />
        ))}
      </div>
    </section>
  );
}