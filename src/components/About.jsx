import { FadeSection } from '../hooks/useFadeUp'
import { TEAM } from '../data'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function About() {
  return (
    <section id="about" className="px-6 py-32 bg-dark-3 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* ── Story layout ── */}
        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Images */}
          <FadeSection>
            <div className="relative max-w-md mx-auto lg:mx-0">
              <img
                src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=700&q=80"
                alt="Studio"
                className="object-cover w-full"
                style={{ aspectRatio: '3/4' }}
                loading="lazy"
              />
              {/* Accent image */}
              <img
                src="https://images.unsplash.com/photo-1561655434-c6038b0f21a4?w=400&q=80"
                alt="Equipment"
                loading="lazy"
                className="absolute -bottom-8 -right-8 w-[45%] object-cover border-4 border-dark-3"
                style={{ aspectRatio: '1/1' }}
              />
            </div>
          </FadeSection>

          {/* Text */}
          <FadeSection delay={100}>
            <div>
              <p className="section-label">Our Story</p>
              <h2 className="section-title">
                Where <em>Art</em><br />Meets Light
              </h2>
              <div className="gold-line" />
              <p className="text-sm text-soft leading-[1.85] mb-4">
               Hi, I'm Akshay Bisen, a professional photographer based in Buttibori, Nagpur. I specialize in capturing real emotions and timeless moments through my lens.

With years of experience in wedding, events, and cinematic shoots, I ensure every photo tells a story. My goal is to turn your special moments into unforgettable memories.
              </p>
              <p className="text-sm text-soft leading-[1.85] mb-8">
                Our team of photographers combines technical mastery with an intuitive
                eye for authentic emotion — crafting images that stand the test of time.
              </p>
              <button className="btn-gold" onClick={() => scrollTo('contact')}>
                Work With Us
              </button>
            </div>
          </FadeSection>
        </div>

        

        {/* ── Team ── 
        <div className="mt-24">
          <FadeSection>
            <p className="section-label">The Team</p>
            <h3
              className="font-serif font-light text-[#f0ede8]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Meet the <em className="italic text-gold">Artists</em>
            </h3>
          </FadeSection>

          <div className="grid grid-cols-1 gap-4 mt-10 sm:grid-cols-3">
            {TEAM.map((member) => (
              <FadeSection key={member.name}>
                <TeamCard member={member} />
              </FadeSection>
            ))}
          </div>
        </div>
        */}
      </div>
    </section>
  )
}

function TeamCard({ member }) {
  return (
    <div className="overflow-hidden cursor-default group">
      <div className="overflow-hidden" style={{ aspectRatio: '3/4' }}>
        <img
          src={member.img}
          alt={member.name}
          loading="lazy"
          className="w-full h-full object-cover transition-all duration-500
                     filter grayscale-[30%] group-hover:scale-105 group-hover:grayscale-0"
          style={{ filter: 'grayscale(30%)', transition: 'transform 0.5s ease, filter 0.5s ease' }}
        />
      </div>
      <div className="glass p-4 border border-[rgba(255,255,255,0.08)]">
        <p className="font-serif text-xl font-light text-[#f0ede8]">{member.name}</p>
        <p className="text-[0.65rem] tracking-[0.12em] uppercase text-gold mt-1">
          {member.role}
        </p>
        <p className="mt-2 text-xs leading-relaxed text-muted">{member.bio}</p>
      </div>
    </div>
  )
}
