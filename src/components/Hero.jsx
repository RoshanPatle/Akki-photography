import { FadeSection } from '../hooks/useFadeUp'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1554080353-a576cf803bda?w=1800&q=80')",
          filter: 'brightness(0.18)',
        }}
      />

      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 60% 40%, rgba(201,169,110,0.07) 0%, transparent 60%), linear-gradient(to bottom, transparent 50%, #050508 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 mx-auto text-center">

        <FadeSection delay={0}>
          <div className="inline-block px-5 py-2 mb-8 text-[0.65rem] tracking-[0.2em] uppercase text-gold"
               style={{ border: '1px solid rgba(201,169,110,0.3)', background: 'rgba(201,169,110,0.05)' }}>
            AKKI Photo Studio — Nagpur
          </div>
        </FadeSection>

        <FadeSection delay={100}>
          <h1
            className="font-serif font-light leading-[0.95] mb-6"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 7.5rem)' }}
          >
            We Capture<br />
            <em className="italic text-gold">Timeless</em><br />
            Stories
          </h1>
        </FadeSection>

        <FadeSection delay={200}>
          <p className="text-base tracking-wide text-[rgba(240,237,232,0.55)] mb-10 max-w-md mx-auto leading-relaxed">
            Artisan photography for weddings, portraits, fashion &amp; commercial.
            Every frame, a masterpiece.
          </p>
        </FadeSection>

        <FadeSection delay={300}>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-gold" onClick={() => scrollTo('portfolio')}>
              View Portfolio
            </button>
            <button className="btn-outline-white" onClick={() => scrollTo('contact')}>
              Book a Session
            </button>
          </div>
        </FadeSection>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
                      text-[rgba(240,237,232,0.3)] text-[0.6rem] tracking-[0.15em] uppercase">
        <div
          className="w-px h-14 animate-[scrollPulse_2s_ease-in-out_infinite]"
          style={{ background: 'linear-gradient(to bottom, rgba(201,169,110,0.6), transparent)' }}
        />
        <span>Scroll</span>
      </div>
    </section>
  )
}
