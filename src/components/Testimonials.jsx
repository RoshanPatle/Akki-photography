import { FadeSection } from '../hooks/useFadeUp'
import { TESTIMONIALS } from '../data'

export default function Testimonials() {
  return (
    <section className="bg-dark-2 py-32 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        <FadeSection>
          <p className="section-label">Client Words</p>
          <h2 className="section-title">
            What They <em>Say</em>
          </h2>
        </FadeSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {TESTIMONIALS.map((t) => (
            <FadeSection key={t.name}>
              <TestimonialCard testimonial={t} />
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="glass p-8 h-full flex flex-col">
      {/* Quote mark */}
      <div
        className="font-serif text-[5rem] text-gold leading-[0.5] mb-6 select-none"
        style={{ opacity: 0.35 }}
        aria-hidden="true"
      >
        "
      </div>

      {/* Text */}
      <p className="font-serif text-lg italic text-[rgba(240,237,232,0.8)] leading-relaxed flex-1 mb-6">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="border-t border-[rgba(255,255,255,0.07)] pt-4">
        <p className="text-sm font-semibold text-[#f0ede8]">{testimonial.name}</p>
        <p className="text-[0.65rem] tracking-[0.1em] uppercase text-gold mt-1">
          {testimonial.role}
        </p>
      </div>

      {/* Stars */}
      <div className="flex gap-1 mt-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-gold text-xs">★</span>
        ))}
      </div>
    </div>
  )
}
