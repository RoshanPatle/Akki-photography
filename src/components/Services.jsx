import { FadeSection } from '../hooks/useFadeUp'
import { SERVICES } from '../data'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Services() {
  return (
    <section id="services" className="bg-dark-1 py-32 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <FadeSection>
          <p className="section-label">What We Offer</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="section-title">
              Our <em>Services</em>
            </h2>
            <button
              className="btn-outline-white self-start sm:self-auto"
              onClick={() => scrollTo('contact')}
            >
              Get Custom Quote
            </button>
          </div>
        </FadeSection>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14">
          {SERVICES.map((service) => (
            <FadeSection key={service.title}>
              <ServiceCard service={service} />
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }) {
  return (
    <div
      className="glass glass-hover group relative overflow-hidden p-10 cursor-default
                 transition-all duration-400 hover:-translate-y-1"
    >
      {/* Gold top border on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{
          background: 'linear-gradient(to right, transparent, #c9a96e, transparent)',
        }}
      />

      {/* Icon */}
      <span className="block text-3xl text-gold mb-5">{service.icon}</span>

      {/* Title */}
      <h3 className="font-serif text-2xl font-light text-[#f0ede8] mb-3">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted leading-relaxed mb-5">
        {service.desc}
      </p>

      {/* Feature list */}
      <ul className="space-y-1 mb-6">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-xs text-[rgba(240,237,232,0.55)]">
            <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      {/* Price */}
      <span className="text-[0.75rem] tracking-[0.1em] font-semibold text-gold uppercase">
        {service.price}
      </span>
    </div>
  )
}
