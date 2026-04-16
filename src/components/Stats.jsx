import { FadeSection } from "../hooks/useFadeUp";
import { STATS } from "../data";

export default function Stats() {
  return (
    <section className="px-6 pb-20 bg-dark-1 md:px-16">
      <div className="max-w-6xl mx-auto">
        <FadeSection>
          <div
            className="grid grid-cols-2 md:grid-cols-3"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {STATS.map(({ num, label }, i) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center px-6 py-10 text-center transition-colors duration-300 cursor-default glass glass-hover"
                style={{
                  borderRight:
                    i < STATS.length - 1
                      ? "1px solid rgba(255,255,255,0.06)"
                      : "none",
                }}
              >
                <span className="font-serif text-5xl font-light leading-none text-gold">
                  {num}
                </span>
                <span className="text-[0.65rem] tracking-[0.15em] uppercase text-muted mt-2">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </FadeSection>
      </div>
    </section>
  );
}
